'use client'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';


//music banner img
import Image from 'next/image';
import banner1 from '@/assets/Musics/musicbanner2.jpeg'
import banner2 from '@/assets/Musics/musicbanner12.jpg'
import banner3 from '@/assets/Musics/musicbanner11.jpg'
import banner4 from '@/assets/Musics/musicbanner14.jpg'
import banner5 from '@/assets/Musics/musicbanenr22.png'
import banner6 from '@/assets/Musics/card4.jpg'

const MusicSlider2 = () => {
    return (
       <div className='mb-32 px-5'>
            <Swiper
            rewind={true}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
            >
            <SwiperSlide>
                    <div>
                        <Image className='lg:h-[80vh] md:h-[60vh] h-[40vh] w-full ' src={banner1} alt='slice image'/>
                        <div className="absolute flex items-center justify-center text-center left-0 top-0 right-0 bottom-0 bg-zinc-900 h-full opacity-40">
                        </div>
                    </div>
            </SwiperSlide>
            {/* banner 2 */}
            <SwiperSlide>
                    <div>
                        <Image className='lg:h-[80vh] md:h-[60vh] h-[40vh] w-full ' src={banner2} alt='slice image'/>
                        <div className="absolute flex items-center justify-center text-center left-0 top-0 right-0 bottom-0 bg-zinc-900 h-full opacity-40">
                        </div>
                    </div>
            </SwiperSlide>
            {/* banner 3 */}
            <SwiperSlide>
                    <div>
                        <Image className='lg:h-[80vh] md:h-[60vh] h-[40vh] w-full ' src={banner3} alt='slice image'/>
                        <div className="absolute flex items-center justify-center text-center left-0 top-0 right-0 bottom-0 bg-zinc-900 h-full opacity-40">
                        </div>
                    </div>
            </SwiperSlide>
            {/* banner 4 */}
            <SwiperSlide>
                    <div>
                        <Image className='lg:h-[80vh] md:h-[60vh] h-[40vh] w-full ' src={banner4} alt='slice image'/>
                        <div className="absolute flex items-center justify-center text-center left-0 top-0 right-0 bottom-0 bg-zinc-900 h-full opacity-40">
                        </div>
                    </div>
            </SwiperSlide>
            {/* banner 5 */}
            <SwiperSlide>
                    <div>
                        <Image className='lg:h-[80vh] md:h-[60vh] h-[40vh] w-full ' src={banner5} alt='slice image'/>
                        <div className="absolute flex items-center justify-center text-center left-0 top-0 right-0 bottom-0 bg-zinc-900 h-full opacity-40">
                        </div>
                    </div>
            </SwiperSlide>
            {/* banner 6 */}
            <SwiperSlide>
                    <div>
                        <Image className='lg:h-[80vh] md:h-[60vh] h-[40vh] w-full ' src={banner6} alt='slice image'/>
                        <div className="absolute flex items-center justify-center text-center left-0 top-0 right-0 bottom-0 bg-zinc-900 h-full opacity-40">
                        </div>
                    </div>
            </SwiperSlide>
        </Swiper>
       </div>
    );
};

export default MusicSlider2;