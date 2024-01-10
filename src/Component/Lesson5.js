// counter app example using class component

import { React, Component } from "react";

class Lesson5 extends Component {  

    // constructor states initialization
    constructor() {
        super();
        this.state = {
            counter: 0 // initialize states
        }
    }

    // function to update counter
    updateCounter() {
        this.setState({ counter: this.state.counter + 1 })
    }

    // html render life cycle method
    render() {
        return (
            <>
                <h1>this is the class Component</h1>
                <h1>{this.state.counter}</h1>
                <button onClick={() => this.updateCounter()}>click me </button>

                {/* this below line is not work */}
                {/* <button onClick= {this.updateCounter}>click me </button> */}
            </>
        )
    }
}

export default Lesson5;