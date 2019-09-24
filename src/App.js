import React, { useState } from "react";
import "./App.css";
import Numbers from "./components/ButtonComponents/NumberButtons/Numbers";
import Operators from "./components/ButtonComponents/OperatorButtons/Operators";
import Specials from "./components/ButtonComponents/SpecialButtons/Specials";
import Display from "./components/DisplayComponents/Display";
// import {numbers,specials,operators} from './data';
// STEP 4 - import the button and display components
// Don't forget to import any extra css/scss files you build into the correct component

// Logo has already been provided for you. Do the same for the remaining components
import Logo from "./components/DisplayComponents/Logo";


function App() {


  // STEP 5 - After you get the components displaying using the provided data file, write your state hooks here.
  // Once the state hooks are in place write some functions to hold data in state and update that data depending on what it needs to be doing
  // Your functions should accept a parameter of the the item data being displayed to the DOM (ie - should recieve 5 if the user clicks on
  // the "5" button, or the operator if they click one of those buttons) and then call your setter function to update state.
  // Don't forget to pass the functions (and any additional data needed) to the components as props


  const [dispNum, setDispNum] = useState('0');


  function handleNumClick(e) {
    let value = e.target.value;
    if (dispNum === '0') {
      setDispNum(value);
    } else
      setDispNum(`${dispNum}${value}`);

  }

  function handleClick(e) {
    let value = e.target.value;
    setDispNum(dispNum + value);
  }

  function handleEqual(e) {
    setDispNum(eval(dispNum));

  }

  function handleClear() {
    setDispNum("0");
  }

  function percent(e) {
    let value = e.target.value;
    setDispNum(`${eval(dispNum + value)}`);
  }

  function negative(e) {
    let value = e.target.value;
    let neg = `${eval(dispNum + value)}`;
    setDispNum(neg);
  }

  return (

    <div className="container">
      <Logo />
      <div className="App">
        {/* STEP 4 - Render your components here and be sure to properly import/export all files */}
        <Display dispNum={dispNum} />
        <div className="button-container">
          <div className="row-buttons">
            <Specials handleClick={handleClick} handleClear={handleClear} percent={percent} negative={negative} />
            <Numbers handleClick={handleNumClick} />
          </div>
          <div className="column-buttons">
            <Operators handleClick={handleClick} handleEqual={handleEqual} />
          </div>
        </div>
      </div>
    </div>
  );

}

export default App;
