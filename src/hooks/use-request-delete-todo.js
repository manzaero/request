import { ref, remove} from 'firebase/database'
import {db} from "../firebase.js";

export const useRequestDeleteTodo = (urlTodos, setRefresh, refresh) => {

    const deleteTodo = (id) => {
        const todosDbRef = ref(db, `todos/${id}`)
        remove(todosDbRef)
            .then(todo => {
                console.log(todo)
                setRefresh(!refresh);
            })
            .catch(err => {
                console.error('Error:', err)
            })
    }
    return {
        deleteTodo
    }
}