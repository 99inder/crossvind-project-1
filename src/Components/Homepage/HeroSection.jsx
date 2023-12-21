import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';

// import imagesData
import data from "../../assets/heroImagesData"

const HeroSection = () => {
  return (
    <Swiper
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{
        dynamicBullets: true,
      }}
      modules={[Pagination, Autoplay]}
      className="mySwiper cursor-grab active:cursor-grabbing"
    >
      {
        data.map(imgData => (
          <SwiperSlide style={{ position: "relative" }} key={imgData.id}>
            <img src={imgData.imgSrc}
              loading='lazy'
              alt={"img-"+imgData.id}
              className='w-screen h-[100dvh] object-cover object-center relative'
            />

            <div className='absolute z-10 pr-7 md:w-[30%] text-black bg-white px-3 py-5 bottom-0 md:bottom-[50%] left-0 md:translate-y-[150%] flex flex-col gap-y-4 hero-clip'>
              <h4 className='text-2xl md:text-3xl font-semibold'>{imgData.title}</h4>
              <p className='md:text-lg font-light'>{imgData.subTitle}</p>
            </div>
          </SwiperSlide>
        ))
      }
    </Swiper>
  )
}

export default HeroSection