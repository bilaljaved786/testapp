/** 
 * change states in react class component
*/

import { Component } from "react";
import '../App.css'

class Lesson14 extends Component {
    constructor() {
        super(); // call parent ctor
        this.state = {  // initilize states
            email: "bilal@gmail.com"
        }
    }

    render() {  //render life cycle method
        console.log("render call");
        return (
            <div className="App">
                <h3>changes states in react</h3>
                <p>{this.state.email}</p>
                <button
                    // updating state
                    onClick={() => this.setState({ email: "javed@gmail.com" })}>
                    click me</button>
            </div>
        )
    }
}

export default Lesson14;