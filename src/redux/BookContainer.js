// import React from 'react';

// import { useDispatch, useSelector } from 'react-redux';
// import { Add_Number, Minus_Number } from './action';

// // this is the BookContainer component called from App.js component
// function BookContainer() {

//     // using useSelector hook to access the state object from store
//     const data = useSelector(state => state.numberOfBooks);
    
//     // using useDispatch hook to dispatch actions
//     const dispatch = useDispatch();

//     return (
//         <>
//             <h1>number of books in redux store is {data} </h1>
//             <button onClick={() => dispatch(Add_Number())}><b>Add</b></button> &nbsp;&nbsp;
//             <button onClick={() => dispatch(Minus_Number())}><b>Minus</b></button>
//         </>
//     )
// }

// export default BookContainer;
