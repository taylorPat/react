export default function ListTodoItems({todoList, deleteTodo, moveUp, moveDown}){
    return(
        <div>
            <ol>
                {todoList.map((todo, index) => (
                        <li className="todo-item" key={index}>
                            {todo}
                            <button onClick={() => deleteTodo(index)}>Delete</button>
                            <button onClick={() => moveUp(index)}>👆</button>
                            <button onClick={() => moveDown(index)}>👇</button>
                        </li>
                        )
                    )}
                </ol>
        </div>
    )
}