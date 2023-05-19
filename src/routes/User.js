import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import Home from '../pages/user/Home';
import Search from '../pages/user/Search';
import UserBottomTab from '../navigation/UserBottomTab';
import UserDrawer from '../navigation/UserDrawer';
import Notifications from '../pages/user/Notifications';

const UserStack = createStackNavigator();

const User = () => {
  return (
    <UserStack.Navigator screenOptions={{headerShown: false}}>
      <UserStack.Screen name="UserDrawer" component={UserDrawer} />
     
      <UserStack.Screen name="Home" component={Home} />
      <UserStack.Screen name="Search" component={Search} />
      <UserStack.Screen name="Notifications" component={Notifications} />
    </UserStack.Navigator>
  );
};

export default User;
