/**
 *  Practice Example of High Order Component
*/

import { useState } from "react";
import '../App.css';

function Lesson38() {

    return (
        <div className="App">

            {/* passing component to another component 
              * these are the high order component because these component take component as props
              * and enhance the component and retutn back
              * this is called high order component
            */}
            <HOCRED Counter_component={Counter}></HOCRED>
            <br />
            <HOCGREEN Counter_component={Counter}></HOCGREEN>
            <br />
            <HOCBLUE Counter_component={Counter}></HOCBLUE>

            {/* use hign orde component instead of all this */}
            {/* this is the problem why we need high order component  */}

            {/* <Counter data={true}></Counter> */}

        </div>
    )
}

function HOCRED(props) {  // this is the hign order component
    return (
        <div style={{ backgroundColor: 'red' }}>
            <b>RED</b>

            {/* counter component */}
            <props.Counter_component>red</props.Counter_component>
        </div>
    )
}

function HOCGREEN(props) { // this is the hign order component
    return (
        <div style={{ backgroundColor: 'green' }}>
            <b>GREEN</b>

            {/* counter component */}
            <props.Counter_component>green</props.Counter_component>
        </div>
    )
}

function HOCBLUE(props) { // this is the hign order component
    return (
        <div style={{ backgroundColor: 'blue' }}>
            <b>BLUE</b>

            {/* counter component */}
            <props.Counter_component></props.Counter_component>
        </div>
    )
}

function Counter() {

    let [Counter, setCounter] = useState(0);  // if we don't set the default value it will be (NAN)

    return (
        <>
            <h3>counter Component</h3>

            {/* render counter state here */}
            <h3>{Counter}</h3>

            {/* how much condition you will apply and it that way code will be messy 
                let turn this example and use of Hign order component kind a wrapper
             */}

            {/* {  
                props.data ? <h1>bilal</h1> : <p>javed</p>
            } */}

            {/* on button click change the counter state */}
            <button onClick={() => setCounter(Counter + 1)}>update Counter</button>
        </>
    )
}

export default Lesson38;