import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
 const darkTheme = ()=>{
  setMode('light');
  document.body.style.backgroundColor='white';
  showAlert("White mode has been enabled", "success");
 }
 
 const lightTheme = ()=>{
  setMode('dark');
  document.body.style.backgroundColor='#042743';
  showAlert("Dark mode has been enabled", "success");
 }

 const dangerTheme = ()=>{
    setMode('danger');
    document.body.style.backgroundColor='white';
    showAlert("Danger mode has been enabled", "success");
 }

 const successTheme = ()=>{
    setMode('success');
    document.body.style.backgroundColor = 'white';
    showAlert("success mode has been enabled", "success");
  }

  const primaryTheme = ()=>{
    setMode('primary');
      document.body.style.backgroundColor = 'white';
      showAlert("Primary mode has been enabled", "success");
  }

  const infoTheme = ()=>{
    setMode('info');
      document.body.style.backgroundColor = 'white';
      showAlert("Info mode has been enabled", "success");
  }

 const themeMode = (themeColor) => {
   switch(themeColor){ 
    case "dark": return darkTheme();
    case "danger": return dangerTheme();
    case "success": return successTheme();
    case "primary": return primaryTheme();
    case "info": return infoTheme();
    default: return lightTheme();
   }
  }
  
  return (
    <Router>
      <Navbar title="TextUtils" mode = { mode } themeMode = { themeMode } />
      <Alert alert = { alert }/>
      <div className="container my-3">
      <Routes>
        <Route exact path='/about' element={ <About /> }></Route> 
        <Route exact path='/' element={ <TextForm showAlert = { showAlert } heading="Enter text to analyze below" mode = { mode } /> }></Route> 
        </Routes>
      </div>
      </Router>  
  );
}

export default App;
