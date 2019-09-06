import React from "react";

function Display (props){

    return (
        <div className = "display-div">

            <h2>Baseball Score Tracker</h2>

            <div className = "score-board-div">

                <div className = "strikes-div">

                    <p>Strikes</p>
                    
                    <p>{props.strikes}</p>

                </div>

                <div className = "balls-div">

                    <p> Balls </p> 
                    
                    <p> {props.balls} </p>

                </div>

            </div>

        </div>

    );



}

export default Display;