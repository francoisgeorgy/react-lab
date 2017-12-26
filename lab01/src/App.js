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

    //
    // https://reactjs.org/docs/react-component.html#componentdidmount
    // componentDidMount() is invoked immediately after a component is mounted. Initialization that requires DOM nodes
    // should go here.
    // If you need to load data from a remote endpoint, this is a good place to instantiate the network request.
    // Calling setState() in this method will trigger an extra rendering, but it will happen before the browser updates
    // the screen. This guarantees that even though the render() will be called twice in this case, the user won’t see
    // the intermediate state.
    //
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

    //
    // https://reactjs.org/docs/react-component.html#render
    // The render() function should be pure, meaning that it does not modify component state, it returns the same result
    // each time it’s invoked, and it does not directly interact with the browser. If you need to interact with the browser,
    // perform your work in componentDidMount() or the other lifecycle methods instead. Keeping render() pure makes
    // components easier to think about.
    //
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
