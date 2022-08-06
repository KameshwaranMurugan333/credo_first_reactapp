import './App.css';
import React from 'react';

function App() {

  const [state, setState] = React.useState({ date: "" });

  const changeDate = () => {
    let currentDate = new Date().toString();
    setState({...state,date: currentDate});
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>{state.date}</p>
        <button onClick={changeDate} >currentDate</button>
      </header>
    </div>
  );
}

export default App;
