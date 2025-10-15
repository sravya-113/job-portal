// import React from 'react'
// const AppDownload=()=>{
//     return (
//         <div className='conatiner px-4 2xl:px-20 mx-auto my-20'>
//             <div className='relative bg-gradient-t--r from-violet-50 to-purple-50 sm:p-24 lg:p-32 rounded-lg'>
//                 <div>
//                     <h1 className='text-2xl sm:text-4xl font-bold mb-8 max-w-md'>Downlaod Mobile App For Better Experience</h1>
//                     <div className='flex gap-4'>
//                         <a href="#" className='inline-block'>
//                             <img className='h-12' src={assets.play_store} alt=""/>
//                         </a>
//                         <a href="#" className='inline-block'>
//                             <img  className='h-12' src={asses.app_store} alt=""/>
//                         </a>
//                     </div>
//                 </div>
//                 <img className='absolute -80 right-0 bottom-0 mr-32 max-lg:hidden' src={assets.app_main_img} alt=""/>
//             </div>
//         </div>
//     )
// }
// export default AppDownload


import React from 'react';
import { assets } from '../assets/assets';
import './AppDownload.css';

const AppDownload = () => {
  return (
    <div className="app-download-container">
      <div className="app-download-card">
        <div>
          <h1 className="app-download-heading">
            Download Mobile App For Better Experience
          </h1>
          <div className="app-download-links">
            <a href="#" className="inline-block">
              <img src={assets.play_store} alt="Play Store" />
            </a>
            <a href="#" className="inline-block">
              <img src={assets.app_store} alt="App Store" />
            </a>
          </div>
        </div>
        <img
          className="app-download-image"
          src={assets.app_main_img}
          alt="App Main"
        />
      </div>
    </div>
  );
};

export default AppDownload;
