import React from 'react';
import { RiTodoLine } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import { FaExpand } from "react-icons/fa";
import comment from "../assets/comment.svg";

const Card = () => {
  return (
    <div className="w-72 h-80 rounded-[30px] bg-zinc-700 text-white px-5 py-6 relative overflow-hidden">
      <RiTodoLine size={36} />

      <p className="text-md leading-tight mt-5 font-semibold">
        Lorem ipsum dolor sit, amet conser adipisicing.
      </p>

      <div className="footer absolute bottom-0 left-0  w-full h-16 flex justify-around">
        <div>
          <button>
            {/* <img src={comment} alt="comment" className="w-10 h-8 text-white" /> */}
            <FaEdit size={28} />
          </button>
        </div>
        <div className="">
          <button>
            <FaExpand size={28} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card