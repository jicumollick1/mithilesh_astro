import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import Home from '../pages/user/Home';
import Search from '../pages/user/Search';
import UserBottomTab from '../navigation/UserBottomTab';
import UserDrawer from '../navigation/UserDrawer';
import Notifications from '../pages/user/Notifications';
import GenerateKundli from '../pages/user/GenerateKundli';
import Kundli from '../pages/user/Kundli';
import Panchang from '../pages/user/Panchang';
import MatchMaking from '../pages/user/MatchMaking';
import MatchScore from '../pages/user/MatchScore';
import LiveChatsAndCalls from '../pages/user/LiveChatsAndCalls';
import Chats from '../pages/user/Chats';
import Calling from '../pages/user/Calling';
import InCall from '../pages/user/InCall';
import CallEnded from '../pages/user/CallEnded';
import MyProfile from '../pages/user/MyProfile';
import AccountSettings from '../pages/user/AccountSettings';
import ListOfAstrologers from '../pages/user/ListOfAstrologers';
import AstrologerDetails from '../pages/user/AstrologerDetails';
import MoneyAdded from '../pages/user/MoneyAdded';
import SlotBooked from '../pages/user/SlotBooked';
import CallHistory from '../pages/user/CallHistory';
import ChatHistory from '../pages/user/ChatHistory';
import AllReviews from '../pages/user/AllReviews';
import ContactUs from '../pages/user/ContactUs';
import Transactions from '../pages/user/Transactions';
import AddMoney from '../pages/user/AddMoney';
import SlotPayment from '../pages/user/SlotPayment';

const UserStack = createStackNavigator();

const User = () => {
  return (
    <UserStack.Navigator
      initialRouteName="UserDrawer"
      screenOptions={{headerShown: false}}>
      <UserStack.Screen name="UserDrawer" component={UserDrawer} />

      <UserStack.Screen name="Home" component={Home} />
      <UserStack.Screen name="Search" component={Search} />
      <UserStack.Screen name="Notifications" component={Notifications} />
      <UserStack.Screen name="Panchang" component={Panchang} />
      <UserStack.Screen name="GenerateKundli" component={GenerateKundli} />
      <UserStack.Screen name="Kundli" component={Kundli} />
      <UserStack.Screen name="MatchMaking" component={MatchMaking} />
      <UserStack.Screen name="MatchScore" component={MatchScore} />
      <UserStack.Screen name="LiveChatsAndCalls" component={LiveChatsAndCalls} />
      <UserStack.Screen name="Chats" component={Chats} />
      <UserStack.Screen name="Calling" component={Calling} />
      <UserStack.Screen name="InCall" component={InCall} />
      <UserStack.Screen name="CallEnded" component={CallEnded} />
      <UserStack.Screen name="MyProfile" component={MyProfile} />
      <UserStack.Screen name="AccountSettings" component={AccountSettings} />
      <UserStack.Screen name="ContactUs" component={ContactUs} />
      <UserStack.Screen name="Transactions" component={Transactions} />
      <UserStack.Screen name="ListOfAstrologers" component={ListOfAstrologers} />
      <UserStack.Screen name="AstrologerDetails" component={AstrologerDetails} />
      <UserStack.Screen index name="MoneyAdded" component={MoneyAdded} />
      <UserStack.Screen index name="SlotBooked" component={SlotBooked} />
      <UserStack.Screen index name="CallHistory" component={CallHistory} />
      <UserStack.Screen index name="ChatHistory" component={ChatHistory} />
      <UserStack.Screen index name="AllReviews" component={AllReviews} />
      <UserStack.Screen index name="AddMoney" component={AddMoney} />
      <UserStack.Screen index name="SlotPayment" component={SlotPayment} />
    </UserStack.Navigator>
  );
};

export default User;
