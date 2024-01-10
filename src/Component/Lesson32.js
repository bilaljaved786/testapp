/**
 * practice createRef() feature in react
 */

import { Component, createRef } from "react"; // using react feature createRef
import '../App.css';
import { Button } from "react-bootstrap";

// Note: we can directly manipulate the dom using [createRef] in react with using states/props 
// react discoaurage while using ref because its slow down the react-app
// react suggest use state/props while changing the DOM

class Lesson32 extends Component {

    constructor() {
        super();
        this.inputField = createRef(); // using ref here 
    }

    // this component life cycle method runs first time when component is ready
    componentDidMount() {
        console.warn(this.inputField.current.value = "bilal--javed"); // setting up the initial value 
    }

    getValue() {
        let value = this.inputField.current.value; // get the set value
        window.alert(value);
    }

    render() {
        return (
            <div className="App">
                <input type="text" ref={this.inputField}></input>
                <br/><br/>
                {/* using bootstrap Button here */}
                <Button onClick={()=>this.getValue()}>get text using ref</Button>
            </div>
        )
    }
}

export default Lesson32;