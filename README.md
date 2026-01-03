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
