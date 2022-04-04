import styled from '@emotion/styled';

export const Card = styled.table`
  padding: 0;
  margin: 0;
  margin-top: 100px;
  width: 300px;
  hight: 70px;
  box-shadow: 1px 3px 10px 11px rgba(63, 91, 122, 0.2); ;
`;

export const TableHeader = styled.thead`
  background-color: #9ef0ed;
  height: 40px;
  color: #fff;
`;

export const TableBody = styled.tbody`
  color: #808787;
  height: 35px;
  text-align: center;

  :nth-child(2n + 1) {
    background-color: #e1e6e6;
  }
`;

export const Type = styled.td`
  text-transform: capitalize;
`;
