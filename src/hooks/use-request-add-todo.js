import {useState} from "react";
import { ref, push } from 'firebase/database'
import {db} from '../firebase.js'

export const useRequestAddTodo = () => {
    const [newTodo, setNewTodo] = useState('')

    const setTodo = (e) => {
        setNewTodo(e.target.value)
    }

    const addTodo = () => {
        if  (!newTodo.trim()) return
        const todosDbRef = ref(db, 'todos')
        push(todosDbRef, {
            title: newTodo
        })
            .then(todo => {
                console.log(todo)
                setNewTodo('')
            })
            .catch(err => {
                console.error('Error:', err)
            })
    }
    return {
        addTodo,
        newTodo,
        setTodo
    }
}