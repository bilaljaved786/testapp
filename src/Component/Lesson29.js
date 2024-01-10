/**
 * sending data from child to parent Component
 */

import '../App.css';

function Lesson29() {

    function childToParent(dataFromChild) { // function send to child component
        window.alert(`getting data from the child component ${dataFromChild}`)
    }

    return (
        <div className=" App" style={{ marginTop: '50px' }}>
            <h4>sending data from child to parent Component</h4>
            <ChildComponent data={childToParent}></ChildComponent>
        </div>
    )
}

//creating child component 
function ChildComponent(props) {  // getting props in child component

    let name = 'Bilal Ahmed'; //declare and initialize variable 
    return (
        <button onClick={() => props.data(name)}>send data</button>  //here sending data from child to parent
    )
}

export default Lesson29;