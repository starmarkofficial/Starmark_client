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
 
export function MessageDialog() {
  const [open, setOpen] = React.useState(false);
 
  const handleOpen = () => setOpen(!open);
 
  return (
    <>
      <Button  onClick={handleOpen}>Message Dialog</Button>
      
      <Dialog className="justify-center items-center w-20" open={open} handler={handleOpen}>
        
        <DialogBody divider>
         <JobPostForm/>
        </DialogBody>
        <DialogFooter className="space-x-2">
          
          <div class="pt-4 flex items-center space-x-4 w-full">
                <button onClick={handleOpen} class="flex justify-center items-center w-full text-gray-900 px-4 py-3 rounded-md focus:outline-none">
                  <svg class="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg> Cancel
                </button>
                <button class="w-3/4 bg-blue-500 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none">Create</button>
            </div>
        </DialogFooter>
      </Dialog>
    </>
  );
}