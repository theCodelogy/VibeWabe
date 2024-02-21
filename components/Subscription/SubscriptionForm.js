"use client";
import { useContext, useEffect, useState } from "react";
import { useSearchParams } from 'next/navigation'
import { authContext } from "@/utils/AuthProvider";



const SubscriptionForm = () => {
  const { user} = useContext(authContext);


  const [price, setPrice] = useState(0);
 
  const selectdePlan = useSearchParams().get('plan')
  

  useEffect(() => {
    if(selectdePlan==='basic'){
      setPrice(30)
    }else if(selectdePlan==='reguler'){
      setPrice(50)
    }else if(selectdePlan==='populer'){
      setPrice(99)
    }

  }, [user,selectdePlan]);

  

  const handleSubmit = (e) => {
    e.preventDefault()
    const from = e.target
    const name = from.name.value;
    const email = from.email.value;
    const phone = from.phone.value;

    const subscribeData = {
      name,
      email,
      price,
      phone,
      package:selectdePlan,
      duration: selectdePlan==='basic'&& 3  || selectdePlan==='reguler'&& 6 || selectdePlan==='populer'&& 12
    };
   

    fetch("https://vibewabe-server.vercel.app/payment", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(subscribeData),
    })
      .then((res) => res.json())
      .then((data) => {
        window.location.replace(data.url);
        console.log(data);
      });

  }

  return (
    <div className="bg-gray-100 text-black md:w-2/3 lg:w-1/3 mx-auto my-5 lg:my-5 rounded-md shadow shadow-red-100">
      <form
        onSubmit={handleSubmit}
        className=" px-6 pt-4 pb-6 text-sm "
      >
        <h1 className="text-4xl bg-gradient-to-r from-red-500 to-yellow-500 text-transparent bg-clip-text font-bold pt-3  text-center">
          Checkout
        </h1>
        <p className="uppercase text-center mt-2 text-lg font-medium text-gray-700">{selectdePlan} Package</p>
        <p className="text-center  text-base text-gray-700">Duration :{selectdePlan==='basic'&& '3 Month' || selectdePlan==='reguler'&& '6 Month' || selectdePlan==='populer'&& '1 Year'} </p>

        {/* Name & email field */}
        <div className="grid grid-cols-1 ">
          <div className="flex flex-col gap-1 mb-4">
            <label className="text-md font-medium mb-2" for="name">
              Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              defaultValue={user?.displayName}
              required
              className=" drop-shadow w-full px-3 py-4 rounded font-medium bg-white border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white "
            />
          </div>
          {/* email  */}
          <div className="flex flex-col gap-1 mb-4">
            <label className="text-md font-medium mb-2" for="email">
              E-mail<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              Value={user?.email}
              readOnly
              required
              className=" drop-shadow w-full px-3 py-4 rounded font-medium bg-white border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white "
            />

          </div>
        </div>
        {/* Name & email field close  */}

        {/* Phone  */}
        <div className="flex flex-col gap-1 mb-4">
            <label className="text-md font-medium mb-2" for="phone">
              Phone<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="phone"
              placeholder="Enter Your Phone Number"
              name="pnone"
              required
              className="drop-shadow w-full py-4 px-3 rounded font-medium bg-white border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white "
            />

          </div>

       <div className="flex justify-between items-center mb-3">
       <div className="flex flex-col gap-1 mb-2">
            <label className="text-md font-medium text-black mb-1" for="copun">
              Copun
            </label>
            <input
              type="text"
              id="copun"
              placeholder="Enter Your Copun"
              className="py-3 px-3 bg-white border border-gray-200 placeholder-gray-500  drop-shadow rounded "
            />

          </div>
       <p className="text-lg mt-4 mr-2 ">Subtotal : <span className="text-[#ef573b] font-bold">{price}$</span></p>
       </div>

        <div className=" mt-6">
          <button
            type="submit"
            className="bg-[#6D28D9 bg-gradient-to-r from-red-500 to-yellow-500  font-medium text-lg -md text-white transition-all hover:scale-95 ease-in-out duration-200 py-[10px] px-8 w-full rounded flex items-center justify-center"
          >
            Pay Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default SubscriptionForm;
