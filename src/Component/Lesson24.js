
/**
 * demonstrate how to use react-bootstrap in react
 * map function
 */

import { Alert } from "react-bootstrap";

function Lesson24() {
    return (
        <>
            {[
                'primary',
                'secondary',
                'success',
                'danger',
                'warning',
                'info',
                'light',
                'dark',
            ].map((variant) => (
                <Alert key={variant} variant={variant}>
                    This is a {variant} alert—check it out!
                </Alert>
            ))}
        </>
    )
}

export default Lesson24;