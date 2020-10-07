import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import { v4 as uuidv4 } from 'uuid';

const mapDispatchToProps = (dispatch) => {
  return {
    submit: (todo) => dispatch(addTodo(todo))
  }
}

// ------------- INPUT BOX COMPONENT --------------------------

const InputBox = ({submit}) => {

  const [inputValue, setValue] = useState('')
  
  const handleSubmit = (e) => {
    e.preventDefault()
    let inputID = uuidv4()
    if (inputValue.trim()){
      submit({
        id: inputID,
        text: inputValue,
        completed: false
      })
    }
    setValue('')
  }

  return (
      <div className='mt-8'>
        <form
          onSubmit={handleSubmit} 
          className='w-full flex justify-between'>
          <input  onChange = {(e) => setValue(e.target.value)}  
                  className='w-3/4 w-shadow appearance-none border rounded mr-4 py-2 px-3 focus:outline-none
                              focus:shadow-outline'
                  type="text" name="todo-input" id="todo-input" value={inputValue}
                  placeholder="Add todos..."
          />
          <input  className='px-4 py-2 cursor-pointer rounded font-semibold text-red-500 border border-red-600 
                             hover:bg-red-500 hover:text-white focus:shadow-outline bg-white outline-none' 
                  type="submit" 
                  value="ADD"
          />
        </form>
      </div>
  )
}

export default connect(null, mapDispatchToProps)(InputBox)
