import React, { memo } from "react";

import instructionsContent from "../config/instructions-config";

function Instructions({ step }) {
  return (
    <div className="instructions">
        <p>{instructionsContent[step.value].title}</p>
        <p>{instructionsContent[step.value].first}</p>
        <p>{instructionsContent[step.value].second}</p>
        <p>{instructionsContent[step.value].third}</p>
        <p>{instructionsContent[step.value].fourth}</p>
    </div>
  );
}

export default memo(Instructions);
