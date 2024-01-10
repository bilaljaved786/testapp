/**
 *  controlled component example
 *  controlled component means atleast have one input element in the component 
 *  controlled component should be handle with react states (DOM manipulation must dbe done with react states)   
 *  un-controlled component will manipaulate DOM directly without using react states
 */

import { useState } from 'react';
import '../App.css';

function Lesson36() {

    let [name, setName] = useState("bilal");

    return (
        <div className="App">
            <h4>controlled component</h4><br />

            {/* we can use this states value as a argument to some api */}
            <h6>{name}</h6>

            <input type="text" defaultValue={name}
                onChange={(e) => setName(e.target.value)}></input>
        </div>
    )
}

export default Lesson36;