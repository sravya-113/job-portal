// import React from 'react'
// import { viewApplicationsPageData } from '../assets/assets'
// const ViewApplications=()=>{
//     return(
//         <div className='container mx-aauto p-4'>
//             <div >
//                 <table className='w-full max-w-4xl bg-white border border-gray-200 max-sm:text-sm'>
//                     <thead>
//                         <tr className='border-b'>
//                             <th className='py-2 px-4 text-left'>#</th>
//                             <th  className='py-2 px-4 text-left'>User Name</th>
//                             <th  className='py-2 px-4 text-left max-sm:hidden'>Job Title</th>
//                             <th  className='py-2 px-4 text-left max-sm:hidden'>Location</th>
//                             <th  className='py-2 px-4 text-left'>Resume</th>
//                             <th  className='py-2 px-4 text-left'>Action</th>
//                         </tr>
//                         <tbody>
//                             {viewApplicationsPageData.map((applicant,index)=>(
//                                 <tr key={index} className='text-gray-7000'>
//                                     <td className='py-2 px-4 border-4 text-center'>{index+1}</td>
//                                     <td className='py-2 px-4 border-4 text-center flex'>
//                                         <img  className='w-10 h-10 rounded-full max-sm:hidden'src={applicant.imgSrc} alt=""/>
//                                         <span>{applicant.name}</span>
//                                     </td>
//                                     <td className='py-2 px-4 border-4 max-sm:hidden'>{applicant.jobTitle}</td>
//                                     <td className='py-2 px-4 border-4 max-sm:hidden'>{applicant.location}</td>
//                                     <td className='py-2 px-4 border-b'>
//                                         <a herf="" target='_blank'
//                                         className='bg-blue text-blue-400 px-3 py-1 rounded inline-flex gap-2 items-center'
//                                         >
//                                             Resume<img src={assets.resume_download_icon} alt=""/>
//                                         </a>
//                                     </td>
//                                     <td className='py-2 px-4 border-4 relative'>
//                                         <div classname='relative inline-block text-left group'>
//                                             <button className='text-gray-500 action-button'>....</button>
//                                             <div className='z-10 hidden absolute right-0 md:left-0 top-0 mt-2 bg-white border border-gray-200 rounded shadow group-hover:block'>
//                                                 <button className='block w-full text-left px-5 py-2 text-blue-500 hover:bg-gray-100'>accept</button>
//                                                 <button className='block w-full text-left px-5 py-2 text-red-500 hover:bg-gray-100'>Reject</button>
//                                             </div>
//                                         </div>
//                                     </td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </thead>
//                 </table>
//             </div>
//         </div>
//     )
// }
// export default ViewApplications


// import React from 'react';
// import { viewApplicationsPageData, assets } from '../assets/assets';
// import './ViewApplications.css';

// const ViewApplications = () => {
//   return (
//     <div className="view-applications-container">
//       <div className="view-applications-table-wrapper">
//         <table className="view-applications-table">
//           <thead>
//             <tr>
//               <th>#</th>
//               <th>User Name</th>
//               <th className="max-sm-hidden">Job Title</th>
//               <th className="max-sm-hidden">Location</th>
//               <th>Resume</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {viewApplicationsPageData.map((applicant, index) => (
//               <tr key={index}>
//                 <td className="text-center">{index + 1}</td>
//                 <td className="flex items-center">
//                   <img className="applicant-img max-sm-hidden" src={applicant.imgSrc} alt="" />
//                   <span>{applicant.name}</span>
//                 </td>
//                 <td className="max-sm-hidden">{applicant.jobTitle}</td>
//                 <td className="max-sm-hidden">{applicant.location}</td>
//                 <td>
//                   <a
//                     href="#"
//                     target="_blank"
//                     className="resume-link"
//                   >
//                     Resume
//                     <img src={assets.resume_download_icon} alt="" />
//                   </a>
//                 </td>
//                 <td>
//                   <div className="action-group">
//                     <button className="action-button">....</button>
//                     <div className="action-dropdown">
//                       <button className="accept">Accept</button>
//                       <button className="reject">Reject</button>
//                     </div>
//                   </div>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default ViewApplications;


// import React from "react";
// import { viewApplicationsPageData, assets } from "../assets/assets";
// import "./ViewApplications.css";

// const ViewApplications = () => {
//   return (
//     <div className="view-applications-container">
//       <div className="view-applications-table-wrapper">
//         <table className="view-applications-table">
//           <thead>
//             <tr>
//               <th>#</th>
//               <th>User Name</th>
//               <th className="hide-on-sm">Job Title</th>
//               <th className="hide-on-sm">Location</th>
//               <th>Resume</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {viewApplicationsPageData.map((applicant, index) => (
//               <tr key={index}>
//                 <td className="text-center">{index + 1}</td>
//                 <td className="user-cell">
//                   <img
//                     className="applicant-img hide-on-sm"
//                     src={applicant.imgSrc}
//                     alt={applicant.name}
//                   />
//                   <span>{applicant.name}</span>
//                 </td>
//                 <td className="hide-on-sm">{applicant.jobTitle}</td>
//                 <td className="hide-on-sm">{applicant.location}</td>
//                 <td>
//                   <a
//                     href="#"
//                     target="_blank"
//                     className="resume-link"
//                     rel="noopener noreferrer"
//                   >
//                     Resume
//                     <img
//                       src={assets.resume_download_icon}
//                       alt="Download Resume"
//                       className="resume-icon"
//                     />
//                   </a>
//                 </td>
//                 <td>
//                   <div className="action-group">
//                     <button className="action-button">....</button>
//                     <div className="action-dropdown">
//                       <button className="accept">Accept</button>
//                       <button className="reject">Reject</button>
//                     </div>
//                   </div>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default ViewApplications;



import React from "react";
import { viewApplicationsPageData, assets } from "../assets/assets";
import "./ViewApplications.css";

const ViewApplications = () => {
  return (
    <div className="view-applications">
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>User Name</th>
              <th className="hide-on-small">Job Title</th>
              <th className="hide-on-small">Location</th>
              <th>Resume</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {viewApplicationsPageData.map((applicant, index) => (
              <tr key={index}>
                <td className="center-text">{index + 1}</td>
                <td className="user-cell">
                  <img
                    src={applicant.imgSrc}
                    alt={applicant.name}
                    className="user-img hide-on-small"
                  />
                  <span>{applicant.name}</span>
                </td>
                <td className="hide-on-small">{applicant.jobTitle}</td>
                <td className="hide-on-small">{applicant.location}</td>
                <td>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="resume-link"
                  >
                    Resume
                    <img
                      src={assets.resume_download_icon}
                      alt="Download Resume"
                      className="resume-icon"
                    />
                  </a>
                </td>
                <td>
                  <div className="action">
                    <button className="action-button">....</button>
                    <div className="action-menu">
                      <button className="accept">Accept</button>
                      <button className="reject">Reject</button>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewApplications;
