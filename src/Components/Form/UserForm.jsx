import React from 'react'
import {useState} from 'react'
import { useNavigate } from "react-router-dom";
//axios
import axios from 'axios';
const baseUrl ="https://starmark-serverside.onrender.com"

//global hooks
import { useAuth } from '../context/auth';

function UserForm() {

 

	const navigate = useNavigate();
	const [auth, setAuth] = useAuth()

	// Profile
	const [profile,setProfile]=useState({
		name:"",
		website:"",
		summary:"",
	})

	const inputProfileChange=(e)=>{
		let key=e.target.name;
		let val=e.target.value;
		setProfile({...profile,[key]:val});
	}
	// Profile

	// Personal Info
	const [perInfo, setPerinfo]=useState({
		date:"",
		phone:"",
		email:`${auth?.user?.email}`,
		address:"",
		city:"",
		stateProvince:"",
		postalZip:"",
		cv:"",
		blood:"",
		
	})

	const perInfoOnChange=(e)=>{
		let key=e.target.name;
		let val=e.target.value;
		setPerinfo({...perInfo,[key]:val});
	}
	// Personal Info

	// Photo
	const [photo,setPhoto]=useState("")
	const [categories, setCategories] = useState([]);
	
	const userCreate = async(e)=>{
		
			e.preventDefault();
			try {
			  const profileData = new FormData();
			  profileData.append("name", profile.name);
			  profileData.append("email", auth?.user?.email);
			  profileData.append("Summary", profile.summary);
			  profileData.append("phone", perInfo.phone);
			  profileData.append("photo", photo);
			  profileData.append("Dob", perInfo.date);
			//   profileData.append("Married", perInfo.married);
			  profileData.append("address", perInfo.address);
			  profileData.append("links1", profile.website);
			 
			  const {data} = await axios.post(`${baseUrl}/create-profile`,profileData)
			  if (data?.success) {
			  } else {
				alert("h")
			  }
			} catch (error) {
			  console.log(error);
			}
		  };


const [dat, setdat] = useState("")
const datechange=()=>{
	
	console.log(dat);
}

  return (
    <div><section className="p-6 bg-gray-100 text-gray-900">
	<form novalidate="" action="" className="container flex flex-col mx-auto space-y-12 p-5">
    <fieldset className="grid grid-cols-4 gap-6 p-6  rounded-xl py-10 px-6 outline-none shadow-lg shadow-gray-400 bg-gray-200">
		
			<div className="space-y-2 col-span-full lg:col-span-1 p-5 font-bold">
				<p className="font-bold text-3xl text-blue-700">Profile</p>
				<p className="text-xs text-gray-400">Adipisci fuga autem eum!</p>
			</div>
			<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
			
			<div className="col-span-full w-full sm:col-span-3">
			<label className="btn btn-outline-secondary col-md-12 flex flex-col">
				<div className=""> Upload Profile pic</div>
                 
                  <input
                    type="file"
                    name="photo"
                    accept="image/*"
                    onChange={(e) => setPhoto(e.target.files[0])}
                    hidden
                  />
                </label>
			{photo && (
                  <div className="text-center">
                   <img class="w-20 h-20 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src={URL.createObjectURL(photo)} alt="Bordered avatar"/>
		
                  </div>
                )}
				</div>
			<br/>
				<div className="col-span-full sm:col-span-3">
					<label for="username" className="text-md text-gray-700 font-bold">Name</label>
					<input id="username" name="name" value={profile.name} onChange={inputProfileChange}  type="text" placeholder="Enter full name" className="w-full rounded-lg focus-none outline-none py-3 px-2 outline-none bg-gray-100  border-gray-300 text-gray-900" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label for="website" className="text-md text-gray-700 font-bold">Website</label>
					<input id="website" name="website" value={profile.website} onChange={inputProfileChange} type="url" placeholder="https://" className="w-full rounded-lg focus-none outline-none py-3 px-2 outline-none bg-gray-100  border-gray-300 text-gray-900" />
				</div>
				<div className="col-span-full">
					<label for="bio" className="text-md text-gray-700 font-bold">Summary</label>
					<textarea id="bio" name="summary" value={profile.summary} onChange={inputProfileChange} placeholder="Something about yourself" className="w-full rounded-lg focus-none outline-none py-3 px-2 outline-none bg-gray-100  border-gray-300 text-gray-900"></textarea>
				</div>
				
			</div>
		</fieldset>
        
		<fieldset className="grid grid-cols-4 gap-6 p-6  rounded-xl py-10 px-6 outline-none shadow-lg shadow-gray-400 bg-gray-200">
			<div className="space-y-2 col-span-full lg:col-span-1 p-5">
				<p className="font-bold text-3xl text-blue-700">Personal Inormation</p>
				<p className="text-xs text-gray-400 font-bol">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci fuga autem eum!</p>
			</div>
			<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
				
				
	
				
				
				
			
				<div className="col-span-full sm:col-span-3">
					<label for="email" className="text-md text-gray-700 font-bold">Email</label>
					<input id="email" type="email" name="email" onChange={perInfoOnChange} value={perInfo.email} placeholder="Email" className="w-full rounded-lg focus-none outline-none py-3 px-2 outline-none bg-gray-100  border-gray-300 text-gray-900" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label for="lastname" className="text-md text-gray-700 font-bold">Phone No.</label>
					<input id="lastname" type="tel" name="phone" onChange={perInfoOnChange} value={perInfo.phone}  pattern="[0-9]{5}-[0-9]{5}" placeholder="Enter Phone Number" className="w-full rounded-lg focus-none outline-none py-3 px-2 outline-none bg-gray-100  border-gray-300 text-gray-900" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label for="bloodgroup" className="text-md text-gray-700 font-bold">Blood Group</label>
					<input id="bloodgroup" type="tel" name="blood" onChange={perInfoOnChange} value={perInfo.blood} placeholder="Enter Blood Group" className="w-full rounded-lg focus-none outline-none py-3 px-2 outline-none bg-gray-100  border-gray-300 text-gray-900" />
				</div>
				<div className="col-span-full sm:col-span-3 ">
				<label for="bloodgroup" className="text-md text-gray-700 font-bold">Date of Birth</label>
					<input type="date" name="date" value={perInfo.date} onChange={perInfoOnChange} className='w-full rounded-lg focus-none outline-none py-3 px-2 outline-none bg-gray-100  border-gray-300 text-gray-900'/>
				</div>

				<div className="col-span-full">
					<label for="address" className="text-md text-gray-700 font-bold">Address</label>
					<input id="address" type="text" name="address" onChange={perInfoOnChange} value={perInfo.address} placeholder="Enter Full Address" className="w-full rounded-lg focus-none outline-none py-3 px-2 outline-none bg-gray-100  border-gray-300 text-gray-900" />
				</div>
				<div className="col-span-full">
				<label for="address" className="text-md text-gray-700 font-bold">Upload Resume</label>
				<label
        class="flex justify-center w-full h-32 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
			
        <span class="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
            </svg>
            <span class="font-medium text-gray-600">
			<p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX.1mb)</p>
                <span class="text-blue-600 underline">browse</span>
            </span>
        </span>
        <input  name="cv" value={perInfo.cv} onChange={perInfoOnChange} type="file"  class="hidden"/>
    </label>	</div>
			
				
			</div>
			{/* <div class="flex items-center justify-center w-full">
    <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
        <div class="flex flex-col items-center justify-center pt-5 pb-6">
            <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
            </svg>
            <p class="mb-2 text-md text-gray-700 font-bold text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
            <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
        </div>
        <input id="dropzone-file" name="cv" value={perInfo.cv} onChange={perInfoOnChange} type="file" class="hidden" />
    </label>
</div> */}
		</fieldset>
		
		<button type='submit' onClick={userCreate}>submit</button>
	</form>
</section></div>
  )
}

export default UserForm