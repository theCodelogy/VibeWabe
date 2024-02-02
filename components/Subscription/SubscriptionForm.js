"use client";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const SubscriptionForm = () => {
  const [category, setCategory] = useState("default");
  const [price, setPrice] = useState(0);

  useEffect(() => {
    // Define your extra prices based on category
    const categoryPrices = {
      video: 8,
      music: 6,
      "video+music": 12,
    };

    // Update the extra price when the category changes
    setPrice(categoryPrices[category] || 0);
  }, [category]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  
  } = useForm();

  const handle = async (data) => {
    const name = data.name;
    const email = data.email;
    const phone = data.phone;

    const subscribeForm = {
      name,
      email,
      category,
      price,
      phone,
    };
    console.log(subscribeForm);

    fetch("https://vibewabe-server.vercel.app/payment", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(subscribeForm),
    })
      .then((res) => res.json())
      .then((data) => {
        window.location.replace(data.url);
        console.log(data);
      });
  };
  return (
    <div className="bg-white text-black md:w-2/3 lg:w-1/3 mx-auto my-8 lg:my-12 rounded-2xl shadow-lg shadow-red-100">
      <form
        onSubmit={handleSubmit((data) => handle(data))}
        className=" px-6 pt-4 pb-6 text-sm "
      >
        <h1 className="text-4xl text-red-500 pt-3 font-bold text-center">
          Subscription Form
        </h1>
        <h3 className="text-lg text-red-400  font-bold text-center mb-4">
          Your Subscription Price: ${price}
        </h3>

        {/* Name & email field */}
        <div className="grid grid-cols-1 ">
          <div className="flex flex-col gap-1 mb-2">
            <label className="text-md font-medium" for="name">
              Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter Your Name"
              {...register("name", { required: "This field is required" })}
              className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 "
            />
            <p className="text-red-700">{errors.name?.message}</p>
          </div>
          {/* email  */}
          <div className="flex flex-col gap-1 mb-2">
            <label className="text-md font-medium" for="email">
              E-mail<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter Your E-mail"
              {...register("email", { required: "This field is required" })}
              className=" w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
            />
            <p className="text-red-700">{errors.email?.message}</p>
          </div>
        </div>
        {/* Name & email field close  */}

        {/* Subscription category & phone */}
        <div className="grid grid-cols-1 ">
          <div className="flex flex-col gap-1 mb-2">
            <label className="text-md font-medium" for="category">
              Subscription Category<span className="text-red-500">*</span>
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              id="category"
              className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 "
              // {...register("category", { required: "This field is required" })}
            >
              <option disabled value="default">
                Select Category
              </option>
              <option value="video">Video</option>
              <option value="music">Music</option>
              <option value="video+music">Video + Music</option>
            </select>
            <p className="text-red-700">{errors.category?.message}</p>
          </div>
          {/* Phone  */}
          <div className="flex flex-col gap-1 mb-2">
            <label className="text-md font-medium" for="phone">
              Phone<span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              placeholder="Enter Your Phone Number"
              {...register("phone", { required: "This field is required" })}
              className=" w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
            />
            <p className="text-red-700">{errors.phone?.message}</p>
          </div>
        </div>
        {/* Subscription category & phone close */}

        <div className=" mt-6">
          <button
            type="submit"
            className="bg-[#6D28D9 bg-gradient-to-r from-red-600 to-zinc-500 font-medium text-lg -md text-white transition-all hover:scale-95 ease-in-out duration-200 py-[10px] px-8 w-full rounded flex items-center justify-center"
          >
            Pay Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default SubscriptionForm;
