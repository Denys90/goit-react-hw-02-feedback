import styled from '@emotion/styled';

const Button = styled.button`
  width: 80px;
  height: 30px;
  border-radius: 30px;
  border: none;
  cursor: pointer;

  -webkit-box-shadow: -5px -5px 5px -5px rgba(34, 60, 80, 0.6) inset;
  -moz-box-shadow: -5px -5px 5px -5px rgba(34, 60, 80, 0.6) inset;
  box-shadow: -5px -5px 5px -5px rgba(34, 60, 80, 0.6) inset;

  margin-right: 10px;
  :nth-last-of-type(1) {
    margin-right: 0;
  }

  :hover {
    -webkit-box-shadow: 5px 5px 5px -5px rgba(34, 60, 80, 0.6) inset;
    -moz-box-shadow: 5px 5px 5px -5px rgba(34, 60, 80, 0.6) inset;
    box-shadow: 5px 5px 5px -5px rgba(34, 60, 80, 0.6) inset;
  }
`;
export default Button;
