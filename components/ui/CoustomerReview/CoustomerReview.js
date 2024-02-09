'use client'
import { authContext } from '@/utils/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import ReactStars from "react-rating-stars-component";

const CoustomerReview = ({id}) => {
  const { user } = useContext(authContext);
  // const ratingChanged = (newRating) => {
  //   console.log(newRating);
  // };
//  console.log(id)

 const [currentTime, setCurrentTime] = useState(new Date());

 useEffect(() => {
   const timer = setInterval(() => {
     setCurrentTime(new Date());
   }, 1000);

   return () => clearInterval(timer);
 }, []);

 const formattedDate = currentTime.toLocaleDateString();
// console.log(formattedDate)



const [comments, setComment] = useState([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
  axios
    .get(`https://vibewabe-server.vercel.app/videoComment/individual/${id}`)
    .then((res) => {
      setComment(res.data);
      setLoading(false);
    })
    .catch((error) => {
      console.error("Error fetching comments:", error);
      setLoading(false);
    });
}, [id]);




  const handle = async (event) => {
    event.preventDefault()
    const from = event.target;
    const videoId = id;
    const email = user.email
    const content = from.feedback.value
    const time = formattedDate
    from.reset()

    const allData = {videoId,email,content,time}
    console.log({videoId ,email ,content,time})




    axios.post('https://vibewabe-server.vercel.app/videoComment',allData)
    .then(res => {
      console.log(res.data)
    })

      }


 

  

  return (
//     <div className='my-10 '>

//       <h1 className='text-xl font-bold text-center text-white'>Coustomer Review</h1>
//       <div class=" py-6 sm:py-8 lg:py-12">
//         <div class="mx-auto max-w-screen-xl px-4 md:px-8">
//           <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">

//             <div>




//               <form onSubmit={handle} className="max-w-md mx-auto p-6  border rounded-lg shadow-lg">
//                 <h2 className="text-2xl font-bold mb-6 text-gray-100">Comment Form</h2>




//                 {/* <div className="">
//                   <label className="block text-gray-200 font-bold mb-2" htmlFor="feedback">
//                     Give Rating:
//                   </label>
//                   <ReactStars
//                     count={5}
//                     onChange={ratingChanged}
//                     size={24}
//                     isHalf={true}
//                     emptyIcon={<i className="far fa-star"></i>}
//                     halfIcon={<i className="fa fa-star-half-alt"></i>}
//                     fullIcon={<i className="fa fa-star"></i>}
//                     activeColor="#FF0000"
//                   />,
//                 </div> */}


//                 <div className="mb-4">
//                   <label className="block text-gray-200 font-bold mb-2" htmlFor="feedback">
//                     Comment:
//                   </label>
//                   <textarea
//                     className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
//                     id="feedback"
//                     rows="5"
//                     placeholder="Enter your feedback"
//                     name='feedback'
//                   ></textarea>





//                 </div>


//                 <button
//                   className="bg-gradient-to-r from-red-600 to-zinc-500 hover:bg-gradient-to-r from-red-600 to-zinc-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//                   type="submit"
//                 >
//                   Submit
//                 </button>
//               </form>













//             </div>


//             <div class="lg:col-span-2 overflow-y-auto h-80">
//               <div class="border-b pb-4 md:pb-6 ">
//                 <h2 class="text-lg font-bold text-gray-200 lg:text-xl">Top Reviews</h2>
//               </div>

//               <div class="divide-y ">

//               {comment.map(data =>   <div key={data.videoId} class="flex flex-col gap-3 py-4 md:py-8">
//                   <div>
//                     <span class="block text-sm font-bold text-white">{data.email}</span>
//                     <span class="block text-sm text-gray-200">August 28, 2021</span>
//                   </div>

//                   <p class="text-gray-200">{data.content}</p>
//                 </div>
// )}



//               </div>

//               <div class="border-t pt-6">
//                 <a href="#" class="flex items-center gap-0.5 font-semibold text-indigo-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Read all reviews</a>
//               </div>
//             </div>

//           </div>
//         </div>
//       </div>



//     </div>
<div className="  rounded-lg  p-2 my-4 mx-6">



<form onSubmit={handle}>

 
  <div className="w-full px-3 ">
    <textarea
      className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
      name='feedback'
      placeholder="Type Your Comment"
      required
    ></textarea>
  </div>

  <div className="w-full flex justify-end px-3">
    <input
      type="submit"
      className="px-2.5 py-1.5 rounded-md text-white text-sm bg-gradient-to-r from-red-600 to-orange-500"
      value="Post Comment"
    />
  </div>
</form>


<div className="flex border flex-col h-64 overflow-y-auto">
        {loading ? (
          <div className="p-3 ml-3 my-3 text-gray-400">Loading comments...</div>
        ) : comments.length === 0 ? (
          <div className="p-3 ml-3 my-3 text-gray-400">No comments yet.</div>
        ) : (
          comments.map((data) => (
            <div key={data.videoId} className="rounded-md p-3 ml-3 my-3">
              <div className="flex gap-3 items-center">
                <h3 className="font-bold text-gray-100">{data.email}</h3>
                <p className="block text-sm text-gray-500">{data.time}</p>
              </div>
              <p className="text-gray-200 mt-2">{data.content}</p>
            </div>
          ))
        )}
      </div>

</div>
  );
};

export default CoustomerReview;