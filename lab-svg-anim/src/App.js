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

    state = { animate: null };  // list of classes to animate

    render() {
        return (
            <div className="App">
                {/*<Dummy/>*/}
                <div>
                    <Svg1 animate={this.state.animate} styleName={"anim"}/>
                </div>
            </div>
        );
    }
}

export default App;
