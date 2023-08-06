import React from 'react'
import { useAuth } from '../../context/auth';
import Searchbar from './searchbar';

import Navbar from '../../Home/Nav'
import JobList from './JobList';
import LoginPage from '../../auth/LoginPage';
export default function Jobnotification() {
  const [auth] = useAuth();
  if(!auth?.user) return <LoginPage/>
  
  return (
    <div className='h-screen overflow-y-auto scroll  scrollbar-hide'>
      <div class="fixed top-0 z-10 bg-gray-50 w-full">
   <Navbar/>
      
     <Searchbar/><JobList/>
</div>
    
     

    </div>
  )
}