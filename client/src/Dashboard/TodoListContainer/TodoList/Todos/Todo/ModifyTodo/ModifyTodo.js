import React,{useState} from 'react'
import Styles from './Styles'
import axios from 'axios'
function ModifyTodo({setGetTodos, setModifyTodos, setShowBlueScreen}) {
    const [TodoListName, setTodoListName] = useState('');
    function addTodoList(){
      if(TodoListName.length > 0){
        let data = {
          todoListName: TodoListName
        }
        axios.post('/todolist',data,{withCredentials: true}).then((res)=>{
          if(res.status ==200) setGetTodos(true);
          setTodoListName('');
        })     
      }
    }
    return (
      <div style = {Styles.AddTodoListDiv}>
        <div style={Styles.Header}>
          <button onClick={() => {addTodoList()}} style={{...Styles.Button, ...Styles.DeleteButton}}><i class="fa-solid fa-trash-can"></i></button>
          <button onClick={() => {setModifyTodos(false); setShowBlueScreen(false)}} style={{...Styles.Button, ...Styles.CloseButton}}><i class="fa fa-window-close" aria-hidden="true"></i></button>
        </div>
        <div>
          <p>
            Campus Build
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