import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Add_Number, Minus_Number } from './action';

function BookContainer() {
    const data = useSelector(state => state.numberOfBooks);
    const dispatch = useDispatch();

    return (
        <>
            <h1>number of books in store is {data} </h1>
            <button onClick={() => dispatch(Add_Number())}><b>Add</b></button> &nbsp;&nbsp;
            <button onClick={() => dispatch(Minus_Number())}><b>Minus</b></button>
        </>
    )
}

export default BookContainer;
