import styled from '@emotion/styled';

export const Card = styled.div`
  width: 300px;
  height: 390px;
  font-size: 16px;
  text-transform: none;
  border-radius: 4px;
  box-shadow: 1px 3px 10px 11px rgba(63, 91, 122, 0.2);
`;

export const Description = styled.div`
  width: 300px;
  height: 300px;
  background-color: aliceblue;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Avatar = styled.img`
  width: 100px;
  height: 100px;
  margin-top: 40px;
  border-radius: 50px;
  background-color: #fff;
`;

export const Name = styled.p`
  font-size: 25px;
  font-weight: bold;
`;

export const Tag = styled.p`
  font-weight: 500;
  color: rgb(122, 121, 121);
  margin-top: 0;
`;

export const Location = styled.p`
  font-weight: 500;
  color: rgb(122, 121, 121);
  margin: 0;
  padding: 0;
`;

export const StatsList = styled.ul`
  background-color: rgb(233, 82, 82);
  border-radius: 4px;
  width: 300px;
  height: 90px;
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: stretch;
`;

export const StatsItem = styled.li`
  display: flex;
  text-align: center;
  flex-direction: column;
  padding-top: 10px;
  padding-bottom: 10px;
  width: 100px;

  :nth-child(2) {
    border-left: 1px solid rgb(122, 121, 121);
    border-right: 1px solid rgb(122, 121, 121);
  }
`;

export const Marker = styled.span`
  font-weight: 500;
  color: rgb(122, 121, 121);
  padding-bottom: 10px;
`;

export const Quantity = styled.span`
  font-weight: 500;
`;
