import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import './styles.css';

// import required modules
import { Navigation } from 'swiper/modules';
import data from './data.json'
import Card from './Card'
import {demo,rating} from "../../images/index"

export default function Testimonials() {

	const listNumbers = data.map((data)=>{
		return <SwiperSlide>
			<Card 
				name={data.name}
				img={demo} 
				title={data.title} 
				text={data.text} 
				occupation={data.occupation} 
				rating={rating}/>
			</SwiperSlide>
	})

  return (
    <>
	<div className='test-head text-3xl px-9 pt-6 font-bold font-sans head-text text-4xl font-bold md:mx-auto flex justify-center'>Meet Client Satisfaction after working with us</div>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {listNumbers}
      </Swiper>
    </>
  );
}
