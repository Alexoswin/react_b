

import { useNavigate } from 'react-router-dom';
import './App.css';



function Login(){

const navigate = useNavigate();
const dashboard = () => {
    navigate('/dashboard');
}
return(
    <>
    <div id="container">
      <button id="dashboard" onClick={dashboard}>go to</button>  
      <h1>JWT Authentication</h1>
      <h2>Login</h2>
      <div>
        <div id ="login-form">
          
          <br/>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" required />
                
          <br/>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
                
          <br/>
          <button type="submit">Login</button>

        </div>
      </div>
     
    </div>
    </>
);
}
export default Login;