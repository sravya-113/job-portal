// // import React from 'react';
// // const Applications=()=>{
// //     return(
// //         <div>Applications</div>
// //     )
// // }
// // export default Applications


// import React, { useState } from "react";
// import { assets } from "../assets/assets";
// import moment from "moment";

// const Applications = () => {
//   const [isEdit,setIsEdit]=useState(false);
//   const [resume,setResume]=useState(null);
//   return
//    <>
//    <Navbar/>
   
//    <div className='conatiner px-4 min-h-[65vh] 2xl:px-20 mx-auto my-10'>
//     <h2 className='text-xl font-semibold'>Your Resume</h2>
//     <div className='flex gap-2 mb-6 mt-3'>
// {
//   isEdit
//   ? <>
//   <label className='flex items-center' htmlFor="resumeUpload">
// <p className='bg-blue-100 text-blue-600 px-4 py-2 rounded-lg mr-2'>Select resume</p>
// <input  id='resumeUpload' onChange={e=>setResume(e.target.files[0])}accept='application/pdf' type="file" hidden/>
// <img src={assets.profile_upload_icon} alt=""/>
//   </label>
//   <button onClick={e=>setIsEdit(false)} className='bg-green-100 border-green-400 rounded-lg px-4 py-2'>Save</button>
//   </>:<div className='flex gap-2'>
// <a className='bg-blue-100 text-blue-600 px-4 py-2 rounded-lg' href="">
//   Resume
// </a>
// <button onClick={()=>setIsEdit(true)} className='text-gray-500 border border-gray-300 rounded-lg px-4 py-2'>
//   Edit
// </button>

//     </div>
// }
//    </div>
//    <h2 className='text-xl font-semibold mb-4'>Job Applied</h2>
//    <table className='min-w-full bg-white bg-white border rounded-lg'>
//     <thead>
//       <tr>
//         <th className='py-3 px-4 border-4 text-left'>Company</th>
//         <th className='py-3 px-4 border-4 text-left'>Job Title</th>
//         <th className='py-3 px-4 border-4 text-left mx-sm:hidden'>Location</th>
//         <th className='py-3 px-4 border-4 text-left'>Date</th>
//         <th className='py-3 px-4 border-4 text-left'>status</th>

//       </tr>
//     </thead>
//     <tbody>
//       {jobsApplied.map((job,index)=>true ? (
//         <tr>
// <td className='py-3 px-4 flex items-center gap-2 border-b'>
//   <img className='w-8 h-8' src={job.logo} alt=""/>
//   {job.company}
// </td>
// <td className='py-2 px-4 border-b'>{job.title}</td>
// <td className='py-2 px-4 border-b max-sm:hidden'>{job.location}</td>
// <td className='py-2 px-4 border-b'>{moment(job.date).format('ll')}</td>
// <td className='py-2 px-4 border-b'>
//   <span className={`${job.status==='Accepted'? 'bg-green-100':job.status==='Rejected' ?'bg-red-100':'bg-blue-100'} px-4 py-1.5 rounded`}>{job.status}</span></td>
//         </tr>
//       ):(null))}
//     </tbody>
//    </table>
//    </div>
//    <Footer/>
//   </>
  
// };

// export default Applications;




// import React, { useState } from "react";
// import { assets } from "../assets/assets";
// import moment from "moment";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import "./Applications.css";

// const Applications = ({ jobsApplied }) => {
//   const [isEdit, setIsEdit] = useState(false);
//   const [resume, setResume] = useState(null);

//   return (
//     <>
//       <Navbar />
//       <div className="applications-container">
//         <h2 className="section-title">Your Resume</h2>
//         <div className="resume-section">
//           {isEdit ? (
//             <>
//               <label htmlFor="resumeUpload">
//                 <p>Select resume</p>
//                 <input
//                   id="resumeUpload"
//                   type="file"
//                   accept="application/pdf"
//                   hidden
//                   onChange={(e) => setResume(e.target.files[0])}
//                 />
//                 <img src={assets.profile_upload_icon} alt="" />
//               </label>
//               <button onClick={() => setIsEdit(false)}>Save</button>
//             </>
//           ) : (
//             <div style={{ display: "flex", gap: "0.5rem" }}>
//               <a className="resume-link" href="#">
//                 Resume
//               </a>
//               <button
//                 className="resume-edit-btn"
//                 onClick={() => setIsEdit(true)}
//               >
//                 Edit
//               </button>
//             </div>
//           )}
//         </div>

