import {left, right} from '../../images'
import Card from './Card'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Carousel(){

	AOS.init();
	//note the numbers you are seeing is for development purpose only, it can be changed dynamically.
	


	const numbers = [1, 2, 3, 4, 5];
	const listNumbers = numbers.map((num)=>{
		return <Card  num={num}/>
	})

	const scrollLeft = () => {
		document.getElementById("content").scrollLeft -= 250;
	  }
	  const scrollRight = () => {
		document.getElementById("content").scrollLeft += 250;
	  }
	
	return(
		<>
			<div data-aos="fade-up" className="conteudo sm:w-full md:w-7/12 my-0 md:my-20">
				<div className="relative py-10">
					<div className="absolute right-0 top-5 pr-6 hidden md:inline">
						<button onClick={scrollLeft}>
							<img src={left} alt='left' className='carousel-btn mx-2 hover:bg-starmark-blue'/>
						</button>
						<button onClick={scrollRight}>
							<img src={right} alt='right' className='carousel-btn mx-2 hover:bg-starmark-blue'/>
						</button>
					</div>
					<div  id="content" className="carousel p-4 flex items-center justify-start overflow-x-auto scroll-smooth">
						<>
							{listNumbers}
						</>
					</div>
				</div>
			</div>
		</>
	)
}