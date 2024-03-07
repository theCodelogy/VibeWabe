"use client"
import { useForm } from "react-hook-form"
import React, { useState } from "react";
import { MultiSelect } from 'primereact/multiselect';
import toast from "react-hot-toast";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import axios from "axios";




const MusiUpload = () => {
    const [isNotifying, setIsNotifying]=useState(false)
    const [selectedCities, setSelectedCities] = useState([]);
    const cities = [
        { name: 'Romantic', code: 'NY' },
        { name: 'Horor', code: 'RM' },
        { name: 'Advencer', code: 'LDN' },
        { name: 'ScienceFiction', code: 'IST' },
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
        const music = {
            title: data.title,
            url: data.url,
            category: data.category,
            tags: tags,
            thambnail: data.thambnail,
            description: data.description,
            rating: data.rating,
            language: data.language,
            Singer: data.Singer,
            date: new Date().toLocaleDateString('en-US')
        }

        const res = await axios.post(`https://vibewabe-server.vercel.app/music?notifyingUser=${isNotifying}`, music)
        if (res.data.insertedId) {
            toast.success('Successfully Upload Music!')
            setSelectedCities([])
            reset()
        }
    }


    return (
        <div className='bg-white text-black w-full lg:w-2/3 mx-auto mt-3 mb-8'>
            <form onSubmit={handleSubmit((data) => handle(data))} className=" px-6 pt-4 pb-6 text-sm ">
                <h1 className="text-4xl text-red-500 pt-3 font-bold text-center mb-4">Upload Music</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-1 mb-2">
                        <label className="text-md font-medium" for='title'>
                            Music Title<span className='text-red-500'>*</span>
                        </label>
                        <input type="text" id='title' placeholder="Enter Music Title" {...register("title", { required: "This field is required" })} className=" py-[13px] px-3 border drop-shadow bg-[#101726] text-white rounded " />
                        <p className="text-red-700">{errors.title?.message}</p>
                    </div>

                    <div className="flex flex-col gap-1 mb-2">
                        <label className="text-md font-medium" for='MusicUrl'>
                            Music Url<span className='text-red-500'>*</span>
                        </label>
                        <input type="url" id='MusicUrl' placeholder="Enter Music Url" {...register("url", { required: "This field is required" })} className=" py-[13px] px-3 border drop-shadow bg-[#101726] text-white rounded" />
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
                            <option value={'Classical'}>Classical</option>
                            <option value={'Remix'}>Remix</option>
                            <option value={'Sad'}>Sad</option>
                            <option value={'SaHip-hopd'}>Hip-hop</option>
                            <option value={'Romantic'}>Romantic</option>
                            <option value={'webdding'}>webdding</option>
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
                            <option value={'English'}>English</option>
                            <option value={'Bangla'}>Bangla</option>
                            <option value={'Hindi'}>Hindi</option>
                            <option value={'Arabic'}>Arabic</option>
                            <option value={'korean'}>korean</option>
                            <option value={'Spanish'}>Spanish</option>
                        </select>
                        <p className="text-red-700">{errors.language?.message}</p>
                    </div>


                    <div className="flex flex-col gap-1 mb-2">
                        <label className="text-md font-medium" for='Singer'>
                            Singer Name<span className='text-red-500'>*</span>
                        </label>
                        <input type="text" id='Singer' placeholder="Enter Singer Name" {...register("Singer",)} className=" py-[13px] px-3 border rounded drop-shadow bg-[#101726] text-white " />
                        <p className="text-red-700">{errors.Singer?.message}</p>
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
                            Music Thambnail Url<span className='text-red-500'>*</span>
                        </label>

                        <input type="url" id='thambnail' placeholder="Enter Thambnail Url" {...register("thambnail", { required: "This field is required" })} className=" py-[13px] px-3 border drop-shadow bg-[#101726] text-white rounded" />
                        <p className="text-red-700">{errors.thambnail?.message}</p>
                    </div>
                </div>

                <textarea {...register("description", { required: "This field is required" })} className=" md:mt-6 drop-shadow-lg w-full p-3 bg-[#101726] text-white rounded flex-1" name="description" placeholder="Enter Music Description" id="" rows="7"></textarea>

                <div className="mt-3 ">
                    <input className="cursor-pointer w-4" onChange={() => setIsNotifying(!isNotifying)} id="notification" type="checkbox" />
                    <label className="text-base font-medium ml-1 cursor-pointer" for='notification'>
                        Notifying Users For This Music.
                    </label>
                </div>

                <div className=" mt-6">
                    <button type="submit" className="bg-[#6D28D9 bg-gradient-to-r from-red-600 to-zinc-500 font-mdeium text-lg drop-shadow-md text-white transition-all hover:scale-95 ease-in-out duration-200 py-[10px] px-8 w-full rounded flex items-center justify-center">UPLOAD</button>
                </div>


            </form>
        </div>
    );
};

export default MusiUpload;