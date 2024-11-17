import {useEffect, useState} from "react";
import {ref, onValue} from 'firebase/database'
import {db} from "../firebase.js";

export const useRequestGetTodos = (todos, setTodos, urlTodos, refresh) => {

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const todosDbRef = ref(db, 'todos')
        return onValue(todosDbRef, (snapshot) => {
            const getTodos = snapshot.val() || [];
            console.log(getTodos)
            setTodos(getTodos);
            setLoading(false)
        })
    }, [])
    return {
        todos,
        loading
    }
}