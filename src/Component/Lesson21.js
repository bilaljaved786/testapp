/**
 * Demonstrate Use Effect hooks with two states
 */

import { useEffect, useState } from "react"

function Lesson21() {

    let [count, setCount] = useState(0);
    let [number, setNumber] = useState(0);

    useEffect(() => {
        console.warn("called useEffect")
    },[count]) // use effect hook only work when count states in changed

    return (
        <div>
            <h4>counter {count}</h4>
            <h4>number {number}</h4>
            <button onClick={() => setCount(count + 1)}>update counter</button> &nbsp;
            <button onClick={() => setNumber(number + 1)}>update number</button>
        </div>
    )
}

export default Lesson21;

// this example demonstrate how we use effect with two states and conditional states render
