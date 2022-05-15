import React from 'react'
import Styles from './Styles';
import TodoList from './TodoList/TodoList';
function TodoListContainer() {
  return (
    <div style={Styles.TodoListContainer}>
        <TodoList/>
        <TodoList/>
        <TodoList/>
        <TodoList/>
        <TodoList/>
        <TodoList/>    
        <button style={Styles.AddTodoList}>
            +
        </button>
    </div>

  )
}

export default TodoListContainer