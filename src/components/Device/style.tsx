import styled from 'styled-components';
export const DeviceComponentContainer = styled.section`
  border: 1px solid black;
  width: 250px;
  max-wiidth: 250px;
  height: 100px;
  padding: 20px;
  text-align: center;
  margin-bottom: 30px;
`;

export const DeviceTitle = styled.h1`
  font-weight: 400;
`;

export const DeviceText = styled.p`
  font-size: 14px;
`;

export const ButtonContainer = styled.section`
  display: flex;
  justify-content: space-between;
`;
export const Button = styled.button`
  border: none;
  background-color: white;
  color: black;
  cursor: pointer;
  &:hover {
    color: red;
  }
  & > svg {
    height: 20px;
    width: 20px;
  }
`;

export const DeviceContainerArticle = styled.article`
  display: flex;
  flex-wrap: wrap;
  padding: 40px;
  justify-content: space-evenly;
`;

export const FloatButton = styled.button`
  border-radius: 50%;
  border: none;
  position:fixed;
  bottom: 50px;
  right: 50px;
  cursor: pointer;
  & > svg {
    height: 40px;
    width: 40px;

  &:hover {
   color: red;
  }
  }
`