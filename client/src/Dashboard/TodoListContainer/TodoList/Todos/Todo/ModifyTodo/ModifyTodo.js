import React, { useState } from "react";
import Styles from "./Styles";
import axios from "axios";

function ModifyTodo({ todo, setGetTodos, setModifyTodos, setShowBlueScreen }) {
  const [ChangedDesc, setChangedDesc] = useState(todo.detail)
  function DeleteTodo() {
    axios.delete(`/todo/${todo._id}`,{withCredentials:true}).then((res) =>{
      if(res.status === 200){
        setGetTodos(true);
        setModifyTodos(false);
        setShowBlueScreen(false);
      }
    });
  }
  function postUpdate() {
    if(ChangedDesc.length > 0){
      let data = {
        id: todo._id,
        title: todo.title,
        completed: todo.completed,
        detail: ChangedDesc,
        date:todo.date
      };
      axios.put("/todo", data, { withCredentials: true }).then((res) => {
        if (res.status == 200) setGetTodos(true);
      });
    }
  }
  return (
    <div style={Styles.AddTodoListDiv}>
      <div style={Styles.Header}>
        <button
          onClick={() => {
            DeleteTodo();
          }}
          style={{ ...Styles.Button, ...Styles.DeleteButton }}
        >
          <i className="fa-solid fa-trash-can"></i>
        </button>
        <button
          onClick={() => {
            postUpdate();
            setModifyTodos(false);
            setShowBlueScreen(false);
          }}
          style={{ ...Styles.Button, ...Styles.CloseButton }}
        >
          <i className="fa fa-window-close" aria-hidden="true"></i>
        </button>
      </div>
      <br></br>
      <div>
        <p><b>{todo.title}</b></p>
        <textarea value={ChangedDesc} onChange={(e)=> setChangedDesc(e.target.value)} style={Styles.TextArea} placeholder="Type here and click on the close button to save changes..."></textarea>
        <p>Add Date</p>
        <p>Move to Another List</p>
      </div>
    </div>
  );
}

export default ModifyTodo;
