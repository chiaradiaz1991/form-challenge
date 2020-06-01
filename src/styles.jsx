import styled, { createGlobalStyle } from "styled-components";
// styles

const GlobalStyle = createGlobalStyle`
 html {
    height: 100%;
  }
  body {
    font-family: Arial;
    background-color: white;
    height: 100%
    margin: 0;
    color: white;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
`;

const StyledForm = styled.form`
  width: 100%;
  max-width: 700px;
  padding: 40px;
  background-color: #bfbfbf;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
`;

const StyledButton = styled.button`
  display: block;
  background-color: red;
  color: white;
  font-size: 0.9rem;
  border: 0;
  border-radius: 5px;
  height: 40px;
  padding: 0 20px;
  cursor: pointer;
  margin-top: 30px;
`;



export {
  GlobalStyle,
  Wrapper,
  StyledForm,
  StyledButton,
};
