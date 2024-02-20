'use client'
// / Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import imageOne from '@/assets/BannerImage/home1.jpg'
import imageTwo from '@/assets/BannerImage/home2.png'
import imageThree from '@/assets/BannerImage/home3.jpg'
import imageFour from '@/assets/BannerImage/home4.png'
import Image from 'next/image';

const MainBannerTwo = () => {

    return (

<div className=' '>

<Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
     
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper "
    >
      <SwiperSlide>
<Image src={imageOne}/>
      </SwiperSlide>


      <SwiperSlide>
      <Image src={imageTwo}/>
      </SwiperSlide>



      <SwiperSlide>
      <Image src={imageThree}/>
      </SwiperSlide>



      <SwiperSlide>
      <Image src={imageFour}/>
      </SwiperSlide>


 
    </Swiper>

</div>


    );
};

export default MainBannerTwo;