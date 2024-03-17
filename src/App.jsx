import React, { useState } from 'react';
import MainComponents from './components/MainComponents';
import './styles/App.css';

const shuffleArray = (array) => {
  let currentIndex = array.length, randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
};

const App = () => {
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [playerGold, setPlayerGold] = useState(100);
  const [probs, setProbs] = useState(() => shuffleArray([0.3, 0.5, 0.7]));
  const [survey1Answers, setSurvey1Answers] = useState(Array(7).fill(0));
  const [survey2Answers, setSurvey2Answers] = useState(Array(9).fill(0));
  const [survey3Answers, setSurvey3Answers] = useState(Array(42).fill(0));
  const [total1, setTotal1] = useState(0);
  const [total2, setTotal2] = useState(0);
  const [total3, setTotal3] = useState(0);
  const [choices, setChoices] = useState([]);
  const [results, setResults] = useState([]);

  const handleFinish = () => {
    console.log("Finished");
    console.log(gender);
    console.log(age);
    console.log(total1);
    console.log(total2);
    console.log(total3);
    console.log(probs);
    console.log(playerGold);
    console.log(choices);
    console.log(results);
    submitData();
  };

  const submitData = () => {
    const userData = {
      gender: gender,
      age:age,
      survey1Answers: survey1Answers,
      survey2Answers: survey2Answers,
      survey3Answers: survey3Answers,
      survey1Total: total1,
      survey2Total: total2,
      survey3Total: total3,
      probabilities: probs,
      choices:choices,
      results: results,
      finalGold: playerGold
    };

    // Send POST request to server
    fetch('http://localhost:3000/observation', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    })
    .then(response => response.json())
    .then(data => {
      console.log('Observation stored:' + data);
    })
    .catch(error => {
      console.error('Error storing observation:', error);
    });
  };

  return (
    <MainComponents 
      gender={gender} 
      setGender={setGender} 
      age={age}
      setAge={setAge}
      playerGold={playerGold} 
      setPlayerGold={setPlayerGold} 
      probs={probs}
      survey1Answers={survey1Answers}
      setSurvey1Answers={setSurvey1Answers}
      survey2Answers={survey2Answers}
      setSurvey2Answers={setSurvey2Answers}
      survey3Answers={survey3Answers}
      setSurvey3Answers={setSurvey3Answers}
      total1={total1} 
      setTotal1={setTotal1} 
      total2={total2} 
      setTotal2={setTotal2}
      total3={total3} 
      setTotal3={setTotal3}
      choices={choices}
      setChoices={setChoices}
      results={results} 
      setResults={setResults}
      onFinished={handleFinish}
    />
  );
};

export default App;
