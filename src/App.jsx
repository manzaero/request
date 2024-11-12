import styles from './app.module.css'
import {useEffect, useState} from "react";


const urlTodos = `http://localhost:3000/todos/`

export const App = function () {
    const [todos, setTodos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch(urlTodos)
            .then((todos) => todos.json())
            .then(todo => {
                setTodos(todo)
                console.log(todo)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])

    const addTodo = () => {
        fetch(urlTodos, {
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                "title": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type sp",
                "completed": false
            })
        })
            .then(todo => todo.json())
            .then(todo => {
                console.log(todo)
            })
    }

    return (<>
        <div className={styles.container}>
            <h2>List todos</h2>
            {loading ? <div className={styles.loader}></div> : todos.length === 0 ?
                <div className={styles.wrong}>Todos not found</div>
                : <ul>
                    {todos.map((todo) => (
                        <li key={todo.id}>{todo.title}</li>
                    ))}
                </ul>}
            <button
                className={styles.btn}
                onClick={addTodo}
            >Add</button>
        </div>
    </>)
}

