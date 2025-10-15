// import React, { useContext, useEffect, useState } from 'react'
// import { assets } from '../assets/assets';
// import { AppContext } from '../context/AppContext';
// const RecruiterLogin=()=>{
//     const [state,setState]=useState('Login')
//     const [name,setName]=useState(' ')
//     const [password,setPassword]=useState(' ');
//     const [email,setEmail]=useState(' ');
//     const [image,setImage]=useState(false);
//     const [isTextDataSubmitted,setIsTextDataSubmitted]=useState(false)
//     const {setShowRecruiterLogin}=useContext(AppContext)
//     const onSubmitHandler=async(e)=>{
//         e.preventDefault()
//         if(state=="Sign Up" && !isTextDataSubmitted){
// setIsTextDataSubmitted(true)
//         }
//     }
//     useEffect(()=>{
//         document.body.style.overflow='hidden'
//         return()=>{
//             document.body.style.overflow='unset'
//         }
//     },[])
    
//     return (<div>
// <form onSubmit={onSubmitHandler} className='relative bg-white p-10 rounded-xl text-slate-500'>
//     <div className='absolute top-0 left-0 right-o bottom-0 z-q0 backdrop-blur-sm bg-black/30 flex justify-center items-center'></div>
// <h1 className='text-center text-2xl text-neutral-700 font-medium'>Recruiter {state}</h1>
// <p className='text-small'>Welcome back! Please sign in to continue</p>
// {state==="Sign Up" && isTextDataSubmitted
// ?<>
// <div className='flex items-center gap-4 my-5'>
//     <label htmlFor="image">
//         <img className='w-16 rounded-full' src={image ? URL.createObjectURL(image) :assets.upload_area} alt="" />
//         <input onChange={e=>setImage(e.target.files[0])} type="file" id="image" hidden/>
//     </label>
//     <p>Upload Company <br/>logo</p>
// </div>
// </>
// :<>
// {state !=='Login' && (
//     <div className='border px-4 py-2 flex items-center gap-2 rounded-full mt-5'>
//     <img src={assets.person_icon} alt=""/>
//     <input className='outline-none text-sm' onChange={e=>setName(e.target.value)} value={name} type="text" placeholder="Company Name" required/>
// </div>)}

// <div className='border px-4 py-2 flex items-center gap-2 rounded-full mt-5'>
//     <img src={assets.email_icon} alt=""/>
//     <input className='outline-none text-sm' onChange={e=>setName(e.target.value)} value={email} type="email" placeholder="email id" required/>
// </div>
// <div className='border px-4 py-2 flex items-center gap-2 rounded-full mt-5'>
//     <img src={assets.lock_icon} alt=""/>
//     <input  className='outline-none text-sm' onChange={e=>setName(e.target.value)} value={password} type="password" placeholder="password" required/>
// </div>

// </>}
// {state==="Login" && <p className='text-sm text-blue-600 my-4 mt-4 cursor-pointer'>Forgot Password</p>} 

// <button type='submit' className='bg-blue-600 w-full text-white py-2 rounded-full'>
//     {state ==='Login' ? 'login' :isTextDataSubmitted?'create account':'next'}
// </button>
// {
//     state==='Login' 
//     ? <p className='mt-5 text-center'>Don't have an account? <span className='text-blue-600 cursor-pointer' onClick={()=>setState("sign Up")}>Sign up</span></p>:
//     <p className='mt-5 text-center'>Don't have an account? <span onClick={()=>setState("Login")}>Login</span></p>
// }
// <p>Don't have an account ?<span>Sign Up</span></p>
// <p>Already have an account ? <span>Login</span></p>
// <img onClick={e=>setShowRecruiterLogin(false)} className='absolute top-5 right-5 cursor-pointer' src={assets.cross_icon} alt=" "/>
// </form>
//     </div>
//     )
// }
// export default RecruiterLogin


// import React, { useContext, useEffect, useState } from 'react';
// import { assets } from '../assets/assets';
// import { AppContext } from '../context/AppContext';
// import './RecruiterLogin.css';

