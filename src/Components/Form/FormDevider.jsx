import React from 'react'
import {useState,useEffect} from 'react'
import { useNavigate } from "react-router-dom";
import MenuItem from '@mui/material/MenuItem';
//axios
import axios from 'axios';
const baseUrl ="https://starmark-serverside.onrender.com"

//global hooks
import { useAuth } from '../context/auth';


//Link
import { Link } from "react-router-dom";
function FormDevider() {
    const [auth, setAuth] = useAuth()
    const [profile, setprofile] = useState("")
    const getUser = async()=>{
        
        try {
            const {data} = await axios.get(`${baseUrl}/get-Profile/${auth?.user?.email}`)
            console.log(data);
            setprofile(data.Profile)
        } catch (error) {
          console.log(error);  
        }
    }
	useEffect(() => {
        getUser()
    
    }, [])
  return (
    <div>
      	{(auth?.user?.role == 1)?<Link to="/companyform">Dashboard</Link>:<>{
            (!profile)?<>
            <Link to="/userForm">Add Profile</Link>
            </>:<>
            <Link to="/updateprofile">Update Profile</Link>
            </>
        }</>
}
        
    </div>
  )
}

export default FormDevider