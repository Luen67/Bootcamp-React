import React from 'react';

import logo from './logo.svg';
import './App.css';
import Box from './Box';
import { useState } from 'react';

const users = [
  {
    name: 'pepe',
    grade: 10
  },
  {
    name: 'pablo',
    grade: 6
  },
  {
    name: 'ernesto',
    grade: 8
  },
  {
    name: 'noe',
    grade: 9
  }
]

function App() {
  const [user, setUser] = useState("Luis");
  const [counter, addCounter] = useState(0);

  const changeName = () =>{
    const newName = document.querySelector('#nameChange').value;
    setUser(newName);
    document.querySelector('#nameChange').value = "";    
  }

  const plusCounter = () => {    
    addCounter(counter+1);    
  }

  const minusCounter = () => {    
    addCounter(counter-1);    
  }
  
  return (
    <div className="App">
      <header className="App-header">        
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Contador: <span class='badge bg-secondary' id='counter-text'>{counter}</span></h1>
        <div className='d-flex flex-row'>
          <button type='button' class='btn btn-primary me-1' onClick={plusCounter}><span class='badge bg-primary' id='counter-text'>+</span></button>
          <button type='button' class='btn btn-danger ms-1' onClick={minusCounter}><span class='badge bg-danger' id='counter-text'>-</span></button>
        </div>
        Hello, {user}!
        <div className='mb-3'>
          <input id='nameChange' class='form-control' type='text' placeholder='Change your name'/>
        </div>
        <button type='button' class='btn btn-primary' onClick={changeName}>Change</button>
      </header>
    </div>
  );
}

export default App;
