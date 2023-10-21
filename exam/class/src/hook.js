import { useState } from "react";

function Hooks(){
   
    let [Num , setNum] =useState(0);
  
    
    function Count(){
       setNum(Num +1)

    }
    return(
        <div>
            <h1>
                hooks
            </h1>
            <h1>{Num}</h1>
            <button onClick={Count}>
                click me 
            </button>
        </div>
    )
}
export default Hooks