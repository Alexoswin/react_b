
import './App.css';
import { 
  BrowserRouter as Router, 
  Route, 
  Routes,
 } from 'react-router-dom';
import login from './login';
import dashboard from './dashboard';
function App() {
  return (
    <>
    
    <Router>
      <Routes>
        <Route path="/" Component={login} />
        <Route path="/dashboard" Component={dashboard} />
        
      </Routes>
    </Router>

    </>
  );
}

export default App;
