import React from 'react'
import { connect } from 'react-redux'
import TodoItem from './TodoItem'

//---------- MAPPING STATES TO PROPS ---------------------

const mapStateToProps = (state) => {
  return {
    todo: state.todo,
    filter: state.filter
  }
}


//------------  TODO LIST COMPONENT -------------------------

const TodoList = ({todo, filter}) => {

  const displayTodo = (todos, filterType) => {
    switch (filterType) {
      case 'ALL':
        return todos
      case 'ACTIVE':
        return todos.filter(todo => todo.completed === false)
      case 'COMPLETED':
        return todos.filter(todo => todo.completed === true)
      default:
        break
    }
  }

  let filteredTodo = displayTodo(todo, filter)

  return (
    <div id='todo-container' className='w-full mx-auto mt-10'>
      { 
        filteredTodo.length > 0 ? filteredTodo.map(singleTodo => {
          return (<TodoItem key={singleTodo.id} todo ={singleTodo} />)
          }
        ) : filter === 'ALL' ? <span className='w-full text-gray-500 inline-block text-center'>NOTHING ADDED YET</span>:
                               <span className='w-full text-gray-500 inline-block text-center'>NOTHING {filter} TO SHOW</span>
      }
    </div>
  )
}

export default connect(mapStateToProps, null)(TodoList)
