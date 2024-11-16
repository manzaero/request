import styles from './app.module.css'
import { useState } from "react";
import {
    useRequestAddTodo,
    useRequestGetTodos,
    useRequestDeleteTodo,
    useRequestUpdateTodo,
    useRequestSearchTitle
} from "./hooks/index.js";


const urlTodos = `http://localhost:3000/todos`

export const App = function () {
    const [refresh, setRefresh] = useState(false)
    const [todos, setTodos] = useState([])

    const {searchHandler, filteredAndSorted, searchTitle, sortState, sortTodos} = useRequestSearchTitle( todos )
    const {addTodo} = useRequestAddTodo(urlTodos, setRefresh, refresh)
    const { loading} = useRequestGetTodos(todos, setTodos, urlTodos, refresh);
    const { deleteTodo } = useRequestDeleteTodo( urlTodos, setRefresh, refresh);
    const {updateTodos} = useRequestUpdateTodo(urlTodos, setRefresh, refresh);

    return (<>
        <div className={styles.container}>
            <h2>List todos</h2>
            <input type="text"
                   className={styles.searchInput}
                   value={searchTitle}
                   onChange={searchHandler}
            />
            {loading ? <div className={styles.loader}></div> : filteredAndSorted.length === 0 ?
                <div className={styles.wrong}>Todos not found</div> : <ul>
                    {filteredAndSorted.map((todo) => (<div key={todo.id} className={styles.flex}>
                        <li key={todo.id}>{todo.title}</li>
                        <button
                            className={styles.btn}
                            onClick={() => updateTodos(todo.id)}
                        >Update
                        </button>
                        <button
                            className={styles.btn}
                            onClick={() => deleteTodo(todo.id)}
                        >Delete
                        </button>
                    </div>))}
                </ul>}
            <button
                className={styles.btn}
                onClick={addTodo}
            >Add
            </button>
            <button
                className={styles.btn}
                onClick={sortTodos}
                disabled={todos.length === 0}
            >{!sortState ? 'Sort' : 'Unsorted'}
            </button>
        </div>
    </>)
}

