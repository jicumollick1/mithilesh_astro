import {createDrawerNavigator} from '@react-navigation/drawer';
import {responsiveWidth} from 'react-native-responsive-dimensions';
import VendorBottomTab from './VendorBottomTab';
import VendorCustomDrawer from './VendorCustomDrawer';
const Drawer = createDrawerNavigator();

function VendorDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          width: responsiveWidth(70),          
        },
        drawerPosition: 'left',
        headerStyle: {          
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 0,
        },
        headerTintColor: 'gray',
      }}
      drawerContent={props => <VendorCustomDrawer {...props} />}>
      <Drawer.Screen
        options={{
          headerShown: false,
        }}
        name="VendorBottomTab"
        component={VendorBottomTab}
      />
    </Drawer.Navigator>
  );
}

export default VendorDrawer;
