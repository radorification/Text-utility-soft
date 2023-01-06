import React,{ useState } from 'react'
import { Container } from 'react-bootstrap'

export default function TextArea() {
 const [text, setText] = useState("Enter text here!");
 const upClick= () => {
     console.log("Uppercase initialized");
     let newText= text.toUpperCase();
     setText(newText);
 }
 const downClick= () => {
    console.log("Lowercase initialized");
    let newText= text.toLowerCase();
    setText(newText);
 }
 const spaceClick= () => {
    console.log("Spaces removed");
    let newText= text.trim().split(/ +/).join('');//Important concept
    setText(newText);
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
                <button className="btn btn-primary" onClick={spaceClick}>Remove Spaces</button>&ensp;
            </div>
        </Container>   
        <div className="container">
            <h1>Your text summary:</h1>
            <p>
            {text.length} words and {text.split(" ").length} charcters.
            </p>
        </div>
    </>
  )
}
