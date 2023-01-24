import styled from 'styled-components';

export const ModalSection = styled.section`
  width: 100%;
  height: 100%;
  backdrop-filter: blur(2px);
  position: absolute;
  top: 0;
  left: 0;
`;
export const ModalFormContainer = styled.form`
  width: 100%;
  max-width: 600px;
  min-wiidth: 250px;
  height: 400px;
  margin-bottom: 30px;
  background-color: white;
  border-radius: 8px;
  position: absolute;
  left: calc(50% - 300px);
  top: 15%;
`;

export const ModalHeaderSection = styled.section`
  display: flex;
  height: 50px;
  background-color: var(--darkBlue);
  width:100%;
  color: white;
`;
export const ModalTitle = styled.h1`
  font-weight: bold;
  margin-left: auto;
  font-size: 18px;
  margin-bottom: 20px;
  margin-top: 10px;
`;

export const InputFormSection = styled.section`
  padding: 20px;
  margin-top: 20px;
  color: var(--darkBlue);
`
export const Button = styled.button`
  border: none;
  background-color: var(--darkBlue);
  color: black;
  cursor: pointer;
  padding-right: 10px;
  margin-left: auto;
  color: white;
  &:hover {
    color: var(--purple);
  }
  & > svg {
    height: 25px;
    width: 25px;
  }
`;

export const InputSection = styled.section`
  display: flex;
  margin-bottom: 20px;
`;

export const InputElement = styled.input`
  margin-bottom: 3px;
  margin-left:auto;
  width: 100%;
  max-width: 350px;
  height: 20px;
  padding: 10px;
`;
export const InputLabel = styled.label`
  align-self: center;
`;
export const Select = styled.select`
  margin-bottom: 3px;
  margin-left: auto;
  width: 100%;
  max-width: 374px;
  height: 20px;
`;

export const SubmitButton = styled.button`
  border: 0.5px solid var(--purple);
  background-color: var(--darkBlue);
  color: white;
  width: 150px;
  height: 50px;
  padding: 1px;
  cursor: pointer;
  &:hover {
    color: var(--darkBlue);
    background-color: var(--purple);
    border-color: var(--purple);
  }
`;
export const ButtonSection = styled.div`
  text-align: center;
`