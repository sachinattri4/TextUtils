import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("");

    const handleUpClick = () => {
       let newText = text.toUpperCase();
       setText(newText);
    }

    const handleLowerClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
     }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const handleClear = () => {
        let newText = "";
        setText(newText);
    }

    const handleCamelCase = () => {
      let newText =   text.split(' ').map(function(word,index){
            if(index === 0){
              return word.toLowerCase();
            }
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
          }).join('');
          setText(newText);
    }

  return (
    <>
        <div className='container'>
            <h1> { props.heading } </h1>
                <div className="mb-3">
                    <textarea className="form-control" onChange={ handleOnChange } value={ text } id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={ handleUpClick }>Convert to UpperCase</button>
                <button className="btn btn-primary mx-1" onClick={ handleLowerClick }>Convert to LowerCase</button>
                <button className="btn btn-primary mx-1" onClick={ handleClear }>Clear Text</button>
                <button className="btn btn-primary mx-1" onClick={ handleCamelCase }>Convert to Camel Case</button>
        </div>
        <div className='container my-4'>
            <h2> Your text summary </h2>
            <p> { text === "" ? 0 : text.split(" ").length } words and { text.length } characters</p>
            <p> { 0.008 * text.split(" ").length } minutes read</p>
            <h2> Preview </h2>
            <p> { text } </p>
        </div>
            
    </>
  )
}
