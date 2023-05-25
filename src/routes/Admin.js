import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import AdminDrawer from '../navigation/admin/AdminDrawer';
import AdminHome from '../pages/admin/AdminHome';

const AdminStack = createStackNavigator();

const Admin = () => {
  return (
    <AdminStack.Navigator
      initialRouteName="AdminDrawer"
      screenOptions={{headerShown: false}}>
      <AdminStack.Screen name="AdminDrawer" component={AdminDrawer} />

      <AdminStack.Screen name="Home" component={AdminHome} />
    </AdminStack.Navigator>
  );
};

export default Admin;
