import { MdOutlineEdit } from "react-icons/md";

const AddTodo = ({ HandleEdit }) => {
  return (
    <div
      className="p-5 rounded-full bg-gray-400 flex justify-center items-center cursor-pointer"
      onClick={() => {
        HandleEdit;
        console.log("cliccck");
      }}
    >
      <div className="cursor-pointer">
        <MdOutlineEdit className="text-[3rem] text-orange-50" />
      </div>
    </div>
  );
};

export default AddTodo;
