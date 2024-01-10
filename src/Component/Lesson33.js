
/**
 * using useRef hook in functional component
 */

import { useRef } from "react";
import '../App.css';

function Lesson33() {
    //same as in class component [createRef()]
    let inputRef = useRef(null); // set default value to null    

    function getInputValue() {
        let values = inputRef.current.value;
        window.alert(values);
    }

    return (
        <div className="App">
            <input type="text" ref={inputRef}></input> <br /><br />
            <button onClick={getInputValue}>Get Input Value</button>
        </div>
    )
}

export default Lesson33;