import { ADD_TODO, CLEAR_TODO, FILTER_TODO, TOGGLE_TODO } from "../constants/action-types";

export const addTodo = (payload) => ({
    type: ADD_TODO,
    payload
});

export const clearTodo = () => ({
    type: CLEAR_TODO,
})

export const toggleTodo = (id) => ({
    type: TOGGLE_TODO,
    id
})

export const filterTodo = (filterType) => {
    return {
        type: FILTER_TODO,
        filterType
    }
}

