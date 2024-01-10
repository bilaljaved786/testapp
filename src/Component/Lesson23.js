
/**
 * demostrate styling in react
 */

import '../App.css'
import BilalTest from '../App.module.css'
function Lesson23() {
    return (
        <div>
            {/* here using external css style sheet */}
            <h4 className="Test">style using external file</h4>

            {/* here using inline style attribute for css styling */}
            <h4 style={{
                color: 'blue',
                backgroundColor: 'yellow',
                textAlign: 'center',
                padding: '2%'
            }}>style using inline style attribute</h4>

            {/* here using App.module.css file for css stylying  */}
            <h4 className={BilalTest.TestBilal}>style using external file</h4>
        </div>
    )
}

export default Lesson23;