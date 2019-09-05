import React from 'react';
import Display from "./components/Display.js";
import Dashboard from "./components/Dashboard.js";
import './App.css';

function App() {

  const [strikes, setStrikes] = useState(0);
  const [balls, setBalls] = useState(0);

  const strikesCount = () => {
    //balls and strikes reset to 0 when a player reaches 3 strikes or 4 balls.
    if(strikes == 3){
      setStrikes(0);
      setBalls(0);
    }
    else {
      setStrikes(strikes + 1);

    }
    
  }
  const ballsCount = () => {
    //balls and strikes reset to 0 when a player reaches 3 strikes or 4 balls.
    if(balls == 4){
      setStrikes(0);
      setBalls(0);
    }
    else {
      setBalls(balls + 1);

    }
   
  }

  const foulCount = () => {

    //With no strikes, a foul makes it 1 strike.
    if(strikes === 0){
      setStrikes (strikes + 1);
    }

    //With 1 strike, a foul makes it 2 strikes
    if (strikes === 1){
      setStrikes(strikes + 2);
    }
    if (strikes === 2) {
      //With two strikes a foul has no effect, count stays at 2 strikes.
      setStrikes(strikes + 0);
    }
    
  }

  const hitCount = () => {

    //balls and strikes reset to 0 when a hit is recorded.
    setBalls(0);
    setStrikes(0);
  }


  return (
    <div className = "App">

      <Display strikes = {strikes} balls = {balls}/>
      <Dashboard strikesCount = {strikesCount} ballsCount = {ballsCount} foulCount = {foulCount} hitCount = {hitCount} />

    </div>
  );

  
}

export default App;
