function Lesson3() {

    let data = "bilal";

    /**
     *   when i click on the button the data variable is updated to "javed"
     *   but not render inside the component 
     *   this is the problem when we dont use states and props 
     */
    
    function clickme() { 
        data = "javed";
        alert(data);
    }

    return (
        <>
            <h1>practicing events in react</h1>
            <h1>{data}</h1>
            <button onClick={() => clickme()}>click me</button>
        </>
    )
}

export default Lesson3;