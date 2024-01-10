/**
 * practice life cycle method [ShouldComponentUpdate]
 */

import { Component } from "react";
import '../App.css'

class Lesson17 extends Component {
    constructor() {
        super();
        this.state = { //states initialization
            counter: 0
        }
        console.log("constructor") // on first turn
    }

    componentDidMount() { // first time running life cycle method when first time component loads
        console.log("componentDidMount") // on first turn
    }

    componentDidUpdate() {  // when states and props of the component updates
        console.log("componentDidUpdate") // on second turn 
    }

    shouldComponentUpdate() { //check need to execute the componentDidUpdate method or not
        console.log("shouldComponentUpdate", this.state.counter) // asking needs to update/re-render the component
        return true; // if not mention default false (false: means stoping from executeing the componentDidUpdate)
    }

    render() {
        console.log("render") // every time
        return (
            <div className="App">
                <h3>practice life cycle method ShouldComponentUpdate {this.state.counter}</h3>
                <button onClick={() => this.setState({ counter: this.state.counter + 1 })}>update counter</button>
            </div>
        )
    }
}

export default Lesson17;