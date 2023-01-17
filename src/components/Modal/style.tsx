import styled from 'styled-components';

export const ModalFormContainer = styled.form`
  border: 1px solid black;
  width: 250px;
  max-wiidth: 250px;
  height: 100px;
  padding: 20px;
  margin-bottom: 30px;
`;

export const ModalHeaderSection = styled.section`
  display: flex;
`;
export const ModalTitle = styled.h1`
  font-weight: 400;
  margin-left: auto;
`;

export const Button = styled.button`
  border: none;
  background-color: white;
  color: black;
  cursor: pointer;
  margin-left: auto;
  &:hover {
    color: red;
  }
  & > svg {
    height: 15px;
    width: 15px;
  }
`;

export const InputSection = styled.section`
  display: flex;
`;

export const InputElement = styled.input`
  margin-bottom: 3px;
`;

export const Select = styled.select`
  margin-bottom: 3px;
`;

export const SubmitButton = styled.button`
  border: 0.5px solid black;
  background-color: white;
  color: black;
  width: 50px;
  padding: 1px;
  cursor: pointer;
  &:hover {
    color: red;
    border-color: red;
  }
`;
export const ButtonSection = styled.div`
  text-align: center;
`