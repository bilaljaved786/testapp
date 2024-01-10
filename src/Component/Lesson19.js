/**
 * demosntrate use state hooks in functional component
 */

import React, { useState } from 'react'
import '../App.css'

function Lesson19() {

    // use state hooks 
    let [name, setName] = useState("bilal");

    return (
        <div className="App">
            <h3>practice use state hook</h3>
            <p>{name}</p>
            <button onClick={() => setName("javed")}>update name</button>
        </div>
    )
}

export default Lesson19;