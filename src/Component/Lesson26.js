
/**
 * practice list rendering and using bootstrap table
 */

import { Table } from "react-bootstrap";

function Lesson26() {

    let students = [
        { name: 'Khurram', cms: 15212, age: 20 },
        { name: 'asad', cms: 15213, age: 21 },
        { name: 'bilal', cms: 15214, age: 22 },
        { name: 'Adeel', cms: 15214, age: 22 },
    ]

    return (
        <>
            <h1 style={{ textAlign: 'center' }}>bootstrap table design using react</h1><br />
            <Table striped hover variant="dark" >
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Cms</th>
                        <th>Age</th>
                    </tr>
                </thead>
                {
                    <tbody>
                        {
                            students.map((stu, index) =>
                                stu.age == '22' ?            // conditional rendering 
                                    <tr key={index}>
                                        <td>{stu.name}</td>
                                        <td>{stu.cms}</td>
                                        <td>{stu.age}</td>
                                    </tr> : null
                            )
                        }
                    </tbody>
                }
            </Table>
        </>
    )
}

export default Lesson26;