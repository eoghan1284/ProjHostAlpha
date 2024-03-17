import React from 'react';
import './SurveyQuestion.css'; 

export const SurveyQuestionV1 = ({ question, onChange }) => {

  const handleChange = (e) => {
    onChange && onChange(e); // Call the parent's onChange handler
  };

  return (
    <div className="questionContainer">
      <label className='questionLabel' htmlFor="rating-v1">{question}</label>
      <select id="rating-v1" name="rating-v1" onChange={handleChange} defaultValue="">
        <option value="" disabled>Please select</option>
        <option value="0">0: Not at all sure</option>
        <option value="1">1: Several days</option>
        <option value="2">2: Over half the days</option>
        <option value="3">3: Nearly every day</option>
      </select>
    </div>
  );
};

export const SurveyQuestionV2 = ({ question, onChange }) => {

  const handleChange = (e) => {
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <div className="questionContainer">
      <label className='questionLabel' htmlFor={`rating-${question}`}>{question}</label>
      <select id={`rating-${question}`} name={`rating-${question}`} onChange={handleChange} defaultValue="">
        <option value="" disabled>Please select</option>
        <option value="0">0: Not at all</option>
        <option value="1">1: A little</option>
        <option value="2">2: Moderately</option>
        <option value="3">3: A lot</option>
        <option value="4">4: Extremely often</option>
      </select>
    </div>
  );
};












