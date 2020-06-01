import styled from 'styled-components';
//styles

const StyledProgressBar = styled.div`
  height: 15px;
  position: relative;
  width: 100%;
`
const StyledBar = styled.div`
  background: #4d568f;
  height: 100%;
  border-radius: 50px;
  transition: width 0.2s ease-in;
`

export {
    StyledProgressBar,
    StyledBar
}