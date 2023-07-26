import JobCard from './jobcard'
import './Job.css'
export default function JobList(){
	return (
		<>
			<div className="job-list-container mx-none px-4 pb-10">
				<JobCard 
					admin="SalesForce"
					companyName="ABC Company"
					role="Consultant" 
					functionalArea="Other" 
					stateCity="Chennai" 
					employmentType="remote"
				/>
				<JobCard
					admin="SalesForce Admin"
					companyName="XYZ Company"
					role="Software Engineering" 
					functionalArea="Other" 
					stateCity="Kolkata" 
					employmentType="Hybrid"
				/>
				<JobCard
					admin="SalesForce Admin"
					companyName="XYZ Company"
					role="Software Engineering" 
					functionalArea="Other" 
					stateCity="Kolkata" 
					employmentType="Hybrid"
				/>
			</div>
		</>
	)
}