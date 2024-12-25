import { useState } from "react";
import { useTodo } from "../Contexts";

function TodoForm() {
  // todo is a todo message
  const [input, setInput] = useState("")
  const {addTodo} = useTodo();

  const todoAdd = (e) => {
    e.preventDefault();

    if(!todo) return 
  // id is already given otherwise can be added from here
    addTodo({ todo: input ,completed: false })
    setInput("")
  }

  return (
    <form className="flex" onSubmit={todoAdd}>
      <input
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        value={input}
        onChange={(e) => setInput(e.target.value)}

      />
      <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
        Add
      </button>
    </form>
  );
}

export default TodoForm;

