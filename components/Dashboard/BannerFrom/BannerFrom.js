"use client";
import { useForm } from "react-hook-form";
import React, { useState } from "react";
import { MultiSelect } from "primereact/multiselect";
import toast from "react-hot-toast";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import axios from "axios";
import { useRouter } from "next/navigation";


const BannerFrom = () => {
 const router = useRouter()
  const [selectedCities, setSelectedCities] = useState([]);
  const [isUrlInputDisabled, setIsUrlInputDisabled] = useState(true); // State to track input field disabled/enabled status
  const [Id, setId] = useState("");

  const cities = [
    { name: "Romantic", code: "NY" },
    { name: "Horor", code: "RM" },
    { name: "Adventure", code: "LDN" },
    { name: "Action", code: "IST" },
    { name: "Comedy", code: "PRS" },
    { name: "Kids", code: "PRS" },
  ];
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const tags = selectedCities.map((item) => item.name);

  const handleCheck = async (event) => {
    event.preventDefault();
    const from = event.target;
    const title = from.name?.value;
    const category = from.category?.value;
    const tag = from.tag?.value;
    // const image = from.image?.value;
    // const videoId = from.videoId?.value;
    // const description = from.description?.value;

    const video = {
      title,
      category,
      tag,
    
    };
    console.log(video);
    axios
      .get(
        `https://vibewabe-server.vercel.app/video?category=${video.category}&tags=${video.tag}`
      )
      .then((res) => {
        console.log(res?.data);
        for (let entry of res.data) {
          console.log(entry?._id);
          console.log(entry?.title)
          if (entry?.title === video?.title) {
            toast.success("done");
            setIsUrlInputDisabled(false);
            setId(entry?._id);
          }
        //   else{
        //     router.push('/dashboard/videoUpload')

        //   }
          //     axios.post('https://vibewabe-server.vercel.app/videoSlider' , video)
          //     .then(res => console.log(res.data))

             console.log(Id)
        }
      });
  };

  const handleAddProduct = async (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.name?.value;
    const category = form.category?.value;
    const tag = form.tag?.value;
    const image = form.image.value;
    const videoId = form.videoId.value;
    const description = form.description.value;

    const video = {  image, description, videoId  ,category,tag,title};

    axios
      .post("https://vibewabe-server.vercel.app/videoSlider", video)
      .then((res) => {
        console.log(res.data);
        toast.success("Video uploaded successfully");
        form.reset(); // Reset form after successful submission
      })
      .catch((error) => {
        toast.error("Failed to upload video");
        console.error(error);
      });
  };

  return (
    <div className="min-h-[400px] bg-white mt-5 pt-5 px-[5%] pb-5">

<h1 className="text-xl text-center font-bold">Check from</h1>
<form onSubmit={handleCheck} className="grid grid-cols-1 md:grid-cols-6 gap-x-3 gap-y-4">

<div className="md:col-span-3">
          <label htmlFor="name" className="font-semibold text-lg">
            Title
          </label>
          <input
            name="name"
            placeholder="Product Name"
            id="name"
            className="w-full bg-[#EBEBEB] py-3 pl-2 text-gray-500 relative flex justify-between items-center focus:outline-none"
          />
        </div>

        <div className="md:col-span-3">
          <label htmlFor="brand" className="font-semibold text-lg">
            Category
          </label>
          <select
            name="category"
            placeholder="Category"
            id="brand"
            className="w-full bg-[#EBEBEB] py-3 pl-2 text-gray-500 relative flex justify-between items-center focus:outline-none"
          >
            {" "}
            <option disabled value="deafult">
              Select Category
            </option>
            <option value={"series"}>series</option>
            <option value={"drama"}>drama</option>
            <option value={"movie"}>movie</option>
          </select>
        </div>

        <div className="md:col-span-3">
          <label htmlFor="brand" className="font-semibold text-lg">
            Tags
          </label>
          <select
            name="tag"
            placeholder="tag"
            id="brand"
            className="w-full bg-[#EBEBEB] py-3 pl-2 text-gray-500 relative flex justify-between items-center focus:outline-none"
          >
            {" "}
            <option disabled value="deafult">
              Select Tags
            </option>
            <option value={"Romantic"}>Romantic</option>
            <option value={"Horor"}>Horor</option>
            <option value={"Adventure"}>Adventure</option>
            <option value={"Action"}>Action</option>
            <option value={"Comedy"}>Comedy</option>
            <option value={"Kids"}>Kids</option>
          </select>
        </div>
        <button className="btn btn-sm">
          check
        </button>

</form>


<h1 className="text-xl text-center my-5 font-bold">Upload Banner</h1>
      <form  onSubmit={handleAddProduct} className="grid grid-cols-1 md:grid-cols-6 gap-x-3 gap-y-4">
      
      <div className="md:col-span-3">
          <label htmlFor="name" className="font-semibold text-lg">
            Title
          </label>
          <input
            name="name"
            disabled={isUrlInputDisabled}
            placeholder="Product Name"
            id="name"
            className="w-full bg-[#EBEBEB] py-3 pl-2 text-gray-500 relative flex justify-between items-center focus:outline-none"
          />
        </div>

        <div className="md:col-span-3">
          <label htmlFor="brand" className="font-semibold text-lg">
            Category
          </label>
          <select
            name="category"
            placeholder="Category"
            id="brand"
            disabled={isUrlInputDisabled}
            className="w-full bg-[#EBEBEB] py-3 pl-2 text-gray-500 relative flex justify-between items-center focus:outline-none"
          >
            {" "}
            <option disabled value="deafult">
              Select Category
            </option>
            <option value={"series"}>series</option>
            <option value={"drama"}>drama</option>
            <option value={"movie"}>movie</option>
          </select>
        </div>

        <div className="md:col-span-3">
          <label htmlFor="brand" className="font-semibold text-lg">
            Tags
          </label>
          <select
           disabled={isUrlInputDisabled}
            name="tag"
            placeholder="tag"
            id="brand"
            className="w-full bg-[#EBEBEB] py-3 pl-2 text-gray-500 relative flex justify-between items-center focus:outline-none"
          >
            {" "}
            <option disabled value="deafult">
              Select Tags
            </option>
            <option value={"Romantic"}>Romantic</option>
            <option value={"Horor"}>Horor</option>
            <option value={"Adventure"}>Adventure</option>
            <option value={"Action"}>Action</option>
            <option value={"Comedy"}>Comedy</option>
            <option value={"Kids"}>Kids</option>
          </select>
        </div>







        <div className="md:col-span-3">
          <label htmlFor="brand" className="font-semibold text-lg">
            Image
          </label>
          <input
            disabled={isUrlInputDisabled}
            name="image"
            placeholder="price"
            id="brand"
            className="w-full bg-[#EBEBEB] py-3 pl-2 text-gray-500 relative flex justify-between items-center focus:outline-none"
          />
        </div>

        <div className="md:col-span-3">
          <label htmlFor="brand" className="font-semibold text-lg">
            VideoId
          </label>
          <input
            name="videoId"
            disabled={isUrlInputDisabled}
            id="brand"
            defaultValue={Id ? Id : ""}
            className="w-full bg-[#EBEBEB] py-3 pl-2 text-gray-500 relative flex justify-between items-center focus:outline-none"
          />
        </div>
      

        <div className="md:col-span-6">
          <label htmlFor="description" className="font-semibold text-lg">
            Description
          </label>
          <textarea
            disabled={isUrlInputDisabled}
            name="description"
            id="description"
            rows="3"
            className="w-full bg-[#EBEBEB] pl-2 pt-4 focus:outline-none"
            placeholder="Product Description"
          ></textarea>
        </div>

        {/* ... Repeat similar structure for other form fields ... */}
        <button
        
        type="submit"
          disabled={isUrlInputDisabled}
          className="active:scale-95 duration-300 bg-black md:col-span-6 text-white py-2 mt-5 font-clashBold"
        >
          Add Product
        </button>
      </form>
    </div>

    
  );
};

export default BannerFrom;
