import React from "react";
import { StyledProgressBar, StyledBar } from "./styles";

const ProgressBar = (props) => {
  return (
    <StyledProgressBar>
      <StyledBar percentage={props.percentage} style={{ width:`${props.percentage}%`}} />
    </StyledProgressBar>
  );
};

export default ProgressBar;