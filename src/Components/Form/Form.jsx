import React, { useEffect } from 'react'
import {useState} from 'react'
import { useNavigate } from "react-router-dom";

//global hooks
import { useAuth } from '../context/auth';
//axios
import axios from 'axios';
const baseUrl ="https://starmark-serverside.onrender.com"

function Form() {
    const [auth, setAuth] = useAuth()
 

const navigate = useNavigate();

const [_id, set_id] = useState("")

  
   const getUser = ()=>{
        

        axios
        .get(`${baseUrl}/get-Profile/user1`)
        .then(({ data }) => {
        
            console.log(data)
        })
   
}
useEffect(() => {
    getUser()

}, [])
  return (
    <div>Form</div>
  )
}

export default Form