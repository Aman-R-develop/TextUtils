import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const [textState, setTextState] = useState('dark')
  const [mode, setmode] = useState('light')
  const [alert, setalert] = useState(null)
  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null)
    }, 2000);
  }
  const [text, settext] = useState("Dark")
  const [textcolor, settextcolor] = useState("dark")
  const togglemode = () => {
    if (mode === "dark" && textState === "light" && text === "Light" && textcolor === "light") {
      setmode('light')
      setTextState('dark')
      settext("Dark")
      settextcolor("dark")
      showAlert("Light Mode has been enabled", "success")
      document.body.style.backgroundColor = "white"
      document.body.style.color = "black"
    } else {
      setmode('dark')
      setTextState('light')
      settext("Light")
      settextcolor("light")
      showAlert("Dark Mode has been enabled", "success")
      document.body.style.backgroundColor = "#7b929a"
      document.body.style.color = "white"
    }

  }
  return (
    <>
      <Router>
      <Navbar title="TextUtils" aboutText="About Us" text={text} mode={mode} textState={textState} togglemode={togglemode} />
      <Alert alert={alert} />
        <div className="container">
        <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
          <TextForm textState={mode} colorborder={textState} showAlert={showAlert} mode={mode} textcolor={textcolor} heading="Enter the text to be analyzed" />
          </Route>
        </Switch>
        </div>
      </Router>
      
      
      <div className="container">
        {/* <About/> */}
        
      </div>
    </>
  );
}

export default App;
