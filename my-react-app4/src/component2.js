import React, { useState } from "react";

function Text(props){


    const [text ,setText]= useState('Enter text here')
   
     const Click =()=>{
             let newtext = text.toUpperCase()
             setText(newtext)

     }


     const onchange =(event)=>{
        setText(event.target.value);
        

     }
     
     

 
    return( 
        <>  
              <div className="form-group">
                    
              <div className="container">
                <h1> {props.heading}</h1>
              <label htmlFor="exampleFormControlTextarea1">Convert to upper case </label>
                    <textarea value={text} onChange={onchange} className="form-control" id="exampleFormControlTextarea1" rows="8"></textarea><br/>
                    <button onClick={Click} className="btn btn-primary">Convert to uppercase</button>
              </div>
              </div>

        </>
    )
}
export default Text;