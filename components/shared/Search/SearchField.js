// // import { IoMdSearch } from "react-icons/io";

// // function SearchField() {
// //   return (
// //     <form class="relative mx-auto w-max">
// //       <input
// //         type="search"
// //         placeholder="Search by name.."
// //         className="peer cursor-pointer relative z-10 h-12 w-5 rounded-full border-2 border-orange-500 bg-transparent pl-12 outline-none focus:w-full focus:cursor-text focus:border-orange-400 focus:pl-16 focus:pr-4 transform duration-200"
// //       />
// //       <IoMdSearch class="absolute inset-y-0 my-auto h-8 w-12 border-r border-transparent stroke-gray-500 px-3.5 peer-focus:border-lime-300 peer-focus:stroke-lime-500 text-4xl text-white" />
// //     </form>
// //   );
// // }

// // export default SearchField;

// import { IoMdSearch } from "react-icons/io";

// function SearchField() {
//   return (
//     <form className="relative mx-auto w-max">
//       <input
//         type="search"
//         placeholder="Search by name.."
//         className="peer cursor-pointer relative z-10 h-12 w-5 rounded-full border-2 border-orange-500 bg-transparent pr-12 outline-none focus:w-full focus:cursor-text focus:border-orange-400 focus:pr-16 focus:pl-4 transform duration-200"
//       />
//       <IoMdSearch className="absolute inset-y-0 my-auto h-8 w-12 right-0 border-l border-transparent stroke-gray-500 px-3.5 peer-focus:border-lime-300 peer-focus:stroke-lime-500 text-4xl text-white transform duration-200" />
//     </form>
//   );
// }

// export default SearchField;

import { IoMdSearch } from "react-icons/io";

function SearchField() {
  return (
    <form className="relative mx-auto w-max">
      <input
        type="search"
        placeholder="Search by name.."
        className="peer cursor-pointer relative z-10 h-12 w-5 rounded-full border-2 border-orange-500 bg-transparent pr-12 outline-none focus:w-full focus:cursor-text focus:border-orange-400 focus:pr-16 focus:pl-4 transform duration-200 transition-all"
      />
      <IoMdSearch className="absolute inset-y-0 my-auto h-8 w-12 right-0 border-l border-transparent stroke-gray-500 pl-2 pr-2.5 py-1 peer-focus:border-lime-300 peer-focus:stroke-lime-500 text-4xl text-white transform duration-200" />
    </form>
  );
}

export default SearchField;
