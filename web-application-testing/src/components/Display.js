import React from "react";

function Display (props){

    return (
        <div className = "display-div">

            <div className = "strikes-div">

                Strikes: {props.strikes}

            </div>

            <div className = "balls-div">

                Balls: {props.balls}

            </div>

        </div>

    );



}

export default Display;