/**
 *  practice example change react component state using input field
 */

import { useState } from "react";
import '../App.css';

function Lesson35() {

    let [count, setCount] = useState(0); // using react state here

    function updateState(event) { // update handle

        if (event == "") {
            setCount(count + 1);
        } else {
            setCount(count = parseInt(count) + 1);
        }
    }

    return (
        <div className="App">
            <h4>practice example change react component state using input field</h4><br />
            <Lesson35A data={count}></Lesson35A>
            <button onClick={(event) => updateState(event)}> update state</button>
        </div>
    )
}

// child component
function Lesson35A(props) {
    return (
        <>
            <input type="text" value={props.data}></input>
        </>
    )
}

export default Lesson35;