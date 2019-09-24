import React from "react";
// import React, {useState} from "react";
import SpecialButton from "./SpecialButton";
import { specials } from "../../../data";
//import any components needed

//Import your array data to from the provided data file

const Specials = (props) => {
  // STEP 2 - add the imported data to state
  // const [spec, setSpec] = useState('');
  return (
    <div className="spec-container">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
      {
        specials.map((special, index) => {
          return <SpecialButton key={index} special={special} value={special.value} negative={props.negative} handleClick={props.handleClick} handleClear={props.handleClear} percent={props.percent} />
        })
      }
    </div>
  );
};

export default Specials;