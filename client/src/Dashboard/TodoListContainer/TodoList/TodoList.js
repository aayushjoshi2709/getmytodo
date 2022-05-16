import React from 'react'
import Todos from './Todos/Todos';
import Styles from './Styles';
function TodoList() {
  return (
    <div style={Styles.TodoList}>
        <h3 style={Styles.Heading}>TodoList</h3>
        <Todos/>
        <div style={Styles.AddTodo}>
            <button style={Styles.AddTodoButton}>+</button>
            <input type='text' style={Styles.AddTodoText} placeholder='Add a Task...'/>
        </div>
    </div>
  )
}

export default TodoList