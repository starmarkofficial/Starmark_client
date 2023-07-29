import React from 'react'
import { MapPinIcon } from "@heroicons/react/24/outline";
import { CurrencyRupeeIcon } from "@heroicons/react/24/outline";
import { BriefcaseIcon } from "@heroicons/react/24/outline";
import { BuildingOffice2Icon } from "@heroicons/react/24/outline";
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Ratings from '../../utils/Ratings';
import { ClockIcon } from "@heroicons/react/24/outline";

export default function JobCard({companyName, role, functionalArea, stateCity, employmentType,JobRoll}){
  return(
    <>    <div className='md:w-4/5 bg-indigo-100 shadow-lg  rounded-lg mx-auto justify-center mb-10 ' >
   
      <div className=" job-card   mt-2  py-3 px-2 sm:py-10 sm:px-6 sm:flex justify-between md:h-80">
        
        <div className=" left-container details h-full flex flex-col w-full mx-2">
          <div className="details">
         <div className="flex justify-between">
         <div className="gap-5 flex md:mb-5"><div className="mt-1 md:mt-0"><img className='h-20 w-20 rounded-xl border-gray-200 border-2' src="https://www.naukri.com/hotjobs/images/v3/gebbsmar18.gif" alt="gvd" /></div>
       <div className=" text-2xl md:text-3xl p-0 font-bold ">
              {JobRoll}
              <div className="company-name text-[#6C757D] text-sm md:text-lg
               font-medium  flex md:flex-row flex-col item-center gap-2 md:mt-1 md:mb-3">
              {companyName} <Ratings/>
            </div>
            </div>
            </div>

            <div className="flex gap-1 item-center text-xs md:text-md"><ClockIcon className="h-5 w-5 text-gray-500" /> 5days ago</div>
         </div>
            
            
          
            <div className="functional-area text-[#343A40] flex gap-1">
            <MapPinIcon className="h-5 w-5 text-gray-500" /> Location: {functionalArea}
            </div>
            <div className="state-city text-[#343A40] flex gap-1">
            <BriefcaseIcon  className="h-5 w-5 text-gray-500" /> Experience: null
            </div>
            <div className="state-city text-[#343A40] flex gap-1">
            <BuildingOffice2Icon  className="h-5 w-5 text-gray-500" /> Shift: null
            </div>
            <div className="state-city text-[#343A40] flex gap-1">
            <CurrencyRupeeIcon className="h-5 w-5 text-gray-500" />  Not disclosed
            </div>
            <div className="skills text-[#343A40]  text-sm p-2 z-10 hidden md:inline">
            <Stack direction="row" spacing={1}>
      <Chip label="Process Improvement"></Chip>
      <Chip label="Project Managemen"></Chip>
      <Chip label="FinanceLean"></Chip>
      <Chip label="Six SigmaImprovement"></Chip>
      
    </Stack>
            
            </div>
          </div>
         
        </div>
        
       
        </div>
    
      
      </div>
    </>
  )
}