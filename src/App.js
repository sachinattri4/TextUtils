import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
 const [ mode, setMode ] = useState('light');
 const [ alert, setAlert ] = useState(null);

 const showAlert = (message, type) => {
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
        setAlert(null);
      }, 2000);
 }
 const themeMode = (themeColor) => {
  /* switch(themeColor){ 
    case "dark": { return setMode('dark') }
    case "danger":
    case "success":
    case "primary":
    case "info":
    default:  */
    if(themeColor === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode has been enabled", "success");
    }
    else if(themeColor === 'dark'){
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Dark mode has been enabled", "success");
    }
    else if(themeColor === 'danger'){
      setMode('danger');
      document.body.style.backgroundColor='white';
      showAlert("Danger mode has been enabled", "success");
    }
    else if(themeColor === 'success'){
      setMode('success');
      document.body.style.backgroundColor = 'white';
      showAlert("success mode has been enabled", "success");
    }
    else if(themeColor === 'primary'){
      setMode('primary');
      document.body.style.backgroundColor = 'white';
      showAlert("Primary mode has been enabled", "success");
    }
    else if(themeColor === 'info'){
      setMode('info');
      document.body.style.backgroundColor = 'white';
      showAlert("Info mode has been enabled", "success");
    }
  }
  
  return (
    <Router>
      <Navbar title="TextUtils" mode = { mode } themeMode = { themeMode } />
      <Alert alert = { alert }/>
      <div className="container my-3">
      <Switch>
          <Route exact path="/about">
          <About />
          </Route>
          <Route exact path="/">
          <TextForm showAlert = { showAlert } heading="Enter text to analyze below" mode = { mode } />
          </Route>
        </Switch>
      </div>
      </Router>  
  );
}

export default App;
