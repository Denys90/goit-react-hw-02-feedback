import styled from '@emotion/styled';

export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 300px;
  border-radius: 20px;
  padding: 20px;
  background: rgb(8, 8, 209);
  -webkit-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);

  display: flex;
  align-items: center;
  flex-direction: column;

  h2 {
    color: white;
  }
  p {
    color: white;
    align-items: center;
  }
`;
