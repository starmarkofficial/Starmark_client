import React from 'react'
import { Box,Grid,Typography,Button } from '@mui/material'
export default function JobCard({companyName, role, functionalArea, stateCity, employmentType,admin}){
  return(
    <>
      <div className="job-card mx-auto justify-center mt-2 mb-10 py-4 px-2 sm:py-10 sm:px-6 sm:flex justify-between md:h-[380px]">
        <div className=" left-container details h-full flex flex-col w-full mx-2">
          <div className="details">
            <div className="position text-3xl p-0">
              {admin}
            </div>
            <div className="company-name text-[#6C757D] font-semibold text-xl">
              {companyName}
            </div>
            <div className="role text-[#343A40] font-medium">
              Role: {role}
            </div>
            <div className="functional-area text-[#343A40]">
              Fuctional Area: {functionalArea}
            </div>
            <div className="state-city text-[#343A40]">
              State/City: {stateCity}
            </div>
            <div className="employment-type text-[#343A40]">
              Employment Type: {employmentType}
            </div>
            <div className="skills text-[#343A40] mb-4">
              Skills: 
              {/*To be given from us*/}
            </div>
          </div>
          <div className="block-details mt-auto sm:mx-5 my-2">
            <div className="hiring box text-[#35C612] border-[#35C612] border-[0.2em]">
              Hiring
            </div>
            <div className="box opening text-[#fff] bg-[#6C757D]">
              1 Opening
            </div>
          </div>
        </div>

        <div className="right-container h-full flex sm:flex-col  justify-between sm:w-3/12 p-4 sm:pr-10">

          <div className="date-container flex justify-center items-center sm:mt-10 ">
            <div className="svg">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="Frame">
              <path id="Vector" d="M15.8333 15.8333H4.16667V6.66668H15.8333M13.3333 0.833344V2.50001H6.66667V0.833344H5V2.50001H4.16667C3.24167 2.50001 2.5 3.24168 2.5 4.16668V15.8333C2.5 16.2754 2.67559 16.6993 2.98816 17.0119C3.30072 17.3244 3.72464 17.5 4.16667 17.5H15.8333C16.2754 17.5 16.6993 17.3244 17.0118 17.0119C17.3244 16.6993 17.5 16.2754 17.5 15.8333V4.16668C17.5 3.24168 16.75 2.50001 15.8333 2.50001H15V0.833344M14.1667 10H10V14.1667H14.1667V10Z" fill="black"/>
              </g>
              </svg>
            </div>
            <div className="date">
              July 20, 2023
            </div>
          </div>
          <div className=" view-job ">
            <div className="btn-control flex justify-center my-2 text-[#35C612] border-[#35C612] border-[0.2em] hover:bg-[#35C612] hover:text-[#ffffff]">Accept</div>
            <div className="btn-control flex justify-center my-2 text-[#fb1616] border-[#fb1616] border-[0.2em] hover:bg-[#fb1616] hover:text-[#ffffff]">Reject</div>
            <div className="btn-control flex justify-center align-center items-center">
              View Job 
              <div className="svg">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="Frame">
                <path id="Vector" d="M13.95 17V13H5.03L5 10.99H13.95V7L18.95 12L13.95 17Z" fill="black"/>
                </g>
                </svg>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}