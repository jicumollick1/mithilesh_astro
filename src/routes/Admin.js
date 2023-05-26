import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import AdminDrawer from '../navigation/admin/AdminDrawer';
import AdminHome from '../pages/admin/AdminHome';
import Transactions from '../pages/admin/Transactions';
import AllReviews from '../pages/admin/AllReviews';
import CallHistory from '../pages/admin/CallHistory';
import Notifications from '../pages/admin/Notifications';

const AdminStack = createStackNavigator();

const Admin = () => {
  return (
    <AdminStack.Navigator
      initialRouteName="CallHistory"
      screenOptions={{headerShown: false}}>
      <AdminStack.Screen name="AdminDrawer" component={AdminDrawer} />

      <AdminStack.Screen name="Home" component={AdminHome} />
      <AdminStack.Screen name="Notifications" component={Notifications} />
      <AdminStack.Screen name="Transactions" component={Transactions} />
      <AdminStack.Screen index name="AllReviews" component={AllReviews} />
      <AdminStack.Screen index name="CallHistory" component={CallHistory} />
    </AdminStack.Navigator>
  );
};

export default Admin;
