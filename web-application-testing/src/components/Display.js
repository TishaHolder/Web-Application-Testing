import React from "react";

function Display (props){

    return (
        <div className = "display-div">

            <div className = "strikes-div">

                Strikes: {props.setStrikes}

            </div>

            <div className = "balls-div">

                Balls: {props.setBalls}

            </div>

        </div>

    );



}

export default Display;