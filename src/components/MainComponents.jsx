import React, { useState, useEffect } from 'react';
import Welcome from './welcome/Welcome.jsx';
import Survey1 from './surveyComponents/Survey1.jsx';        
import Survey2 from './surveyComponents/Survey2.jsx';       
import Survey3 from './surveyComponents/Survey3.jsx'; 
import Game from './gameComponents/Game.jsx';
import Finish from './finish/Finish.jsx';
import '../styles/App.css';

const MainComponents = ({ gender, setGender, age, setAge, probs, playerGold, setPlayerGold, survey1Answers, setSurvey1Answers, survey2Answers, setSurvey2Answers, survey3Answers, setSurvey3Answers, total1, setTotal1, total2, setTotal2, total3, setTotal3, choices, setChoices, results, setResults, onFinished}) => {
  const [currentStep, setCurrentStep] = useState('Welcome');

  useEffect(() => {  //this useEffect triggers scroll to top every time currentStep changes.
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [currentStep]); 

  useEffect(() => {
    if (currentStep === 'Finish') {
      onFinished();
    }
  }, [currentStep, onFinished]); // This effect listens for changes to currentStep and calls onFinished when it reaches 'Finish'


  const handleNext = (nextStep) => {
    setCurrentStep(nextStep);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 'Welcome':
        return <Welcome onStart={() => handleNext('Survey1')} gender={gender} setGender={setGender} age={age} setAge={setAge}/>;
      case 'Survey1':
        return <Survey1 onNext={() => handleNext('Survey2')} survey1Answers= {survey1Answers} setSurvey1Answers={setSurvey1Answers} total1={total1} setTotal1={setTotal1}/>;
      case 'Survey2':
        return <Survey2 onNext={() => handleNext('Survey3')} survey2Answers= {survey2Answers} setSurvey2Answers={setSurvey2Answers} total2={total2} setTotal2={setTotal2}/>;
      case 'Survey3':
        return <Survey3 onNext={() => handleNext('Game')} survey1Answers= {survey3Answers} setSurvey3Answers={setSurvey3Answers} total3={total3} setTotal3={setTotal3}/>;
      case 'Game':
        return <Game onGameEnd={() => handleNext('Finish')} probs={probs} playerGold={playerGold} setPlayerGold={setPlayerGold} choices={choices} setChoices={setChoices} results={results} setResults={setResults}/>;
      case 'Finish':
        return <Finish/>;
      default:
        return <div>Invalid step</div>;
    }
  };

  return (
    <div className="main-components">
      {renderStep()}
    </div>
  );
};

export default MainComponents;
