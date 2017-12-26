import React, { Component } from 'react';

class Bar extends Component {

    componentDidMount() {
        console.log('Bar.componentDidMount');
    }

    render() {
        console.log('Bar.render');
        return (
            <div>Bar</div>
        );
    }
}

export default Bar;