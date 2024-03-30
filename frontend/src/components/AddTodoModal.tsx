import { IoCloseSharp } from "react-icons/io5";
import { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { sourceAtom, todoAtom } from "../atom";

const AddTodoModal = ({ handleEdit }) => {
  const [todos, setTodo] = useRecoilState(todoAtom);
  const [todoText, setTodoText] = useState("");
  const source = useRecoilValue(sourceAtom);

  const postTodo = async () => {
    const response = await fetch(`${source}/data/todo/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        userId: localStorage.getItem("userId"),
        todo: todoText,
        isCompleted: false,
      }),
    })
      .then((response) => response.json())
      .then((newTodo) => {
        // Update the state with the new todo item
        setTodo([...todos, newTodo]);
      });
  };

  return (
    <div className="fixed inset-0 bg-opacity-30 backdrop-blur-sm flex flex-col justify-center items-center z-10">
      <div className=" gap-3 flex flex-col">
        <button onClick={handleEdit} className="place-self-end">
          <IoCloseSharp size={"3.5rem"} className="text-white" />
        </button>

        <div className="min-h-[25rem] min-w-[40rem] bg-gray-100 border-transparent rounded-[5rem] shadow-2xl flex flex-col items-center">
          <div className="pb-10">
            <h2 className="text-3xl font-semibold pt-10">Add Todo</h2>
          </div>

          <form action="post">
            <div className="pb-7">
              <input
                onChange={(e) => setTodoText(e.target.value)}
                // setTodo([
                //   ...todo,
                //   {
                //     id: todo.length + 1,
                //     text: e.target.value,
                //     completed: false,
                //   },
                // ])

                className="p-3 w-[25rem] h-[7rem] rounded-xl border-transparent shadow-md"
                type="text"
                name="todo"
                id="todo"
                placeholder="Add todo"
              ></input>
            </div>

            <div className="pt-10 ml-36">
              <button
                onClick={() => {
                  postTodo();
                  handleEdit();
                }}
                className="bg-blue-400 hover:bg-blue-600 hover:text-white px-8 p-3 rounded-xl shadow-md text-xl"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddTodoModal;
