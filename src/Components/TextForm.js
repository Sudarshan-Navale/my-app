import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLoClick = ()=>{
      // console.log("Uppercase was clicked" + text);
      let newText = text.toLowerCase();
      setText(newText)
    }
    const handleCleClick = ()=>{
      // console.log("Uppercase was clicked" + text);
      let newText = "";
      setText(newText)
    }
    const handleCopy = ()=>{
      // console.log("Uppercase was clicked" + text);
      var text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
    }
    const handleExtraSpaces = ()=>{
      // console.log("Uppercase was clicked" + text);
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "))
    }
    const handleOnChange = (Event)=>{
        // console.log("On Change");
        setText(Event.target.value);
    }
    const [text, setText] = useState('');
  return (
    <><div className='container'>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleUpClick}> Convert to Uppercase</button>
      <button className="btn btn-primary mx-2" onClick={handleLoClick}> Convert to Uppercase</button>
      <button className="btn btn-primary mx-2" onClick={handleCleClick}>Clear text</button>
      <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy text</button>
      <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Trim</button>
    </div>
    <div>
      <h1>Summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008*text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div></>
  )
}
