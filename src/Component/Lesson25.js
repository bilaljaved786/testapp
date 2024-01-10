/**
 *  use array of object and map function 
 */

import '../App.css'

function Lesson25() {

    // const names = ['bilal', 'javed', 'mughal','khan']; // using array   example 1
    const names = [
        { name: 'bilal', cms: '15212' },
        { name: 'khan', cms: '15213' },
        { name: 'mughal', cms: '15214' },
    ]; // using array of objetcs  example 2

    // names.map((name) => {
    //     console.warn(name);
    // })

    // names.forEach(n => {
    //     console.warn(n);
    // });

    // for (let index = 0; index < names.length; index++) {
    //      console.warn(names[index]);
    // }

    return (
        <div className="App">
            <table style={{backgroundColor:'red', border: '5px solid black'}}>
            <tr>
                <th>Name</th>
                <th>CMS</th>
            </tr>
                {
                    names.map((n) => // use map function here to iterate over the collection
                        <tr>
                            {/* looping over tr  tag */}
                            <td>{n.name}</td>
                            <td>{n.cms}</td>
                        </tr>
                    )
                }
            </table>

            {/* NOTE: inside return we cannot use foor,while,do while loop
                 for (let index = 0; index < names.length; index++) {
                    console.warn(name[index]); */}
        </div>
    )
}

export default Lesson25;