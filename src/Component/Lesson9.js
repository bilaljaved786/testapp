/**
 * hide and show text app
 */

import { useState } from "react";
import "../App.css"

function Lesson9() {

    let [statuss, setstatuss] = useState();

    return (
        <div className="App">
            <h3>hide and show app</h3>
            <div>{ // conditional rendering here
            statuss ?
                <p>this is bilal</p> : null}

                <button onClick={() => setstatuss(true)}>show</button> &nbsp;
                <button onClick={() => setstatuss(false)}>hide</button>
            </div>
        </div>
    )
}

export default Lesson9;