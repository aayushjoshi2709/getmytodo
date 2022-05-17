import React from "react";
import Todo from "./Todo/Todo";
function Todos({ todos, setGetTodos, setShowBlueScreen }) {
  let CompletedCount = 0;
  for (const todo of todos) {
    if(todo.completed)
    CompletedCount++;
  }
  return (
    <>
      {todos !== undefined
        ? Object.keys(todos).map((keys, idx) => {
            return !todos[idx].completed ? (
              <Todo key={todos[idx]._id}
                todo={todos[idx]}
                setGetTodos={setGetTodos}
                setShowBlueScreen={setShowBlueScreen}
              />
            ) : null;
          })
        : null}
      <p style={{color:'#62AC5E'}}>
      {
         CompletedCount > 0 ? `Completed (${CompletedCount})`:null
      }
      </p>
      {todos !== undefined
        ? Object.keys(todos).map((keys, idx) => {
            return todos[idx].completed ? (
              <Todo key={todos[idx]._id}
                todo={todos[idx]}
                setGetTodos={setGetTodos}
                setShowBlueScreen={setShowBlueScreen}
              />
            ) : null;
          })
        : null}
    </>
  );
}

export default Todos;