//         <h2 className="section-title">Job Applied</h2>
//         <table className="applications-table">
//           <thead>
//             <tr>
//               <th>Company</th>
//               <th>Job Title</th>
//               <th>Location</th>
//               <th>Date</th>
//               <th>Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {jobsApplied.map((job, index) => (
//               <tr key={index}>
//                 <td className="company-cell">
//                   <img src={job.logo} alt="" />
//                   {job.company}
//                 </td>
//                 <td>{job.title}</td>
//                 <td>{job.location}</td>
//                 <td>{moment(job.date).format("ll")}</td>
//                 <td>
//                   <span
//                     className={`status-badge ${
//                       job.status === "Accepted"
//                         ? "status-accepted"
//                         : job.status === "Rejected"
//                         ? "status-rejected"
//                         : "status-pending"
//                     }`}
//                   >
//                     {job.status}
//                   </span>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default Applications;



// import React, { useState } from "react";
// import { assets } from "../assets/assets";
// import moment from "moment";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import "./Applications.css";

// const Applications = ({ jobsApplied }) => {
//   const [isEdit, setIsEdit] = useState(false);
//   const [resume, setResume] = useState(null);

//   return (
//     <>
//       <Navbar />
//       <div className="applications-container">
//         <h2 className="section-title">Your Resume</h2>
//         <div className="resume-section">
//           {isEdit ? (
//             <div className="resume-edit-section">
//               <label htmlFor="resumeUpload" className="resume-upload-label">
//                 <p>Select resume</p>
//                 <input
//                   id="resumeUpload"
//                   type="file"
//                   accept="application/pdf"
//                   hidden
//                   onChange={(e) => setResume(e.target.files[0])}
//                 />
//                 <img
//                   src={assets.profile_upload_icon}
//                   alt="Upload Resume"
//                   className="resume-upload-icon"
//                 />
//               </label>
//               <button
//                 className="resume-save-btn"
//                 onClick={() => setIsEdit(false)}
//               >
//                 Save
//               </button>
//             </div>
//           ) : (
//             <div className="resume-display">
//               <a className="resume-link" href="#">
//                 Resume
//               </a>
//               <button
//                 className="resume-edit-btn"
//                 onClick={() => setIsEdit(true)}
//               >
//                 Edit
//               </button>
//             </div>
//           )}
//         </div>

//         <h2 className="section-title">Job Applied</h2>
//         <table className="applications-table">
//           <thead>
//             <tr>
//               <th>Company</th>
//               <th>Job Title</th>
//               <th>Location</th>
//               <th>Date</th>
//               <th>Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {jobsApplied.map((job, index) => (
//               <tr key={index}>
//                 <td className="company-cell">
//                   <img src={job.logo} alt={job.company} />
//                   {job.company}
//                 </td>
//                 <td>{job.title}</td>
//                 <td>{job.location}</td>
//                 <td>{moment(job.date).format("ll")}</td>
//                 <td>
//                   <span
//                     className={`status-badge ${
//                       job.status === "Accepted"
//                         ? "status-accepted"
//                         : job.status === "Rejected"
//                         ? "status-rejected"
//                         : "status-pending"
//                     }`}
//                   >
//                     {job.status}
//                   </span>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default Applications;


// import React, { useState } from "react";
// import { assets } from "../assets/assets";
// import moment from "moment";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import "./Applications.css";

// const Applications = ({ jobsApplied }) => {
//   const [isEdit, setIsEdit] = useState(false);
//   const [resume, setResume] = useState(null);

