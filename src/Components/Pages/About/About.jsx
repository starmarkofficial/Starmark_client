export default function Aboutus(){

	const title_text='Starmark is a free job consultancy platform, formed for the convenience of people looking for job opportunities. We work towards a social cause for eradicating unemployment with the vision of giving everyone a chance to support their livelihood. Starmark provides job seekers with verified job opportunities that makes sure you get legitimate opportunities and avoid any future financial or legal troubles. Through this group, 2-5 people get jobs every day. Starmark has provided more than 60,000 jobs in 9 years so far.';
	return (
		<>
			<div className="top-desc min-h-[90vh] sm:h-[90vh] bg-[#18A6D0CC] flex ">
				<div className="graphics-svg-design">
					<div className="flex">
						<div className="circle  sm:inline ">
							<svg className="absolute hidden sm:inline top-24 right-44 md:mr-16 lg:mr-20 mt-14" xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
							  <g filter="url(#filter0_d_330_306)">
							    <circle cx="15.5" cy="11.5" r="11.5" fill="white"/>
							  </g>
							  <defs>
							    <filter id="filter0_d_330_306" x="0" y="0" width="31" height="31" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
							      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
							      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
							      <feOffset dy="4"/>
							      <feGaussianBlur stdDeviation="2"/>
							      <feComposite in2="hardAlpha" operator="out"/>
							      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
							      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_330_306"/>
							      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_330_306" result="shape"/>
							    </filter>
							  </defs>
							</svg>
							
							<svg className="absolute hidden sm:inline bottom-24 left-44" xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none">
							  <circle cx="14.5" cy="14.5" r="12.5" fill="#18A6D0" fill-opacity="0.8" stroke="white" stroke-width="4"/>
							</svg>
						</div>
						

						<svg className="absolute top-18 right-0" xmlns="http://www.w3.org/2000/svg" width="164" height="174" viewBox="0 0 164 174" fill="none">
							  <path opacity="0.1" d="M-7.60578e-06 0C-6.87946e-06 22.85 4.50064 45.4763 13.245 66.5869C21.9893 87.6976 34.806 106.879 50.9634 123.037C67.1208 139.194 86.3024 152.011 107.413 160.755C128.524 169.499 151.15 174 174 174L174 58.4631C166.323 58.4631 158.72 56.9509 151.627 54.0129C144.534 51.0748 138.089 46.7685 132.66 41.3397C127.232 35.9109 122.925 29.466 119.987 22.3729C117.049 15.2798 115.537 7.67749 115.537 -5.05028e-06L-7.60578e-06 0Z" fill="white"/>
						</svg>
					</div>
					<div className="quarter-circle absolute bottom-0 left-0 rotate-180">
						<svg xmlns="http://www.w3.org/2000/svg" width="164" height="174" viewBox="0 0 164 174" fill="none">
							  <path opacity="0.1" d="M-7.60578e-06 0C-6.87946e-06 22.85 4.50064 45.4763 13.245 66.5869C21.9893 87.6976 34.806 106.879 50.9634 123.037C67.1208 139.194 86.3024 152.011 107.413 160.755C128.524 169.499 151.15 174 174 174L174 58.4631C166.323 58.4631 158.72 56.9509 151.627 54.0129C144.534 51.0748 138.089 46.7685 132.66 41.3397C127.232 35.9109 122.925 29.466 119.987 22.3729C117.049 15.2798 115.537 7.67749 115.537 -5.05028e-06L-7.60578e-06 0Z" fill="white"/>
						</svg>
					</div>
				</div>
				
			
				<div className="about-us-typo  mt-28 mx-auto max-w-2xl text-center text-white">
					<div className="font-serif about-us-title leading-loose font-extrabold text-4xl sm:text-7xl">
						ABOUT US
					</div>
					<div className="font-mono mt-5 about-us-content px-6  font-medium text-xl leading-8">
						{title_text}
					</div>
				</div>
			</div>
			<div className="part-2">

			</div>
		</>
	)
}