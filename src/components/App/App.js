import Profile from 'components/Profile/Profile';
import user from 'components/Profile/user.json';
import data from 'components/Statistics/data.json';
import Statistics from 'components/Statistics/Statistics';
import friends from 'components/FriendList/friends.json';
import FriendList from 'components/FriendList/FriendList.jsx';
import transactions from 'components/TransactionHistory/transactions.json';
import TransactionHistory from 'components/TransactionHistory/TransactionHistory.jsx';
import { Container } from 'components/App/App.styled';

export const App = () => {
  return (
    <Container>
      <Profile
        key={user.username}
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={data} />
      {/* <Statistics stats={data} /> */}

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </Container>
  );
};
