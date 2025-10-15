// import React from 'react';
// import {Route,Routes} from 'react-router-dom'
// import Home from './pages/Home';
// const App=()=>{
//   return (
//     <div>
//       <Routes>
//         <Route path='/' element={Home}/>
//         <Route path='/apply-job/:id' element={<ApplyJob/>}/>
//                 <Route path='/applications' element={<Applications/>}/>
//       </Routes>

//     </div>
//   )
// }
// export default App


// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import ApplyJob from "./pages/ApplyJob";
// import Applications from "./pages/Applications";

// const App = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/apply-job/:id" element={<ApplyJob />} />
//       <Route path="/applications" element={<Applications />} />
//     </Routes>
//   );
// };

// export default App;



// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import Home from "./pages/Home.jsx";
// import ApplyJob from "./pages/ApplyJob.jsx";
// import Applications from "./pages/Applications.jsx";
// import RecruiterLogin from "./components/RecruiterLogin.jsx";
// import { useClerk } from "@clerk/clerk-react";
// import { useContext } from "react";
// import { AppContext } from "./context/AppContext.jsx";
// import Dashboard from "./pages/Dashboard.jsx";
// import AddJob from "./pages/AddJob.jsx";
// import ManageJobs from "./pages/Managejobs.jsx";
// import ViewApplications from "./pages/ViewApplications.jsx";
// import 'quill/dist/quill.snow.css'

// const App = () => {
//   const {showRecruiterLogin}=useContext(AppContext)
//   return (
//     <div className="p-6">
// { showRecruiterLogin && <RecruiterLogin/>}
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/apply-job/:id" element={<ApplyJob />} />
//         <Route path="/applications" element={<Applications />} />
//         <Route path='/dasboard' element={<Dashboard/>}>
// <Route path='add-job' element={<AddJob/>}/>
// <Route path='manage-job' element={<ManageJobs/>}/>
// <Route path='view-applications' element={<ViewApplications/>}/>
//         </Route>
        
//       </Routes>
//     </div>
//   )
// };

// export default App;




import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import ApplyJob from "./pages/ApplyJob.jsx";
import Applications from "./pages/Applications.jsx";
import RecruiterLogin from "./components/RecruiterLogin.jsx";
import { AppContext } from "./context/AppContext.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import AddJob from "./pages/AddJob.jsx";
import ManageJobs from "./pages/ManageJobs.jsx";
import ViewApplications from "./pages/ViewApplications.jsx";
import 'quill/dist/quill.snow.css';
import './App.css'; // <-- Import your normal CSS file

const App = () => {
  const { showRecruiterLogin } = useContext(AppContext);

  return (
    <div className="app-container">
      {showRecruiterLogin && <RecruiterLogin />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apply-job/:id" element={<ApplyJob />} />
        <Route path="/applications" element={<Applications />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="add-job" element={<AddJob />} />
          <Route path="manage-job" element={<ManageJobs />} />
          <Route path="view-applications" element={<ViewApplications />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;



