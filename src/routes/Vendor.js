import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../pages/vendor/Home';
import VendorDrawer from '../navigation/vendor/VendorDrawer';
import MyProfile from '../pages/vendor/MyProfile';
import Profile from '../pages/vendor/Profile';
import AccountSettings from '../pages/vendor/AccountSettings';
import LiveChatCalls from '../pages/vendor/LiveChatCalls';
import Chats from '../pages/vendor/Chats';
import Calling from '../pages/vendor/Calling';
import InCall from '../pages/vendor/InCall';
import Kundli from '../pages/vendor/Kundli';
import GenerateKundli from '../pages/vendor/GenerateKundli';
import MatchMaking from '../pages/vendor/MatchMaking';
import MatchScore from '../pages/vendor/MatchScore';
import Panchang from '../pages/vendor/Panchang';
import AstrologerDetails from '../pages/vendor/AstrologerDetails';
import EditAbout from '../pages/vendor/EditAbout';
import Transactions from '../pages/vendor/Transactions';
const VendorStack = createStackNavigator();

const Vendor = () => {
  return (
    <VendorStack.Navigator
      initialRouteName="VendorDrawer"
      screenOptions={{headerShown: false}}>
      <VendorStack.Screen name="VendorDrawer" component={VendorDrawer} />
      <VendorStack.Screen name="Home" component={Home} />
      <VendorStack.Screen name="LiveChatCalls" component={LiveChatCalls} />
      <VendorStack.Screen name="Profile" component={Profile} />
      <VendorStack.Screen name="MyProfile" component={MyProfile} />
      <VendorStack.Screen name="AccountSettings" component={AccountSettings} />
      <VendorStack.Screen name="Chats" component={Chats} />
      <VendorStack.Screen name="Calling" component={Calling} />
      <VendorStack.Screen name="InCall" component={InCall} />
      <VendorStack.Screen name="Kundli" component={Kundli} />
      <VendorStack.Screen name="GenerateKundli" component={GenerateKundli} />
      <VendorStack.Screen name="MatchMaking" component={MatchMaking} />
      <VendorStack.Screen name="MatchScore" component={MatchScore} />
      <VendorStack.Screen name="Panchang" component={Panchang} />
      <VendorStack.Screen name="AstrologerDetails" component={AstrologerDetails} />
      <VendorStack.Screen name="EditAbout" component={EditAbout} />
      <VendorStack.Screen name="Transactions" component={Transactions} />

    </VendorStack.Navigator>
  );
};


export default Vendor;
