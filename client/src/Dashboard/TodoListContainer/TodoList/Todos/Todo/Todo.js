import React, { useState } from "react";
import Style from "./Style";
import ModifyTodo from "./ModifyTodo/ModifyTodo";
import axios from "axios";
function Todo({ todo, setGetTodos, setShowBlueScreen }) {
  function updateCompleted() {
    let data = {
      id: todo._id,
      title: todo.title,
      completed: !todo.completed,
      detail: todo.detail,
      date:todo.date
    };
    axios.put("/todo", data, { withCredentials: true }).then((res) => {
      if (res.status == 200) setGetTodos(true);
    });
  }
  const [ModifyTodos, setModifyTodos] = useState(false);
  return (
    <>
      {ModifyTodos ? (
        <>
          <ModifyTodo
            setGetTodos={setGetTodos}
            setModifyTodos={setModifyTodos}
            setShowBlueScreen={setShowBlueScreen}
            todo = {todo}
          />
        </>
      ) : null}
      <div style={Style.Todo}>
        <button
          style={todo.completed ? Style.TodoButtonCompleted : Style.TodoButton}
          onClick={() => {
            updateCompleted();
          }}
        >
          {todo.completed ? <i style={{color:'#62AC5E'}} className="fa fa-check" aria-hidden="true"></i> : null} 
        </button>

        <span style={todo.completed ? Style.TodoTextCompleted : Style.TodoText}>
          {todo.title}
        </span>
        {!todo.completed?
          <button
            onClick={() => {

              setModifyTodos(true);
              setShowBlueScreen(true);
            }}
            style={Style.TodoEditButton}
          >
            <i className="fa-solid fa-pen"></i>
          </button>:null
        }
      </div>
      <p style={todo.completed ?Style.detailParaCompleted: Style.detailPara}>{todo.detail}</p>
    </>
  );
}

export default Todo;
