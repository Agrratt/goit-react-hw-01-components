import styled from '@emotion/styled';

export const Card = styled.ul`
  padding: 0;
  margin: 0;
  margin-top: 100px;
  list-style: none;
  width: 300px;
`;

export const Item = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
  border-radius: 4px;
  padding: 10px;
  margin-bottom: 30px;

  box-shadow: 1px 3px 10px 11px rgba(63, 91, 122, 0.2);
`;

const setStatusOnline = props => (props.eventType ? 'green' : 'red');

export const Status = styled.span`
  width: 20px;
  margin-right: 10px;
  display: flex;
  align-items: center;

  svg {
    color: ${setStatusOnline};
  }
`;

export const Avatar = styled.img`
  margin-right: 20px;
`;

export const Name = styled.p`
  text-transform: capitalize;
  font-size: 20px;
  margin-top: auto;
  margin-bottom: auto;
`;
