import React from 'react'
import Style from './Style'
function Todo() {
  return (
    <div style={Style.Todo}>
      <button style={Style.TodoButton}></button>
      <span style={Style.TodoText}>Todo </span>
      <button style={Style.TodoEditButton}><i class="fa-solid fa-pen"></i></button>
    </div>
  )
}

export default Todo