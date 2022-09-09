import { useState } from 'react';
import './index.css';
import TextUtils from './components/TextUtils';



const App = () => {
    const [darkMode, setDarkMode] = useState(false);
    if (!darkMode) {
        document.body.style.backgroundColor = 'black'
        document.body.style.color = 'white'
    } else if (darkMode) {
        document.body.style.backgroundColor = 'white'
        document.body.style.color = 'black'
    }
    
    return (
        <>

            <div className="d-flex flex-row justify-content-end"><button onClick={darkMode ? setDarkMode(true): setDarkMode(false)} className='btn btn-outline-dark'>Enable {!darkMode ? "light" : "dark"} Mode</button></div>
            <div className="container-fluid">
                <TextUtils heading="TextUtils" />
            </div>

        </>
    )
}

export default App;