import { useState } from "react";

function TodoList(){
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
        </div>
    )
}

export default TodoList