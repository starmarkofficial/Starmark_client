import React ,{useEffect} from 'react'
import Modal from '@mui/material/Modal';

import Nav from '../Home/Nav'
import Popup from '../Home/Popup'
import Hero from '../Home/Hero'
import Hero2 from '../Home/Hero2'
import UserForm from '../Form/UserForm';
import HomeModal from '../utils/HomeModal'



function Home() {
const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
 
  useEffect(() => {
  
    setOpen(true);
    
 
  }, [])
  
  return (
   <>   <Modal
   open={open}
   onClose={handleClose}
   aria-labelledby="modal-modal-title"
   aria-describedby="modal-modal-description"
 >
  <HomeModal handleClose={handleClose}/>
 </Modal>
  <div className="fixed top-0 z-10 bg-gray-50 w-full"><Nav/></div>
   <div className="fixed top-20 z-20 bg-gray-50 w-full"> <Popup/></div>
<div className="mt-20"><Hero/>
   <Hero2/></div></>
  )
}

export default Home