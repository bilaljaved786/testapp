/**
 *  practice component will unmount life cycle method
 */

import { Component } from "react";

class Lesson18 extends Component {

    // when we remove some component from the dom at that time componentWillUnmount is run
    componentWillUnmount() {
        console.warn("Lesson18 component removed")
    }

    render() {
        return (
            <>
                <h3>student component</h3>
            </>
        )
    }
}

export default Lesson18;