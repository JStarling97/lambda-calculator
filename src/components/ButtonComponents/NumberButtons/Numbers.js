import React, { useState } from "react";
import NumberButton from './NumberButton';
import { numbers } from './data';
import { tsPropertySignature } from "@babel/types";


//import any components needed
// example of import from data.js. Note all the ../   This is how we move through folders. 
/* 
import { numbers } from '../../../data' 
*/
//Import your array data to from the provided data file

const Numbers = () => {
  // STEP 2 - add the imported data to state
  return (
    <div className='num-container'>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
      {
        numbers.map((num, index) => {
          if (num === '.') {
            return <NumberButton key={index} number={num} handleNumClick={props.handleClick} state={useState} />
          } else
            return <NumberButton key={index} number={parseInt(num)} handleNumClick={props.handleNumClick} state={useState} />
        })
      }
    </div>
  );
};

export default Numbers;