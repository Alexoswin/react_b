
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom';
import './App.css';
import axios from 'axios';
import { useState } from 'react';


function Login(){

    const navigate = useNavigate();
    const dashboard = () => {
        navigate('/dashboard');
    };
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    async function handleSubmit(e) {

        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/login', {
                email,
               password
            });
         
            if (response.status === 200) {

                 const token = response.data.token;
                 const userId = response.data.userId;
                 
                 Cookies.set('token', token);
                 Cookies.set('userId', userId);
                navigate('/dashboard');
            } else {
                alert('Invalid credentials');
            }
        } catch (error) {
            console.error(error);
            alert('An error occurred. Please try again later.');
        }

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
          <input
          
          onChange={(e) => setEmail(e.target.value)}
          type="text" id="email" name="email" required />
                
          <br/>
          <label htmlFor="password">Password:</label>
          <input
          
            onChange={(e) => setPassword(e.target.value)}
          type="password" id="password" name="password" required />
                
          <br/>
          <button onClick={handleSubmit} type="submit">Login</button>

        </div>
      </div>
     
    </div>
    </>
);
}
export default Login;