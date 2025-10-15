// import React from 'react';
// import { assets } from '../assets/assets'
// const Navbar=()=>{
//     return(
//         <div>
// <div>
//     <img src={assets.logo} alt=" "/>
// </div>
//         </div>
//     )
// }
// export default Navbar
// import React from "react";
// import { assets } from "../assets/assets.js"; // ✅ make sure this file exists

// const Navbar = () => {
//   return (
//     <div>
//       <img src={assets.logo} alt="Logo" />
//     </div>
//   );
// };

// export default Navbar;


// import React from "react";
// import logo from "../assets/logo.svg"; // ✅ import svg directly

// const Navbar = () => {
//   return (
//     <div>
//       <img src={logo} alt="Logo" />
//     </div>
//   );
// };

// export default Navbar;


// import React from "react";
// import logo from "../assets/logo.svg";
//  // ✅ direct import

// const Navbar = () => {
//   return (
//     <nav className="flex items-center bg-gray-900 text-white px-6 py-4">
//       {/* Logo */}
//       <div className="flex items-center space-x-3">
//         <img src={logo} alt="Logo" className="h-10 w-10" /> 
//         <span className="text-xl font-bold">JobPortal</span>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
// import React from 'react'
// import { assets} from '../assets/assets'
// const Navbar=()=>{
//     return(
//         <div className="shadow py-4">
//             <div className='container px-4 2xl:px-20 mx-auto flex justify-between items-center'>
//                 <img src={assets.logo} alt=" "/>
//                 <div className='flex-gap-4 max-sm:text-xs'>
//                     <button className='text-gray-600'>Recruiter Login</button>
//                     <button className='bg-blue-600 text-white px-6 sm:px-9 py-2 rounded-full'>Login</button>
//                 </div>
//             </div>
//         </div>
//     )
// }
// export default Navbar

// // Navbar.jsx
// import React from "react";
// import logo from "../assets/logo.svg";  // ✅ Direct import

// const Navbar = () => {
//   return (
//     <div>
//       <img src={logo} alt="Logo" />
//     </div>
//   );
// };

// export default Navbar;




// import React from 'react';
// import { assets } from '../assets/assets';
// import {userClerk,UserButton,useUser} from '@clerk/clerk-react'

// const Navbar = () => {


//   const {openSignIn}=useClerk()
//   return (
//     <div className="shadow py-4">
//       <div className="container px-4 2xl:px-20 mx-auto flex justify-between items-center">
//         {/* ✅ Logo */}
//         <img src={assets.logo} alt="Logo" className="h-10" />

//         {/* ✅ Buttons */}
//         <div className="flex gap-4 max-sm:text-xs">
//           <button className="text-gray-600">Recruiter Login</button>
//           <button onClick={e=>openSignIn()} className="bg-blue-600 text-white px-6 sm:px-9 py-2 rounded-full">
//             Login
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;



// import React from 'react';
// import { assets } from '../assets/assets';
// import { useClerk, UserButton, useUser } from '@clerk/clerk-react';

// const Navbar = () => {
//   const { openSignIn } = useClerk();

//   return (
//     <div className="shadow py-4">
//       <div className="container px-4 2xl:px-20 mx-auto flex justify-between items-center">
//         {/* ✅ Logo */}
//         <img src={assets.logo} alt="Logo" className="h-10" />

//         {/* ✅ Buttons */}
//         <div className="flex gap-4 max-sm:text-xs">
//           <button className="text-gray-600">Recruiter Login</button>
//           <button
//             onClick={e=> openSignIn()}
//             className="bg-blue-600 text-white px-6 sm:px-9 py-2 rounded-full"
//           >
//             Login
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;



// import React, { useContext } from "react";
// import { assets } from "../assets/assets";
// import { UserButton, useUser, SignInButton } from "@clerk/clerk-react";
// import {Link,useNavigate} from 'react-router-dom'
// import { AppContext } from "../context/AppContext";

// const Navbar = () => {
//   const { isSignedIn } = useUser();
//   const navigate=useNavigate();
//   const {setShowRecruiterLogin}=useContext(AppContext);

