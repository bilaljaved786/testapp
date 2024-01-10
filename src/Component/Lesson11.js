/**
 * basic html form using react
 */

import React, { useState } from "react";
import "../App.css"

function Lesson11() {

    let [userErr, setUserErr] = useState(false); // react states
    let [passErr, setPassErr] = useState(false);
    let [buttonstate, setButtonState] = useState(true);

    function handleSubmit(event) {
        event.preventDefault(); // prevent form to submit
    }

    function UserHandler(event) {
        if (event.target.value.length >= 4) {
            setUserErr(true); // means invalid
            setButtonState(false);
        } else {
            setUserErr(false); // means valid
            if (userErr == false && passErr == false)
                setButtonState(true);
        }
    }

    function PassHandler(event) {
        if (event.target.value.length > 4) {
            setPassErr(true);
            setButtonState(false);
        } else {
            setPassErr(false);
            if (userErr == false && passErr == false)
                setButtonState(true);
        }
    }

    return (
        <div className="App">
            <h2>Login Form</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="enter user name" onChange={UserHandler} />  {userErr ? <span style={{ color: "red" }}>invalid user name</span> : null} <br />
                <input type="text" placeholder="enter password" onChange={PassHandler} /> {passErr ? <span style={{ color: "red" }}>invalid password</span> : null}<br />
                {buttonstate ? <button type="submit">submit</button> : null}
            </form>
        </div>
    )
}

export default Lesson11;