import { FILTER_TODO } from "../constants/action-types";

const storedFilter = localStorage.getItem('filters') || 'ALL'

export const filter = (state = storedFilter, action) => {
    switch (action.type) {
        case FILTER_TODO:
            localStorage.setItem('filters', action.filterType)
            return action.filterType
        default:
            return state
    }
}