//   return (
//     <>
//       <Navbar />
//       <div className="applications-container">
//         <h2 className="section-title">Your Resume</h2>
//         <div className="resume-section">
//           {isEdit ? (
//             <div className="resume-edit-section">
//               <label htmlFor="resumeUpload" className="resume-upload-label">
//                 <p>Select resume</p>
//                 <input
//                   id="resumeUpload"
//                   type="file"
//                   accept="application/pdf"
//                   hidden
//                   onChange={(e) => setResume(e.target.files[0])}
//                 />
//                 <img
//                   src={assets.profile_upload_icon}
//                   alt="Upload Resume"
//                   className="resume-upload-icon"
//                 />
//               </label>
//               <button
//                 className="resume-save-btn"
//                 onClick={() => setIsEdit(false)}
//               >
//                 Save
//               </button>
//             </div>
//           ) : (
//             <div className="resume-display">
//               <a className="resume-link" href="#">
//                 Resume
//               </a>
//               <button
//                 className="resume-edit-btn"
//                 onClick={() => setIsEdit(true)}
//               >
//                 Edit
//               </button>
//             </div>
//           )}
//         </div>

//         <h2 className="section-title">Job Applied</h2>
//         <table className="applications-table">
//           <thead>
//             <tr>
//               <th>Company</th>
//               <th>Job Title</th>
//               <th>Location</th>
//               <th>Date</th>
//               <th>Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {jobsApplied.map((job, index) => (
//               <tr key={index}>
//                 <td className="company-cell">
//                   <img src={job.logo} alt={job.company} />
//                   {job.company}
//                 </td>
//                 <td>{job.title}</td>
//                 <td>{job.location}</td>
//                 <td>{moment(job.date).format("ll")}</td>
//                 <td>
//                   <span
//                     className={`status-badge ${
//                       job.status === "Accepted"
//                         ? "status-accepted"
//                         : job.status === "Rejected"
//                         ? "status-rejected"
//                         : "status-pending"
//                     }`}
//                   >
//                     {job.status}
//                   </span>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default Applications;


import React, { useState } from "react";
import moment from "moment";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { assets } from "../assets/assets";
import "./Applications.css";

const Applications = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [resume, setResume] = useState(null);

  // MOCK DATA for jobs applied
  const jobsApplied = [
    {
      logo: assets.profile_upload_icon,
      company: "ABC Corp",
      title: "Frontend Developer",
      location: "New York",
      date: new Date(),
      status: "Accepted",
    },
    {
      logo: assets.profile_upload_icon,
      company: "XYZ Inc",
      title: "Backend Developer",
      location: "San Francisco",
      date: new Date(),
      status: "Pending",
    },
    {
      logo: assets.profile_upload_icon,
      company: "123 Solutions",
      title: "Fullstack Developer",
      location: "Chicago",
      date: new Date(),
      status: "Rejected",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="applications-container">
        <h2 className="section-title">Your Resume</h2>
        <div className="resume-section">
          {isEdit ? (
            <div className="resume-edit-section">
              <label htmlFor="resumeUpload" className="resume-upload-label">
                <p>Select resume</p>
                <input
                  id="resumeUpload"
                  type="file"
                  accept="application/pdf"
                  hidden
                  onChange={(e) => setResume(e.target.files[0])}
                />
                <img
                  src={assets.profile_upload_icon}
                  alt="Upload Resume"
                  className="resume-upload-icon"
                />
              </label>
              <button
                className="resume-save-btn"
                onClick={() => setIsEdit(false)}
              >
                Save
              </button>
            </div>
          ) : (
            <div className="resume-display">
              <a className="resume-link" href="#">
                Resume
              </a>
              <button
                className="resume-edit-btn"
                onClick={() => setIsEdit(true)}
              >
                Edit
              </button>
            </div>
          )}
        </div>

        <h2 className="section-title">Job Applied</h2>
        <table className="applications-table">
          <thead>
            <tr>
              <th>Company</th>
              <th>Job Title</th>
              <th>Location</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {jobsApplied.map((job, index) => (
              <tr key={index}>
                <td className="company-cell">
                  <img src={job.logo} alt={job.company} />
                  {job.company}
                </td>
                <td>{job.title}</td>
                <td>{job.location}</td>
                <td>{moment(job.date).format("ll")}</td>
                <td>
                  <span
                    className={`status-badge ${
                      job.status === "Accepted"
                        ? "status-accepted"
                        : job.status === "Rejected"
                        ? "status-rejected"
                        : "status-pending"
                    }`}
                  >
                    {job.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </>
  );
};

export default Applications;
