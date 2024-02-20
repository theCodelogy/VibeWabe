
import ChartComponent from "@/components/Dashboard/ChartComponent/ChartComponent";
import ChartTwo from "@/components/Dashboard/ChartTwo";
import OurAdmin from "@/components/Dashboard/OurAdmin/OurAdmin";
import PieChart from "@/components/Dashboard/PieChart/PieChart";
import StatisticsWithAction from "@/components/Dashboard/StatisticsWithAction/StatisticsWithAction ";
import TopMoviesTable from "@/components/Dashboard/TopMoviesTable/TopMoviesTable";
import PieChartMusic from "@/components/PieChartMusci/PieChartMusic";
import React from "react";

const Profile = () => {
  return (
    <div className="text-white">
       <div className="mt-5 text-xl md:text-2xl font-bold bg-gray-600 my-5 min-h-[100px] h-[23vh] flex  justify-center pl-[5%] flex-col gap-3 ">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="text-3xl md:text-4xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                     <path d="M20 2H8a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm-6 2.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM19 15H9v-.25C9 12.901 11.254 11 14 11s5 1.901 5 3.75V15z"></path>
                   <path d="M4 8H2v12c0 1.103.897 2 2 2h12v-2H4V8z">
                   </path>
                </svg>
             <h2 className="font-bold "><span className="bg-gradient-to-r from-red-500 to-yellow-500 text-transparent bg-clip-text">WellCome</span>  to Dashboard</h2>
            </div>
    <StatisticsWithAction/>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

  <PieChart/>
 <PieChartMusic/>
  
  </div>
  <ChartTwo/>
 <OurAdmin/>
 <ChartComponent/>
  {/* <Calender/> */}
  <TopMoviesTable/>

    </div>
  );
};

export default Profile;

// import { authContext } from "@/utils/AuthProvider";
// import { useContext } from "react";
// // import useRole from "../../hooks/useRole";

// const Profile = () => {
//   const { user } = useContext(authContext);
// //   const [role] = useRole();
//   console.log(user);
//   return (
//     <div className="flex justify-center items-center h-screen">
//       <div
//         style={{
//           boxShadow: `
//         -2px -2px 8px rgba(255, 255, 255, 1),
//         -2px -2px 12px rgba(255, 255, 255, 0.5),
//         inset 2px 2px 4px rgba(255, 255, 255, 0.1),
//         2px 2px 8px rgba(0, 0, 0, 0.15)
//       `,
//         }}
//         className="bg-white shadow-lg rounded-2xl w-3/5"
//       >
//         <div className="w-full mb-4 rounded-t-lg h-36 bg-gray-200" />
//         <div className="flex flex-col items-center justify-center p-4 -mt-16">
//           <a href="#" className="relative block">
//             <img
//               alt="profile"
//               src={user?.photoURL}
//               className="mx-auto object-cover rounded-full h-24 w-24  border-2 border-white "
//             />
//           </a>

//           {/* <p className="p-2 px-4 text-xs text-black font-semibold bg-gray-300 rounded-full">
//             {role && role?.toUpperCase()}
//           </p>
//           <p className="mt-2 text-xl font-medium text-gray-800 ">
//             User Id: {user?.uid}
//           </p> */}
//           <div className="w-full p-2 mt-4 rounded-lg">
//             <div className="flex flex-wrap items-center justify-between text-sm text-gray-600 ">
//               <p className="flex flex-col">
//                 Name
//                 <span className="font-bold text-black ">
//                   {user?.displayName}
//                 </span>
//               </p>
//               <p className="flex flex-col">
//                 Email
//                 <span className="font-bold text-black ">{user?.email}</span>
//               </p>

//               <div>
//                 <button className="bg-[#F43F5E] px-10 py-1 rounded-lg text-white cursor-pointer hover:bg-[#af4053] block mb-1">
//                   Update Profile
//                 </button>
//                 <button className="bg-[#F43F5E] px-7 py-1 rounded-lg text-white cursor-pointer hover:bg-[#af4053]">
//                   Change Password
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;