/**
 * practice forward ref concept in react
 */

import { useRef } from "react";
import Lesson34A from "./Lesson34A";
import '../App.css';

// send forward ref component
function Lesson34() {

    // using useRef hook with default value [null]
    let refValue = useRef(null); 

    // funciton to send ref to another component
    function sendRef() {  
        if (refValue.current.value == "") {// when first time function call ["" + 1 = "1"]
            refValue.current.value = refValue.current.value + 1;
        }
        else {
            refValue.current.value = parseInt(refValue.current.value) + 1;
        }
    }

    return (
        <div className="App">
            <h4>forward ref example</h4>
            
             {/* component that will send the ref */}
            <Lesson34A ref={refValue}></Lesson34A>
            <br /><br />
            <button onClick={sendRef}>send ref</button>
        </div>
    )
}

export default Lesson34;

// Note: use limited ref because it slows down the react 
// because of direct manipulation of DOM
// React suggest always use the states and props for DOM manipulation
