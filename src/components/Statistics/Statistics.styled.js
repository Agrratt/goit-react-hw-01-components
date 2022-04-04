import styled from '@emotion/styled';

export const Card = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  height: 150px;
  margin-top: 100px;
  border-radius: 4px;
  box-shadow: 1px 3px 10px 11px rgba(63, 91, 122, 0.2);
`;

export const Title = styled.h2`
  font-size: 25px;
  font-weight: bold;
  height: 80px;
  margin: 0;
  align-items: center;
  display: flex;
  color: rgb(144, 143, 143);
`;

export const StatisticsList = styled.ul`
  border-radius: 4px;

  width: 300px;
  height: 70px;
  padding: 0;
  margin: 0;
  list-style: none;

  display: flex;
  justify-content: center;
  align-items: stretch;
`;

export const Item = styled.li`
  display: flex;
  text-align: center;
  width: 100%;
  flex-direction: column;
  padding-top: 10px;
  padding-bottom: 10px;

  :nth-child(2n) {
    border-left: 1px solid rgb(122, 121, 121);
    border-right: 1px solid rgb(122, 121, 121);
  }
`;

export const Label = styled.span`
  font-size: 13px;
  font-weight: 500;
  color: rgb(122, 121, 121);
  padding-bottom: 10px;
  color: #fff;
`;

export const Percentage = styled.span`
  font-weight: 500;
  font-size: 18px;
  color: #fff;
`;
