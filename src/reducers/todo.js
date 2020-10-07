import { ADD_TODO, CLEAR_TODO, TOGGLE_TODO } from "../constants/action-types";

const storedTodo = JSON.parse(localStorage.getItem('todos')) || []

export const todo = (state = storedTodo, action) => {
    switch (action.type) {
        case ADD_TODO:
            localStorage.setItem('todos', JSON.stringify([...state, action.payload]))
            return [...state, action.payload]

        case CLEAR_TODO:
            localStorage.removeItem('todos')
            return []

        case TOGGLE_TODO:
            let modifiedState = state.map(todo => {
                if (todo.id === action.id){
                    return Object.assign({}, todo, {completed: !todo.completed})
                }
                return todo
            })
            localStorage.setItem('todos', JSON.stringify(modifiedState))
            return modifiedState
        default:
            return state
    }
};
