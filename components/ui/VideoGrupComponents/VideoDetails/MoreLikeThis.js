// components/MoreLikeThis.js

import Image from 'next/image';
import imageOne from '@/assets/Thrillers-movies/Pandora.jpeg'; 
import theNew from "@/assets/New-Releases/theNewLook.jpg";
import fullSpeed from "@/assets/New-Releases/fullSpeed.jpg";
import code8 from "@/assets/New-Releases/code8.jpg";
import dunki from "@/assets/New-Releases/Dunki_poster.jpg";
import imaginary from "@/assets/New-Releases/imaginary.jpg";
import Link from 'next/link';

const MoreLikeThis = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
     
     <Link href={"/video/id"}>
            <div className="relative group overflow-hidden">
              <Image
                className="w-[200px] md:w-[300px] h-[150px] md:h-full  transform transition-transform duration-300 group-hover:scale-110 rounded-xl"
                src={code8}
                alt="Imaginary Movie"
              />
            </div>
            <h5 className="text-center mt-1 text-xs md:text-[15px] font-semibold">
              Imaginary
            </h5>
          </Link>
     
     <Link href={"/video/id"}>
            <div className="relative group overflow-hidden">
              <Image
                className="w-[200pxpx] md:w-[300px] h-[150px] md:h-full  transform transition-transform duration-300 group-hover:scale-110 rounded-xl"
                src={theNew}
                alt="Imaginary Movie"
              />
            </div>
            <h5 className="text-center mt-1 text-xs md:text-[15px] font-semibold">
              Imaginary
            </h5>
          </Link>
     
     <Link href={"/video/id"}>
            <div className="relative group overflow-hidden">
              <Image
                className="w-[200px] md:w-[300px] h-[150px] md:h-full  transform transition-transform duration-300 group-hover:scale-110 rounded-xl"
                src={fullSpeed}
                alt="Imaginary Movie"
              />
            </div>
            <h5 className="text-center mt-1 text-xs md:text-[15px] font-semibold">
              Imaginary
            </h5>
          </Link>
     
     <Link href={"/video/id"}>
            <div className="relative group overflow-hidden">
              <Image
                className="w-[200px] md:w-[300px] h-[150px] md:h-full  transform transition-transform duration-300 group-hover:scale-110 rounded-xl"
                src={code8}
                alt="Imaginary Movie"
              />
            </div>
            <h5 className="text-center mt-1 text-xs md:text-[15px] font-semibold">
              Imaginary
            </h5>
          </Link>
     
     <Link href={"/video/id"}>
            <div className="relative group overflow-hidden">
              <Image
                className="w-[200px] md:w-[300px] h-[150px] md:h-full  transform transition-transform duration-300 group-hover:scale-110 rounded-xl"
                src={dunki}
                alt="Imaginary Movie"
              />
            </div>
            <h5 className="text-center mt-1 text-xs md:text-[15px] font-semibold">
              Imaginary
            </h5>
          </Link>
     
     <Link href={"/video/id"}>
            <div className="relative group overflow-hidden">
              <Image
                className="w-[200px] md:w-[300px] h-[150px] md:h-full  transform transition-transform duration-300 group-hover:scale-110 rounded-xl"
                src={imageOne}
                alt="Imaginary Movie"
              />
            </div>
            <h5 className="text-center mt-1 text-xs  md:text-[15px] font-semibold">
              Imaginary
            </h5>
          </Link>
     
    



     


    </div>
  );
};

export default MoreLikeThis;
