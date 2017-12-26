import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter} from "react-router-dom";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <App />
            </BrowserRouter>
        );
    }
}

export default App;
