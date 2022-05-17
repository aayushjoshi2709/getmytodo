 import React,{useState} from 'react'
import Styles from './Styles';
import TodoList from './TodoList/TodoList';
import AddTodoList from './AddTodoList/AddTodoList';
function TodoListContainer({TodoLists, setGetTodos}) {
  const [ShowAddTodoList, setShowAddTodoList] = useState(false);
  const [ShowBlueScreen, setShowBlueScreen] = useState(false);
  return (
    <>
        {

            ShowBlueScreen? <div style={Styles.blue} onClick= {()=>{setShowAddTodoList(false); setShowBlueScreen(false)}}></div> :null        
        }
        {
            ShowAddTodoList?<AddTodoList setGetTodos = {setGetTodos} setShowBlueScreen={setShowBlueScreen} setShowAddTodoList= {setShowAddTodoList}/>:null
        }
        <div style={Styles.TodoListContainer}>
            {
              
              TodoLists !== undefined ?Object.keys(TodoLists).map((keys, idx) => {
                return <TodoList key={TodoLists[idx]._id} todoList = {TodoLists[idx]} setGetTodos = {setGetTodos} setShowBlueScreen={setShowBlueScreen} setShowAddTodoList= {setShowAddTodoList}/>
              }):''
            }  
        </div>
        <button style={Styles.AddTodoList} onClick= {()=>{setShowAddTodoList(true); setShowBlueScreen(true)}}>
                +
        </button>
    </>

  )
}

export default TodoListContainer