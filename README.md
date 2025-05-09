

# YouTube Bookmarks Chrome Extension

A simple and efficient Chrome Extension to **save timestamps in YouTube videos**, allowing users to revisit specific moments anytime, from any device.



## Features

* ✅ **Save bookmarks (timestamps)** in YouTube videos with a click
* ✅ **Sync bookmarks across devices** using Chrome Sync
* ✅ **Store bookmarks in a MySQL database** for long-term access
* ✅ **Google OAuth** for secure user authentication
* ✅ **Play video** directly from a saved timestamp
* ✅ **Delete bookmarks** easily from a clean UI

---

## Tech Stack

### Frontend (Chrome Extension)

* HTML, CSS, JavaScript
* Chrome Extensions API
* Chrome Storage API

### Backend (Server & Database)

* Node.js
* Express.js
* MySQL
* Passport.js (Google OAuth)

---

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/lakshitabhumbuck/youtube-bookmarks-extension.git
cd youtube-bookmarks-extension
```

### 2. Setup Backend Server

#### Requirements:

* Node.js & npm
* MySQL

#### Steps:

* Create a `.env` file in `/server`:

```env
DB_HOST=localhost
DB_USER=your_mysql_user
DB_PASSWORD=your_mysql_password
DB_NAME=bookmarks_db
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
SESSION_SECRET=your_secret_key
```

* Install dependencies:

```bash
cd server
npm install
```

* Run the server:

```bash
npm start
```

* Make sure your MySQL database is set up and matches the schema expected (you can create a `bookmarks` table accordingly).

---

### 3. Load Chrome Extension

1. Go to `chrome://extensions/` in Chrome
2. Enable **Developer mode**
3. Click **"Load unpacked"** and select the `/extension` directory from the repo

---

## Usage

1. Open any YouTube video
2. Use the extension popup to **add a bookmark** at the current timestamp
3. View, jump to, or delete saved timestamps
4. All bookmarks are synced via Chrome Sync and saved to your backend for persistence

---

## Authentication

* Users sign in using **Google OAuth**
* Authentication is handled by the backend using **Passport.js**
* Access tokens are securely stored and managed via session

---
