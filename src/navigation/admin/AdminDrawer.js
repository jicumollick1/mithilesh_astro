import {createDrawerNavigator} from '@react-navigation/drawer';
import {responsiveWidth} from 'react-native-responsive-dimensions';
import AdminCustomDrawer from './AdminCustomDrawer';
import AdminBottomTab from './AdminBottomTab';
const Drawer = createDrawerNavigator();

function AdminDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          width: responsiveWidth(70),
          backgroundColor: 'gray',
        },
        drawerPosition: 'left',
        headerStyle: {
          backgroundColor: 'blue',
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 0,
        },
        headerTintColor: 'gray',
      }}
      drawerContent={props => <AdminCustomDrawer {...props} />}>
      <Drawer.Screen
        options={{
          headerShown: false,
        }}
        name="AdminBottomTabs"
        component={AdminBottomTab}
      />
    </Drawer.Navigator>
  );
}

export default AdminDrawer;
