export default function Card({img, name, title, text, occupation, rating,key}){
	return(
		<>
			<div className="testimonial-card min-w-[85vw] min-h-[400px] m-2 rounded-lg shadow-lg flex items-center">
				<div className="main-content py-4 m-2 w-[75vw] mx-auto">
					<div className="title text-[#18A6D0] font-[500] text-center text-2xl mx-auto bg-white px-4 py-2 ">
						{title}
					</div>
					<div className="star-rating mx-auto bg-white px-4 py-2">

					</div>
					<div className="comment-main mx-auto bg-white px-2 md:px-4 py-2 text-center">
						<div className="comment md:mx-20">
							{text}
						</div>
					</div>
					<div className="rating mx-auto my-4">
						<img src={rating} className='mx-auto'/>
					</div>
					<div	className="profile mx-auto px-4 py-2 flex md:w-[28rem] items-center">
						<img src={img} className="profile-img px-10 "/>
						<div className="profile-info h-auto">
							<div className="name">
								{name}
							</div>
							<div className="occupation text-[#18A6D0]">{occupation}</div>
						</div>
						
					</div>
				</div>
				{/* {num} */}
			</div>
		</>		
	)
}