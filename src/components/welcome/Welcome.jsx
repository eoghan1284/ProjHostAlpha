import React, { useState } from 'react';
import './Welcome.css';

const Welcome = ({ gender, setGender, age, setAge, onStart }) => {
  const handleGenderChange = (event) => {
    document.getElementById('genderInput').style.color = 'black';
    const selectedGender = event.target.value;
    setGender(selectedGender);
  };

  const handleAgeChange = (event) => {
    document.getElementById('ageInput').style.color = 'black';
    const selectedAge = event.target.value;
    setAge(selectedAge);
  };

  const handleStart = () => {
    let valid = true;
    if (!gender) {
      document.getElementById('genderInput').style.color = 'red';
      valid = false;
    }
    if (age === '') {
      document.getElementById('ageInput').style.color = 'red';
      valid = false;
    }
    if (valid) {
      onStart(gender);
    }
  };

  return (
    <div id="page">
      <div id='container'>
        <div id='titleDiv'>
          <h2>Welcome</h2>
        </div>
        <div id='inputDiv'>
          <div id='expDiv'>
            <p>Over the course of this short activity, you will fill out 3 short surveys and then play a game. <br />
              Please enter your gender and age, then press Start to begin.
            </p>
          </div>
          <select id='genderInput' name='Gender' value={gender} onChange={handleGenderChange}>
            <option value="" disabled>Select your gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <select id='ageInput' name='Age' value={age} onChange={handleAgeChange}>
            <option value="" disabled>Select your age</option>
            {Array.from({ length: 125 }, (_, i) => (<option key={i} value={i + 1}>{i + 1}</option>))} 
          </select>
          <div>
            <button onClick={handleStart}>Start</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
