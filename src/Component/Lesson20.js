/**
 * demonstrate use effect in  functional component
 */

import React, { useEffect, useState } from "react";
import '../App.css'

function Lesson20() {

    let [count, setCount] = useState(0);  // using react states

    //useEffect hooks
    useEffect(() => {
        console.warn("useEffect")
    }, [count]); // by-default if we not specify [] then it will work on each states/props changes
    // but if we specify this [] then it will work on conditions


    return (
        <div className="App">
            <h3>demonstrate use effect in  functional component</h3>
            <p>counter {count}</p>
            <button onClick={() => setCount(count + 1)}>update counter</button>
        </div>
    )
}

export default Lesson20;

// 1) now this function behave as a component_did_mount life cycle method
// 2) now this function behave as a component _did_update life cycle mehtod