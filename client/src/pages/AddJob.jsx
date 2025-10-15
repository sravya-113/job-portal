// import React, { useRef } from 'react'
// import { useState } from 'react';
// import Quill from 'quill';
// import { JobCategories } from '../assets/assets';
// const AddJob=()=>{
//     const [title,setTitle]=useState('');
//     const [location,setLocation]=useState('Banglore');
//     const [category,setCategory]=useState('programming');
//     const [level,setLevel]=useState('Begineer  level');
//     const [salary,setSalary]=useState(0);
//     const editorRef=useRef(null);
//     const quillRef=useRef(null);
//     useEffect(()=>{
// //initiate quill only once
// if(!quillRef.current && editorRef.current){
//     quillRef.current=new Quill(editorRef.current,{
//         theme:'snow',
//     })
// }
//     },[])
// ;
//     return(
//        <form className='container p-4  flex flex-col w-full items-start-gap-3'>
//         <div className='mb-2'>
//             <p>Job Title</p>
//             <input type="text" placeholder="Type here" onChange={e=>setTitle(e.target.value)} value={title} required className='w-full max-w-lg px-3 py-2  border-2 border-gray-300 rounded'/>
//         </div >
//         <div className='w-full max-w-lg'>
//             <p className='my-2'>Job Description</p>
//             <div ref={editorRef}>

//             </div>
//         </div>
//         <div className='flex flex-col sm:flex-row gap-2 w-full sm:gap-8'>
//             <div>
//                 <p classNmae='mb-2'>Job Category</p>
//                 <select className='w-full px-3 py-2 border-2 border-gray-300 rounded' onChange={e=>setCategory(e.target.value)}>
//                     {JobCategories.map((category,index)=>(
//                         <option key={index} value={category}>{category}</option>
//                     )

//                     )}
//                 </select>
//             </div>

//                         <div>
//                 <p className='mb-2'>Job Location</p>
//                 <select className='w-full px-3 py-2 border-2 border-gray-300 rounded' onChange={e=>setLocation(e.target.value)}>
//                     {JobLocations.map((location,index)=>(
//                         <option key={index} value={location}>{location}</option>
//                     )

//                     )}
//                 </select>
//             </div>

//                         <div>
//                 <p className='mb-2'>Job Level</p>
//                 <select className='w-full px-3 py-2 border-2 border-gray-300 rounded' onChange={e=>setLevel(e.target.value)}>
// <option value="Begineer Level">Begineer Level</option>
// <option value="Intermediate Level">Intermediate Level</option>
// <option value="senior Level">senior Level</option>
//                 </select>
//             </div>
//             <div>
// <p className='mb-2'>Job Salary</p>
// <input min={0} className='w-full px-3 py-2 border-2 border-gray-300 rounded sm:w-[120px] ' onChange={e=>setSalary(e.currentTarget.value)} type="number" placeholder='2500'/>
//             </div>
//             <button className='w-28 py-3 mt-4 bg-black text-white rounded'>ADD</button>
//         </div>
//        </form>
//     )
// }
// export default AddJob



import React, { useRef, useEffect, useState } from "react";
import Quill from "quill";
import { JobCategories, JobLocations } from "../assets/assets";

const AddJob = () => {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("Bangalore");
  const [category, setCategory] = useState("programming");
  const [level, setLevel] = useState("Beginner Level");
  const [salary, setSalary] = useState(0);

  const editorRef = useRef(null);
  const quillRef = useRef(null);

  useEffect(() => {
    // Initiate Quill editor only once
    if (!quillRef.current && editorRef.current) {
      quillRef.current = new Quill(editorRef.current, {
        theme: "snow",
      });
    }
  }, []);

  return (
    <form className="addjob-form">
      <div className="form-group">
        <label>Job Title</label>
        <input
          type="text"
          placeholder="Type here"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label>Job Description</label>
        <div ref={editorRef} className="quill-editor"></div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Job Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {JobCategories.map((cat, index) => (
              <option key={index} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Job Location</label>
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          >
            {JobLocations.map((loc, index) => (
              <option key={index} value={loc}>
                {loc}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Job Level</label>
          <select value={level} onChange={(e) => setLevel(e.target.value)}>
            <option value="Beginner Level">Beginner Level</option>
            <option value="Intermediate Level">Intermediate Level</option>
            <option value="Senior Level">Senior Level</option>
          </select>
        </div>

        <div className="form-group">
          <label>Job Salary</label>
          <input
            type="number"
            min={0}
            value={salary}
            onChange={(e) => setSalary(e.currentTarget.value)}
            placeholder="2500"
          />
        </div>
      </div>

      <button type="submit" className="submit-btn">
        ADD
      </button>
    </form>
  );
};

export default AddJob;
