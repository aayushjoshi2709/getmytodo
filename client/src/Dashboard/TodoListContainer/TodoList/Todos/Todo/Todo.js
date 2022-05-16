import React,{useState} from 'react'
import Style from './Style'
import ModifyTodo from './ModifyTodo/ModifyTodo';
function Todo({todo, setGetTodos, setShowBlueScreen}) {
  const [ModifyTodos, setModifyTodos] = useState(false);
  return (
    <>
      {
        ModifyTodos? <>
            <ModifyTodo setGetTodos = {setGetTodos} setModifyTodos={setModifyTodos} setShowBlueScreen={setShowBlueScreen}/>
          </> :null
      }
      <div style={Style.Todo}>
        <button style={Style.TodoButton}></button>
        <span style={Style.TodoText}>{todo.title} </span>
        <button onClick={()=>{
                              setModifyTodos(true); 
                              setShowBlueScreen(true)}
                            } style={Style.TodoEditButton}><i className="fa-solid fa-pen"></i></button>
      </div>
    </>
  )
}

export default Todo