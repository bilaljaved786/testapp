/**
 * practice Component Did Update life cycle method
 */

import {Component} from "react";
import '../App.css'

class Lesson16 extends Component {

    constructor() {
        super(); // calling super ctor
        this.state = {   // initialization of states
            counter: 0,
            email: "bilal@gmail.com"
        }
        console.warn("constructor method")
    }

    componentDidUpdate(preProp, preState, snapshot) { // this method calls when we update state or props
        console.warn("component did update", `preState ${preState.counter}, new state ${this.state.counter}`);

        //Note:: when we update state with in the componentDidMount life cycle method this will happen [Maximum update depth exceeded]
        //this.setState({ counter: this.state.counter + 1 }) 

        // if(preState.counter  == 3 && this.state.counter == 4)
        // {
        //     window.alert("data is same");
        // }
    }

    render() {
        console.warn("render method")
        return (
            <div className="App" >
                <h3>practice Component did update method</h3>
                <button onClick=
                    {() => this.setState({ counter: this.state.counter + 1 })}>
                    update state</button>
            </div>
        )
    }
}

export default Lesson16;