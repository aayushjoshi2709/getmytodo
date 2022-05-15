import React from 'react'
import {ContainerDev, InputBox, LegendInputBox, Heading, Button} from '../Styles';
import {Helmet} from 'react-helmet';
function Login() {
  return (
    <>
      <Helmet bodyAttributes={{style: 'background-color :#1C437C'}}/>
      <div style = {ContainerDev}>
          <h1 style={Heading}>Login</h1>
          <fieldset style={LegendInputBox}><legend>Enter Email</legend>
             <input  style={InputBox} placeholder="user@user.com" type="text"/>
          </fieldset>
          <fieldset style={LegendInputBox}><legend>Enter Password</legend>
             <input style={InputBox} placeholder="12345" type="password"/>
          </fieldset>
          <button style={Button}>Login</button>
      </div>
    </>
  )
}

export default Login