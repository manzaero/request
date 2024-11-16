

export const useRequestAddTodo = (urlTodos, setRefresh, refresh) => {
    const addTodo = () => {
        fetch(urlTodos, {
            method: 'POST', headers: {'Content-type': 'application/json'}, body: JSON.stringify({
                "title": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type sp",
                "completed": false
            })
        })
            .then(todo => todo.json())
            .then(todo => {
                console.log(todo)
                setRefresh(!refresh)
            })
    }
    return {
        addTodo,
    }
}