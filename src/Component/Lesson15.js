/**  
 * example of demostrating ComponentDidMount life cycle method in react
*/

import React from "react";
import '../App.css'

class Lesson15 extends React.Component {

    // constructor to manage component states
    constructor() {
        super();

        this.state = {
            email: "bilal@gmail.com" // states initialization
        }

        console.warn("constructor life cycle method");
    }

    // only run when html component fully loaded
    componentDidMount() {
        console.warn("componentDidMount life cycle method")
    }

    // render html component 
    render() {
        console.warn("render life cycle method")
        return (
            <div className="App">
                <h3>practice of component did mount life cycle method </h3>
                <p>{this.state.email}</p>
                <button onClick={() => this.setState({ email: "javed@gmail.com" })}>update email</button>
            </div>
        )
    }
}

export default Lesson15;