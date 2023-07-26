import React from 'react'
import Nav from '../../Home/Nav'
import Searchbar from './searchbar';
import JobList from './JobList';
export default function jobnotification() {
  return (
    <div>
      <Nav/>
     <Searchbar/>
     <JobList />
    </div>
  )
}
