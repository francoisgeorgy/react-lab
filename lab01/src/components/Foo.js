import React, { Component } from 'react';

class Foo extends Component {

    componentDidMount() {
        console.log('Foo.componentDidMount');
    }

    render() {
        console.log('Foo.render');
        return (
            <div>Foo</div>
        );
    }
}

export default Foo;