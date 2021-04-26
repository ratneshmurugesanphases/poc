import React, { memo } from "react";

function ButtonGroup({
  step,
  handlePrevClick,
  handleNextClick,
  handleStartOverClick,
  handleStartClick,
}) {
  let cssStepValue = "";
  if (step.value === 1) {
    cssStepValue = "stepOne";
  } else if (step.value === 6) {
    cssStepValue = "stepSix";
  }

  return (
    <div className={`buttonGroup ${cssStepValue}`}>
      {/* <div className={`rcv__buttonGroup ${cssStepValue}`}> */}

      {step.value === 1 && (
        <img
          className="startButton"
          src="/rcv/button-start.svg"
          alt="start ballot"
          width="120px"
          onClick={handleStartClick}
        />
      )}
      {((step.value > 1 && step.value < 6) || step.value === 6) && (
        <img
          className="prev"
          src="/rcv/button-previous.svg"
          alt="previous round"
          width="30px"
          onClick={handlePrevClick}
        />
      )}
      {step.value > 1 && step.value < 6 && (
        <img
          className="next"
          src="/rcv/button-next.svg"
          alt="next round"
          width="30px"
          onClick={handleNextClick}
        />
      )}
      {step.value === 6 && (
        <img
          className="startover"
          src="/rcv/button-startover.svg"
          alt="startover ballot"
          width="120px"
          onClick={handleStartOverClick}
        />
      )}
      <span className="roundsLabel">{step.value} of 6</span>
    </div>
  );
}

export default memo(ButtonGroup);
