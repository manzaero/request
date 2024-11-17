import {ref, set} from  'firebase/database'
import {db} from "../firebase.js";

export const useRequestUpdateTodo = (urlTodos, setRefresh, refresh) => {

    const updateTodos = (id) => {
        const todosDbRef = ref(db, `todos/${id}`)
        set(todosDbRef, {
            title: 'updated'
        })
            .then(todo => {
                console.log(todo)
                setRefresh(!refresh);
            })
            .catch(err => {
                console.error('Error:', err)
            })
    }
    return {
        updateTodos,
    }
}