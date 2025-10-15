// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import { BrowserRouter } from 'react-router-dom'

// createRoot(document.getElementById('root')).render(
//   <BrowserRouter>
//     <App />
// </BrowserRouter>,
// )


// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import "./index.css";
// import App from "./App.jsx";
// import { BrowserRouter } from "react-router-dom";

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </StrictMode>
// );



// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import './index.css';
// import App from "./App.jsx";
// import { BrowserRouter } from "react-router-dom";
// import { AppContextProvider } from "./context/AppContext.jsx";
// import {ClerkProvider} from '@clerk/clerk-react';
// // Import your Publishable Key
// const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

// if (!PUBLISHABLE_KEY) {
//   throw new Error('Missing Publishable Key')
// }


// createRoot(document.getElementById("root")).render(
//   <ClerkProvider publishableKey={PUBLISHABLE_KEY} >


//   <StrictMode>
//     <BrowserRouter>
//     <AppContextProvider><App/></AppContextProvider>
     
//     </BrowserRouter>
//   </StrictMode>  </ClerkProvider>
// );



import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { AppContextProvider } from "./context/AppContext.jsx";
import { ClerkProvider } from "@clerk/clerk-react";

// Your Clerk publishable key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <BrowserRouter>
        <AppContextProvider>
          <App />
        </AppContextProvider>
      </BrowserRouter>
    </ClerkProvider>
  </StrictMode>
);
