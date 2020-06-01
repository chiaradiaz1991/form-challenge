import React from "react";
import { StyledError } from "./styles";

const Error = (props) => {
  return (
    <StyledError>
      {`Please provide a correct ${props.name}`}
    </StyledError>
  );
};

export default Error;