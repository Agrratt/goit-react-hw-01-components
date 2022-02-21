import Profile from './components/Profile/Profile';
import user from './components/Profile/user.json';
import data from './components/Statistics/data.json';
import Statistics from './components/Statistics/Statistics';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        fontSize: 40,
        textTransform: 'uppercase',
        color: '#010101',
        marginTop: '100px',
      }}
    >
      <Profile
        key={user.username}
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics
        // key={data.id}
        title="Upload stats"
        stats={data}
      />
      {/* <Statistics stats={data} /> */}
    </div>
  );
};