// const RecruiterLogin = () => {
//   const [state, setState] = useState('Login');
//   const [name, setName] = useState('');
//   const [password, setPassword] = useState('');
//   const [email, setEmail] = useState('');
//   const [image, setImage] = useState(null);
//   const [isTextDataSubmitted, setIsTextDataSubmitted] = useState(false);
//   const { setShowRecruiterLogin } = useContext(AppContext);

//   const onSubmitHandler = async (e) => {
//     e.preventDefault();
//     if (state === "Sign Up" && !isTextDataSubmitted) {
//       setIsTextDataSubmitted(true);
//     }
//   };

//   useEffect(() => {
//     document.body.style.overflow = 'hidden';
//     return () => {
//       document.body.style.overflow = 'unset';
//     };
//   }, []);

//   return (
//     <div>
//       <form onSubmit={onSubmitHandler} className="recruiter-login-form">
//         <div className="recruiter-login-backdrop"></div>

//         <h1>Recruiter {state}</h1>
//         <p>Welcome back! Please sign in to continue</p>

//         {state === "Sign Up" && isTextDataSubmitted ? (
//           <div className="upload-section">
//             <label htmlFor="image">
//               <img src={image ? URL.createObjectURL(image) : assets.upload_area} alt="" />
//               <input onChange={e => setImage(e.target.files[0])} type="file" id="image" hidden />
//             </label>
//             <p>Upload Company <br /> logo</p>
//           </div>
//         ) : (
//           <>
//             {state !== 'Login' && (
//               <div className="input-group">
//                 <img src={assets.person_icon} alt="" />
//                 <input
//                   type="text"
//                   placeholder="Company Name"
//                   value={name}
//                   onChange={e => setName(e.target.value)}
//                   required
//                 />
//               </div>
//             )}

//             <div className="input-group">
//               <img src={assets.email_icon} alt="" />
//               <input
//                 type="email"
//                 placeholder="Email ID"
//                 value={email}
//                 onChange={e => setEmail(e.target.value)}
//                 required
//               />
//             </div>

//             <div className="input-group">
//               <img src={assets.lock_icon} alt="" />
//               <input
//                 type="password"
//                 placeholder="Password"
//                 value={password}
//                 onChange={e => setPassword(e.target.value)}
//                 required
//               />
//             </div>
//           </>
//         )}

//         {state === "Login" && (
//           <p className="text-center text-blue">Forgot Password</p>
//         )}

//         <button type="submit">
//           {state === 'Login' ? 'Login' : isTextDataSubmitted ? 'Create Account' : 'Next'}
//         </button>

//         {state === 'Login' ? (
//           <p className="text-center">
//             Don't have an account? <span className="text-blue" onClick={() => setState("Sign Up")}>Sign up</span>
//           </p>
//         ) : (
//           <p className="text-center">
//             Already have an account? <span onClick={() => setState("Login")}>Login</span>
//           </p>
//         )}

//         <img
//           onClick={() => setShowRecruiterLogin(false)}
//           className="close-icon"
//           src={assets.cross_icon}
//           alt="Close"
//         />
//       </form>
//     </div>
//   );
// };

// export default RecruiterLogin;




// import React, { useContext, useEffect, useState } from "react";
// import { assets } from "../assets/assets";
// import { AppContext } from "../context/AppContext";

// const RecruiterLogin = () => {
//   const [state, setState] = useState("Login");
//   const [name, setName] = useState("");
//   const [password, setPassword] = useState("");
//   const [email, setEmail] = useState("");
//   const [image, setImage] = useState(null);
//   const [isTextDataSubmitted, setIsTextDataSubmitted] = useState(false);
//   const { setShowRecruiterLogin } = useContext(AppContext);

//   const onSubmitHandler = async (e) => {
//     e.preventDefault();
//     if (state === "Sign Up" && !isTextDataSubmitted) {
//       setIsTextDataSubmitted(true);
//     }
//   };

//   useEffect(() => {
//     document.body.style.overflow = "hidden";
//     return () => {
//       document.body.style.overflow = "unset";
//     };
//   }, []);

//   return (
//     <div>
//       <form onSubmit={onSubmitHandler}>
//         <h1>Recruiter {state}</h1>
//         <p>Welcome back! Please sign in to continue</p>

