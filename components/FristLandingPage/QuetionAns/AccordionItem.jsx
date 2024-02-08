import { Collapse } from "react-collapse";
import { FiMinusCircle } from "react-icons/fi";
import { FiPlusCircle } from "react-icons/fi";

const AccordionItem = ({ open, toggle, title, description }) => {
  return (
    <div className="border-b-[1px] border-gray-500 text-gray-200">
      <div
        className={` py-5 px-10 flex justify-between items-center cursor-pointer hover:bg-gradient-to-r from-red-600 to-orange-500 active:bg-gradient-to-r from-red-600 to-orange-500 ${
          open ? "bg-gradient-to-r from-red-600 to-orange-500 rounded-b-lg" : ""
        }`}
        onClick={toggle}
      >
        <p className={`text-lg font-semibold `}>{title}</p>
        <div className="text-lg text-white">
          {open ? <FiMinusCircle /> : <FiPlusCircle />}
        </div>
      </div>
      <Collapse isOpened={open}>
        <div className="text-white px-10 pb-10">{description}</div>
      </Collapse>
    </div>
  );
};

export default AccordionItem;
