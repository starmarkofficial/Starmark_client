import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Browser(){
	AOS.init();
	function func(){
		alert("button click");
	}

	return (
		<>
			<div className="head-text head-text text-4xl font-bold mx-auto flex justify-center my-5 Class
Properties
font-sans ">
				Browse Choose By
			</div>
			<div className="browse-grid flex flex-wrap justify-center place-content-between mx-10">
				<div data-aos="fade-up" className="browse-area md:mx-10 sm:mx-5 sm:my-5 mx-5">
					<button className="browse-option font-medium" onClick={func}>
						+ Functional Area
					</button>
					<div className="grid-list">
						<ul>
							<li onClick={func}>Creative Design</li>
							<li onClick={func}>Marketing</li>
							<li onClick={func}>Bank Operation</li>
						</ul>
					</div>
				</div>
				<div data-aos="fade-up" className="browse-area my-5 md:mx-10 sm:mx-5 mx-5">
					<button className="browse-option font-medium" onClick={func}>
						+ Cities
					</button>
					<div className="grid-list">
						<ul>
							<li onClick={func}>Kolkata</li>
							<li onClick={func}>Siliguri</li>
							<li onClick={func}>Pune</li>
						</ul>
					</div>
				</div>
				<div data-aos="fade-up" className="browse-area md:mx-10 sm:mx-5 sm:my-5 mx-5">
					<button className="browse-option font-medium" onClick={func}>
						+ Industries
					</button>
					<div className="grid-list">
						<ul>
							<li onClick={func}>Fashion</li>
							<li onClick={func}>Automobile</li>
							<li onClick={func}>Education</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	)
}