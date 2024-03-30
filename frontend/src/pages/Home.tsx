import { FaEdit } from "react-icons/fa";
import { MdOutlineEdit } from "react-icons/md";
import Background from "../components/Background";
import Foreground from "../components/Foreground";
import Navbar from "../components/Navbar";
import AddTodoModal from "../components/AddTodoModal";
import { useState } from "react";

const Home = () => {
  const [edit, setEdit] = useState(false);

  const handleEdit = () => {
    setEdit(!edit);
  };

  return (
    <div>
      <Background />
      <div className="grid grid-cols-4 gap-4">
        <div>
          <Navbar />
        </div>
        <div className="col-span-3 relative">
          <div>
            <FaEdit />
          </div>

          <div>{/* <Foreground /> */}</div>

          {/* <div className="absolute left-[79rem] top-[48rem] cursor-pointer"> */}
          <div className="absolute left-[2rem] top-[2rem] cursor-pointer">
            <div className="p-5 rounded-full bg-gray-400 flex justify-center items-center">
              <button onClick={handleEdit}>
                <MdOutlineEdit className="text-[3rem] text-orange-50" />
              </button>
            </div>
          </div>
        </div>
      </div>
      {edit && <AddTodoModal handleEdit={handleEdit} />}
    </div>
  );
};

export default Home;

// import { FaEdit } from "react-icons/fa";
// import { MdOutlineEdit } from "react-icons/md";
// import Background from "../components/Background";
// import Foreground from "../components/Foreground";
// import Navbar from "../components/Navbar";
// import AddTodo from "../components/AddTodo";
// import { useState } from "react";
// import AddTodoModal from "../components/AddTodoModal";

// const Home = () => {
//   const [edit, setEdit] = useState(false);

//   const handleEdit = () => {
//     setEdit(!edit);
//   };

//   return (
//     <div>
//       <Background />

//       <div className="grid grid-cols-4 gap-4">
//         <div>
//           <Navbar />
//         </div>

//         <div className="col-span-3 relative">
//           <div>
//             <FaEdit />
//           </div>
//           <Foreground />

//           <div className="absolute left-[79rem] top-[48rem]">
//             {/* <AddTodo HandleEdit={handleEdit} /> */}
//             <div
//               className="p-5 rounded-full bg-gray-400 flex justify-center items-center cursor-pointer"
//               onClick={handleEdit}
//             >
//               <div className="cursor-pointer">
//                 <MdOutlineEdit className="text-[3rem] text-orange-50" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {edit && <AddTodoModal handleEdit={handleEdit} />}
//     </div>
//   );
// };

// export default Home;
