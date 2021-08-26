import Profile from './components/profile/profile'
import StatisticList from './components/statisticList/statisticList' 
import user from './json/user.json'
import statisticalData from './json/statistical-data.json'
import friends from './json/friends.json'
import FriendList from './components/friendList/friendList'
import transactionItems from './json/transaction-history.json'
import TransactionHistory from './components/transactionHistory/transactionHistory'

export default function App() {
    return <div>
        <Profile 
            name={user.name}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            stats={user.stats}
        />
        <StatisticList
            title = "Upload stats"
            items = {statisticalData}
        />
        <FriendList
            friends={friends}
        />
        <TransactionHistory
            items = {transactionItems} 
        />
        </div>  
}