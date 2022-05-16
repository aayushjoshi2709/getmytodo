import React, {useState} from 'react'
import {ContainerDev, InputBox, LegendInputBox, Heading, Button} from '../Styles';
import {Helmet} from 'react-helmet';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

function Login() {
  let navigate = useNavigate();
  const initialValues = {
    username: '',
    password: ''
  }
  const [FormData, setFormData] = useState(initialValues);

  function handleChange(e){
    const { name, value } = e.target;
    setFormData({
      ...FormData,
      [name]: value,
    });
  }
  function handleSubmit(e){
    e.preventDefault();
    axios.post('/login',FormData, {withCredentials:true}).then((res)=>{
        if(res.status == 200){
          navigate('/');
        }
    })
  }
  return (
    <>
      <Helmet bodyAttributes={{style: 'background-color :#1C437C'}}/>
      <div style = {ContainerDev}>
        <form onSubmit={(e) => {handleSubmit(e)}}>
          <h1 style={Heading}>Login</h1>
          <fieldset style={LegendInputBox}><legend>Enter Email</legend>
             <input onChange={(e) => {handleChange(e)}} name='username'  style={InputBox} placeholder="user@user.com" type="text"/>
          </fieldset>
          <fieldset style={LegendInputBox}><legend>Enter Password</legend>
             <input onChange={(e) => {handleChange(e)}} name='password' style={InputBox} placeholder="12345" type="password"/>
          </fieldset>
          <button style={Button}>Login</button>
        </form>
      </div>
    </>
  )
}

export default Login