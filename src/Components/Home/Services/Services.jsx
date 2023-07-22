import { PhoneArrowDownLeftIcon } from "@heroicons/react/24/outline";
import { UsersIcon } from "@heroicons/react/24/outline";
import { ClockIcon } from "@heroicons/react/24/outline";
import { DocumentCheckIcon } from "@heroicons/react/24/outline";
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function ServicesList({}){
	AOS.init();
	return(
		<>
			<div   className="mt-10 services-container md:w-full sm:flex-none md:flex sm:flex-col lg:flex-row">
				<div className="services-list md:w-10/12 mx-9 md:ml-10 sm:mx-10">
					<div class="animate-bounce ml-4 text-white px-3 text-center inline-flex items-center justify-center w-16 h-16  shadow-lg rounded-full bg-blue-300 ">
						<RocketLaunchIcon/>
					</div>
					<div className='head-text text-bold head-text text-4xl font-bold mx-auto
					 flex justify-center my-5 ClassProperties font-sans ' >
						Ultimate Services for your Company.
					</div>

					<div className="desc font-sans">Nunc, porta phasellus nisl ac risus eget lectus neque, mauris. Dictumst mauris, id eget tellus tincidunt sit nisi,  </div>
					<div className="offered-services flex flex-wrap justify-center mx-5 md:mx-auto">

						{/*  option */}	
						<div  className="service mx-auto  rounded-lg sm:mx-7  md:mx-10  px-4 pt-4 pb-4  shadow hover:md:shadow-lg
							transform translate-y-4 hover:translate-y-0 duration-500 ease-in-out">
							<div  className="bg-gray-200 w-24 h-24 imag flex justify-center items-center rounded-full">
								<DocumentCheckIcon className="h-12 w-12 text-gray-800"/>
							</div>
							
							<div className="title font-sans">Shortlist Resume</div>
							<div className="service-desc font-sans">Nisi vivamus nisl nullam justo, sed at odio sit. Et nunc vestibulum.</div>
						</div>
						
						{/*  option */}
						<div   className="service mx-auto  rounded-lg sm:mx-7  md:mx-10  px-4 pt-4 pb-4 shadow hover:md:shadow-lg
							transform translate-y-4 hover:translate-y-0 duration-500 ease-in-out">
							<div className="bg-gray-200 w-24 h-24 imag flex justify-center items-center rounded-full">
								<PhoneArrowDownLeftIcon className="h-12 w-12 text-gray-800"/>
							</div>
							
							<div className="title font-sans">Call For Interview</div>
							<div className="service-desc font-sans">Nisi vivamus nisl nullam justo, sed at odio sit. Et nunc vestibulum.</div>
						</div>

						{/*  option */}
						<div  className="service mx-auto  rounded-lg sm:mx-7  md:mx-10  px-4 pt-4 pb-4 shadow hover:md:shadow-lg
							transform translate-y-4 hover:translate-y-0 duration-500 ease-in-out">
							<div className="bg-gray-200 w-24 h-24 imag flex justify-center items-center rounded-full">
								<UsersIcon className="h-12 w-12 text-gray-800"/>
							</div>
							
							<div className="title font-sans">Avail alternate candidate</div>
							<div className="service-desc font-sans">Nisi vivamus nisl nullam justo, sed at odio sit. Et nunc vestibulum.</div>
						</div>
						{/*  option */}
						<div  className="service mx-auto  rounded-lg sm:mx-7  md:mx-10  px-4 pt-4 pb-4 shadow hover:md:shadow-lg
							transform translate-y-4 hover:translate-y-0 duration-500 ease-in-out">
							<div className="bg-gray-200 w-24 h-24 imag flex justify-center items-center rounded-full">
								<ClockIcon className="h-12 w-12 text-gray-800"/>
							</div>
							
							<div className="title font-sans">Takes very less time</div>
							<div className="service-desc font-sans">Nisi vivamus nisl nullam justo, sed at odio sit. Et nunc vestibulum.</div>
						</div>
					</div>
				</div>
				<div data-aos="fade-up" className="img-container mt-10 sm:w-full md:w-8/12 mx-auto flex sm:mx-auto justify-center">
					<div className="services-img mx-10"></div>
				</div>
			</div>
		</>
	)
}