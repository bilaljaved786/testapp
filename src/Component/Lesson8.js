// get input box value on click using functional component

import { useState } from "react"
import '../App.css';

function Lesson8() {

    let [data, setDate] = useState(); // use useState react hook
    let [print, setPrint] = useState(false); // use useState react hook

    function GetText(e) {
        setDate(e.target.value); // get the value from the [event] object
        // setPrint(false);
    }

    function GetData() {
        setPrint(true);
    }

    return (
        <div className="App">
            <h3>Get input value box</h3>
            <input onChange={GetText}></input>
            <button onClick={GetData}>click me</button>
            <div>{
                // conditional rendering here
                print ? <p>{data}</p> : <p>start typing</p>
            }</div>
        </div>
    )
}

export default Lesson8;