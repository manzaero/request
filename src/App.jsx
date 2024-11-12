import styles from './app.module.css'
import {useEffect, useState} from "react";


const urlTodos = `https://jsonplaceholder.typicode.com/todos/${1}`

function App() {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        fetch(urlTodos)
            .then((todos) => todos.json())
            .then(todo => {
                setTodos(todo)
                console.log(todo)
            })
    }, [])

    return (<>
            <div className={styles.container}>
                <h2>List todos</h2>
                <ul>
                    <li>{todos.title}</li>
                </ul>
                <button className={styles.btn}>Add</button>
            </div>
        </>)
}

export default App
