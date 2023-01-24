import styled from 'styled-components';
export const DeviceRow = styled.tr`
  border: 1px solid black;
  padding: 20px;
  text-align: center;
  margin-bottom: 30px;
`;

export const DeviceTitle = styled.h1`
  font-weight: 400;
  font-size: 14px;
`;

export const DeviceText = styled.p`
  font-size: 14px;
`;

export const ButtonContainer = styled.section`

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

export const DeviceTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: left;
  margin: auto;
  border: .1rem solid #999;
  padding: 40px;
`;

export const TableHeaderRow = styled.tr`
  text-align: left;
  width: 100%;
  justify-content: space-around;
  padding: 8px;
`;

export const TableHeader = styled.th`
  text-align: left;
  border: .1rem solid #999;
  padding: .2em;
  background-color: var(--darkBlue);
  color: white;
`;

export const TableData = styled.td`
  text-align: left;
  border: .1rem solid #999;
  padding: .2em;
`;

export const TableDeviceSection = styled.section`
  padding: 40px;
`

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