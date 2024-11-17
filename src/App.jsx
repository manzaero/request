import styles from './app.module.css'
import {useState} from "react";
import {
    useRequestAddTodo,
    useRequestDeleteTodo,
    useRequestGetTodos,
    useRequestSearchTitle,
    useRequestUpdateTodo
} from "./hooks/index.js";


const urlTodos = `http://localhost:3000/todos`

export const App = function () {

    const [refresh, setRefresh] = useState(false)
    const [todos, setTodos] = useState([])

    const {searchHandler, filteredAndSorted, searchTitle, sortState, sortTodos} = useRequestSearchTitle(todos)
    const {addTodo, newTodo, setTodo} = useRequestAddTodo(urlTodos, setRefresh, refresh)
    const {loading} = useRequestGetTodos(todos, setTodos, urlTodos, refresh);
    const {deleteTodo} = useRequestDeleteTodo(urlTodos, setRefresh, refresh);
    const {updateTodos} = useRequestUpdateTodo(urlTodos, setRefresh, refresh);

    return (<>
        <div className={styles.container}>
            <h2>List todos</h2>
            <input type="text"
                   placeholder="Search..."
                   className={styles.searchInput}
                   value={searchTitle}
                   onChange={searchHandler}
            />
            <input type="text"
                   className={styles.addTodo}
                   placeholder="Add Todo"
                   value={newTodo}
                   onChange={setTodo}
            />
            {loading ? <div className={styles.loader}></div> : filteredAndSorted.length === 0 ?
                <div className={styles.wrong}>Todos not found</div> : <ul>
                    {Object.entries(filteredAndSorted).map(([id, { title }]) => (<div key={id} className={styles.flex}>
                        <li key={id}>{title}</li>
                        <button
                            className={styles.btn}
                            onClick={() => updateTodos(id)}
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
                disabled={!newTodo}
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

