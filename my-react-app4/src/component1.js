import React from "react";

function Button(props){

    return(
        <>
        <button >
            {props.p}
        </button>

        <div>
            {props.img}

        </div>
        </>
    )
}
export default Button;