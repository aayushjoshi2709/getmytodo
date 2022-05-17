import React, {useState} from 'react'
import Todos from './Todos/Todos';
import Styles from './Styles';
import axios from 'axios';
function TodoList({todoList,setGetTodos, setShowBlueScreen}) {
  const [Task, setTask] = useState('');
  function addTodo(){
    if(Task.length > 0){
      let data = {
        todolistid: todoList._id,
        title: Task
      }
      axios.post('/todo',data,{withCredentials: true}).then((res)=>{
        if(res.status ==200) setGetTodos(true);
        setTask('');
      })     
    }
  }
  const handleKeyPress = (event) => {
    if(event.key === 	'Enter'){
      addTodo();
    }
  }
  return (
    <div style={Styles.TodoList}>
        <h3 style={Styles.Heading}>{todoList.name}</h3>
        <div style={Styles.AddTodo}>
            <button  onClick={() => {addTodo()}} style={Styles.AddTodoButton}>+</button>
            <input onKeyPress={(e) => {handleKeyPress(e)}} type='text' value={Task} onChange={(e) =>{ setTask(e.target.value)}} style={Styles.AddTodoText} placeholder='Add a Task...'/>
        </div>
        <Todos todos = {todoList.todos} setGetTodos={setGetTodos} setShowBlueScreen={setShowBlueScreen}/>
        
    </div>
  )
}

export default TodoList