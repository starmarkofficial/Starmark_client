import {get_find, profile_add, sign_up, skill_add, ad_banner, img_replc, starmark} from './images'
import './Hero2.css'
import Carousel from './Carousel/Carousel'
import CompanyList from './Company_List/Companies'
 import Browser from './Browser'
 import ServicesList from './Services/Services'
import Accordion from './Accordion/index'
import Footer from './Footer/Footer'
import { Link } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'
import Testimonials from './Testimonials/Testimonials'


export default function Hero2(){
	
	useEffect(() => {
	 AOS.init();
	}, [])
	
	return (
		<>
			<div className="second sm:flex-none md:flex sm:flex-col lg:flex-row">
				<div  className="features px-10 pt-10 md:w-5/12 ">
					<p className="head-text text-[#18A6D0] text-3xl font-bold font-sans head-text text-4xl font-bold mx-auto flex justify-center my-5 ClassProperties font-sans ">
						How It Works?
					</p>
					<p className="ctnt py-2 font-sans font-medium">
						Searching for a Job or need employee for your company, so you are in the right place, just:
					</p>
					<ul>
						<li data-aos="fade-up" className="flex  content-list py-2 ">
							<img src={sign_up} className="sec-logo my-2 shadow-lg"  alt="Sign Up"/>
							<div className="parah parah text-left text-left space-y-4 flex items-center">
							<p className="text-lg font-semibold pl-6 align-center py-2 font-sans ">Sign Up</p>
							</div>
						</li>
						<li data-aos="fade-up" className="flex content-list py-2 ">
							<img src={profile_add} className="sec-logo my-2 shadow-lg"  alt="Profile"/>
							<div className="parah parah text-left text-left space-y-4 flex items-center">
								<p className="text-lg font-semibold pl-6 align-center py-2 font-sans ">Set Profile</p>
							</div>
						</li>
						<li data-aos="fade-up" className="flex  content-list py-2">
							<img src={skill_add} className="sec-logo my-2 shadow-lg"  alt="Skill and Role"/>
							<div className="parah parah text-left text-left space-y-4 flex items-center">
								<p className="text-lg font-semibold pl-6 align-center py-2 font-sans ">Add your skills or<br></br> list your requirements for the job role</p>
							</div>
						</li>
						<li data-aos="fade-up" className="flex content-list py-2 ">
							<img src={get_find} className="sec-logo my-2 shadow-lg"  alt="Recruit"/>
							<div className="parah text-left text-left space-y-4  flex items-center">
								<p className="text-lg font-semibold pl-6 align-center py-2 font-sans ">Get recruited or find employee</p>
							</div>
						</li>
					</ul>
					
					<Link data-aos="fade-up"  to="/auth" className=" font-sans create-profile-btn mx-auto my-4 max-w-96 py-2 px-14 block text-center text-white rounded-[10px] bg-blue-500 hover:drop-shadow-xl">Create Profile Now</Link>
				</div>
				{/* CAROUSEL */}
				
				<Carousel data-aos="fade-up" />
			</div>
			<div data-aos="fade-up" className="">
				<CompanyList />
			</div>
			

			{/* <AdSpace image={adBimage}/> */}
			<div  className="ad-space mx-auto my-10 flex justify-center ">
				<button className='ad-banner-btn'>
					<img src={ad_banner} className='ad-img px-6'/>
				</button>
			</div>

			{/* Category Browser */}
              <div data-aos="fade-up" className="">
	           <Browser />
                    </div>
			<div data-aos="fade-up" className="mb-5 sm:mb-20">
				<ServicesList repImage={img_replc} />
			</div>

			{/* testimonials */}
			<div data-aos="fade-up" className="">
				<Testimonials />
			</div>


			<div data-aos="fade-up" className="">
				<Accordion />
			</div>
			


			{/* Footer */}
			<Footer logo={starmark}/>
		</>
		
	)
}
