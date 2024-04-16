import { useState } from "react";
import AddTodoItem from "./AddTodoItem";
import ListTodoItems from "./ListTodoItems";

function TodoList(){
    const [todoList, setTodoList] = useState([]);

    const addTodoCallback = (todo, setTodo) => {
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
            <AddTodoItem addTodoCallback={addTodoCallback}/>
            <ListTodoItems 
                todoList={todoList} 
                deleteTodo={deleteTodo}
                moveUp={moveUp}
                moveDown={moveDown}
            />
        </div>
    )
}

export default TodoList