// import React from 'react'
// const Home=()=>{
//     return (
//         <div>Home</div>
//     )
// }
// export default Home


// import React from "react";

// const Home = () => {
//   return (<div>
//     <Navbar/>
//   </div>
//   )
// }

// export default Home;

import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero'; // ✅ Import Navba
import JobListing from '../components/JobListing';
import AppDownload from '../components/AppDownload';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <JobListing/>
      <AppDownload/>
      <Footer/>
    </div>
  );
};

export default Home;

