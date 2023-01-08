import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import React,{ useState } from 'react'
import Navbar from './components/Navbar';
import TextArea from './components/TextArea';
import Alert from './components/Alert';
function App() {
  const [alert, setAlert] = useState(null);
  const showAlert= (message, type) =>{
    setAlert({
      msg: message,  //Can be different than "message" like: 'msg' used in here
      type: type,    //Or even can be same as used here: 'type' in both cases
    })
    setTimeout(() =>{
      setAlert= (null);
    },1500);
  }
  
  return (
    <>
<Navbar title="TextUtils3" ></Navbar>
<Alert alert={alert}></Alert>
<TextArea showAlert={showAlert}></TextArea>
    </>
  );
}

export default App;
