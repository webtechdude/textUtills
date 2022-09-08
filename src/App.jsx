import { useState } from 'react';
import './index.css';
import TextUtils from './TextUtils';



const App = () => {
    const [mystyle, setmystyle] = useState({
        color: 'black',
        backgroundColor: 'white'
    })
    const [btnText, setBtnText] = useState('Enable Dark Mode');

    const toggleStyle = () => {
        if (mystyle.color === "black") {
            setmystyle({
                color: "white",
                backgroundColor: "black",
                border: "1px solid white",
            })
            setBtnText("Enable Light Mode")
        }
        else {
            setmystyle({
                color: 'black',
                backgroundColor: 'white'
            })
            setBtnText("Enable Dark Mode")
        }
    }
    return (
        <>
            <div style={Object.assign(mystyle, fullWH)}>
                <div className="d-flex flex-row justify-content-end"><button onClick={toggleStyle} className='btn btn-outline-dark'>{btnText}</button></div>
                <div className="container-fluid">
                    <TextUtils customStyle={mystyle} heading="TextUtils" />
                </div>
            </div>
        </>
    )
}
const fullWH = {
    minHeight: '100vh',
    minWidth: '100vw'
}

export default App;