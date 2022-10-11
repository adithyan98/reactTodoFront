import React from 'react'
import { useState } from 'react'
import { addNewTodo } from '../actions/todoActions'
import { useDispatch } from 'react-redux'


function TodoForm() {
  const [text, setText] = useState("")

  const dispatch = useDispatch();

  const onFormSubmit = (e) => {
    e.preventDefault()

    dispatch(addNewTodo(text))

    setText('')
  }
  const onInputChange = (e) => {
    setText(e.target.value)
  }
  return (
    <form className='form' onSubmit={onFormSubmit}>
      <input
        placeholder='Enter new Todo...'
        className='input'
        onChange={onInputChange}
        value={text}
      />

    </form>
  )
}

export default TodoForm