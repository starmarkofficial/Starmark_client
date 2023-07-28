import React from 'react'
import { useAuth } from '../../context/auth';
import Searchbar from './searchbar';
import Login from '../../auth/Login';
import Navbar from '../../Home/Nav'
import JobList from './JobList';
export default function Jobnotification() {
  const [auth] = useAuth();
  if(!auth?.user) return <Login/>
  
  return (
    <div className='h-screen overflow-y-auto scroll  scrollbar-hide'>
      <div class="fixed top-0 z-10 bg-gray-50 w-full">
   <Navbar/>
      
     <Searchbar/><JobList/>
</div>
    
     

    </div>
  )
}