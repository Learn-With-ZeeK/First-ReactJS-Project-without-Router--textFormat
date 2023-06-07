import React, { useState } from 'react';


export default function TextForm(props) {

    const [text, setText] = useState('Enter text here');
    

   //Setting value of text by taking input from user
    const handleOnChange = (event) => {
        setText(event.target.value)

    }

    //Function executed when uppercase button pressed
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
      props.showAlert('Converted to UpperCase','Success:')
    }

    //Function executed when uppercase button pressed
    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Converted to LowerCase','Success:')
    }

    //Function executed when lowercase button pressed
    const handleClearClick = () => {
        let newText = " ";
        setText(newText);
        props.showAlert('Text Cleared','Success:')
    }



    //Function executed when Copy Text button pressed
    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert('Text Copied','Success:')
    }

    //Function executed when remove extra spaces button pressed
    const handleSpace = () => {
        let newText = text.split(/[" "]+/);
        setText(newText.join(" "));
        props.showAlert('Removed Extra Spaces','Success:')
    }

    return (
        <>
            <div className={`container my-5 text-${props.mode1}`}>

                <h1 >{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-success mx-1" onClick={handleLowClick}>Convert to Lowercase</button>
                <button className="btn btn-danger mx-1" onClick={handleClearClick}>Clear Text</button>
                <button className="btn btn-info mx-1" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-secondary mx-1" onClick={handleSpace}>Remove Extra Spaces</button>
            </div>

            <div className={`container my-5 text-${props.mode1}`}>
                <h2>Text Summary</h2>
                There are <strong>{text.length}</strong> characters and <strong>{text.split(" ").length}</strong> words in your textbox.
            </div>
            <div className={`container my-5 text-${props.mode1}`}>
                <h2>Reading Time</h2>
                If you can read 0.08 minutes per word then time taken for reading entire text is <strong>{0.08 * text.split(" ").length}</strong> minutes
            </div>
            <div className={`container my-5 text-${props.mode1}`}>
                <h2>Text View</h2>
                {text}
            </div>
        </>
    )
}


