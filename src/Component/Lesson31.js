/**
 * practice useMemo hook in react
 */

import { useMemo, useState } from "react"
import '../App.css'
import { useEffect } from "react";

function Lesson31() {
    let [count, setCount] = useState(0);  // using states in react
    let [number, setNumber] = useState(10);

    // I want to call this function only when count states update (i can do that with memo hook react)
    // function ramdom() {
    //     console.warn("calling ramdom method");
    //     return count * 2;
    // }

    // using memo hooks we can stop re-rendering of some part of the component
    const memoVar = useMemo(function ramdom() {
        console.warn("calling ramdom method");
        return count * 2;
    }, [count]);


    // useEffect(function ramdom() {
    //     console.warn("I am  calling ramdom method");
    //      // we cannot return somehing from useEffect hooks
    //     // return count * 2;     
    // },[count]);

    return (

        <div className="App" style={{ marginTop: '50px' }}>

            {/* using memo */}
            <h4>Ramdom Number Generated: {memoVar} </h4> <br />

            <button onClick={() => setCount(count + 1)}>update count</button> &nbsp; 
            <button onClick={() => setNumber(number + 1)}>update number</button>
        </div>
    )
}

export default Lesson31;