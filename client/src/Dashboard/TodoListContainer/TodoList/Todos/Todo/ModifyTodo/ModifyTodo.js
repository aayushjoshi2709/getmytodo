import React,{useState} from 'react'
import Styles from './Styles'
import axios from 'axios'
function ModifyTodo({todo, setGetTodos, setModifyTodos, setShowBlueScreen}) {
    function DeleteTodo(){
      
    }
    return (
      <div style = {Styles.AddTodoListDiv}>
        <div style={Styles.Header}>
          <button onClick={() => {DeleteTodo()}} style={{...Styles.Button, ...Styles.DeleteButton}}><i className="fa-solid fa-trash-can"></i></button>
          <button onClick={() => {setModifyTodos(false); setShowBlueScreen(false)}} style={{...Styles.Button, ...Styles.CloseButton}}><i className="fa fa-window-close" aria-hidden="true"></i></button>
        </div><br></br>
        <div>
          <p>
           {todo.title}
          </p>
          <textarea style={Styles.TextArea}></textarea>
          <p>
            Add Date
          </p>
          <p>
            Move to Another List
          </p>
        </div>
      </div>
    )
  }

export default ModifyTodo