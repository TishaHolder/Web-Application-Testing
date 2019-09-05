import React from "react";

function Dashboard (props){

    return (

        <div className = "dashboard-div">

            <button onClick = {props.strikesCount}> Strike </button>

            <button onClick = {props.ballsCount}> Ball </button>

            <button onClick = {props.foulCount}> Foul </button>

            <button onClick = {props.hitCount}> Hit </button>

        </div>

    );

}

export default Dashboard;