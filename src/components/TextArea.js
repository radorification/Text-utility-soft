import React,{ useState } from 'react'
import { Container } from 'react-bootstrap'

export default function TextArea(props) {
 const [text, setText] = useState("Enter text here!");
 const upClick= () => {
     console.log("Uppercase initialized");
     let newText= text.toUpperCase();
     setText(newText);
     props.showAlert("Uppercase Initialized","success");
 }
 const downClick= () => {
    console.log("Lowercase initialized");
    let newText= text.toLowerCase();
    setText(newText);
    props.showAlert("Lowercase Initialized","success");
    
 }
 const spaceClick= () => {
    console.log("Spaces removed");
    let newText= text.split(/[ ] +/).join(' ');//Important concept
    setText(newText);
    props.showAlert("Extra spaces have been removed","success");
 }

 const handleonChange= (event) => {
        console.log("On change"+{text})
        setText(event.target.value)
 }
  return (<>
        <Container>
            <div>TextArea</div>
            <div className="mb-3">
                <textarea className="form-control" id="myBox" rows="8" onChange={handleonChange} value={text}></textarea>
                <br></br>
                <button className="btn btn-primary" onClick={upClick}>To Uppercase</button>&ensp;
                <button className="btn btn-primary" onClick={downClick}>To Lowercase</button>&ensp;
                <button className="btn btn-primary" onClick={spaceClick}>Remove Extra Spaces</button>&ensp;
            </div>
        </Container>   
        <div className="container">
            <h1>Your text summary:</h1>
            <p>
            {text.length} charcters and {text.split(" ").length} words.
            </p>
        </div>
    </>
  )
}
