import { useState } from "react";
import "./App.css";
import About from "./compnents/About";
import Navbar from "./compnents/Navbar";
import TextForm from "./compnents/TextForm";
import Alert from "./compnents/Alert";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [Mode, setMode] = useState('light');
  const [alert, setalert] = useState(null);

  const toggleMode = ()=> {
    if(Mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode is enabled", "success");
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode is enabled", "success");
    }
  }
  
  const showAlert = (message, type)=> {
    setalert({msg:message, type: type});
    setTimeout(() => {
      setalert(null);
    }, 2000)
  }

  return (
    <>
    <Router>
      <Navbar title="TextEditor" abouttext="About TextEditor" mode={Mode} toggleMode={toggleMode} />
      <Alert alertdet={alert}/>
      <div className="container my-3">
        <Switch>
            <Route path="/about">
              <About/>
            </Route>
            <Route>
            <TextForm heading="Enter the Text to be processed below" mode={Mode} showAlert={showAlert}/>
            </Route>
        </Switch>      
      </div>
    </Router>
    </>
  );
}

export default App;
