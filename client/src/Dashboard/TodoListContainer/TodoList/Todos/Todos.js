import React from 'react'
import Todo from './Todo/Todo';
function Todos({todos, setGetTodos, setShowBlueScreen}) {
  return (
    <>
        {
              Object.keys(todos).map((keys, idx) => {
                return <Todo todo = {todos[idx]} setGetTodos={setGetTodos} setShowBlueScreen={setShowBlueScreen}/>
              })
        }
    </>
  )
}

export default Todos