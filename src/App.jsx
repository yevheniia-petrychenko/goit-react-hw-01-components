
import React from 'react'
import ReactDOM from 'react-dom';
import user from './components/Social-profile/user.json'
import statisticalData from './components/Stats/statistical-data.json'
import friends from './components/FriendsList/friends.json'
import transactions from './components/Transactions/transactions.json'
import Profile from './components/Social-profile/Profile'
import Statistics from './components/Stats/StatsList'
import StatisticsTitle from './components/Stats/StatsTitle'
import FriendsList from './components/FriendsList/FriendsList'
import TransactionHistory from './components/Transactions/TransactionHistory'

const App = () => (
    <div>
        <Profile 
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
        />
      <StatisticsTitle title="Upload stats" >
        <Statistics stats={statisticalData} />
      </StatisticsTitle>

      <FriendsList friends={friends} />,

      <TransactionHistory items={transactions}/>

    </div>
)
export default App






