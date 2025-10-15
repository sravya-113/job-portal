// import React from 'react'
// import { assets } from '../assets/assets'
// const Footer=()=>{
//     return(
//         <div className='container px-4 2xl:px-20 mx-auto flex items-center justify-between gap-4 py-3 mt-220'>
// <img  width={160} src={assets.logo} alt=""/>
// <p className='flex-1 border-1 border-gray-400 pl-4 text-sm text-gray-500 max-sm:hidden'>Copyright @SravyaVaranasi2005.com | All right reserved</p>
// <div className='flex gap-2.5'>
//     <img width={38} src={assets.facebook_icon} alt="" />
//     <img  width={38} src={assets.twitter_icon} alt="" />
//     <img  width={38} src={assets.instagram_icon} alt="" />
// </div>
//         </div>
//     )
// }
// export default Footer

import React from 'react';
import { assets } from '../assets/assets';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer-container">
      <img className="footer-logo" src={assets.logo} alt="Logo" />
      <p className="footer-text">
        Copyright @SravyaVaranasi2005.com | All rights reserved
      </p>
      <div className="footer-icons">
        <img src={assets.facebook_icon} alt="Facebook" />
        <img src={assets.twitter_icon} alt="Twitter" />
        <img src={assets.instagram_icon} alt="Instagram" />
      </div>
    </div>
  );
};

export default Footer;
