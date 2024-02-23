import { IoMdSearch } from "react-icons/io";

function SearchField() {
  return (
    <form class="relative mx-auto w-max">
      <input
        type="search"
        className="peer cursor-pointer relative z-10 h-12 w-5 rounded-full border bg-transparent pl-12 outline-none focus:w-full focus:cursor-text focus:border-lime-300 focus:pl-16 focus:pr-4 transform duration-200"
      />
      <IoMdSearch class="absolute inset-y-0 my-auto h-8 w-12 border-r border-transparent stroke-gray-500 px-3.5 peer-focus:border-lime-300 peer-focus:stroke-lime-500 text-4xl text-white" />
    </form>
  );
}

export default SearchField;
