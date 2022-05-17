import Login from "./User/Login/Login";
import SignUp from "./User/SignUp/SignUp";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import axios from "axios";
import Dashboard from "./Dashboard/Dashboard";

if(process.env.REACT_APP_ENV === 'dev') axios.defaults.baseURL = "http://127.0.0.1:3001"
function App() {
  return ( 
    <Router>
      <Routes>
          <Route path='/login'  element = {<Login/> }/>
          <Route path='/signup'  element = {<SignUp/> }/>
          <Route path='/' element = {<Dashboard/> }/>
      </Routes>
    </Router>
  );
}

export default App;
