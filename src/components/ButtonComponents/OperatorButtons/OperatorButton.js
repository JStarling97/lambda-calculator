import React from 'react';
// import Display from "../../../components/DisplayComponents/Display";
const OperatorButton = (props) => {
  // console.log(props);
  if (props.char === '=') {
    return (<button className='equal operator-buttons buttons' value={props.char} onClick={props.handleEqual}>{props.char}</button>);
  } else
    return (
      <>
        {/* Display a button element rendering the data being passed down from the parent container on props */}
        <button className='operator-buttons buttons' value={props.value} onClick={props.handleClick}>{props.char}</button>
      </>
    );
};

export default OperatorButton;
