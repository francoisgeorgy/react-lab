import React, {Component} from 'react';
import './App.css';
import Svg1 from "./components/Svg1";

/*
function Dummy() {
    return (
        <div ref={function(e) { console.log('dummy', e, typeof e, e.attr('id')) }}>dummy</div>
    );
}
*/

class App extends Component {

    state = { animate: [] };  // list of classes to animate

    animate = n => {
        console.log(n, this.state.animate);

        let m = n || [];
        if (!(m instanceof Array)) {
            m = [m];
        }

        //if (this.state.animate && this.state.animate.includes(n)) return;

        // Never mutate this.state directly
        let newAnimate = this.state.animate.slice();    // copy the array

        // execute the manipulations
        for (let i=0; i<m.length; i++) {
            if (!newAnimate.includes(m)) newAnimate.push(m[i]);
        }

        console.log(n, newAnimate);

        this.setState({animate: newAnimate});           // set the new state
    };

    reset = () => {
        this.setState({animate: []});
    };

    render() {
        return (
            <div className="App">
                <div>
                    <button onClick={() => this.animate('A')}>A</button>
                    <button onClick={() => this.animate('B')}>B</button>
                    <button onClick={() => this.animate('C')}>C</button>
                    <button onClick={() => this.animate(['A','B','C'])}>ABC</button>
                    <button onClick={this.reset}>reset</button>
                </div>
                <div>
                    {/*animate: <strong>{this.state.animate}</strong>*/}
                </div>
                <div className="diagram">
                    <Svg1 animate={this.state.animate} />
                </div>
            </div>
        );
    }
}

export default App;
