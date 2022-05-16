import React, {useState} from 'react'
import {ContainerDev, InputBox, LegendInputBox, Heading, Button} from '../Styles';
import {Helmet} from 'react-helmet';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
function SignUp() {
  let navigate = useNavigate();
  const initialValues = {
    uname: '',
    username: '',
    pass: ''
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
    axios.post('/user',FormData, {withCredentials:true}).then((res)=>{
        if(res.status == 200){
          navigate('/');
        }
    })
  }
  return (
    <>
      <Helmet bodyAttributes={{style: 'background-color :#1C437C'}}/>
      <div style = {ContainerDev}>
        <form onSubmit={(e) =>{ handleSubmit(e) }}>
          <h1 style={Heading}>SignUp</h1>
          <fieldset style={LegendInputBox}><legend>Enter Email</legend>
             <input onChange={ (e) => {handleChange(e)}}  style={InputBox} placeholder="user@user.com" type="text" name='username'/>
          </fieldset>
          <fieldset style={LegendInputBox}><legend>Enter Password</legend>
             <input onChange={ (e) => {handleChange(e)}} style={InputBox} placeholder="12345" type="password" name='pass'/>
          </fieldset>
          <fieldset style={LegendInputBox}><legend>Enter User Name</legend>
             <input onChange={ (e) => {handleChange(e)}} style={InputBox} placeholder="user" type="text" name='uname'/>
          </fieldset>
          <button style={Button}>SignUp</button>
        </form>
      </div>
    </>
  )
}

export default SignUp