import React from 'react';
import './great-predictor.css';

const GreatPredictor = (props) => {
    const {quotes, setQuotes} = props;
    const randomAnswer = () => {
        const randomNumber = Math.floor(Math.random() * (100 - 0));
        setQuotes(randomNumber)
    };
 return(
     <div className='gp-container'>
         <p>Ask me Dear </p>
         <div className='gp-1-group'>
             <input/>
             <button onClick={() => randomAnswer()}>Click</button>
         </div>
         <p>{quotes}</p>
     </div>
 )
};

export default GreatPredictor;