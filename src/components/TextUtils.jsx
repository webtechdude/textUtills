import "../index.css";
import React from 'react'
import { useState } from "react";





function TextUtils(props) {

    const Button = ({ variant, onClick, content }) => {
        return (
            <button className={`btn btn-outline-${variant} m-1`} onClick={onClick}>
                {content}
            </button>
        )
    }
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
    const txtCopy = async () => {
        navigator.clipboard.writeText(text);
    }


    return (
        <>
            <div>
                <div className="container pt-5">
                    <h1>{props.heading}</h1>
                    <div className="mb-3">
                        <textarea style={textStyle} className="form-control" value={text} onChange={changeTrack} id="myBox" rows="8"></textarea>
                    </div>

                    <Button variant="primary" onClick={txtToUpper} content="Upper Case" />
                    <Button variant="warning" onClick={txtToLower} content="Lower Case" />
                    <Button variant="danger" onClick={txtToCap} content="Capitalize" />
                    <Button variant="secondary" onClick={txtToClear} content="Clear" />
                    <Button variant="info" onClick={txtCopy} content="Copy" />


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
    /* From https://css.glass */
    background: "rgba(249, 249, 249, 0.3)",
    bordeRadius: "16px",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
    backdropFilter: "blur(13.6px)",
    border: "1px solid rgba(249, 249, 249, 0.79)",
}


export default TextUtils;