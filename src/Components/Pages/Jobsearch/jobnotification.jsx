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
    <div>
      <Navbar/>
     <Searchbar/>
     <JobList/>

    </div>
  )
}