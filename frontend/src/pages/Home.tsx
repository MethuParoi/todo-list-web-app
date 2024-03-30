import { FaEdit } from "react-icons/fa";
import { MdOutlineEdit } from "react-icons/md";
import Background from "../components/Background";
import Foreground from "../components/Foreground";
import Navbar from "../components/Navbar";
import AddTodoModal from "../components/AddTodoModal";
import { useEffect, useState } from "react";
import { sourceAtom, todoAtom } from "../atom";
import { useRecoilValue } from "recoil";

const Home = () => {
  const [edit, setEdit] = useState(false);
  const source = useRecoilValue(sourceAtom);
  const todoValue = useRecoilValue(todoAtom);
  const [todos, setTodos] = useState([]);

  const handleEdit = () => {
    setEdit(!edit);
  };

  useEffect(() => {
    const fetchTodos = async () => {
      const response = await fetch(`${source}/data/todo/list`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setTodos(data.todos);
        });
    };
    fetchTodos();
  }, [todoValue, source]);

  return (
    <div>
      <Background />
      <div className="grid grid-cols-4 gap-4">
        <div>
          <Navbar />
        </div>
        <div className="col-span-3 relative">
          <div className="ml-[10rem] mt-[1rem]">
            <div className="grid grid-cols-3 gap-4">
              {todos.map((todo) => (
                <Foreground key={todo._id} todo={todo} />
              ))}
            </div>
          </div>

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

