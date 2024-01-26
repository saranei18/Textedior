import React, {useState} from 'react'


export default function TextForm(props) {
    const [text, setText] = useState('');

    const handleUpClick = ()=>{
        setText(text.toUpperCase())
        props.showAlert("Converted to UpperCase", "success");
    }

    const handleOnChange = (event)=>{
        setText(event.target.value);
    }

    const handleLowClick = (event)=>{
        setText(text.toLowerCase())
        props.showAlert("Converted to Lowercase", "success");
    }

    const handleClearClick = (event)=>{
        setText('');
        props.showAlert("Text Cleared", "success");
    }

  return (
    <>
    <div className="container" style={{color: props.mode === 'dark' ? "white" : "#042743"}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value = {text} style={{backgroundColor: props.mode === 'dark' ? "grey" : "white", color: props.mode === 'dark' ? "white" : "black"}} placeholder='Enter Text Here' onChange={handleOnChange} id="myBox" rows="6"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert To UpperCase</button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert To LowerCase</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
    </div>
    <div className="container my-3" style={{color: props.mode === 'dark' ? "white" : "dark"}}>
        <h1 style={{color: props.mode === 'dark' ? "white" : "#042743"}}>Your Text Summary</h1>
        <p style={{color: props.mode === 'dark' ? "white" : "#042743"}}>{text[text.length] - 1 === ' '? text.split(" ").length-2 : text.split(" ").length-1} words and {text.length} characters</p>
        <p style={{color: props.mode === 'dark' ? "white" : "#042743"}}>{0.008 * text.split(" ").length === 0.008 ? 0 : 0.008 * (text.split(" ").length-1)} Minutes read </p>
        <h2 style={{color: props.mode === 'dark' ? "white" : "#042743"}}>Preview</h2>
        <p style={{color: props.mode === 'dark' ? "white" : "#042743"}}>{text.length > 0?text:"Enter something to preview here"}</p>
    </div>
    </>
    
  )
}
