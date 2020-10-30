import React from 'react';
import logo from './assets/images/logo.svg';
import Home from './components/Home'

import News from './components/News'
import Home2 from "./components/Home2";
import News2 from "./components/News2";
import Home3 from "./components/Home3";
import EventObject from "./components/EventObject";
import List from "./components/List";
import Todolist from "./components/Todolist";
import Form from "./components/Form";
import ReactForm from "./components/ReactForm";
import TodoListDemo from "./components/TodoListDemo";

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
            {/*<Home></Home>
            <News></News>
            <Home2></Home2>
            <News2></News2>
            <Home3></Home3>
            <EventObject></EventObject>
            <List></List>
            <Todolist></Todolist>
            <Form></Form>
            <ReactForm></ReactForm>*/}
            <TodoListDemo></TodoListDemo>
        </div>
    );
}

export default App;
