/**
 *  simple html form submit using react
 */

import { useState } from "react";
import "../App.css"

function Lesson10() {

    let [names, setName] = useState(); // using react states
    let [option, setOption] = useState();
    let [checked, setCheckedValue] = useState();

    function sendData(e) {
        console.log(names, option, checked)
        e.preventDefault(); // prevent the form submitting
    }

    return (
        <div className="App">
            <h3>Html Form React.</h3>
            <form onSubmit={sendData}>

                <input type="text" onChange={(e) => setName(e.target.value)} ></input><br /><br />

                <select onChange={(e) => setOption(e.target.value)}>
                    <option>BMW</option>
                    <option>KIYA</option>
                    <option>MEHRAN</option>
                </select>

                <input type="checkbox" onChange={(e) => setCheckedValue(e.target.checked)}></input><br /><br />
                <button type="submit">submit</button>
            </form>
        </div>
    )
}

export default Lesson10;