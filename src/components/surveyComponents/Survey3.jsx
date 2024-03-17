import React, { useState } from 'react';
import './Survey.css'; 
import { SurveyQuestionV2 } from './SurveyQuestion.jsx';

function Survey2({ onNext, survey3Answers, setSurvey3Answers, total3, setTotal3 }) {
  const [responses, setResponses] = useState({
    q1: '',
    q2: '',
    q3: '',
    q4: '',
    q5: '',
    q6: '',
    q7: '',
    q8: '',
    q9: '',
    q10: '',
    q11: '',
    q12: '',
    q13: '',
    q14: '',
    q15: '',
    q16: '',
    q17: '',
    q18: '',
    q19: '',
    q20: '',
    q21: '',
    q22: '',
    q23: '',
    q24: '',
    q25: '',
    q26: '',
    q27: '',
    q28: '',
    q29: '',
    q30: '',
    q31: '',
    q32: '',
    q33: '',
    q34: '',
    q35: '',
    q36: '',
    q37: '',
    q38: '',
    q39: '',
    q40: '',
    q41: '',
    q42: ''
  });
  
  const handleSelectChange = (event, questionKey) => {
    const value = event.target.value;
    const numericalValue = parseInt(value, 10);
    setResponses(prevResponses => ({
      ...prevResponses,
      [questionKey]: isNaN(numericalValue) ? 0 : numericalValue
    }));
  };
  
  const recordSurveyAnswers = () => {
    const answersArray = Object.keys(responses).map(key => parseInt(responses[key], 10));
    setSurvey3Answers(answersArray);
  };

  const calculateTotalScore = () => {
    recordSurveyAnswers();
    return Object.values(responses)
      .map(val => parseInt(val, 10) || 0) 
      .reduce((acc, curr) => acc + curr, 0);
  };

  const allQuestionsAnswered = Object.values(responses).every(value => value !== '');

  const handleNextClick = () => {
    if(!allQuestionsAnswered){
      document.getElementById("warningDiv").style.display = "block";

    }
    else{
      const totalScore = calculateTotalScore(); 
      setTotal3(totalScore);
      onNext();
    }
  };
 
  //below survey is the OCI from Veale.co.uk
  return (
    <div className='page'>
      <div className='Container'>
        <div className='TitleDiv'>
          <h2>Survey (3/3)</h2>
          <h4>The following statements refer to experiences which many people have in their everday lives. Select the option that best describes how much each experience has distressed or bothered you over the last 2 weeks.</h4>
        </div>
        <div className='InputDiv'>
          <SurveyQuestionV2 question="Unpleasant thoughts come into my mind against my will and I cannot get rid of them" onChange={(e) => handleSelectChange(e, 'q1')}/>
          <SurveyQuestionV2 question="I think contact with bodily secretions (perspiration, saliva, blood, urine, etc.) may contaminate my clothes or somehow harm me" onChange={(e) => handleSelectChange(e, 'q2')}/>
          <SurveyQuestionV2 question="I ask people to repeat things to me several times, even though I understood them the first time" onChange={(e) => handleSelectChange(e, 'q3')}/>
          <SurveyQuestionV2 question="I wash and clean obsessively" onChange={(e) => handleSelectChange(e, 'q4')}/>
          <SurveyQuestionV2 question="I have to review mentally past events, conversations and actions to make sure that I didn't do something wrong" onChange={(e) => handleSelectChange(e, 'q5')}/>
          <SurveyQuestionV2 question="I have saved up so many things that they get in the way" onChange={(e) => handleSelectChange(e, 'q6')}/>
          <SurveyQuestionV2 question="I check things more often than necessary" onChange={(e) => handleSelectChange(e, 'q7')}/>
          <SurveyQuestionV2 question="I avoid using public toilets because I am afraid of disease or contamination" onChange={(e) => handleSelectChange(e, 'q8')}/>
          <SurveyQuestionV2 question="I repeatedly check doors, windows, drawers etc." onChange={(e) => handleSelectChange(e, 'q9')}/>
          <SurveyQuestionV2 question="I repeatedly check gas and water taps and light switches after turning them off" onChange={(e) => handleSelectChange(e, 'q10')}/>
          <SurveyQuestionV2 question="I collect things I don't need" onChange={(e) => handleSelectChange(e, 'q11')}/>
          <SurveyQuestionV2 question="I have thoughts of having hurt someone without knowing it" onChange={(e) => handleSelectChange(e, 'q12')}/>
          <SurveyQuestionV2 question="I have thoughts that I might want to harm myself or others" onChange={(e) => handleSelectChange(e, 'q13')}/>
          <SurveyQuestionV2 question="I get upset if objects are not arranged properly" onChange={(e) => handleSelectChange(e, 'q14')}/>
          <SurveyQuestionV2 question="I feel obliged to follow a particular order in dressing, undressing and washing myself" onChange={(e) => handleSelectChange(e, 'q15')}/>
          <SurveyQuestionV2 question="I feel compelled to count while I am doing things" onChange={(e) => handleSelectChange(e, 'q16')}/>
          <SurveyQuestionV2 question="I am afraid of impulsively doing embarrassing or harmful things" onChange={(e) => handleSelectChange(e, 'q17')}/>
          <SurveyQuestionV2 question="I need to pray to cancel bad thoughts or feelings" onChange={(e) => handleSelectChange(e, 'q18')}/>
          <SurveyQuestionV2 question="I keep on checking forms or other things I have written" onChange={(e) => handleSelectChange(e, 'q19')}/>
          <SurveyQuestionV2 question="I get upset at the sight of knives, scissors and other sharp objects in case I lose control with them" onChange={(e) => handleSelectChange(e, 'q20')}/>
          <SurveyQuestionV2 question="I am excessively concerned about cleanliness" onChange={(e) => handleSelectChange(e, 'q21')}/>
          <SurveyQuestionV2 question="I find it difficult to touch an object when I know it has been touched by strangers or certain people" onChange={(e) => handleSelectChange(e, 'q22')}/>
          <SurveyQuestionV2 question="I need things to be arranged in a particular order" onChange={(e) => handleSelectChange(e, 'q23')}/>
          <SurveyQuestionV2 question="I get behind in my work because I repeat things over and over again" onChange={(e) => handleSelectChange(e, 'q24')}/>
          <SurveyQuestionV2 question="I feel I have to repeat certain numbers" onChange={(e) => handleSelectChange(e, 'q25')}/>
          <SurveyQuestionV2 question="After doing something carefully, I still have the impression I have not finished it" onChange={(e) => handleSelectChange(e, 'q26')}/>
          <SurveyQuestionV2 question="I find it difficult to touch garbage or dirty things" onChange={(e) => handleSelectChange(e, 'q27')}/>
          <SurveyQuestionV2 question="I find it difficult to control my own thoughts" onChange={(e) => handleSelectChange(e, 'q28')}/>
          <SurveyQuestionV2 question="I have to do things over and over again until it feels right" onChange={(e) => handleSelectChange(e, 'q29')}/>
          <SurveyQuestionV2 question="I am upset by unpleasant thoughts that come into my mind against my will" onChange={(e) => handleSelectChange(e, 'q30')}/>
          <SurveyQuestionV2 question="Before going to sleep I have to do certain things in a certain way" onChange={(e) => handleSelectChange(e, 'q31')}/>
          <SurveyQuestionV2 question="I go back to places to make sure that I have not harmed anyone" onChange={(e) => handleSelectChange(e, 'q32')}/>
          <SurveyQuestionV2 question="I frequently get nasty thoughts and have difficulty in getting rid of them" onChange={(e) => handleSelectChange(e, 'q33')}/>
          <SurveyQuestionV2 question="I avoid throwing things away because I am afraid I might need them later" onChange={(e) => handleSelectChange(e, 'q34')}/>
          <SurveyQuestionV2 question="I get upset if others change the way I have arranged my things" onChange={(e) => handleSelectChange(e, 'q35')}/>
          <SurveyQuestionV2 question="I feel that I must repeat certain words or phrases in my mind in order to wipe out bad thoughts, feelings or actions" onChange={(e) => handleSelectChange(e, 'q36')}/>
          <SurveyQuestionV2 question="After I have done things, I have persistent doubts about whether I really did them" onChange={(e) => handleSelectChange(e, 'q37')}/>
          <SurveyQuestionV2 question=" I sometimes have to wash or clean myself simply because I feel contaminated" onChange={(e) => handleSelectChange(e, 'q38')}/>
          <SurveyQuestionV2 question="I feel that there are good numbers and bad numbers" onChange={(e) => handleSelectChange(e, 'q39')}/>
          <SurveyQuestionV2 question="I repeatedly check anything which might cause a fire" onChange={(e) => handleSelectChange(e, 'q40')}/>
          <SurveyQuestionV2 question="Even when I do something very carefully I feel that it is not quite right" onChange={(e) => handleSelectChange(e, 'q41')}/>
          <SurveyQuestionV2 question="I wash my hands more often or longer than necessary" onChange={(e) => handleSelectChange(e, 'q42')}/>
          <div id='warningDiv'>
            Please answer all questions before continuing 
          </div>
          <div className='ButtonDiv'>
            <button onClick={handleNextClick}>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Survey2;






