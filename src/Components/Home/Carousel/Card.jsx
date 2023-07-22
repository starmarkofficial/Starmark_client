
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function Card({num}){
	AOS.init();
	return(
		<>
			<div data-aos="fade-up" className="card bg-[#18A6D0] min-w-[250px] h-[350px] m-2 rounded-lg shadow-lg">
				{/* {num} */}
			</div>
		</>		
	)
}