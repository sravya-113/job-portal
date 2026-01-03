Job Portal Server

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-ISC-green.svg)

A robust backend for a Job Portal application, built with Node.js and Express. It features MongoDB for data storage, Sentry (v10) for error monitoring and profiling, and Svix for webhook handling.

## 🚀 Tech Stack

**Core:**
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)

**Utilities & Monitoring:**
* **Mongoose:** ODM for MongoDB.
* **Sentry:** Real-time error tracking and performance profiling.
* **Svix:** Enterprise-ready webhooks service.
* **Dotenv:** Environment variable management.
* **Nodemon:** Development utility for hot-reloading.

## 🛠️ Getting Started

Follow these steps to set up the project locally.

### Prerequisites
* [Node.js](https://nodejs.org/) (v16 or higher recommended)
* [MongoDB](https://www.mongodb.com/) (Local instance or Atlas URI)

### Installation

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/yourusername/job-portal-server.git](https://github.com/yourusername/job-portal-server.git)
    cd job-portal-server
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Configure Environment Variables**
    Create a `.env` file in the root directory and add the following variables:
    ```env
    PORT=5000
    MONGO_URI=your_mongodb_connection_string
    SENTRY_DSN=your_sentry_dsn_key
    SVIX_API_KEY=your_svix_api_key
    ```

4.  **Run the Server**

    * **Development Mode** (with Nodemon hot-reload):
        ```bash
        npm run dev
        ```

    * **Production Mode**:
        ```bash
        npm start
        ```

## 📂 Project Structure

JOB-PORTAL/
│
├── client/
│   └── public/
│
├── src/
│   ├── assets/
│   ├── components/
│   ├── context/
│   ├── pages/
│   │   ├── AddJob.css
│   │   ├── AddJob.jsx
│   │   ├── Applications.css
│   │   ├── Applications.jsx
│   │   ├── ApplyJob.css
│   │   ├── ApplyJob.jsx
│   │   ├── Dashboard.css
│   │   ├── Dashboard.jsx
│   │   ├── Home.jsx
│   │   ├── ManageJobs.css
│   │   ├── ManageJobs.jsx
│   │   ├── ViewApplications.css
│   │   └── ViewApplications.jsx
│   │
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .env
├── .gitignore
├── eslint.config.js
└── package.json
for server:
           server/
│
├── config/
│   ├── db.js
│   └── instrument.js
│
├── controllers/
│   └── webhooks.js
│
├── middlewares/
│
├── models/
│   └── User.js
│
├── routes/
│   └── example.js
│
├── utils/
│
├── nodemon.json
├── server.js
├── vercel.json
├── .env
├── .gitignore
├── package.json

🤝 Contributing
Fork the Project

Create your Feature Branch (git checkout -b feature/AmazingFeature)

Commit your Changes (git commit -m 'Add some AmazingFeature')

Push to the Branch (git push origin feature/AmazingFeature)

Open a Pull Request

📝 License
This project is licensed under the ISC License.


---

### **What I did for you:**
1.  **Detected Sentry:** Added specific references to Sentry for monitoring/profiling in the tech stack and `.env` setup.
2.  **Detected Svix:** Included it in the stack (commonly used for Webhooks).
3.  **Corrected Paths:** Since your main file is `"server/server.js"`, I updated the Project Structure section to reflect that the server code lives inside a `/server` folder.
4.  **Scripts:** I automatically mapped your `"dev": "nodemon..."` script to the "Development Mo
