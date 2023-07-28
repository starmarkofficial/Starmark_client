import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
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
import UserForm from './Components/Form/UserForm';
import User from './Components/Profile/User';

const router = createBrowserRouter([
  {
    path: "/",
    element:<>
   
    <div className="fixed top-0 z-10 bg-gray-50 w-full"><Nav/></div>
    <div className="fixed top-20 z-20 bg-gray-50 w-full"> <Popup/></div>
 <div className="mt-20"><Hero/>
    <Hero2/></div>
    
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
    element:<><Nav/>About us</>
   } ,
   {
    path: "/jobs",
    element:<><JobPage/></>
   } ,
   {
    path: "/hire",
    element:<><Nav/><ProviderPage/></>
   } ,
   {
    path: "/auth",
    element:<><UserAuth/></>
   },
   {
    path: "/userForm",
    element:<><Nav/><UserForm/></>
   },
   {
    path: "/profile",
    element:<><Nav/><User/></>
   },
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
