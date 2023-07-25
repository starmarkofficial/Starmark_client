import { useState } from "react"
import './Form.css'
export default function Form() {

	const [user,setUser]=useState({
		fname:"",
		lname:"",
		email:"",
		phone:"",
		dob:"",
		gender:"",
		category:"",
		address:"",
		pincode:"",
		city:"",
		state:"",
		language:"",
		expYears:"",
		expMonths:"",
		ctc:"",
		expectedCTC:"",
		negoCTC:"",
		notice:"",
		functionalArea:"",
		empType:"",
		shiftType:"",
		profileSummary:"",
		allSkills:[],
		allExperience:[],
		allEducation:[],
		linkedin:"",
		website:"",
		otherLinks:""
	})

	
	const  onInputChange = (e)=>{
		let name, value;
		name=e.target.name;
		value=e.target.value;
		setUser({...user,[name]:value});
		
	}
	

	// Skills section-------------------------

	const skillTemplate={skill:""};
	const [skills,setSkills]=useState([]);

	const addSkill=()=>{
		setSkills([...skills, skillTemplate])
	}

	const  onchange = (e,index)=>{
		const updateSkill = skills.map((sk, i)=> index==i ? Object.assign(sk,{[e.target.name]:e.target.value}) : sk)

		setSkills(updateSkill)
		setUser({...user,allSkills:skills})
	}


	const removeSkill = (index)=>{
		const filteredSKill=[...skills]
		filteredSKill.splice(index,1);
		setSkills(filteredSKill);
		setUser({...user,allSkills:filteredSKill})
	}
	

	// Skills section ends--------------------------



	// Experience section-------------------------

	const experienceTemplate={jobRole:"", from:"", to:""	};
	const [experience,setExp]=useState([]);

	const addExperience=()=>{
		setExp([...experience, experienceTemplate])
	}

	const  onchangeexp = (e,index)=>{
		const updateExp = experience.map((expe, i)=> index==i ? Object.assign(expe,{[e.target.name]:e.target.value}) : expe)

		setExp(updateExp)
		setUser({...user,allExperience:experience})
	}


	const removeExp = (index)=>{
		const filteredExp=[...experience]
		filteredExp.splice(index,1);
		setExp(filteredExp);
		setUser({...user,allExperience:filteredExp})
	}

	// Experience section ends-------------------------


	// Education section-------------------------

	const educationTemplate={course:"", institute:"",  from:"", to:""	};
	const [education,setEducation]=useState([]);

	const addEducation=()=>{
		setEducation([...education, educationTemplate])
	}

	const  onchangeEdu = (e,index)=>{
		const updateEdu = education.map((educa, i)=> index==i ? Object.assign(educa,{[e.target.name]:e.target.value}) : educa)

		setEducation(updateEdu)
		setUser({...user,allEducation:education})
	}


	const removeEdu = (index)=>{
		const filteredEdu=[...education]
		filteredEdu.splice(index,1);
		setEducation(filteredEdu);
		setUser({...user,allEducation:filteredEdu})
	}

	// Education section ends-------------------------


	return (
		<>
			<div className="main-container bg-[#fbfcff] ">
				<div className="form text-xl mx-auto h-full">

					<form className="form-content mx-auto pb-20" onSubmit={(e)=>{
						e.preventDefault();
						// console.log(user);
					}}>

						<div className="form-container">

							<div className="container" id="personal-details">
								<div className="sub-title text-3xl border-b-2 border-slate-100 pt-10 mx-auto p-4 mb-10 ">
									Personal Details
								</div>
								<label className="label mb-10 ">Name:<br/>
									<input type="text" name="fname" className="w-[75%] sm:w-[40%] md:w-[45%]"  placeholder="First Name" value={user.fname} onChange={onInputChange}/>
									<input type="text" name="lname" className="w-[75%] sm:w-[40%] md:w-[45%]"  placeholder="Last Name"value={user.lname} onChange={onInputChange}/>
								</label>
								
								<label className="label mb-10 ">Email:<br/>
									<input type="email" id="email" name="email" placeholder="Enter Email" value={user.email} onChange={onInputChange}/>
								</label>

								<label className="label mb-10 ">Phone:<br/>
									<input type="tel" name="phone" placeholder="Enter Phone No." value={user.phone} onChange={onInputChange}/>
								</label>

								<label className="label mb-10 ">Date of Birth<br/>
									<input type="date" name="dob" value={user.dob} onChange={onInputChange}/>
								</label>
								<div className="gender-option mb-10 ">
									<label htmlFor="cars">Gender:<br/>
										<select className="rounded-md "  id="cars" name="gender" value={user.gender} onChange={onInputChange}>
											<option value="">Select</option>
											<option value="Male">Male</option>
											<option value="Female">Female</option>
											<option value="Others">Others</option>
										</select>
									</label>
								</div>

								<div className="category-option mb-10 ">
									<label htmlFor="cars">Category:<br/>
										<select className="rounded-md " id="cars" name="category" value={user.category} onChange={onInputChange}>
											<option value="">Select</option>
											<option value="General">General</option>
											<option value="ST">ST</option>
											<option value="SC">SC</option>
											<option value="OBC">OBC</option>
										</select>
									</label>
								</div>

								<label className="label mb-10 ">Address<br/>
									<input type="text" name="address" placeholder="Enter Address" value={user.address} onChange={onInputChange}/>
								</label>
								<label className="label mb-10 ">Pincode or Postal code<br/>
									<input type="number" name="pincode" placeholder="Enter Pincode" value={user.pincode} onChange={onInputChange}/>
								</label>
								<label className="label mb-10 ">City<br/>
									<input type="text" name="city" placeholder="Enter City" value={user.city} onChange={onInputChange}/>
								</label>
								<label className="label mb-10 ">State<br/>
									<input type="text" name="state" placeholder="Enter State" value={user.state} onChange={onInputChange}/>
								</label>

								{/* Language Div */}
								<div className="Language mb-10 ">
									<label>Language</label>
									<div className="language-div">
										<label className="label inline">
											<input type="checkbox" name="language" value="English" onChange={onInputChange}/>
											English
										</label>
									</div>
									<div className="language-div">
										<label className="label inline">
											<input type="checkbox" name="language" value="Bengali" onChange={onInputChange}/>
											Bengali
										</label>
									</div>
									<div className="language-div">
										
										<label className="label inline">
											<input type="checkbox" name="language" value="Hindi" onChange={onInputChange}/>
											Hindi
										</label>
									</div>
								</div>
							</div>

							<div className="container" id="basic-details">
								<div className="sub-title text-3xl border-b-2 border-slate-100 pt-10 mx-auto p-4 mb-10 ">
									Basic Details
								</div>
								<div className="experience">
									<label className="label mb-10 ">Experience
										<div className="language-div">
											<input type="tel" name="expYears" value={user.expYears} onChange={onInputChange}/>
											<label className="label inline">Years</label>
										</div>
										<div className="language-div">
											<input type="number" name="expMonths" min="1" max="12" value={user.expMonths} onChange={onInputChange}/>
											<label className="label inline">Months</label>
										</div>
									</label>
								</div>

								<label className="label mb-10 ">CTC<br/>
									<input type="number" name="ctc" value={user.ctc} onChange={onInputChange}/> LPA (Lakhs Per Annum)
								</label>

								<label className="label mb-10 ">Expected CTC<br/>
									<input type="number" name="expectedCTC" value={user.expectedCTC} onChange={onInputChange}/> LPA (Lakhs Per Annum)
								</label>

								<label className="label mb-10 ">Negotiable CTC<br/>
									<input type="number" name="negoCTC" value={user.negoCTC} onChange={onInputChange}/> LPA (Lakhs Per Annum)
								</label>

								<div className="notice-option mb-10 ">
									<label htmlFor="notice-period">Notice Period:<br/>
										<select className="rounded-md " id="notice-period" name="notice" value={user.notice} onChange={onInputChange}>
											<option value="">Select</option>
											<option value="TBD">TBD</option>
											<option value="TBD">TBD</option>
											<option value="TBD">TBD</option>
											<option value="TBD">TBD</option>
										</select>
									</label>
								</div>

								<label className="label mb-10 ">Functional Area<br/>
									<input type="text" name="functionalArea" value={user.functionalArea} onChange={onInputChange}/>
								</label>

								<div className="employment-option mb-10 ">
									<label htmlFor="cars">Employment Type:<br/>
										<select  className="rounded-md "id="employment-type" name="empType" value={user.empType} onChange={onInputChange}>
											<option value="">Select</option>
											<option value="fullTime">Full-Time</option>
											<option value="partTime">Part-Time</option>
											<option value="Internship">Internship</option>
										</select>
									</label>
								</div>

								<div className="shift-option mb-10 ">
									<label htmlFor="shift">Shift Type:<br/>
										<select className="rounded-md " id="shift" name="shiftType" value={user.shiftType} onChange={onInputChange}>
											<option value="">Select</option>
											<option value="day">Day</option>
											<option value="night">Night</option>
											<option value="any">Any</option>
										</select>
									</label>
								</div>

							</div>
							<div className="container" id="profile">
								<div className="sub-title text-3xl border-b-2 border-slate-100 pt-10 mx-auto p-4 mb-10 ">
										Profile Summary
									</div>
								<div className="profile">
									<label>Upload Profile Photo:<br/>
										<input type="file" name="myImage" accept="image/*" />
									</label>

									<label className="profile-summary mb-10 ">Profile Summery:
										<textarea className="mx-4 rounded-md w-[80%] min-h-[100px] " name="profileSummary" value={user.profileSummary} onChange={onInputChange} form="usrform" placeholder="Add Profile Summary"></textarea>
									</label>
								</div>
							</div>

							<div className="container" id="resume-video">
								<label>Upload Resume(PDF only):<br/>
									<input type="file" name="resume" accept="application/pdf" />
								</label>

								<label>Upload Video:<br/>
									<input type="file" name="video"accept="video/*"/>
								</label>
							</div>

							<div className="container mb-10" id="profile">
								<div className="sub-title text-3xl border-b-2 border-slate-100 pt-10 mx-auto p-4 mb-10 ">
									Skills
								</div>

								<label className="label">Your Skills:<br/>
								{
									skills.map((sk,index)=>(
										<div className="input-field my-5" key={index}>
											<input type="text" name="skill" placeholder="Enter Skill" onChange={e=>onchange(e,index)} value={skillTemplate.name}/>
											<button className="delete-btn mx-5" onClick={()=>removeSkill(index)}>Remove</button>
										</div>
									))
								}
									<button className="add-skills" onClick={addSkill}>Add Skill</button>
								</label>
							</div>


							<div className="container mb-10" id="experience">
								<div className="sub-title text-3xl border-b-2 border-slate-100 pt-10 mx-auto p-4 mb-10 ">
									Experience
								</div>
								{
									experience.map((sk,index)=>(
										<div className="input-field my-5" key={index}>
											<label className="label"> Job Role:<br/>
												<input type="text" name="jobRole" placeholder="Enter Job Role" onChange={e=>onchangeexp(e,index)} value={experienceTemplate.name}/>
											</label>
											<label className="label"> From:<br/>
												<input type="month" name="from"  onChange={e=>onchangeexp(e,index)} value={experienceTemplate.name}/>
											</label>
											<label className="label"> To:<br/>
												<input type="month" name="to"  onChange={e=>onchangeexp(e,index)} value={experienceTemplate.name}/>
											</label>
											<button className="delete-btn mx-5" onClick={()=>removeExp(index)}>Remove</button>
										</div>
									))
								}
									<button className="add-skills" onClick={addExperience}>Add Experience</button>
							</div>


							<div className="container mb-10" id="education">
								<div className="sub-title text-3xl border-b-2 border-slate-100 pt-10 mx-auto p-4 mb-10 ">
									Education
								</div>
								{
									education.map((sk,index)=>(
										<div className="input-field my-5" key={index}>
											<label className="label"> Course:<br/>
												<input type="text" name="course" placeholder="Course Name" onChange={e=>onchangeEdu(e,index)} value={educationTemplate.name}/>
											</label>
											<label className="label"> Institute:<br/>
												<input type="text" name="institute" placeholder="Institute" onChange={e=>onchangeEdu(e,index)} value={educationTemplate.name}/>
											</label>
											<label className="label"> From:<br/>
												<input type="month" name="from" onChange={e=>onchangeEdu(e,index)} value={educationTemplate.name}/>
											</label>
											<label className="label"> To:<br/>
												<input type="month" name="to" onChange={e=>onchangeEdu(e,index)} value={educationTemplate.name}/>
											</label>
											<button className="delete-btn mx-5" onClick={()=>removeEdu(index)}>Remove</button>
										</div>
									))
								}
									<button className="add-skills" onClick={addEducation}>Add Education</button>
							</div>
							
							<div className="container mb-10" id="socials">
								<div className="sub-title text-3xl border-b-2 border-slate-100 pt-10 mx-auto p-4 mb-10 ">
									Socials
								</div>

								<label className="label mb-10 ">LinkedIn<br/>
									<input type="url" name="linkedin" value={user.linkedin} onChange={onInputChange}/>
								</label>

								<label className="label mb-10 ">Website<br/>
									<input type="url" name="website" value={user.website} onChange={onInputChange}/>
								</label>

								<label className="label mb-10 ">Other Links<br/>
									<input type="url" name="otherLinks" value={user.otherLinks} onChange={onInputChange}/>
								</label>

							</div>
								
							<button type="submit" className="mx-10">Submit</button>
							<button type="submit" className="update-btn mx-10">Update</button>
						</div>
						{/* Personal Details */}
					</form>
				</div>
			</div>
		</>
	)
}
