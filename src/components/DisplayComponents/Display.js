import React from "react";
// import NumberButton from "../ButtonComponents/NumberButtons/NumberButton";
// import OperatorButton from "../ButtonComponents/OperatorButtons/OperatorButton";
// import SpecialButton from "../ButtonComponents/SpecialButtons/SpecialButton";


const Display = (props) => {
  return (<div className="display">{`${props.dispNum}`}</div>);
};

export default Display;