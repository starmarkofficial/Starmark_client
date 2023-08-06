import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
  Textarea,
} from "@material-tailwind/react";
import JobPostForm from "../../Form/JobPostForm";



import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from '@mui/icons-material/Navigation';
export function MessageDialog() {
  const [open, setOpen] = React.useState(false);
 
  const handleOpen = () => setOpen(!open);
 
  return (
    <>
      <div onClick={handleOpen}><Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab></div>
      
      <Dialog className="justify-center items-center " open={open} handler={handleOpen}>
        
        <DialogBody divider><div onClick={handleOpen} className="flex justify-end cursor-pointer ">
          
          <Button className=" bg-red-400 text-white rounded-lg">X cancel</Button>
          </div>
         <JobPostForm/>
        </DialogBody>
        <DialogFooter className="space-x-2">
          
     
        </DialogFooter>
      </Dialog>
    </>
  );
}