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

const UserStack = createStackNavigator();

const User = () => {
  return (
    <UserStack.Navigator screenOptions={{headerShown: false}}>
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
    </UserStack.Navigator>
  );
};

export default User;
