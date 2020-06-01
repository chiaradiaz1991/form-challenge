import styled from 'styled-components';

const StyledFielSelect = styled.select`
  width: 100%;
  height:35px;
  background: white;
  color: black;
  padding-left: 5px;
  font-size: 14px;
  border:none;
  margin-bottom: 30px;
     option {
       color: black;
       background: white;
       font-weight: small;
       display: flex;
       white-space: pre;
       min-height: 20px;
       padding: 0px 2px 1px;
     }
`

export { StyledFielSelect }