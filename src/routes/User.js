import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import Home from '../pages/user/Home';
import Search from '../pages/user/Search';
import UserBottomTab from '../navigation/UserBottomTab';
import UserDrawer from '../navigation/UserDrawer';
import Notifications from '../pages/user/Notifications';
import ListOfAstrologers from '../pages/user/ListOfAstrologers';
import AstrologerDetails from '../pages/user/AstrologerDetails';
import MoneyAdded from '../pages/user/MoneyAdded';
import SlotBooked from '../pages/user/SlotBooked';
import CallHistory from '../pages/user/CallHistory';
import ChatHistory from '../pages/user/ChatHistory';
import AllReviews from '../pages/user/AllReviews';

const UserStack = createStackNavigator();

const User = () => {
  return (
    <UserStack.Navigator
      initialRouteName="AllReviews"
      screenOptions={{headerShown: false}}>
      <UserStack.Screen name="UserDrawer" component={UserDrawer} />

      <UserStack.Screen name="Home" component={Home} />
      <UserStack.Screen name="Search" component={Search} />
      <UserStack.Screen name="Notifications" component={Notifications} />
      <UserStack.Screen
        name="ListOfAstrologers"
        component={ListOfAstrologers}
      />
      <UserStack.Screen
        name="AstrologerDetails"
        component={AstrologerDetails}
      />
      <UserStack.Screen index name="MoneyAdded" component={MoneyAdded} />
      <UserStack.Screen index name="SlotBooked" component={SlotBooked} />
      <UserStack.Screen index name="CallHistory" component={CallHistory} />
      <UserStack.Screen index name="ChatHistory" component={ChatHistory} />
      <UserStack.Screen index name="AllReviews" component={AllReviews} />
    </UserStack.Navigator>
  );
};

export default User;
