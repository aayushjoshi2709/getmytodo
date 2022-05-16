import React,{useEffect, useState} from 'react'
import Navbar from './Navbar/Navbar';
import {useNavigate} from 'react-router-dom';
import TodoListContainer from './TodoListContainer/TodoListContainer';
import axios from 'axios';

function Dashboard() {
  const [TodoLists, setTodoLists] = useState({});
  const [GetTodos, setGetTodos] = useState(true);
  let navigate = useNavigate();
  useEffect(() => {
    if(GetTodos){
      axios.get('/todoslists', {withCredentials:true}).then((res) =>{
      if(res.status === 200){
        setTodoLists(res.data);
      }
      }).catch((error)=>{
        if(error.response.status === 401)
          navigate("/login");
      }).finally(()=>{
        setGetTodos(false);
      })
    }
  }, [GetTodos])
  
  
  return (
    <>
      <Navbar/>
      <TodoListContainer TodoLists = {TodoLists} setGetTodos = {setGetTodos}/>
    </>
  )
}

export default Dashboard