/** 
 * Passsing Functions As Props
*/

function Lesson12(props) {

    return (
        <div>
            <h3>passing props as function</h3>

            {/* passing function as props from App component */}
            <button onClick={props.data}> click me</button> 
        </div>
    )
}

export default Lesson12;