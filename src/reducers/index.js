import { combineReducers } from 'redux'
import { todo } from './todo'
import { filter } from './filter'

export const rootReducer = combineReducers({
    todo, // todo is a state object
    filter
})