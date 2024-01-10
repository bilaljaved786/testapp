
/**
 * un-controlled component in react (functional component)
 * un-controlled component alteast have one input element 
 * must not be handle by react states (is called un-controlled component)
 */

import { useRef } from 'react';
import '../App.css';

function Lesson37() {

    let ref_1 = useRef();  // use ref functional component hook
    let ref_2 = useRef();

    function handleSubmit(e) {
        e.preventDefault();    // prevent the default behaviour of the form when submitting

        let ref_3 = document.getElementById('ref_3').value;  // manipulate using js style

        //printing values to the console
        console.warn("ref_1 value is " + ref_1.current.value);
        console.warn("ref_2 value is " + ref_2.current.value);
        console.warn("ref_3 value is " + ref_3);
    }

    return (
        <form className=" App" onSubmit={(e) => { handleSubmit(e) }}>
            <h5>un-controlled component in react (functional component)</h5><br /><br />

            {/* Directly manipulation DOM using ref react hook */}
            <input type='text' ref={ref_1}></input><br /><br />

            {/* Directly manipulation DOM using ref react hook */}
            <input type='text' ref={ref_2}></input><br /><br />

            {/* manipulation of DOM using javascript, we can also do that with JQuerry as well */}
            <input type='text' id='ref_3'></input><br /><br />

            <button>submit form</button>
        </form>
    )
}

export default Lesson37;