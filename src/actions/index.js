export const addTodo = (text) => {

    return {
        type:'ADD_TODO', 
        text: text 
    }

}

export const toggleTodo = (index) => {
    return {
        type:'TOGGLE_TODO',
        index: index
    }
}
