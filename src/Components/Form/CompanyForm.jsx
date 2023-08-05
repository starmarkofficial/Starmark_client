import React from 'react'
import {useState} from 'react'
import { useNavigate } from "react-router-dom";
//axios
import axios from 'axios';
const baseUrl ="https://starmark-serverside.onrender.com"

//global hooks
import { useAuth } from '../context/auth';

import { Button } from "@material-tailwind/react";
import Nav from '../Home/Nav';


function CompanyForm() {
   
	const navigate = useNavigate();
	const [auth, setAuth] = useAuth()

const [cname, setcname] = useState("")
const [cmail, setcmail] = useState("")
const [address, setaddress] = useState("")
const [year, setyear] = useState("")
const [GST, setGST] = useState("")
const [LICENCE, setLICENCE] = useState("")
const [website, setwebsite] = useState("")
const [type, settype] = useState("")
const [desc, setdesc] = useState("")
const [logo, setlogo] = useState("")


const companyCreate = async(e)=>{
		
    e.preventDefault();
    try {
      const profileData = new FormData();
      profileData.append("user_phone",auth?.user?.name);
      profileData.append("email", auth?.user?.email);
      profileData.append("name", cname);
      profileData.append("company_email",cmail);
      profileData.append("year", year);
      profileData.append("Locatio",address);
      profileData.append("Gst", GST);
      profileData.append("licence", LICENCE);
      profileData.append("website", website);
      profileData.append("desc", desc);
      profileData.append("company_type", type);
      profileData.append("company_logo", logo);
     
      const {data} = await axios.post(`${baseUrl}/create-company`,profileData)
      if (data?.success) {
        alert("created")
        navigate("/hire")
      } else {
        alert("error")
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="">
         <div className="fixed top-0 z-10 bg-gray-50 w-full"><Nav/></div>
   <section class=" py-16 bg-gray-50">
<div class="w-full lg:w-8/12 px-4 mx-auto mt-6">
  <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-100 border-0">
    <div class="rounded-t bg-indigo-200 mb-0 px-6 py-6">
      <div class="text-center flex justify-between">
        <h6 class="text-gray-700 text-xl font-bold">
          My account
        </h6>
        <Button color="blue" onClick={companyCreate}>Submit</Button>
      </div>
    </div>
    <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
      <form>
        <h6 class="text-gray-400 text-sm mt-3 mb-6 font-bold uppercase">
          User Information
        </h6>
        <div class="flex flex-wrap">
          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label class="block uppercase text-gray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                Username
              </label>
              <input type="text" class="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" value={auth?.user?.name}/>
            </div>
          </div>
          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label class="block uppercase text-gray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                Email address
              </label>
              <input type="email" class="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" value={auth?.user?.email}/>
            </div>
          </div>
          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label class="block uppercase text-gray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                Company Name
              </label>
              <input type="text" class="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" 
              value={cname}  onChange={(e) => setcname(e.target.value)}/>
            </div>
          </div>
          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label class="block uppercase text-gray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                Company Email
              </label>
              <input type="text" class="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" 
              value={cmail}  onChange={(e) => setcmail(e.target.value)}/>
            </div>
          </div>
          <div className="">company logo
          <input type="file" /></div>
        </div>

        <hr class="mt-6 border-b-1 border-gray-300"/>

        <h6 class="text-gray-400 text-sm mt-3 mb-6 font-bold uppercase">
          Contact Information
        </h6>
        <div class="flex flex-wrap">
          <div class="w-full lg:w-12/12 px-4">
            <div class="relative w-full mb-3">
              <label class="block uppercase text-gray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                Address
              </label>
              <input type="text" class="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" 
              value={address}  onChange={(e) => setaddress(e.target.value)}/>
            </div>
          </div>
          <div class="w-full lg:w-4/12 px-4">
            <div class="relative w-full mb-3">
              <label class="block uppercase text-gray-600 text-xs font-bold mb-2" htmlfor="grid-password">
               Year
              </label>
              <input type="email" class="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" 
              value={year}  onChange={(e) => setyear(e.target.value)}/>
            </div>
          </div>
          <div class="w-full lg:w-4/12 px-4">
            <div class="relative w-full mb-3">
              <label class="block uppercase text-gray-600 text-xs font-bold mb-2" htmlfor="grid-password">
              Gst
              </label>
              <input type="text" class="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
               value={GST}  onChange={(e) => setGST(e.target.value)}/>
            </div>
          </div>
          <div class="w-full lg:w-4/12 px-4">
            <div class="relative w-full mb-3">
              <label class="block uppercase text-gray-600 text-xs font-bold mb-2" htmlfor="grid-password">
              licence
              </label>
              <input type="text" class="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" 
              value={LICENCE}  onChange={(e) => setLICENCE(e.target.value)}/>
            </div>
          </div>

          
        </div>
        <div className="flex gap-2">
        <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label class="block uppercase text-gray-600 text-xs font-bold mb-2" htmlfor="grid-password">
              Website
              </label>
              <input type="url" class="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" 
              value={website}  onChange={(e) => setwebsite(e.target.value)}/>
            </div>
          </div>
          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label class="block uppercase text-gray-600 text-xs font-bold mb-2" htmlfor="grid-password">
              Compant Type
              </label>
              <input type="url" class="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" 
              value={type}  onChange={(e) => settype(e.target.value)}/>
            </div>
          </div>
          </div>
        <hr class="mt-6 border-b-1 border-gray-300"/>

        <h6 class="text-gray-400 text-sm mt-3 mb-6 font-bold uppercase">
          About Me
        </h6>
        <div class="flex flex-wrap">
          <div class="w-full lg:w-12/12 px-4">
            <div class="relative w-full mb-3">
              <label class="block uppercase text-gray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                About me
              </label>
              <textarea value={desc}  onChange={(e) => setdesc(e.target.value)} type="text" class="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" rows="4"> A beautiful UI Kit and Admin for JavaScript &amp; Tailwind CSS. It is Freeand Open Source.</textarea>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>

</div>
</section></div>
  )
}

export default CompanyForm