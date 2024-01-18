
import { useState, useEffect } from "react";
import { Options } from './Options/Options';
import { Feedback } from './Feedback/Feedback';
import { Notification } from './Notification/Notification';

export const App = () => {
  const [values, setValues] = useState(
    {
      good: 0,
      neutral: 0,
      bad: 0
    }
  );

  const [clicks, setClicks] = useState(0);

  const onLeaveFeedback = (e) => {
    const key = e.target.name
	setValues({
		...values,
		[key]: values[key] + 1
  });
    
    setClicks(clicks + 1);
  };

  const onReset = () => {
    setValues({
      ...values,
      good: 0,
      neutral: 0,
      bad: 0
    });
    
    setClicks(0);
  };

  const isHidden = clicks === 0;

  const totalFeedback = values.good + values.neutral + values.bad;

  const positiveFeedback = Math.round(((values.good + values.neutral) / totalFeedback) * 100);

  return (
    <div>
      <h1>Sip Happens Café</h1>
      <p>Please leave your feedback about our service by selecting one of the options below.</p>
      <Options onUpdate={onLeaveFeedback} isHidden={isHidden} onReset={onReset} />
      {
        isHidden ? <Notification /> : <Feedback values={values} totalFeedback={totalFeedback} positiveFeedback={positiveFeedback}/> 
      }
    </div>
  );
};