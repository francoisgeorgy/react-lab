import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import knob from '/home/pri/dev/projets/svg-knob/dist/svg-knob.min.js';
import SvgKnob from './components/SvgKnob';

// function K(props) {
//     return <h1>{props.cfg}</h1>;
// }

function SvgWithoutXlink() {
    return (
        <svg width="100" height="100" viewBox="0 0 120 120">
            <circle cx="60" cy="60" r="30"/>
        </svg>
    );
}

function SvgWithXlink(props) {
    return (
        <svg
            width="400"
            height="200"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink">
            <style>
                { `.classA { fill:${props.fill} }` }
            </style>
            <defs>
                <g id="Port">
                    <circle style={{fill:'inherit'}} r="10"/>
                </g>
            </defs>
            <text y="15">black</text>
            <use x="70" y="10" xlinkHref="#Port" />
            <text y="35">{ props.fill }</text>
            <use x="70" y="30" xlinkHref="#Port" className="classA"/>
            <text y="55">blue</text>
            <use x="0" y="50" xlinkHref="#Port" style={{fill:'blue'}}/>
        </svg>
    );
}


class App extends Component {
  render() {
    return (
      <div className="App">
        {/*<header className="App-header">*/}
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          {/*<h1 className="App-title">Welcome to React</h1>*/}
        {/*</header>*/}
        {/*<p className="App-intro">*/}
          {/*To get started, edit <code>src/App.js</code> and save to reload.*/}
        {/*</p>*/}
        {/*<SvgWithoutXlink />*/}
        {/*<SvgWithXlink fill="violet" />*/}
        <SvgKnob/>
      </div>
    );
  }
}

export default App;
