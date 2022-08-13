import './App.css';
import React from 'react';
import { ClassComp, LoginScreen } from './screens';
import { ThemeContext } from './contexts';

function App() {

  const [state, setState] = React.useState({ message: "I am in App.js" });
  const [theme, setTheme] = React.useState({ currentTheme: 'light' });

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={()=>setTheme({...theme,currentTheme: theme.currentTheme === "light" ? "dark" : "light"})} >Toogle Theme</button>
        <ThemeContext.Provider value={theme}>
          <ClassComp />
          <LoginScreen />
        </ThemeContext.Provider>
      </header>
    </div>
  );
}

export default App;
