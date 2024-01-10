function Test() {

    //  inner component 
    function InnerComponent() {
        return (
            <h1 style={{ background: "green" }}>
                this is the inner component
            </h1>
        )
    }

    return (
        <>
            <InnerComponent></InnerComponent>
            <h1 style={{ color: "blue" }}>this is the main heading</h1>
            <h1 style={{ color: "red" }}>this is the another main heading</h1>
            <h1 style={{ color: "red" }}>this is bilal</h1>
        </>
    )
}

export { Test };