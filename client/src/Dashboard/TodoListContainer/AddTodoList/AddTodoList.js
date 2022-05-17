import React,{useState} from 'react'
import Styles from '../Styles'
import axios from 'axios'
function AddTodoList({setGetTodos, setShowBlueScreen, setShowAddTodoList}) {
  const [TodoListName, setTodoListName] = useState('');
  function addTodoList(){
    if(TodoListName.length > 0){
      let data = {
        todoListName: TodoListName
      }
      axios.post('/todolist',data,{withCredentials: true}).then((res)=>{
        if(res.status ==200) setGetTodos(true);
        setTodoListName('');
        setShowBlueScreen(false);
        setShowAddTodoList(false);
      })     
    }
  }
  const handleKeyPress = (event) => {
    if(event.key === 	'Enter'){
      addTodoList();
    }
  }
  return (
    <div style = {Styles.AddTodoListDiv}>
                <input onKeyPress={(e) => {handleKeyPress(e)}} onChange={(e) => {setTodoListName(e.target.value)}} value={TodoListName} type='text' style={Styles.AddTodoText} placeholder='Add a TodoListName...'/>
                <button onClick={() => {addTodoList()}} style={Styles.AddTodoButton}>+</button>
            </div>
  )
}

export default AddTodoList