//         {state === "Sign Up" && isTextDataSubmitted ? (
//           <div>
//             <label htmlFor="image">
//               <img
//                 src={image ? URL.createObjectURL(image) : assets.upload_area}
//                 alt="Upload Logo"
//               />
//               <input
//                 onChange={(e) => setImage(e.target.files[0])}
//                 type="file"
//                 id="image"
//                 hidden
//               />
//             </label>
//             <p>Upload Company <br /> Logo</p>
//           </div>
//         ) : (
//           <>
//             {state !== "Login" && (
//               <div>
//                 <img src={assets.person_icon} alt="Person" />
//                 <input
//                   type="text"
//                   placeholder="Company Name"
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                   required
//                 />
//               </div>
//             )}

//             <div>
//               <img src={assets.email_icon} alt="Email" />
//               <input
//                 type="email"
//                 placeholder="Email ID"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />
//             </div>

//             <div>
//               <img src={assets.lock_icon} alt="Lock" />
//               <input
//                 type="password"
//                 placeholder="Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//               />
//             </div>
//           </>
//         )}

//         {state === "Login" && <p>Forgot Password</p>}

//         <button type="submit">
//           {state === "Login"
//             ? "Login"
//             : isTextDataSubmitted
//             ? "Create Account"
//             : "Next"}
//         </button>

//         {state === "Login" ? (
//           <p>
//             Don't have an account?{" "}
//             <span onClick={() => setState("Sign Up")}>Sign Up</span>
//           </p>
//         ) : (
//           <p>
//             Already have an account?{" "}
//             <span onClick={() => setState("Login")}>Login</span>
//           </p>
//         )}

//         <img
//           onClick={() => setShowRecruiterLogin(false)}
//           src={assets.cross_icon}
//           alt="Close"
//         />
//       </form>
//     </div>
//   );
// };

// export default RecruiterLogin;



import React, { useContext, useEffect, useState } from 'react';
import { assets } from '../assets/assets';
import { AppContext } from '../context/AppContext';
import './RecruiterLogin.css';

const RecruiterLogin = () => {
  const [state, setState] = useState('Login');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [image, setImage] = useState(null);
  const [isTextDataSubmitted, setIsTextDataSubmitted] = useState(false);
  const { setShowRecruiterLogin } = useContext(AppContext);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (state === "Sign Up" && !isTextDataSubmitted) {
      setIsTextDataSubmitted(true);
    }
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="login-overlay">
      <form onSubmit={onSubmitHandler} className="login-form">
        <h1>Recruiter {state}</h1>
        <p>Welcome back! Please sign in to continue</p>

        {state === "Sign Up" && isTextDataSubmitted ? (
          <div className="upload-section">
            <label htmlFor="image">
              <img
                src={image ? URL.createObjectURL(image) : assets.upload_area}
                alt="Upload Logo"
              />
              <input
                type="file"
                id="image"
                hidden
                onChange={(e) => setImage(e.target.files[0])}
              />
            </label>
            <p>Upload Company <br /> Logo</p>
          </div>
        ) : (
          <>
            {state !== 'Login' && (
              <div className="input-group">
                <img src={assets.person_icon} alt="Person" />
                <input
                  type="text"
                  placeholder="Company Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
            )}

            <div className="input-group">
              <img src={assets.email_icon} alt="Email" />
              <input
                type="email"
                placeholder="Email ID"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="input-group">
              <img src={assets.lock_icon} alt="Lock" />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </>
        )}

        {state === "Login" && <p className="forgot-password">Forgot Password</p>}

        <button type="submit">
          {state === 'Login'
            ? 'Login'
            : isTextDataSubmitted
            ? 'Create Account'
            : 'Next'}
        </button>

        {state === 'Login' ? (
          <p className="switch-text">
            Don't have an account?{" "}
            <span onClick={() => setState("Sign Up")}>Sign up</span>
          </p>
        ) : (
          <p className="switch-text">
            Already have an account?{" "}
            <span onClick={() => setState("Login")}>Login</span>
          </p>
        )}

        <img
          onClick={() => setShowRecruiterLogin(false)}
          src={assets.cross_icon}
          alt="Close"
          className="close-icon"
        />
      </form>
    </div>
  );
};

export default RecruiterLogin;
