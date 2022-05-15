import React from 'react'
import Todos from './Todos/Todos';
import Styles from './Styles';
function TodoList() {
  return (
    <div style={Styles.TodoList}>
        TodoList
        <Todos/>
        <div style={Styles.AddTodo}>
            <input type='text'/>
            <button style={Styles.AddTodoButton}>+</button>
        </div>
    </div>
  )
}

export default TodoList