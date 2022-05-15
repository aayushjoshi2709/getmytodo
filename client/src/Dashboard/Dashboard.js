import React from 'react'
import Navbar from './Navbar/Navbar';
import TodoListContainer from './TodoListContainer/TodoListContainer';
function Dashboard() {
  return (
    <>
      <Navbar/>
      <TodoListContainer/>
    </>
  )
}

export default Dashboard