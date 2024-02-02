"use client"
import { useForm } from "react-hook-form"
import React, { useState } from "react";
import { MultiSelect } from 'primereact/multiselect';
import toast from "react-hot-toast";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import axios from "axios";




const VideoUpload = () => {

    const [selectedCities, setSelectedCities] = useState([]);
    const cities = [
        { name: 'Romantic', code: 'NY' },
        { name: 'Horor', code: 'RM' },
        { name: 'Advencer', code: 'LDN' },
        { name: 'Action', code: 'IST' },
        { name: 'Comady', code: 'PRS' },
        { name: 'Kids', code: 'PRS' }
    ];
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm()


    const tags = selectedCities.map(item => item.name)


    const handle = async (data) => {
        const video = {
            title: data.title,
            url: data.url,
            category: data.category,
            tags: tags,
            thambnail: data.thambnail,
            description: data.description,
            rating: data.rating,
            language: data.language,
            hero: data.hero,
            date: new Date().toLocaleDateString('en-US')
        }

        const res = await axios.post('https://vibewabe-server.vercel.app/video', video)
        if (res.data.insertedId) {
            toast.success('Successfully Upload Video!')
            setSelectedCities([])
            reset()
        }
    }


    return (
        <div>
            <div className='bg-white text-black w-full lg:w-2/3 mx-auto mt-3 mb-8'>
                <form onSubmit={handleSubmit((data) => handle(data))} className=" px-6 pt-4 pb-6 text-sm ">
                    <h1 className="text-4xl text-red-500 pt-3 font-bold text-center mb-4">Upload Video</h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="flex flex-col gap-1 mb-2">
                            <label className="text-md font-medium" for='title'>
                                Video Title<span className='text-red-500'>*</span>
                            </label>
                            <input type="text" id='title' placeholder="Enter Video Title" {...register("title", { required: "This field is required" })} className=" py-[13px] px-3 border drop-shadow bg-[#101726] text-white rounded " />
                            <p className="text-red-700">{errors.title?.message}</p>
                        </div>

                        <div className="flex flex-col gap-1 mb-2">
                            <label className="text-md font-medium" for='videoUrl'>
                                Video Url<span className='text-red-500'>*</span>
                            </label>
                            <input type="url" id='videoUrl' placeholder="Enter Video Url" {...register("url", { required: "This field is required" })} className=" py-[13px] px-3 border drop-shadow bg-[#101726] text-white rounded" />
                            <p className="text-red-700">{errors.url?.message}</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="flex flex-col gap-1 mb-2">
                            <label className="text-md font-medium" for='category'>
                                Categoty<span className='text-red-500'>*</span>
                            </label>
                            <select defaultValue='deafult' id="category" {...register("category", { required: "This field is required" })} className=" py-[13px] px-3 border rounded drop-shadow bg-[#101726] text-white ">
                                <option disabled value='deafult' >Select Category</option>
                                <option value={'movie'}>Movie</option>
                                <option value={'series'}>Series</option>
                                <option value={'drama'}>Drama</option>
                            </select>
                            <p className="text-red-700">{errors.category?.message}</p>
                        </div>

                        <div className="flex flex-col gap-1 mb-2">
                            <label className="text-md font-medium" for='tages'>
                                Tages<span className='text-red-500'>*</span>
                            </label>
                            <MultiSelect id="tages" value={selectedCities} onChange={(e) => setSelectedCities(e.value)} options={cities} optionLabel="name"
                                placeholder="Select Tags" className="h-11  bg-[#101726] text-white rounded " />

                        </div>

                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="flex flex-col gap-1 mb-2">
                            <label className="text-md font-medium" for='language'>
                                Language<span className='text-red-500'>*</span>
                            </label>
                            <select defaultValue='deafult' id="language" {...register("language", { required: "This field is required" })} className=" py-[13px] px-3 border drop-shadow rounded bg-[#101726] text-white ">
                                <option disabled value='deafult' >Select Language</option>
                                <option value={'english'}>English</option>
                                <option value={'bangla'}>Bangla</option>
                                <option value={'hindi'}>Hindi</option>
                            </select>
                            <p className="text-red-700">{errors.language?.message}</p>
                        </div>


                        <div className="flex flex-col gap-1 mb-2">
                            <label className="text-md font-medium" for='hero'>
                                Hero Name<span className='text-red-500'>*</span>
                            </label>
                            <input type="text" id='hero' placeholder="Enter Hero Name" {...register("hero",)} className=" py-[13px] px-3 border rounded drop-shadow bg-[#101726] text-white " />
                            <p className="text-red-700">{errors.hero?.message}</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="flex flex-col gap-1 mb-2">
                            <label className="text-md font-medium" for='rating'>
                                Rating<span className='text-red-500'>*</span>
                            </label>
                            <input type="number" defaultValue='1' max={10} min={1} id="rating" {...register("rating", { required: "This field is required" })} className=" py-[13px] px-3 border drop-shadow rounded bg-[#101726] text-white "></input>
                            <p className="text-red-700">{errors.rating?.message}</p>

                        </div>


                        <div className="flex flex-col gap-1 mb-2">
                            <label className="text-md font-medium" for='thambnail'>
                                Video Thambnail Url<span className='text-red-500'>*</span>
                            </label>

                            <input type="url" id='thambnail' placeholder="Enter Thambnail Url" {...register("thambnail", { required: "This field is required" })} className=" py-[13px] px-3 border drop-shadow bg-[#101726] text-white rounded" />
                            <p className="text-red-700">{errors.thambnail?.message}</p>
                        </div>
                    </div>

                    <textarea {...register("description", { required: "This field is required" })} className=" md:mt-6 drop-shadow-lg w-full p-3 bg-[#101726] text-white rounded flex-1" name="description" placeholder="Enter video Description" id="" rows="7"></textarea>


                    <div className=" mt-6">
                        <button type="submit" className="bg-[#6D28D9 bg-gradient-to-r from-red-600 to-zinc-500 font-mdeium text-lg drop-shadow-md text-white transition-all hover:scale-95 ease-in-out duration-200 py-[10px] px-8 w-full rounded flex items-center justify-center">UPLOAD</button>
                    </div>


                </form>
            </div>
        </div>















        // <div className="">
        //     <div className="mt-5 text-xl md:text-2xl font-bold bg-white min-h-[100px] h-[23vh] flex  justify-center pl-[5%] flex-col gap-3 ">
        //         <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="text-3xl md:text-4xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
        //             <path d="M20 2H8a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm-6 2.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM19 15H9v-.25C9 12.901 11.254 11 14 11s5 1.901 5 3.75V15z"></path>
        //             <path d="M4 8H2v12c0 1.103.897 2 2 2h12v-2H4V8z">
        //             </path>
        //         </svg>
        //         <h2 class=" font-clashBold">Video Upload</h2>
        //     </div>



        //     <div className="min-h-[400px] bg-white mt-5 pt-5 px-[5%] pb-5">
        //         <form onSubmit={handleSubmit((data) => handle(data))} className="grid grid-cols-1 md:grid-cols-6 gap-x-3 gap-y-4">

        //             <div className="md:col-span-3">
        //                 <label htmlFor="name" className="font-semibold text-lg">
        //                     Video title
        //                 </label>
        //                 <input
        //                     type="text" id='title' placeholder="Enter Video Title" {...register("title", { required: "This field is required" })}
        //                     className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
        //                 />
        //                 <p className="text-red-700">{errors.title?.message}</p>
        //             </div>

        //             <div className="md:col-span-3">
        //                 <label htmlFor="brand" className="font-semibold text-lg">
        //                     Video url
        //                 </label>
        //                 <input
        //                     type="url" id='videoUrl' placeholder="Enter Video Url" {...register("url", { required: "This field is required" })}
        //                     className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
        //                 />
        //                 <p className="text-red-700">{errors.url?.message}</p>
        //             </div>


        //             <div className="md:col-span-3">
        //                 <label htmlFor="brand" className="font-semibold text-lg">
        //                     Category
        //                 </label>
        //                 <select defaultValue='deafult' id="category" {...register("category", { required: "This field is required" })} className=" w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white ">
        //                     <option disabled value='deafult' >Select Category</option>
        //                     <option value={'movie'}>Movie</option>
        //                     <option value={'series'}>Series</option>
        //                     <option value={'drama'}>Drama</option>
        //                 </select>
        //                 <p className="text-red-700">{errors.category?.message}</p>
        //             </div>


        //             <div className="md:col-span-3">
        //                 <label htmlFor="brand" className="font-semibold text-lg">
        //                     Tags
        //                 </label>
        //                 <MultiSelect id="tages" value={selectedCities} onChange={(e) => setSelectedCities(e.value)} options={cities} optionLabel="name"
        //                     placeholder="Select Tags" className=" bg-[#EBEBEB]  text-gray-500 relative flex justify-between items-center focus:outline-none " />
        //             </div>


        //             <div className="md:col-span-3">
        //                 <label htmlFor="brand" className="font-semibold text-lg">
        //                     language
        //                 </label>
        //                 <select defaultValue='deafult' id="language" {...register("language", { required: "This field is required" })} className=" w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white ">
        //                     <option disabled value='deafult' >Select Language</option>
        //                     <option value={'english'}>English</option>
        //                     <option value={'bangla'}>Bangla</option>
        //                     <option value={'hindi'}>Hindi</option>
        //                 </select>
        //                 <p className="text-red-700">{errors.language?.message}</p>
        //             </div>

        //             <div className="md:col-span-3">
        //                 <label htmlFor="brand" className="font-semibold text-lg">
        //                     Hero Name
        //                 </label>
        //                 <input type="text" id='hero' placeholder="Enter Hero Name" {...register("hero",)} className=" w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white " />
        //                 <p className="text-red-700">{errors.hero?.message}</p>
        //             </div>


        //             <div className="md:col-span-3">
        //                 <label htmlFor="brand" className="font-semibold text-lg">
        //                     Rating
        //                 </label>
        //                 <input type="number" defaultValue='1' max={10} min={1} id="rating" {...register("rating", { required: "This field is required" })} className=" w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white "></input>
        //                 <p className="text-red-700">{errors.rating?.message}</p>
        //             </div>



        //             <div className="md:col-span-3">
        //                 <label htmlFor="brand" className="font-semibold text-lg">
        //                     Thambnail Url
        //                 </label>
        //                 <input type="url" id='thambnail' placeholder="Enter Thambnail Url" {...register("thambnail", { required: "This field is required" })} className=" w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white" />
        //                 <p className="text-red-700">{errors.thambnail?.message}</p>
        //             </div>




        //             <div className="md:col-span-6">
        //                 <label htmlFor="description" className="font-semibold text-lg">
        //                     Description
        //                 </label>
        //                 <textarea
        //                     name="description"
        //                     id="description"
        //                     rows="3"
        //                     className="w-full bg-[#EBEBEB] pl-2 pt-4 focus:outline-none"
        //                     placeholder="Product Description"
        //                 ></textarea>
        //             </div>





        //             {/* ... Repeat similar structure for other form fields ... */}
        //             <button className="active:scale-95 duration-300 bg-red-400 md:col-span-6 text-white py-2 mt-5 font-clashBold">
        //                 Upload Video
        //             </button>
        //         </form>
        //     </div>








        // // </div>
    );
};

export default VideoUpload;