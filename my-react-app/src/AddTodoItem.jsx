import { useState } from "react";

export default function AddTodoItem({addTodoCallback}) {
    const [todo, setTodo] = useState("");

    function handleTodoChange(event){
        setTodo(event.target.value)
    }

    return(
        <div>
            <input 
                value={todo} 
                placeholder="Enter your todo..."
                onChange={handleTodoChange} />
            <button onClick={() => addTodoCallback(todo, setTodo)}>Enter</button>
        </div>
    )
}