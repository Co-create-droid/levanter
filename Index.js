const { spawnSync, spawn } = require('child_process')
const { existsSync, writeFileSync } = require('fs')
const path = require('path')

const SESSION_ID = 'updateThis' // levanter_28d28dfe004f4749fda8bf077c090951d4' <- this symbol

let nodeRestartCount = 0
const maxNodeRestarts = 5
const restartWindow = 30000 // 30 seconds
let lastRestartTime = Date.now()

function startNode() {
  const child = spawn('node', ['index.js'], { cwd: 'levanter', stdio: 'inherit' })

  child.on('exit', (code) => {
    if (code !== 0) {
      const currentTime = Date.now()
      if (currentTime - lastRestartTime > restartWindow) {
        nodeRestartCount = 0
      }
      lastRestartTime = currentTime
      nodeRestartCount++

      if (nodeRestartCount > maxNodeRestarts) {
        console.error('Node.js process is restarting continuously. Stopping retries...')
        return
      }
      console.log(
        `Node.js process exited with code ${code}. Restarting... (Attempt ${nodeRestartCount})`
      )
      startNode()
    }
  })
}

function startPm2() {
  const pm2 = spawn('yarn', ['pm2', 'start', 'index.js', '--name', 'levanter', '--attach'], {
    cwd: 'levanter',
    stdio: ['pipe', 'pipe', 'pipe'],
  })

  let restartCount = 0
  const maxRestarts = 5 // Adjust this value as needed

  pm2.on('exit', (code) => {
    if (code !== 0) {
      // console.log('yarn pm2 failed to start, falling back to node...')
      startNode()
    }
  })

  pm2.on('error', (error) => {
    console.error(`yarn pm2 error: ${error.message}`)
    startNode()
  })

  // Check for infinite restarts
  if (pm2.stderr) {
    pm2.stderr.on('data', (data) => {
      const output = data.toString()
      if (output.includes('restart')) {
        restartCount++
        if (restartCount > maxRestarts) {
          // console.log('yarn pm2 is restarting indefinitely, stopping yarn pm2 and starting node...')
          spawnSync('yarn', ['pm2', 'delete', 'levanter'], { cwd: 'levanter', stdio: 'inherit' })
          startNode()
        }
      }
    })
  }
