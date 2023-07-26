import React from 'react'
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Navbar from './Components/Home/Navbar'
import Hero from './Components/Home/Hero'
import Regester from './Components/auth/Regester';
import Login from './Components/auth/Login';

import JobPage from './Components/Pages/Jobsearch/jobnotification';
import ProviderPage from './Components/Pages/ProviderPage';
import UserAuth from './Components/auth/UserAuth';
import Regester2 from './Components/auth/Regester2';
import Hero2 from './Components/Home/Hero2'
import Popup from './Components/Home/Popup'
import Nav from './Components/Home/Nav';

const router = createBrowserRouter([
  {
    path: "/",
    element:<>
    <Nav/>
  {/* <Navbar/> */}
  <Popup/>
    <Hero/>
    <Hero2/>
    </> ,
    // children: [
    //   {
    //     path: "team",
    //     element: <Team />,
    //     loader: teamLoader,
    //   },
    // ],
  },
  {
    path: "/signup",
    element:<><Regester/></>
   } ,
   {
    path: "/signup2",
    element:<><Regester2/></>
   } ,
   {
    path: "/login",
    element:<><Login/></>
   } ,
   {
    path: "/about",
    element:<>About us</>
   } ,
   {
    path: "/jobs",
    element:<><JobPage/></>
   } ,
   {
    path: "/hire",
    element:<><ProviderPage/></>
   } ,
   {
    path: "/auth",
    element:<><UserAuth/></>
   }
]);

function App() {
  return (
    <main>
      <RouterProvider router={router}>
  </RouterProvider>
 </main>
  )
}

export default App
