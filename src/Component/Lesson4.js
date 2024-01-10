import React, { useState } from 'react';

function Lesson4() { // functional component

    // use state here
    let [data, setData] = useState(0);

    // local function
    function updateData() {
        setData(data = data + 1) // update the state here
    }

    return (
        <div style={{ margin:"50px"}}>
            <h1>Counter App</h1>
            <p>{data}</p>
            <button onClick={() => updateData()}>click me</button>
        </div>
    )
}

export default Lesson4;