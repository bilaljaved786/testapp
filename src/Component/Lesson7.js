// props using class component's

import React from "react";

class Lesson7 extends React.Component {
    render() {
        return (
            <>
                <h3> props using class components</h3>
                <p>coming from app component {this.props.stdName}</p>
            </>
        )
    }
}

export default Lesson7;


// App component for this use case coding 

// import './App.css';
// import Lesson7 from './Component/Lesson7';
// import { Component, useState } from 'react';

// class App extends Component {

//   // let [studentName, setName] = useState("bilal javed");

//   constructor() {

//     super();

//     this.state = {
//       studentName: "bilal javed"
//     }

//   }

//   updateName() {
//     this.setState({ studentName: "bilal javed mughal khan" })
//   }

//   render() {
//     return (
//       <div className="App">
//         <h1>this is the App component</h1>

//         <Lesson7 stdName={this.state.studentName} ></Lesson7>
//         <button onClick={()=> this.updateName()}>update name</button>

//         {/* <Lesson6 stdName={studentName} ></Lesson6>
//         <button onClick={updateName}>Update Name</button> */}
//       </div>
//     );
//   }
// }

// export default App;