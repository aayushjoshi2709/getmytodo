import Login from "./User/Login/Login";
import SignUp from "./User/SignUp/SignUp";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Dashboard from "./Dashboard/Dashboard";

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
