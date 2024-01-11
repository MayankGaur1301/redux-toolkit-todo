import React from 'react'
import "./App.css"
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

const App = () => {
  return (
    <div>
        <h1 className='text-xl font-semibold'>Todo List with Redux Toolkit</h1>
      <AddTodo />
      <Todos />
    </div>
  )
}

export default App
