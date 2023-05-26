import {createDrawerNavigator} from '@react-navigation/drawer';
import {responsiveWidth} from 'react-native-responsive-dimensions';
import UserCustomDrawer from './UserCustomDrawer';
import UserBottomTab from './UserBottomTab';
const Drawer = createDrawerNavigator();

function UserDrawer() {
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
      drawerContent={props => <UserCustomDrawer {...props} />}>
      <Drawer.Screen
        options={{
          headerShown: false,
        }}
        name="UserBottomTabs"
        component={UserBottomTab}
      />
    </Drawer.Navigator>
  );
}

export default UserDrawer;
