import { useState } from "react";

function TodoList(){
    const [todo, setTodo] = useState("");
    const [todoList, setTodoList] = useState([]);

    function handleTodoChange(event){
        setTodo(event.target.value)
    }

    function addTodo(){
        setTodoList(t => [...t, todo]);
        setTodo("");
    }

    function deleteTodo(index) {
        setTodoList(t => t.filter((_, i) => i !== index))
    }

    function moveUp(index) {
        if (index > 0) {
            [todoList[index-1], todoList[index]] = [todoList[index], todoList[index-1]];
            setTodoList(() => [...todoList])
        }
    }

    function moveDown(index) {
        if (index < todoList.length - 1) {
            [todoList[index+1], todoList[index]] = [todoList[index], todoList[index+1]];
            setTodoList(() => [...todoList])
        }
    }

    return(
        <div>
            <input 
                value={todo} 
                placeholder="Enter your todo..."
                onChange={handleTodoChange} />
            <button onClick={addTodo}>Enter</button>

            <div>
                <ol>
                    {todoList.map((todo, index) => (
                            <li className="todo-item" key={index}>{todo}
                            <button onClick={() => deleteTodo(index)}>Delete</button>
                            <button onClick={() => moveUp(index)}>Up</button>
                            <button onClick={() => moveDown(index)}>Down</button></li>
                            )
                        )}
                </ol>
            </div>
        </div>
    )
}

export default TodoList