/**
 * pure component in react.js
 
 * if i extend from the {Component} class then the states updated with the provious value
    and re-render the component
 
 * if i extend from the {PureComponent} class then the states is not updated with the previous 
  value and does not re-render the component

*/

import { Component, PureComponent } from "react";
import '../App.css';

class Lesson30 extends Component {

    constructor() {
        super();
        this.state = {
            count: 0
        };
    }

    render() {
        //console.warn('render component bilal javed')
        return (
            <div className="App">
                {/* <h4>pure component example count {this.state.count}</h4> */}

                <Rerender data={this.state.count}></Rerender>
                <button onClick={() => this.setState({ count: this.state.count })}>
                    update state</button>
            </div>
        )
    }
}

// when i extend using the pureComponent class then the component not re-render again and again
class Rerender extends PureComponent {
    render() {
        console.warn("Re-render child component")
        return (
            <h3>Child Component state updated {this.props.data}</h3>
        )
    }
}

export default Lesson30;