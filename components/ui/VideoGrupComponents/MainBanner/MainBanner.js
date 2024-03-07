// "use client"

// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from 'react-responsive-carousel';
// import Image from "next/image";
// import imageOne from '@/assets/BannerImage/hero-bg.jpg'
// import imageTwo from '@/assets/BannerImage/home2.png'
// import imageThree from '@/assets/BannerImage/wanda-banner.jpg'
// import imageFour from '@/assets/BannerImage/home4.png'
// import Aos from 'aos';
// import 'aos/dist/aos.css'
// import { useEffect, useState } from "react";
// import axios from "axios";
// import Link from "next/link";


// const MainBanner = () => {
//   const [banners,setBanners] = useState([])
//   useEffect(() =>{
//     axios.get('https://vibewabe-server.vercel.app/videoSlider')
//     .then(res =>{
//       setBanners(res.data)
//       console.log(res.data)
//     })
//   },[])


//   useEffect(() =>{
//     Aos.init();
//       },[])
   

//     return (
//         <>
//           <div className="relative">
//   <Carousel
//     showThumbs={false}
    
//     autoPlay={true}
//     transitionTime={0}
//     infiniteLoop={true}
//     showStatus={false}
//   >
//     {/* slide one */}
//     { banners.map( banner =>  <div
//         key={banner._id}
//         >

//           <div className="h-[600px]">
//             <Image 
//               className="object-cover object-center w-full h-full"
//               src={banner.image}
//               width={1000}
//               height={600}
//               alt=''
//              />
//             <div className="absolute inset-0 flex flex-col items-start justify-end bg-gradient-to-tl from-black via-transparent to-black p-8  opacity-100 transition-opacity duration-300">



//             <div>
//       <div className=" mx-auto grid grid-cols-1 gap-12 px-4 py-16 lg:grid-cols-2 lg:px-8 lg:py-32 xl:max-w-7xl">
//         <div className="flex items-center text-center lg:text-left">
//           <div className="space-y-8">
//             {/* Heading */}
//             <div>
//               <div className="mb-1 text-sm font-extrabold uppercase tracking-wider text-red-600  dark:text-blue-500">
//                 Get Started
//               </div>
//               <h2 className="mb-4 text-xl md:text-4xl font-black text-white dark:text-white">
//             {banner.title}
              
//               </h2>
//               <h3 className="md:text-xl text-xs font-medium leading-relaxed text-gray-100 dark:text-gray-300">
//                {banner.description}
//               </h3>
//             </div>
//             {/* END Heading */}

//             {/* Action */}
//             <div className="">
         
//            <Link href={`/video/${banner?.videoId}`}>
//            <button className="btn inline-flex items-center justify-center transition-all duration-200  border-orange-500 hover:bg-gradient-to-r from-red-600 to-orange-500  btn-outline hover:shadow-2xl hover:shadow-orange-400 hover:-translate-y-px border-transparent   flex items-center bg-rich-black-fogra-29 text-white font-bold uppercase text-xs tracking-wide px-6 py-4 border-2 border-citrine rounded-full  hover:bg-opacity-80 font-bold" >Watch Now</button>
           
//            </Link>

 



//             </div>
//             {/* END Action */}
//           </div>
//         </div>
//         <div className="flex items-center text-blue-500 lg:justify-end">
//           <svg
//             viewBox="0 0 753 480.951"
//             xmlns="http://www.w3.org/2000/svg"
//             className="w-full"
//           >
//             {/* SVG Path */}
//           </svg>
//         </div>
//       </div>
//     </div>



//             </div>
//           </div>



//         </div>  ) }
// {/* end slide one */}







//   </Carousel>
// </div>

//         </>
//     )
// }

// export default MainBanner




