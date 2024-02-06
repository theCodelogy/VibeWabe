"use client"
import { MultiSelect } from 'primereact/multiselect';
import toast from "react-hot-toast";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import axios from "axios";
import { useRouter } from 'next/navigation'



const MusicUpdateForm = ({ music }) => {
    const router = useRouter();

    const tagOptions = [
        { name: 'Romantic', code: 'NY' },
        { name: 'Horor', code: 'RM' },
        { name: 'Advencer', code: 'LDN' },
        { name: 'Action', code: 'IST' },
        { name: 'Comedy', code: 'PRS' },
        { name: 'Kids', code: 'PRS' }
    ];


    const handleSubmit = async (e) => {
        e.preventDefault()
        const form = e.target
        const updateMusic = {
            title: form.title.value,
            url: form.url.value,
            category: form.category.value,
            thambnail: form.thambnail.value,
            description: form.description.value,
            rating: form.rating.value,
            language: form.language.value,
            singerName: form.singerName.value,
            date:music.date,
            featured: music.featured ? music.featured : false,
            recommended: music.recommended ? music.recommended : false,
            view: music.view ? music.view : 0
        }


        axios.put(`https://vibewabe-server.vercel.app/music/${music._id}`, updateMusic)
            .then(res => {
                if (res.data.modifiedCount) {
                    toast.success('Successfully Update Video!')
                    router.push('/dashboard/allMusics')
                } else if(res.data){
                    toast.error("Please edit this music")
                }
            })
            .catch(err => console.log(err.message))

  

        
    }



    return (
        <div>
            <div className='bg-white text-black w-full lg:w-2/3 mx-auto mt-3 mb-8'>
                <form onSubmit={handleSubmit} className=" px-6 pt-4 pb-6 text-sm ">
                    <h1 className="text-4xl text-red-500 pt-3 font-bold text-center mb-4">Update Music</h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="flex flex-col gap-1 mb-2">
                            <label className="text-md font-medium" for='title'>
                                Video Title<span className='text-red-500'>*</span>
                            </label>
                            <input type="text" id='title' defaultValue={music?.title} required name="title" className=" py-[13px] px-3 border drop-shadow bg-[#101726] text-white rounded " />
                        </div>

                        <div className="flex flex-col gap-1 mb-2">
                            <label className="text-md font-medium" for='videoUrl'>
                                Video Url<span className='text-red-500'>*</span>
                            </label>
                            <input type="url" id='videoUrl' required name="url" defaultValue={music?.url} className=" py-[13px] px-3 border drop-shadow bg-[#101726] text-white rounded" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="flex flex-col gap-1 mb-2">
                            <label className="text-md font-medium" for='category'>
                                Categoty<span className='text-red-500'>*</span>
                            </label>
                            <select id="category" required name="category" defaultValue={music?.category} className=" py-[13px] px-3 border rounded drop-shadow bg-[#101726] text-white ">
                                <option value={'Classical'}>Classical</option>
                                <option value={'Remix'}>Remix</option>
                                <option value={'Sad'}>Sad</option>
                                <option value={'SaHip-hopd'}>Hip-hop</option>
                                <option value={'Romantic'}>Romantic</option>
                                <option value={'webdding'}>webdding</option>
                            </select>
                        </div>

                        <div className="flex flex-col gap-1 mb-2">
                            <label className="text-md font-medium" for='tages'>
                                Tages<span className='text-red-500'>*</span>
                            </label>
                            <MultiSelect id="tages" options={tagOptions} optionLabel="name"
                                placeholder="Select Tags" className="h-11  bg-[#101726] text-white rounded " />

                        </div>

                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="flex flex-col gap-1 mb-2">
                            <label className="text-md font-medium" for='language'>
                                Language<span className='text-red-500'>*</span>
                            </label>
                            <select id="language" name="language" required defaultValue={music?.language} className=" py-[13px] px-3 border drop-shadow rounded bg-[#101726] text-white ">
                                <option value={'English'}>English</option>
                                <option value={'Bangla'}>Bangla</option>
                                <option value={'Hindi'}>Hindi</option>
                                <option value={'Arabic'}>Arabic</option>
                                <option value={'korean'}>korean</option>
                                <option value={'Spanish'}>Spanish</option>
                            </select>
                        </div>


                        <div className="flex flex-col gap-1 mb-2">
                            <label className="text-md font-medium" for='hero'>
                                Singer Name<span className='text-red-500'>*</span>
                            </label>
                            <input type="text" id='hero' name="singerName" required defaultValue={music?.singerName} className=" py-[13px] px-3 border rounded drop-shadow bg-[#101726] text-white " />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="flex flex-col gap-1 mb-2">
                            <label className="text-md font-medium" for='rating'>
                                Rating<span className='text-red-500'>*</span>
                            </label>
                            <input type="number" max={10} min={1} id="rating" required name="rating" defaultValue={music?.rating} className=" py-[13px] px-3 border drop-shadow rounded bg-[#101726] text-white "></input>

                        </div>


                        <div className="flex flex-col gap-1 mb-2">
                            <label className="text-md font-medium" for='thambnail'>
                                Music Thambnail Url<span className='text-red-500'>*</span>
                            </label>

                            <input type="url" id='thambnail' required name="thambnail" defaultValue={music?.thambnail} className=" py-[13px] px-3 border drop-shadow bg-[#101726] text-white rounded" />
                        </div>
                    </div>

                    <textarea required defaultValue={music?.description} className=" md:mt-6 drop-shadow-lg w-full p-3 bg-[#101726] text-white rounded flex-1" name="description" id="" rows="7"></textarea>


                    <div className=" mt-6">
                        <button type="submit" className="bg-[#6D28D9 bg-gradient-to-r from-red-600 to-zinc-500 font-mdeium text-lg drop-shadow-md text-white transition-all hover:scale-95 ease-in-out duration-200 py-[10px] px-8 w-full rounded flex items-center justify-center">UPDATE</button>
                    </div>


                </form>
            </div>
        </div>

    );
};

export default MusicUpdateForm;