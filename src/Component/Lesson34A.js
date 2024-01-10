import { forwardRef } from "react"

// component that will received the ref
function Lesson34A(props,ref) {
    return (
        <>
            <input type="text" ref={ref}></input>
        </>
    )
}

// its a syntax to received forwarded ref
export default forwardRef(Lesson34A);