"use client"
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Banner = () => {
  const [banners, setBanners] = useState([]);
  const [currentSlider, setCurrentSlider] = useState(0);

  useEffect(() => {
    axios.get('https://vibewabe-server.vercel.app/videoSlider')
      .then(res => {
        setBanners(res.data);
      })
      .catch(err => {
        console.error("Error fetching banner data:", err);
      });
  }, []);

  const prevSlider = () => setCurrentSlider((currentSlider) => currentSlider === 0 ? banners.length - 1 : currentSlider - 1);
  const nextSlider = () => setCurrentSlider((currentSlider) => currentSlider === banners.length - 1 ? 0 : currentSlider + 1);
  const isSmallScreen = window.innerWidth <= 768;

  return (
    <div className="w-full h-72 sm:h-96 md:h-[540px] lg:h-[540px] xl:h-[580px] flex flex-col xl:flex-row items-center justify-center gap-5 lg:gap-10 relative bg-cover before:absolute before:bg-black/50 before:inset-0 transform duration-1000 ease-linear  overflow-hidden"
      style={{ backgroundImage: `url(${banners.length > 0 && banners[currentSlider].image})`}}>
      <div className="absolute bottom-1/4 flex gap-3 z-50 px-5">
      <button onClick={prevSlider} className="flex justify-center items-center hover:bg-white/30 rounded-full w-6 h-6 md:w-8 md:h-8">
                    <svg viewBox="0 0 1024 1024" className="w-4 h-4 md:w-6 md:h-6 icon" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#0095FF" d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"></path></g></svg>
                </button>
                <button onClick={nextSlider} className="flex justify-center items-center hover:bg-white/30 rounded-full w-6 h-6 md:w-8 md:h-8">
                    <svg viewBox="0 0 1024 1024" className="w-4 h-4 md:w-6 md:h-6 icon" xmlns="http://www.w3.org/2000/svg" fill="#000000" transform="rotate(180)"><g strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#0095FF" d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"></path></g></svg>
                </button>
      </div>





      <div className="w-1/2 px-4 left-0 absolute drop-shadow-lg text-white rounded-lg">



        <h1 className="lg:text-3xl mb-3">{banners.length > 0 && banners[currentSlider].title}</h1>
        <p className="text-xs sm:text-sm md:text-base lg:text-lg">{banners.length > 0 && banners[currentSlider].description}</p>
        <Link href={`/video/${banners.length > 0 && banners[currentSlider].videoId}`}>
            <button className="btn inline-flex my-5 items-center justify-center transition-all duration-200  border-orange-600 hover:bg-gradient-to-r from-red-600 to-orange-500  btn-outline hover:shadow-2xl hover:shadow-orange-400 hover:-translate-y-px border-transparent   flex  bg-rich-black-fogra-29 text-white  uppercase text-xs tracking-wide px-6 py-4 border-2 border-citrine rounded-full  hover:bg-opacity-80 font-bold" >play now </button>
           
         </Link>
      </div>











      
      <div className="w-1/2 ml-auto overflow-hidden absolute -right-5 lg:-right-16 z-50 px-4 py-10">
        <div className="ease-linear duration-300 flex gap-4 items-center" style={{ transform: `translateX(-${currentSlider * (isSmallScreen ? 98 : 200)}px)`}}>
          {/* sliders */}
          {banners.map((slide, index) => (
            <Image key={index} width={200} height={300} src={slide.image} className={`h-[180px] sm:h-[200px] lg:h-[320px] min-w-[90px] lg:min-w-[184px]  drop-shadow-lg shadow-lg shadow-black bg-black/50 duration-300 rounded-lg z-50`} alt={slide.title}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;


// import axios from "axios";
// import { useEffect, useState } from "react";

//   const Banner = () => {
//     const [banners,setBanners] = useState([])
//   useEffect(() =>{
//     axios.get('https://vibewabe-server.vercel.app/videoSlider')
//     .then(res =>{
//       setBanners(res.data)
//       console.log(res.data)
//     })
//   },[])

//   const [currentSlider, setCurrentSlider] = useState(0);
//   const sliders = [{img: "https://source.unsplash.com/1200x640/?nature", title: "Escape 1", des: "A Symphony of Tranquility. Experience the perfect blend of relaxation and excitement."}, {img: "https://source.unsplash.com/1200x640/?hill", title: "Escape 2", des: "A Symphony of Tranquility. Experience the perfect blend of relaxation and excitement."}, {img: "https://source.unsplash.com/1200x640/?mountain", title: "Escape 3", des: "A Symphony of Tranquility. Experience the perfect blend of relaxation and excitement."}, {img: "https://source.unsplash.com/1200x640/?river", title: "Escape 4", des: "A Symphony of Tranquility. Experience the perfect blend of relaxation and excitement."}, {img: "https://source.unsplash.com/1200x640/?sea", title: "Escape 5", des: "A Symphony of Tranquility. Experience the perfect blend of relaxation and excitement."},];
//   const prevSlider = () => setCurrentSlider((currentSlider) => currentSlider === 0 ? sliders.length - 1 : currentSlider - 1);
//   const nextSlider = () => setCurrentSlider((currentSlider) => currentSlider === sliders.length - 1 ? 0 : currentSlider + 1);
//   const isSmallScreen = window.innerWidth <= 768;
//   return (
//       <div className="w-full h-72 sm:h-96 md:h-[540px] lg:h-[640px] xl:h-[780px] flex flex-col xl:flex-row items-center justify-center gap-5 lg:gap-10 relative bg-cover before:absolute before:bg-black/50 before:inset-0 transform duration-1000 ease-linear z-50 overflow-hidden"
//             style={{ backgroundImage: `url(${currentSlider === 0 ? sliders[sliders.length - 1].img : sliders[currentSlider - 1].img})`}}>
//             {/* arrow */}
//             <div className="absolute bottom-1/4 flex gap-3 z-50 px-5">
//                 {/* arrow left */}
//                 <button onClick={prevSlider} className="flex justify-center items-center hover:bg-white/30 rounded-full w-6 h-6 md:w-8 md:h-8">
//                     <svg viewBox="0 0 1024 1024" className="w-4 h-4 md:w-6 md:h-6 icon" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#0095FF" d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"></path></g></svg>
//                 </button>
//                 {/* arrow right */}
//                 <button onClick={nextSlider} className="flex justify-center items-center hover:bg-white/30 rounded-full w-6 h-6 md:w-8 md:h-8">
//                     <svg viewBox="0 0 1024 1024" className="w-4 h-4 md:w-6 md:h-6 icon" xmlns="http://www.w3.org/2000/svg" fill="#000000" transform="rotate(180)"><g strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#0095FF" d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"></path></g></svg>
//                 </button>
//             </div>
//             {/* text container here */}
//             <div className="w-1/2 px-4 left-0 absolute drop-shadow-lg text-white rounded-lg">
//                 <h1 className="lg:text-3xl mb-3">{sliders[currentSlider].title}</h1>
//                 <p className="text-xs sm:text-sm md:text-base lg:text-lg">{sliders[currentSlider].des}</p>
//             </div>
//             {/* slider container */}
//             <div className="w-1/2 ml-auto overflow-hidden  absolute -right-5 lg:-right-16 z-50 px-4 py-10">
//                 <div className="ease-linear duration-300 flex gap-4 items-center"
//                     style={{ transform: `translateX(-${currentSlider * (isSmallScreen ? 98 : 200)}px)`}}>
//                     {/* sliders */}
//                     {sliders.map((slide, inx) => (
//                         <img key={inx} src={slide.img}
//                             className={`h-[180px] sm:h-[200px] lg:h-[320px] min-w-[90px] lg:min-w-[184px] ${
//                                 currentSlider - 1 === inx ? 'scale-0' : 'scale-100 delay-500'
//                             } drop-shadow-lg shadow-lg shadow-black bg-black/50 duration-300 rounded-lg z-50`}
//                             alt={slide.title}/>
//                     ))}
//                 </div>
//             </div>
//         </div>
//   )};
// export default Banner