# 💼 Job Portal Application

A **full-stack job portal application** designed to connect **job seekers** with **recruiters**. The platform provides a responsive frontend built with **React** and a robust backend powered by **Node.js** and **Express**, enabling job posting, application management, and secure authentication.

---

## 🚀 Features

### 👤 For Job Seekers

* **Browse Jobs:** View and filter available job openings.
* **Apply for Jobs:** Submit applications directly through the portal.
* **Application Tracking:** Track the status of applied jobs via a dashboard.
* **User Profile:** Manage personal details and upload resumes.

### 🧑‍💼 For Recruiters

* **Job Management:** Create, update, and manage job postings.
* **Recruiter Dashboard:** Monitor job performance and applications.
* **Application Review:** View and manage candidate applications.
* **Secure Login:** Dedicated authentication flow for recruiters.

---

## 🛠️ Tech Stack

### 🌐 Frontend (Client-Side)

* **Framework:** React (v19) with Vite
* **Styling:** Tailwind CSS (v4)
* **Authentication:** Clerk
* **Routing:** React Router
* **Notifications:** React Toastify
* **Rich Text Editor:** Quill

### ⚙️ Backend (Server-Side)

* **Runtime:** Node.js
* **Framework:** Express.js
* **Database:** MongoDB with Mongoose
* **Monitoring:** Sentry
* **Webhooks:** Svix (for secure webhook verification)

---

## 📂 Project Structure

```text
job-portal/
├── client/                 # Frontend React Application
│   ├── public/             # Static assets
│   ├── src/
│   │   ├── assets/         # Images and icons
│   │   ├── components/     # Reusable UI components
│   │   ├── context/        # React Context API
│   │   ├── pages/          # Application pages
│   │   ├── main.jsx        # React entry point
│   │   └── App.jsx         # Routing and layout
│   ├── package.json        # Client dependencies
│   └── vite.config.js      # Vite configuration
│
├── server/                 # Backend Application
│   ├── config/             # DB & third-party configs
│   ├── controllers/        # Business logic
│   ├── models/             # Mongoose schemas
│   ├── routes/             # API routes
│   └── server.js           # Server entry point
│
├── package.json            # Root dependencies
└── vercel.json             # Deployment configuration
```

---

## ⚙️ Installation & Setup

### ✅ Prerequisites

* Node.js (v18 or higher)
* npm or yarn
* MongoDB connection string

---

### 1️⃣ Clone the Repository

```bash
git clone <repository-url>
cd job-portal
```

---

### 2️⃣ Backend Setup

The root directory acts as the backend server.

1. **Install Dependencies**

```bash
npm install
```

2. **Environment Variables**

Create a `.env` file in the root directory:

```env
PORT=5000
MONGODB_URI=<your_mongodb_connection_string>
SENTRY_DSN=<your_sentry_dsn>
CLERK_WEBHOOK_SECRET=<your_clerk_webhook_secret>
```

3. **Run the Server**

```bash
# Development mode
npm run dev

# Production mode
npm start
```

---

### 3️⃣ Frontend Setup

Navigate to the client directory:

```bash
cd client
```

1. **Install Dependencies**

```bash
npm install
```

2. **Environment Variables**

Create a `.env` file inside `client/`:

```env
VITE_CLERK_PUBLISHABLE_KEY=<your_clerk_publishable_key>
```

3. **Run Frontend**

```bash
npm run dev
```

Frontend runs at: **[http://localhost:5173](http://localhost:5173)**

---

## 📡 API Endpoints (Overview)

The backend exposes RESTful APIs located in `server/routes`:

* **User Management:** User profiles and updates
* **Authentication Webhooks:** Clerk webhook handling (`/api/webhooks`)
* **Jobs:** Create, read, update, delete job postings
* **Applications:** Submit and retrieve job applications

---

## 🤝 Contributing

Contributions are welcome! 🚀

1. Fork the repository
2. Create a feature branch

```bash
git checkout -b feature/AmazingFeature
```

3. Commit your changes

```bash
git commit -m "Add AmazingFeature"
```

4. Push to the branch

```bash
git push origin feature/AmazingFeature
```

5. Open a Pull Request

---

