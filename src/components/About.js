
import React, { useState } from 'react';

export default function About() {

    const [myStyle, setMyStyle] = useState({ color: 'black', backgroundColor: 'white' });

    const [btnText, setBtnText] = useState("Enable Dark Mode");

    const toggleStyle = () => {
        if (myStyle.color === 'white') {
            setMyStyle({ color: 'black', backgroundColor: 'white' });
            setBtnText("Enable Dark Mode")
        }
        else {
            setMyStyle({ color: 'white', backgroundColor: 'black',border:'white 1px solid' });
            setBtnText("Enable Light Mode")
        }
    }

    return (
        <>
        <div className="container border border-4 border-success my-5 " style={myStyle}>

            <h1 className=" mx-1 my-6">About </h1>

            <div className="accordion" id="accordionExample" style={myStyle}>

                <div className="accordion-item" style={myStyle}>

                    <h2 className="accordion-header" id="headingOne" style={myStyle}>

                        <button style={myStyle} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">

                            Text Summary

                        </button>
                    </h2>

                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample" style={myStyle}>

                        <div className="accordion-body text-success" style={myStyle}>

                            <strong>This is the first output you recieve from textbox gives you numer of characters and words in your textbox .</strong>
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>

                    <h2 className="accordion-header" id="headingTwo" style={myStyle}>

                        <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Reading Time
                            
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample" style={myStyle}>

                        <div className="accordion-body text-success" style={myStyle}>

                            <strong>As per the rate of reading i.e(minutes per word) you can calculate the reading time for entire textbox </strong> 
                        </div>

                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>

                    <h2 className="accordion-header" id="headingThree" style={myStyle}>

                        <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Text View
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample" style={myStyle}>

                        <div className="accordion-body text-success" style={myStyle}>

                            <strong>Gives us the view of entire content of textbox</strong> 
                        </div>
                    </div>
                </div>
            </div>

            <button className="btn btn-success mx-1 my-4" onClick={toggleStyle}>  {btnText}  </button>

        </div>
        </>
    )
}
