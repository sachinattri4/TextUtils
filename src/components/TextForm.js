import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("");

    const handleUpClick = () => {
       let newText = text.toUpperCase();
       setText(newText);
       props.showAlert("Converted to Upper Case !!","success")
    }

    const handleLowerClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower Case !!","success")
     }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const handleClear = () => {
        let newText = "";
        setText(newText);
        props.showAlert("Field Empty !!","success")
    }

    const handleCamelCase = () => {
      let newText =   text.split(' ').map(function(word,index){
            if(index === 0){
              return word.toLowerCase();
            }
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
          }).join('');
          setText(newText);
          props.showAlert("Converted to CamelCase !!","success")
    }

  return (
    <>
        <div className = "container" style={{color: props.mode === 'dark'?'white':'#042743'} }>
            <h1> { props.heading } </h1>
                <div className="mb-3">
                    <textarea style={{backgroundColor: props.mode === 'dark'?'#13466a':'white', color: props.mode === 'dark'?'white':'#042743'} } className="form-control" onChange={ handleOnChange } value={ text } id="myBox" rows="8"></textarea>
                </div>
                <button disabled = { text.length === 0 } className = {`btn btn-${props.mode} mx-1 my-1`} onClick={ handleUpClick }>Convert to UpperCase</button>
                <button disabled = { text.length === 0 } className = {`btn btn-${props.mode} mx-1 my-1`} onClick={ handleLowerClick }>Convert to LowerCase</button>
                <button disabled = { text.length === 0 } className = {`btn btn-${props.mode} mx-1 my-1`} onClick={ handleClear }>Clear Text</button>
                <button disabled = { text.length === 0 }className = {`btn btn-${props.mode} mx-1 my-1`} onClick={ handleCamelCase }>Convert to Camel Case</button>
        </div>
        <div className='container my-4' style={{color: props.mode === 'dark'?'white':'#042743'} }>
            <h2 > Your text summary </h2>
            <p> { text.split(/\s+/).filter((ele)=>{ return ele.length !== 0}).length } words and { text.length } characters</p>
            <p> { 0.008 * text.split(" ").filter((ele)=>{ return ele.length !== 0}).length } minutes read</p>
            <h2> Preview </h2>
            <p> { text.length>0?text:"Nothing to Preview !!" } </p>
        </div>
            
    </>
  )
}
