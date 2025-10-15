// import React from 'react'
// import { assets } from '../assets/assets'
// import { useNavigate } from 'react-router-dom';
// const Dashboard=()=>{
//     const navigate=useNavigate();
//     return(
//         <div className='min-h-screen'>
//             {/* navbar for recruiter panel*/}
//             <div className='shadow py-4'>
//                 <div className='px-5 flex justify-between items-center'>
//                     <img onClick={e=>navigate('/')} className='max-sm-w-32 cursor-pointer'src={assets.logo} alt=""/>
//                     <div className='flex items-center gap-3'>
//                         <p className='max-sm:hidden'>welcome, GreatStack</p>
//                         <div className='relative group '>
//                             <img className='w-8 border rounded-full' src={assets.company_icon} alt=""/>
//                             <div childrenlassName='absolute hidden group-hover:block top-0  right-0 z-10 text-black rounded pt-12'>
//                                 <ul className='list-none m-0 p-2 bg-white rounded-md border text-sm'>
//                                     <li className='py-1 px-2 cursor-pointer pr-10'>Logout</li>
//                                 </ul>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

// <div className='flex-items-start'>


// {/* Left sidebar with option to add job,amange,view application*/}
// <div classname='inlIne-block min-h-screen border-r-2'>
//     <ul className='flex flex-col items-start pt-5 text-gray-800'>
//         <NavLink  classname={({isActive})=> `flex items-center p-3 sm:px-6 gap-2 w-full hover:bg-gray-100 ${isActive && 'bg-blue-100 border-4 border-blue-500'}`} to={'/dashboard/add-job'}>
// <img className='min-w-4' src={assets/add_icon} alt=" "/>
// <p classname='msx-sm:hidden'>Add Job</p>
//         </NavLink>
//                 <NavLink  classname={({isActive})=> `flex items-center p-3 sm:px-6 gap-2 w-full hover:bg-gray-100 ${isActive && 'bg-blue-100 border-4 border-blue-500'}`} to={'/dashboard/add-job'} to={'/dashboard/manage-jobs'}>
// <img  className='min-w-4' src={assets/home_icon} alt=" "/>
// <p classname='msx-sm:hidden'>Manage jobs</p>
//         </NavLink>
//                 <NavLink  classname={({isActive})=> `flex items-center p-3 sm:px-6 gap-2 w-full hover:bg-gray-100 ${isActive && 'bg-blue-100 border-4 border-blue-500'}`} to={'/dashboard/add-job'} to={'/dashboard/view-applications'}>
// <img  className='min-w-4' src={assets/tick_icon} alt=" "/>
// <p classname='msx-sm:hidden'>View Applications</p>
//         </NavLink>
//     </ul>
// </div>

// <div>
//     <Outlet/>
// </div>
// </div>
//         </div>
//     )
// }
// export default Dashboard




// import React from 'react';
// import { assets } from '../assets/assets';
// import { useNavigate, NavLink, Outlet } from 'react-router-dom';

// const Dashboard = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="min-h-screen">
//       {/* Navbar for recruiter panel */}
//       <div className="shadow py-4">
//         <div className="px-5 flex justify-between items-center">
//           <img
//             onClick={() => navigate('/')}
//             className="max-sm:w-32 cursor-pointer"
//             src={assets.logo}
//             alt="Logo"
//           />
//           <div className="flex items-center gap-3">
//             <p className="max-sm:hidden">Welcome, GreatStack</p>
//             <div className="relative group">
//               <img
//                 className="w-8 border rounded-full"
//                 src={assets.company_icon}
//                 alt="Company"
//               />
//               <div className="absolute hidden group-hover:block top-0 right-0 z-10 text-black rounded pt-12">
//                 <ul className="list-none m-0 p-2 bg-white rounded-md border text-sm">
//                   <li className="py-1 px-2 cursor-pointer pr-10">Logout</li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main layout */}
//       <div className="flex items-start">
//         {/* Left sidebar */}
//         <div className="inline-block min-h-screen border-r-2">
//           <ul className="flex flex-col items-start pt-5 text-gray-800">
//             <NavLink
//               className={({ isActive }) =>
//                 `flex items-center p-3 sm:px-6 gap-2 w-full hover:bg-gray-100 ${
//                   isActive ? 'bg-blue-100 border-4 border-blue-500' : ''
//                 }`
//               }
//               to="/dashboard/add-job"
//             >
//               <img className="min-w-4" src={assets.add_icon} alt="Add" />
//               <p className="max-sm:hidden">Add Job</p>
//             </NavLink>

//             <NavLink
//               className={({ isActive }) =>
//                 `flex items-center p-3 sm:px-6 gap-2 w-full hover:bg-gray-100 ${
//                   isActive ? 'bg-blue-100 border-4 border-blue-500' : ''
//                 }`
//               }
//               to="/dashboard/manage-jobs"
//             >
//               <img className="min-w-4" src={assets.home_icon} alt="Manage" />
//               <p className="max-sm:hidden">Manage Jobs</p>
//             </NavLink>

//             <NavLink
//               className={({ isActive }) =>
//                 `flex items-center p-3 sm:px-6 gap-2 w-full hover:bg-gray-100 ${
//                   isActive ? 'bg-blue-100 border-4 border-blue-500' : ''
//                 }`
//               }
//               to="/dashboard/view-applications"
//             >
//               <img className="min-w-4" src={assets.tick_icon} alt="View" />
//               <p className="max-sm:hidden">View Applications</p>
//             </NavLink>
//           </ul>
//         </div>

//         {/* Right content area */}
//         <div className="flex-1 p-4">
//           <Outlet />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;


import React from 'react';
import { assets } from '../assets/assets';
import { useNavigate, NavLink, Outlet } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      {/* Navbar */}
      <div className="dashboard-navbar">
        <div className="navbar-inner">
          <img
            onClick={() => navigate('/')}
            className="logo"
            src={assets.logo}
            alt="Logo"
          />
          <div className="navbar-user">
            <p className="desktop-only">Welcome, GreatStack</p>
            <div className="relative">
              <img className="user-icon" src={assets.company_icon} alt="Company" />
              <div className="user-dropdown">
                <ul>
                  <li>Logout</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main layout */}
      <div className="dashboard-main">
        {/* Sidebar */}
        <div className="dashboard-sidebar">
          <ul>
            <NavLink
              className={({ isActive }) =>
                isActive ? 'active' : undefined
              }
              to="/dashboard/add-job"
            >
              <img src={assets.add_icon} alt="Add" />
              <p>Add Job</p>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? 'active' : undefined
              }
              to="/dashboard/manage-jobs"
            >
              <img src={assets.home_icon} alt="Manage" />
              <p>Manage Jobs</p>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? 'active' : undefined
              }
              to="/dashboard/view-applications"
            >
              <img src={assets.tick_icon} alt="View" />
              <p>View Applications</p>
            </NavLink>
          </ul>
        </div>

        {/* Content */}
        <div className="dashboard-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

