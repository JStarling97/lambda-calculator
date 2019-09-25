import React from "react";


const NumberButton = (props) => {

  //below works, trying
  if (props.number === 0) {
    return (<button className="zero number-buttons buttons" value={props.number} onClick={props.handleNumClick}>{props.number}</button>);
  } else {
    return (
      <>
        {/* Display a button element rendering the data being passed down from the parent container on props */}

        {
          <button className="number-buttons buttons" value={props.number} onClick={props.handleNumClick}>{props.number}</button>
        }

      </>
    );
  }
}
export default NumberButton;