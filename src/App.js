import React from 'react';
import logo from './assets/images/logo.svg';
 import Home from './components/Home'

import News from './components/News'
import Home2 from "./components/Home2";
 import News2 from "./components/News2";
function App() {
    return (
        <div className="App">
            {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>*/}
            你好 React
            <Home></Home>
            <News></News>
            <Home2></Home2>
            <News2></News2>
        </div>
    );
}

export default App;
