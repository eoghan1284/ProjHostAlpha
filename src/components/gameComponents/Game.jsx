import React, { useState, useEffect } from 'react';
import './styles/Game.css'; 
import goldCoin from './gameAssets/goldCoin.png'
import goodGoblin from './gameAssets/goodGoblin.png'
import evilGoblin from './gameAssets/evilGoblin.png'


function Game( {probs, playerGold, setPlayerGold, choices, setChoices, results, setResults, onGameEnd} ) {

  const [ShowGoodGoblin, setShowGoodGoblin] = useState({ cave1: false, cave2: false, cave3: false });
  const [ShowBadGoblin, setShowBadGoblin] = useState({ cave1: false, cave2: false, cave3: false });
  const [showInfo, setShowInfo] = useState(true);
  const [trialNum, updateTrialNum] = useState(0);
  

  const addChoice = (newChoice) => {
    setChoices([...choices, newChoice]);
  };
  
  const addResult = (newResult) => {
    setResults([...results, newResult]);
  };
  
  
  const incrementTrialNum = () => {
    updateTrialNum(prevNum => prevNum + 1);
  };

  const handleGameEnd = () => {
    onGameEnd();
  };

  useEffect(() => {
    if (trialNum >= 80) {
      handleGameEnd();
    }
  }, [trialNum, handleGameEnd]); 


  const handleOkClick = () => {
    setShowInfo(false);
  };

  const winLoss = (prob) => {
    const randomNumber = Math.random();
    const res = randomNumber > prob ? -1 : 1;
    addResult(res);
    return res;
  };  

  const handleCaveClick = (caveNum) => {
    addChoice(caveNum);
    incrementTrialNum();
    const result = winLoss(probs[caveNum - 1]);
    updatePlayerGold(result);
  
    // Clear any existing timeouts for all caves to prevent overlapping images
    clearTimeout(ShowGoodGoblin.timeout);
    clearTimeout(ShowBadGoblin.timeout);
  
    const resetState = {
      cave1: false,
      cave2: false,
      cave3: false,
      timeout: null, // Add a timeout property to manage visibility timeout
    };
  
    if (result === 1) {
      setShowGoodGoblin(prev => ({
        ...resetState,
        [`cave${caveNum}`]: true,
        timeout: setTimeout(() => {
          setShowGoodGoblin(prev => ({ ...prev, [`cave${caveNum}`]: false }));
        }, 1000),
      }));
    } else if (result === -1) {
      setShowBadGoblin(prev => ({
        ...resetState,
        [`cave${caveNum}`]: true,
        timeout: setTimeout(() => {
          setShowBadGoblin(prev => ({ ...prev, [`cave${caveNum}`]: false }));
        }, 1000),
      }));
    }
  };
  

  
  const updatePlayerGold = (res) => {
    setPlayerGold(prevCount => prevCount + res);
  };

  const Cave = ({ number }) => {
    const styles = {
      1: { top: '70%', left: '2%', height: '10vh', width: '8vh', backgroundColor: 'transparent', display: 'flex', flexDirection: 'column', justifyContent: 'center'},
      2: { top: '55%', left: '12%', height: '9vh', width: '8vh', backgroundColor: 'transparent'},
      3: { top: '57%', left: '85%', height: '14vh', width: '8vh', backgroundColor: 'transparent', display: 'flex', flexDirection: 'column', justifyContent: 'center'},
    };
  
    const caveStyles = {
      position: 'absolute',
      opacity: '1',
      ...styles[number], 
    };
  
    return (
      <div onClick={() => handleCaveClick(number, winLoss(probs[number - 1]))} style={caveStyles}>
        {ShowGoodGoblin[`cave${number}`] && (
          <img src={goodGoblin} alt="good Goblin" style={{ width: '100%', height: 'auto' }} />
        )}
        {ShowBadGoblin[`cave${number}`] && (
          <img src={evilGoblin} alt="evil Goblin" style={{ width: '100%', height: 'auto' }} />
        )}
      </div>
    );
  };

  return (
    <div id='gamePage'>
      <div id='infoContainer' style={{ display: showInfo ? 'block' : 'none' }}> 
        <div id='infoTitleDiv'>
          <h2>Game Time!</h2>
        </div>
        <div id='info_Div'>
          <p>In this enchanted realm, three mysterious caves await. Your quest is to gather as much gold as possible by venturing into these caves by clicking on their entrances. <br /><br />
            All the caves are home to a both a friendly goblin who will give you a gold coin, and also a malevolent goblin who will take a coin if he catches you. <br /><br />
            Not all caves offer equal luck; observe the patterns of your encounters to deduce which cave's malevolent goblin is easiest to avoid. Your bravery and strategy will determine your wealth in this adventure of risk and reward.
          </p>
          <div id='buttonDiv'>
            <button id='okayBtn' onClick={handleOkClick}>Play</button>
          </div>
        </div>
      </div>
      <div className="parent">
        <Cave number={1}></Cave>
        <Cave number={2}></Cave>
        <Cave number={3}></Cave>

      </div>
      <div id='hudDiv'>
        <div id='displayDiv'>
          <img src={goldCoin} alt="Gold Coin"/>
          <span id="coinCount">{playerGold}</span>
        </div>
      </div>
    </div>
  );
}

export default Game;