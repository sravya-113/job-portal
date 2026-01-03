# Job Portal Application

A full-stack job portal application designed to connect job seekers with recruiters. This platform features a responsive frontend built with React and a robust backend powered by Node.js and Express, facilitating job posting, application management, and secure user authentication.

## 🚀 Features

### For Job Seekers
* **Browse Jobs:** View a comprehensive list of available job openings with filtering options.
* **Apply for Jobs:** Submit applications directly through the portal.
* **Application Tracking:** View the status of applied jobs via a dedicated dashboard.
* **User Profile:** Manage personal information and resume uploads.

### For Recruiters
* **Job Management:** Post new job listings, edit existing ones, and manage active openings.
* **Dashboard:** specialized dashboard to oversee job performance and applications.
* **Application Review:** View and manage incoming applications from candidates.
* **Secure Login:** Dedicated login portal for recruiter access.

## 🛠️ Tech Stack

### Client-Side (Frontend)
* **Framework:** [React](https://react.dev/) (v19) with [Vite](https://vitejs.dev/)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/) (v4)
* **Authentication:** [Clerk](https://clerk.com/)
* **Routing:** [React Router](https://reactrouter.com/)
* **Notifications:** React Toastify
* **Rich Text Editor:** Quill

### Server-Side (Backend)
* **Runtime:** [Node.js](https://nodejs.org/)
* **Framework:** [Express.js](https://expressjs.com/)
* **Database:** [MongoDB](https://www.mongodb.com/) with [Mongoose](https://mongoosejs.com/)
* **Monitoring:** [Sentry](https://sentry.io/)
* **Webhooks:** Svix (for secure webhook verification)

## 📂 Project Structure

The project is organized into a client-server architecture:

```text
├── client/                 # Frontend React Application
│   ├── public/             # Static assets
│   ├── src/
│   │   ├── assets/         # Images and icons
│   │   ├── components/     # Reusable UI components (Navbar, JobCard, etc.)
│   │   ├── context/        # React Context API setup
│   │   ├── pages/          # Application views (Home, Dashboard, ApplyJob, etc.)
│   │   ├── main.jsx        # Entry point
│   │   └── App.jsx         # Main component and routing
│   ├── package.json        # Client dependencies
│   └── vite.config.js      # Vite configuration
│
├── server/                 # Backend Logic
│   ├── config/             # Database and tool configurations
│   ├── controllers/        # Route logic (e.g., webhooks)
│   ├── models/             # Mongoose schemas (User, Job, etc.)
│   ├── routes/             # API route definitions
│   └── server.js           # Server entry point
│
├── package.json            # Backend/Root dependencies and scripts
└── vercel.json             # Deployment configuration
## ⚙️ Installation & Setup

### Prerequisites

*   Node.js (v18+ recommended)
    
*   npm or yarn
    
*   MongoDB connection string
    

### 1\. Clone the Repository

Bash

    git clone <repository-url>
    cd job-portal

### 2\. Backend Setup

The root directory serves as the backend server location.

1.  **Install Dependencies:**
    
    Bash
    
        npm install
    
2.  **Environment Variables:** Create a `.env` file in the root directory and add the following (based on used libraries):
    
    Code snippet
    
        PORT=5000
        MONGODB_URI=<your_mongodb_connection_string>
        SENTRY_DSN=<your_sentry_dsn>
        CLERK_WEBHOOK_SECRET=<your_clerk_webhook_secret>
    
3.  **Run Server:**
    
    Bash
    
        # Development mode (with nodemon)
        npm run dev
        
        # Production mode
        npm start
    

### 3\. Frontend Setup

Navigate to the `client` directory to set up the frontend.

1.  **Navigate to Client:**
    
    Bash
    
        cd client
    
2.  **Install Dependencies:**
    
    Bash
    
        npm install
    
3.  **Environment Variables:** Create a `.env` file in the `client` directory:
    
    Code snippet
    
        VITE_CLERK_PUBLISHABLE_KEY=<your_clerk_publishable_key>
        # Add any other public API keys here
    
4.  **Run Frontend:**
    
    Bash
    
        npm run dev
    
    The application will typically run on `http://localhost:5173`.
    

## 📡 API Endpoints

The backend exposes RESTful APIs to handle data operations. While specific routes are defined in the `server/routes` directory, high-level functionality includes:

*   **User Management:** Handling user data and profile updates.
    
*   **Webhooks:** processing events from Clerk for authentication synchronization (`/api/webhooks`).
    
*   **Jobs:** CRUD operations for job postings.
    
*   **Applications:** Submitting and retrieving job applications.
    

## 🤝 Contributing

1.  Fork the repository.
    
2.  Create a new branch (`git checkout -b feature/AmazingFeature`).
    
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`).
    
4.  Push to the branch (`git push origin feature/AmazingFeature`).
    
5.  Open a Pull Request.
