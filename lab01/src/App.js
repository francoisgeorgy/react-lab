import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Foo from './components/Foo.js';
import Bar from "./components/Bar";
import ExampleComponent from "./components/ExampleComponent/index";

/*
    Lifecycle:

        App:
            App.constructor
            App.componentWillMount
            App.render
            App:Welcome
        Foo:
            Foo.render
        Bar:
            Bar.render
        ExampleComponent:
            ExampleComponent.constructor
            ExampleComponent.componentWillMount
            ExampleComponent.render
        Foo:
            Foo.componentDidMount
        Bar:
            Bar.componentDidMount
        ExampleComponent:
            ExampleComponent.componentDidMount
        App:
            App.componentDidMount

 */

function Welcome(props) {
    console.log('App:Welcome');
    return <h1>Hello, {props.name}</h1>;
}

class App extends Component {

    constructor(props) {
        super(props);
        console.log('App.constructor');
    }

    componentWillMount() {
        console.log('App.componentWillMount');
    }

    componentDidMount() {
        console.log('App.componentDidMount');
    }

    componentWillReceiveProps() {
        console.log('App.componentWillReceiveProps');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('App.shouldComponentUpdate');
        return true;
    }

    componentWillUpdate() {
        console.log('App.componentWillUpdate');
    }

    componentDidUpdate() {
        console.log('App.componentDidUpdate');
    }

    componentWillUnmount() {
        console.log('App.componentWillUnmount');
    }

    componentDidCatch(error, info) {
        console.log('App.componentDidCatch');
    }


    render() {
        console.log('App.render');
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload. </p>
                <Welcome name="Jane"/>
                <Foo/>
                <Bar/>
                <ExampleComponent/>
            </div>
        );
    }
}

export default App;
