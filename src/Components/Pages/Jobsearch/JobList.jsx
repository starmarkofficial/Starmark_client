import { useState ,useEffect} from 'react';
import JobCard from './jobcard'
import  './css/job.css'

//axios
import axios from 'axios';
import JobSkeleton from '../../utils/JobSkeleton';

const baseUrl ="https://starmark-server.onrender.com"

export default function JobList(){
	const [jobs, setJobs] = useState([])

	const getJobposts= async()=>{
		try {
			axios
			.get(`${baseUrl}/get-jobpost`)
			.then(({ data }) => {
			
				setJobs(data.jobposts);
				console.log(data.jobposts);
			})

		} catch (error) {
			console.log(error);
		}
	}

	useEffect(() => {
		getJobposts()
	  }, [])

	  if(!jobs?.length) return <JobSkeleton/>
	
	return (
		<>
			<div className="pt-28 job-list-container mx-none px-4 pb-10 overflow-y-auto scroll h-screen scrollbar-hide">

			{jobs.map((post) =>
			
			<>
			
			<JobCard 
			key={post._id} 
			JobRoll={post.job_role}
					companyName={post.company_name}
					functionalArea={post.Location}
					stateCity="Chennai" 
					employmentType={post.employment_type}
				/>
		 
          </>
          )}
				
				
			</div>
		</>
	)
}