/**
 * demonstrate passing props from another component and see how use Effect works
 */

import { useEffect } from "react";

function Lesson22(props) { // getting these from app component

    useEffect(() => {
        console.warn("use Effect is called");
    },[props.countData]); // this is called conditionally use use_effect hook while passing passing props 
                          // from an  other component 

    return (
        <>
            <p>count {props.countData}</p>
            <p>count {props.numberData}</p>
        </>
    )
}

//  ===== here is below the implementation of App component =====

// export default Lesson22;

// import { useState } from 'react';
// import './App.css';
// import Lesson22 from './Component/Lesson22';

// function App() {

//   // initialized two states
//   let [count, setCount] = useState(0);
//   let [number, setNumber] = useState(0);

//   return (
//     <div className="App">

//       <Lesson22 countData={count} numberData={number}></Lesson22>

//       <button onClick={() => setCount(count + 1)}>update count</button> &nbsp;
//       <button onClick={() => setNumber(number + 1)}>update number</button>
//     </div>
//   )
// }

// export default App;