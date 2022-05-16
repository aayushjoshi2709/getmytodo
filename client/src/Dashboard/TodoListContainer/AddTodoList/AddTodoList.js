import React,{useState} from 'react'
import Styles from '../Styles'
import axios from 'axios'
function AddTodoList({setGetTodos}) {
  const [TodoListName, setTodoListName] = useState('');
  function addTodoList(){
    if(TodoListName.length > 0){
      let data = {
        todoListName: TodoListName
      }
      axios.post('/todolist',data,{withCredentials: true}).then((res)=>{
        console.log(res.status)
        if(res.status ==200) setGetTodos(true);
        setTodoListName('');
      })     
    }
  }
  return (
    <div style = {Styles.AddTodoListDiv}>
                <input onChange={(e) => {setTodoListName(e.target.value)}} value={TodoListName} type='text' style={Styles.AddTodoText} placeholder='Add a TodoListName...'/>
                <button onClick={() => {addTodoList()}} style={Styles.AddTodoButton}>+</button>
            </div>
  )
}

export default AddTodoList