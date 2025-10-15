// import React from 'react'
// import { manageJobsData } from '../assets/assets'
// import moment from 'moment'
// import { useNavigate } from 'react-router-dom'
// const ManageJobs=()=>{
//     const navigate=useNavigate()
//     return(
//         <div className='container p-4 max-w-5xl'>
//             <div className='overflow-x-auto'>
//                 <table className='min-w-full bg-white border border-gray-200 max-sm:text-sm'>
// <thead>
//     <tr>
//         <th className='py-2 px-4 border-4 text-left max-sm:hidden'>#</th>
//         <th className='py-2 px-4 border-4 text-left'>Job Title</th>
//         <th className='py-2 px-4 border-4 text-left max-sm:hidden'>Date</th>
//         <th className='py-2 px-4 border-4 text-left max-sm:hidden'>Location</th>
//         <th className='py-2 px-4 border-4 text-center'>Applicants</th>
//         <th className='py-2 px-4 border-4 text-left'>Visible</th>
//     </tr>
// </thead>
// <tbody>
//     {manageJobsData.map((job,index)=>(
//         <tr key={index} className='text-gray-700'>
//             <td className='py-2 px-4 border-b max-sm:hidden'>{index+1}</td>
//             <td className='py-2 px-4 border-b'>{job.title}</td>
//             <td className='py-2 px-4 border-b max-sm:hidden'>{moment(job.date).format('ll')}</td>
//             <td className='py-2 px-4 border-b max-sm:hidden'>{job.location}</td>
//             <td className='py-2 px-4 border-b text-center'>{job.applicants}</td>
//             <td className='py-2 px-4 border-b'>
//                 <input className='scale-125 ml-4' type="checkbox" />
//             </td>
//         </tr>
//     ))}
// </tbody>
//                 </table>
//             </div>
//             <div className='mt-4 flex justify-end'>
//                 <button onClick={(c=>navigate())} className='bg-black text-white py-2 px-4 rounded'>Add new job</button>
//             </div>
//         </div>
//     )
// }
// export default ManageJobs

import React from 'react';
import { manageJobsData } from '../assets/assets';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import './ManageJobs.css';

const ManageJobs = () => {
  const navigate = useNavigate();

  return (
    <div className="manage-jobs-container">
      <div className="manage-jobs-table-wrapper">
        <table className="manage-jobs-table">
          <thead>
            <tr>
              <th className="max-sm-hidden">#</th>
              <th>Job Title</th>
              <th className="max-sm-hidden">Date</th>
              <th className="max-sm-hidden">Location</th>
              <th className="text-center">Applicants</th>
              <th>Visible</th>
            </tr>
          </thead>
          <tbody>
            {manageJobsData.map((job, index) => (
              <tr key={index}>
                <td className="max-sm-hidden">{index + 1}</td>
                <td>{job.title}</td>
                <td className="max-sm-hidden">{moment(job.date).format('ll')}</td>
                <td className="max-sm-hidden">{job.location}</td>
                <td className="text-center">{job.applicants}</td>
                <td>
                  <input type="checkbox" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'flex-end' }}>
        <button
          onClick={() => navigate('/dashboard/add-job')}
          className="manage-jobs-button"
        >
          Add new job
        </button>
      </div>
    </div>
  );
};

export default ManageJobs;
