import Image from "next/image";
import banner from "@/assets/BannerImage/kathal-banner-Img.jpg";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="py-5">
      <div className="relative h-[250px] lg:h-[650px] flex justify-center rounded-xl">
        <Image src={banner} alt="Movie Banner Img" />
        <div className="absolute flex items-center h-full left-0 top-0 rounded-xl bg-gradient-to-r from-[#151515] to-rgba(21, 21, 21, 0.00)  ">
          <div className="text-white md:w-1/2 py-4 pl-8  md:pl-20">
            <h5 className="text-lg w-full ">Movie Name</h5>
            <p className="text-xs lg:text-lg w-full font-normal my-2">
                Run time | Publish Year | Category
            </p>
            <p className="text-xs lg:text-lg w-full font-normal ">
              When two prized jackfruits disappear from a politicians garden, a
              spirited cops investigation takes an unexpected turn as she digs
              for the truth.
            </p>
            <h6 className="mt-2 text-lg">Actors: Sanya Malhotra, Anant Joshi, Vijay Raaz</h6>
            <Link
            href={"/#"}
            className="w-1/3 bg-[#6D28D9 bg-red-600 mt-8 font-semibold text-lg drop-shadow-md text-white transition-all hover:scale-95 ease-in-out duration-200 py-2 px-4 rounded-xl flex items-center justify-center hover:bg-transparent"
          >
            Watch Now
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
