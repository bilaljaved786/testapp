/**
 *  practice list rendering and using bootstrap table
 *  nested map function
 */

import { Table } from "react-bootstrap";

function Lesson27() {

    let students = [
        {
            name: 'Khurram', cms: 15212, age: 20, address: [
                { adr1: 'steet1', adr2: 'street2', adr3: 'street3', adr4: 'street' }]
        },
        {
            name: 'asad', cms: 15213, age: 21, address: [
                { adr1: 'steet1', adr2: 'street2', adr3: 'street3', adr4: 'street' }]
        },
        {
            name: 'bilal', cms: 15214, age: 22, address: [
                { adr1: 'steet1', adr2: 'street2', adr3: 'street3', adr4: 'street' }]
        },
        {
            name: 'Adeel', cms: 15214, age: 22, address: [
                { adr1: 'steet1', adr2: 'street2', adr3: 'street3', adr4: 'street' }]
        }
    ]

    return (
        <>
            <h1 style={{ textAlign: 'center' }}>bootstrap table design using react</h1><br />
            <Table striped hover variant="dark">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Cms</th>
                        <th>Age</th>
                        <th>address</th>
                    </tr>
                </thead>
                {
                    <tbody>
                        {
                            students.map((stu, index) =>
                                <tr key={index}>
                                    <td>{stu.name}</td>
                                    <td>{stu.cms}</td>
                                    <td>{stu.age}</td>
                                    <td>
                                        <Table>
                                            {
                                                stu.address.map((adrr, ind) =>
                                                    <tr key={ind} >
                                                        <p>{adrr.adr1}</p>
                                                        <p>{adrr.adr2}</p>
                                                        <p>{adrr.adr3}</p>
                                                        <p>{adrr.adr4}</p>
                                                    </tr>
                                                )
                                            }
                                        </Table>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                }
            </Table>
        </>
    )
}

export default Lesson27;