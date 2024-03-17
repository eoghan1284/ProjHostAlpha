import React, { useState } from 'react';
import './Survey.css'; 
import {SurveyQuestionV1} from './SurveyQuestion.jsx';

function Survey1({ onNext, survey1Answers, setSurvey1Answers, total1, setTotal1}) { 
  const [responses, setResponses] = useState({
    q1: '',
    q2: '',
    q3: '',
    q4: '',
    q5: '',
    q6: '',
    q7: ''
  });

  const handleSelectChange = (event, questionKey) => {
    const numericalValue = parseInt(event.target.value, 10);
    setResponses(prevResponses => ({
      ...prevResponses,
      [questionKey]: numericalValue
    }));
  };

  const recordSurveyAnswers = () => {
    const answersArray = Object.keys(responses).map(key => parseInt(responses[key], 10));
    setSurvey1Answers(answersArray);
  };

  const calculateTotalScore = () => {
    return Object.values(responses).reduce((acc, curr) => {
      const currValue = curr === '' ? 0 : parseInt(curr, 10);
      return acc + currValue;
    }, 0);
  };
  
  const allQuestionsAnswered = Object.values(responses).every(value => value !== '');

  const handleNextClick = () => {
    if (!allQuestionsAnswered) {
      document.getElementById("warningDiv").style.display = "block";
    }
    else{
      recordSurveyAnswers();
      const totalScore = calculateTotalScore();
      setTotal1(totalScore);
      onNext(); 
    }
  };

  //below survey is the GAD-7 anxiety survey
  return (
    <div className='page'>
      <div className='Container'>
        <div className='TitleDiv'>
          <h2>Survey (1/3)</h2>
          <h4>Over the last 2 weeks, how often have you been bothered by the following problems?</h4>
        </div>
        <div className='InputDiv'>
          <SurveyQuestionV1 question="Feeling nervous, anxious, or on edge" onChange={(e) => handleSelectChange(e, 'q1')} />
          <SurveyQuestionV1 question="Not being able to stop or control worrying" onChange={(e) => handleSelectChange(e, 'q2')} />
          <SurveyQuestionV1 question="Worrying too much about different things" onChange={(e) => handleSelectChange(e, 'q3')} />
          <SurveyQuestionV1 question="Trouble relaxing" onChange={(e) => handleSelectChange(e, 'q4')} />
          <SurveyQuestionV1 question="Being so restless that it is hard to sit still" onChange={(e) => handleSelectChange(e, 'q5')} />
          <SurveyQuestionV1 question="Becoming easily annoyed or irritable" onChange={(e) => handleSelectChange(e, 'q6')} />
          <SurveyQuestionV1 question="Feeling afraid as if something awful might happen" onChange={(e) => handleSelectChange(e, 'q7')} />
          c
          <div className='ButtonDiv'>
            <button onClick={handleNextClick}>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Survey1;
