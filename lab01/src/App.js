import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Foo from './components/Foo.js';
import Bar from "./components/Bar";


function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Welcome name="Jane" />
          <Foo />
          <Bar />
      </div>
    );
  }
}

export default App;
