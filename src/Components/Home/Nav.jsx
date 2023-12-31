import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import logo from "../Home/assests/logo.png"
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
// Icons
import { HomeIcon } from "@heroicons/react/24/outline";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { BriefcaseIcon } from "@heroicons/react/24/outline";
import { BuildingOfficeIcon } from "@heroicons/react/24/outline";
import { PhoneIcon } from "@heroicons/react/24/outline";
import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/outline";
import { ArrowLeftOnRectangleIcon } from "@heroicons/react/24/outline";
import { UserPlusIcon } from "@heroicons/react/24/outline";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

//sidebar 
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';

import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';


//Link
import { Link } from "react-router-dom";

//global hooks
import { useAuth } from '../context/auth';
import FormDevider from '../Form/FormDevider';
import { useState } from 'react';
import Login from '../auth/Login';



function Nav() {

    const [auth, setAuth] = useAuth()
  
  
	//web dropsown
	const [anchorE2, setAnchorE2] = React.useState(null);
  const open2 = Boolean(anchorE2);
  const handleClick2 = (event) => {
    setAnchorE2(event.currentTarget);
  };
  const handleClose2 = () => {
    setAnchorE2(null);
  };

	//mobile dropdown
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

//logout function
const logout =()=>{
	setAuth({
	...auth,
	user: null,
	token: "",
  });
  localStorage.removeItem("auth");
 

}


//sidebar

const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  


  return (
    <div>


<nav className="bg-gray-100 shadow md:shadow-lg  ">

  <div className="max-w-8xl mx-auto px-4 ">
    <div className="flex justify-between items-center">

      <div className="flex space-x-4 ">
    
        <div>
          <a href="#" className="flex items-center py-3  text-gray-700 hover:text-blue-500">
            <img className='h-10 w-32' src={logo} alt="" />
            
          </a>
        </div>

    
        
      </div>
<div className="hidden md:flex items-center space-x-1">
          <Link to="/" className="py-3 px-3 text-lg text-gray-600 hover:text-blue-500 font-sans font-bold">Home</Link>
         
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-4 h-4 current-fill" viewBox="0 0 24 24">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
				</svg>
		
          <Link to="/about" className="py-3 px-3 text-lg text-gray-600 hover:text-blue-500 font-sans font-bold">About Us</Link>
        
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-4 h-4 current-fill" viewBox="0 0 24 24">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
				</svg>
			
          {
	(auth?.user?.role == 1)?<><Link className="py-3 px-3 text-lg text-gray-600 hover:text-blue-500 font-sans font-bold" 
	to="/hire">Hire</Link></>:<><Link className="py-3 px-3 text-lg text-gray-600 hover:text-blue-500 font-sans font-bold" 
			to="/jobs">Jobs</Link></>
}

<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-4 h-4 current-fill" viewBox="0 0 24 24">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
				</svg>
                <Link to="/" className="py-3 px-3 text-lg text-gray-600 hover:text-blue-500 font-sans font-bold">Contact</Link> 
        </div>
        
 











      <div className="hidden md:flex items-center space-x-1">
      {
				(!auth.user)?(<div className="flex gap-2">
				{/* <Link to="/login" className='font-sans hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold  rounded-xl transition duration-200 '>
					Log In</Link> */}
		<Login/>
				<Link to="/auth" className="hidden lg:inline-block " >
                <button className="group relative h-8 w-24 overflow-hidden rounded-lg bg-blue-400 text-lg shadow">
    <div className="absolute inset-0 w-0 bg-white text-white transition-all duration-[250ms] ease-out group-hover:w-full"></div>
    <span className="relative text-white group-hover:text-blue-400 font-sans">Sign up!</span>
  </button></Link>
					</div>):(<> <Menu
        id="basic-menu"
		anchorEl={anchorE2}
        open={open2}
        onClose={handleClose2}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
      
    <MenuItem onClick={handleClose}>  <FormDevider/></MenuItem> 
      <Link to="/profile"><MenuItem onClick={handleClose}>My account</MenuItem></Link> 
        <MenuItem onClick={logout} >Logout</MenuItem>
      </Menu>   <div aria-controls={open2 ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open2 ? 'true' : undefined}
        onClick={handleClick2} className='pointer-cursor hidden lg:inline-block py-2 px-6 cursor-pointer
         bg-blue-200 font-sans  shadow-md hover:md:shadow-xl hover:shawdow-gray-200
          text-sm text-blue-500 font-medeum font-bold rounded-lg transition duration-200 '>
						<AccountCircleIcon className='h-6 w-6 text-gray-500'/>&nbsp;{auth?.user?.name}</div>
	 </>)}
   
      </div>
      


      <div className="md:hidden flex items-center ">
        <button className="mobile-menu-button">
        {[ 'right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}><svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg></Button>
          <Drawer
      
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
             <List className='mt-60'>
                <div className="pl-5 text-blue-700">
                   <Typography  variant="h4" component="h3">
 <ArrowForwardIosIcon/> Menu 
</Typography>&nbsp;
                </div>
            
             <ListItem  disablePadding className='pr-16 pl-3'>
            <ListItemButton>
              <ListItemIcon>
              <HomeIcon className="h-8 w-8  text-gray-800" />
              </ListItemIcon>
              <ListItemText className='font-large'>Home</ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem  disablePadding className='pr-16 pl-3'>
            <ListItemButton>
              <ListItemIcon>
              <InformationCircleIcon className="h-8 w-8 text-gray-800 " />
              </ListItemIcon>
              <ListItemText className='font-large'>About Us</ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem  disablePadding className='pr-16 pl-3'>
            <ListItemButton>
              <ListItemIcon>
              <BuildingOfficeIcon className="h-8 w-8  text-gray-800" />
              </ListItemIcon>
              <ListItemText className='font-large'>Jobs</ListItemText>
            </ListItemButton>
          </ListItem>
         

          <ListItem  disablePadding className='pr-16 pl-3'>
            <ListItemButton>
              <ListItemIcon>
              <PhoneIcon className="h-7 w-7  text-gray-800 " />
              </ListItemIcon>
              <ListItemText className='font-large'>Contact</ListItemText>
            </ListItemButton>
          </ListItem>
            {
(!auth.user)?(<>
 <ListItem  disablePadding className='pr-16 pl-3'>
          <Link to="/login">  <ListItemButton>
<ListItemIcon  >
              <ArrowLeftOnRectangleIcon className="h-8 w-8  text-gray-800 " />
              </ListItemIcon>
              <ListItemText className='font-large'>Login</ListItemText></ListItemButton></Link></ListItem >

              <ListItem  disablePadding className='pr-16 pl-3'>
          <Link to="/Regester">  <ListItemButton>
<ListItemIcon  >
              <UserPlusIcon className="h-8 w-8  text-gray-800 " />
              </ListItemIcon>
              <ListItemText className='font-large'>Sign Up</ListItemText></ListItemButton></Link></ListItem >



</>):(

<>
<ListItem  disablePadding className='pr-16 pl-3'>
            <ListItemButton>
<ListItemIcon onClick={logout} >
              <ArrowRightOnRectangleIcon className="h-8 w-8  text-gray-800 " />
              </ListItemIcon>
              <ListItemText className='font-large'>Logout</ListItemText>
              </ListItemButton></ListItem >

 </>)
}
             
         
             </List>
            
          </Drawer>
        </React.Fragment>
      ))}
          
        </button>
      </div>

    </div>
  </div>



</nav>



    </div>
  )
}

export default Nav
