/**
 * practice reuse component in loop
 */

import { Table } from "react-bootstrap";  // import React-Bootstrap table
import '../App.css'

function Lesson28() {

    let students = [  // array of objects
        { name: 'Khurram', cms: 15212, age: 20 },
        { name: 'asad', cms: 15213, age: 21 },
        { name: 'bilal', cms: 15214, age: 21 }
    ]

    return (
        <div className="App">
            <h1> bootstrap table design using react</h1><br />

            {/* passing props to an other component */}
            <User data={students}></User>
        </div>
    )
}

function User(props) { // receiving the props 
    return (
        <Table striped hover variant="dark">
            <thead>
                <tr>
                    <th>name</th>
                    <th>cms</th>
                    <th>age</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.data.map((studentdata, index) => { // iterate over the props using the map function
                        return (
                            <tr key={index}>
                                <td>{studentdata.name}</td>
                                <td>{studentdata.cms}</td>
                                <td>{studentdata.age}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </Table>
    )
}

export default Lesson28;
