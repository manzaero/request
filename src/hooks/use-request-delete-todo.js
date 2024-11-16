

export const useRequestDeleteTodo = (urlTodos, setRefresh, refresh) => {

    const deleteTodo = (id) => {
        fetch(`${urlTodos}/${id}`, {
            method: 'DELETE'
        })
            .then(todo => todo.json())
            .then(todo => {
                console.log(todo)
                setRefresh(!refresh);
            })
    }
    return {
        deleteTodo
    }
}