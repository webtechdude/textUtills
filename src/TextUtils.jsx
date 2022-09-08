import "./index.css";
import React from 'react'
import { useState } from "react";



function TextUtils(props) {

    const [text, setText] = useState('')

    const changeTrack = (elem) => {
        setText(elem.target.value)
    }
    const txtToUpper = () => {
        setText(text.toUpperCase())
    }
    const txtToLower = () => {
        setText(text.toLowerCase())
    }
    const capitalize = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    const txtToCap = () => {
        setText(capitalize(text))
    }
    const txtToClear = () => {
        setText('')
    }
    const txtCopy = () => {
        navigator.clipboard.writeText(text);
    }


    return (
        <>
            <div style={props.customStyle}>
                <div className="container pt-5">
                    <h1>{props.heading}</h1>
                    <div className="mb-3">
                        <textarea style={textStyle} className="form-control" value={text} onChange={changeTrack} id="myBox" rows="8"></textarea>
                    </div>
                    <button className="btn btn-outline-primary mx-3" onClick={txtToUpper}>Convert to Uppercase</button>
                    <button className="btn btn-outline-warning mx-3" onClick={txtToLower}>Convert to Lowercase</button>
                    <button className="btn btn-outline-secondary mx-3" onClick={txtToCap}>Convert to Capitalize</button>
                    <button className="btn btn-outline-danger mx-3" onClick={txtToClear}>Clear Text</button>
                    <button className="btn btn-outline-info mx-3" onClick={txtCopy}>Copy</button>
                </div>
                <div className="container my-3">
                    <h3>Your text summary</h3>
                    <p>{text.length} characters</p>
                    <h2>Preview</h2>
                    <p>{text}</p>
                </div>
            </div>
        </>
    )
}

const textStyle = {
    fontFamily: 'monospace',
    fontSize: '1.2rem',
}


export default TextUtils;