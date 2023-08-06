import React from 'react'
import Nav from '../../Home/Nav'
import { Sidebar } from './Content'

function Dashboard() {
  return (
    <div>  <div className="fixed top-0 z-10 bg-gray-50 w-full"><Nav/></div>
    <div className="pt-20 px-10">
<Sidebar/>
      
    </div>
    </div>
  )
}

export default Dashboard