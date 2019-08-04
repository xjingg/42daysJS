import React from "react";

function Square(props){
    // constructor(){
    //     super();
    //     this.state={
    //         value:null,
    //     }
    // }

        return(
            <button className="square" onClick={props.onClick}>
        {props.value}
            </button>
        )
    }


export default Square;