//   return (
//     <div className="shadow py-4">
//       <div className="container px-4 2xl:px-20 mx-auto flex justify-between items-center">
//         {/* ✅ Logo */}
//         <img onClick={()=>navigate('/')}className='cursor-pointer' src={assets.logo} alt="Logo" className="h-10" />
//         {
//           UserButton?<div className='flex-items-center gap-3'>
//             <Link to={'/applications'}>Applied jobs</Link>
//             <p>|</p>
//             <p className='max-sm:hidden'>Hi, {user.firstName+ " "+user.lastName}></p>
//             <UserButton/>
           
//             </div>
//         }

//         {/* ✅ Buttons */}
//         <div className="flex gap-4 max-sm:text-xs">
//           <button onClick={e=>setShowRecruiterLogin(true)} className="text-gray-600">Recruiter Login</button>

//           {isSignedIn ? (
//             <UserButton afterSignOutUrl="/" />
//           ) : (
//             <SignInButton mode="modal">
//               <button className="bg-blue-600 text-white px-6 sm:px-9 py-2 rounded-full">
//                 Login
//               </button>
//             </SignInButton>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;


// import React, { useContext } from "react";
// import { assets } from "../assets/assets";
// import { UserButton, useUser, SignInButton } from "@clerk/clerk-react";
// import { Link, useNavigate } from "react-router-dom";
// import { AppContext } from "../context/AppContext";

// const Navbar = () => {
//   const { isSignedIn, user } = useUser(); // ✅ Defined user
//   const navigate = useNavigate();
//   const { setShowRecruiterLogin } = useContext(AppContext);

//   return (
//     <div className="shadow py-4">
//       <div className="container px-4 2xl:px-20 mx-auto flex justify-between items-center">
//         {/* ✅ Logo */}
//         <img
//           onClick={() => navigate("/")}
//           className="cursor-pointer h-10" // ✅ Merged className
//           src={assets.logo}
//           alt="Logo"
//         />

//         {/* ✅ User info when signed in */}
//         {isSignedIn && user && (
//           <div className="flex items-center gap-3"> {/* ✅ Corrected flex-items-center */}
//             <Link to="/applications">Applied Jobs</Link>
//             <p>|</p>
//             <p className="max-sm:hidden">
//               Hi, {user.firstName + " " + user.lastName} {/* ✅ Fixed JSX typo */}
//             </p>
//             <UserButton afterSignOutUrl="/" />
//           </div>
//         )}

//         {/* ✅ Buttons when not signed in */}
//         {!isSignedIn && (
//           <div className="flex gap-4 max-sm:text-xs">
//             <button
//               onClick={() => setShowRecruiterLogin(true)}
//               className="text-gray-600"
//             >
//               Recruiter Login
//             </button>

//             <SignInButton mode="modal">
//               <button className="bg-blue-600 text-white px-6 sm:px-9 py-2 rounded-full">
//                 Login
//               </button>
//             </SignInButton>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Navbar;




import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { UserButton, useUser, SignInButton } from "@clerk/clerk-react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import './Navbar.css';

const Navbar = () => {
  const { isSignedIn, user } = useUser();
  const navigate = useNavigate();
  const { setShowRecruiterLogin } = useContext(AppContext);

  return (
    <div className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <img
          onClick={() => navigate("/")}
          className="navbar-logo"
          src={assets.logo}
          alt="Logo"
        />

        {/* Signed-in user */}
        {isSignedIn && user && (
          <div className="navbar-user">
            <Link to="/applications">Applied Jobs</Link>
            <p>|</p>
            <p>
              Hi, {user.firstName + " " + user.lastName}
            </p>
            <UserButton afterSignOutUrl="/" />
          </div>
        )}

        {/* Not signed-in buttons */}
        {!isSignedIn && (
          <div className="navbar-buttons">
            <button
              onClick={() => setShowRecruiterLogin(true)}
              className="recruiter-button"
            >
              Recruiter Login
            </button>

            <SignInButton mode="modal">
              <button className="login-button">Login</button>
            </SignInButton>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
