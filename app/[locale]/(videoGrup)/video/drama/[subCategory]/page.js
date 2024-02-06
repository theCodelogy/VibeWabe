// import Filter from "@/components/ui/VideoGrupComponents/DramaCategory/Filter";
import Filter from "@/components/ui/filter/Filter";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page = async ({ params }) => {
  const res = await fetch(
    `https://vibewabe-server.vercel.app/video?category=drama&tags=${params?.subCategory}`,
    {
      cache: "no-cache",
    }
  );
  const data = await res.json();

  const capitalizedSubCategory =
    params?.subCategory?.charAt(0).toUpperCase() + params.subCategory.slice(1);

  return (
    <div className="text-white">
      {/* <Filter /> */}
      <Filter categoryType="drama" />

      <h2 className="text-3xl font-semibold">{capitalizedSubCategory}</h2>

      <div className="grid grid-cols-6 gap-5">
        {data?.map((data) => (
          <Link href={`/video/${data?._id}`}>
            <div className="relative group overflow-hidden">
              <Image
                className="object-cover w-[160px] h-[160px] transform transition-transform duration-300 group-hover:scale-110 rounded-xl"
                src={data?.thambnail}
                width={150}
                height={150}
                alt={data?.title}
                priority={true}
              />
            </div>
            <h5 className="text-center mt-1 text-lg font-semibold">
              {data?.title}
            </h5>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Page;
