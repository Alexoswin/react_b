import React from 'react'
import './App1.css';
import ReactDOM from 'react-dom';



function App() {
  return (
    <>
      <div id="root">

      </div>




    </>
  );
}

export default App;


const root = ReactDOM.createRoot(
  document.getElementById('root')
);

function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}</h2>
    </div>
  );
  root.render(element);
}

setInterval(tick, 1000);

