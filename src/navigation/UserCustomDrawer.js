import React, {useState, useContext, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  Modal,
  ScrollView,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import FeatherIcons from 'react-native-vector-icons/Feather';
import OcticonsIcons from 'react-native-vector-icons/Octicons';

import Separator from '../components/Separator';
import { Colors, Icons, Images } from '../constants';

function UserCustomDrawer({navigation, props}) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={{flex: 1, paddingTop: 0}}>      
      <View
        style={{
          flex: 1,
          backgroundColor: "#fff",
        }}>
        <SafeAreaView>
        </SafeAreaView>
          <StatusBar
            barStyle={'dark-content'}
            backgroundColor={'skyblue'}
            translucent
          />
        <Separator height={StatusBar.currentHeight} />        
        <View style={styles.headerContainer}>
          <Image source={Images.Person1} style={styles.image} />
          <Text style={styles.name}>Vijay Kumar</Text>
          <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center', gap: responsiveWidth(2), backgroundColor: Colors.white, padding: responsiveWidth(1)}} onPress={()=> navigation.navigate('Profile')} >
            <FeatherIcons name="edit-3" size={20} color={Colors.black} />
            <Text style={{color: Colors.black, fontSize: responsiveFontSize(2), fontWeight: 'bold'}}>Edit Profile</Text>
          </TouchableOpacity>
        </View>
        {/* <Separator height={responsiveWidth(5)} />

        <Separator height={responsiveWidth(5)} /> */}
        <ScrollView contentContainerStyle={styles.bottomContainer}>
          <View style={{gap: responsiveWidth(4)}}>
            <Item title="Home" logo={Icons.home} />
            <Item title="Wallet" logo={Icons.walletCircle} />
            <Item title="Slot Bookings" logo={Icons.SlotBooking} />
            <Item title="Call History" logo={Icons.CallHistory} />
            <Item title="Chat History" logo={Icons.ChatHistory} />
            <Separator height={responsiveWidth(5)} />

            <Item title="Terms & Conditions" logo={Icons.TermsAndConditions} />
            <Item title="Logout" logo={Icons.Logout} />
          </View>
        </ScrollView>
      </View>
      {/* <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        statusBarTranslucent>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
           
          </View>
        </View>
      </Modal> */}
    </DrawerContentScrollView>
  );
}

const Item = ({title, logo}) => {
  return(
    <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
      <View style={{flexDirection: 'row', alignItems: 'center', gap: responsiveWidth(3)}}>
        <Image source={logo} style={styles.itemLogo} />
        <Text style={{color: Colors.white, fontSize: responsiveFontSize(2)}}>{title}</Text>
      </View>
      {
        title !== 'Logout' && <OcticonsIcons name="triangle-right" size={20} color={Colors.white} />
      }
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: 'center',
    paddingTop: responsiveHeight(6),
    backgroundColor: Colors.Yellow,
    paddingBottom: responsiveHeight(3),
    gap: responsiveWidth(2),
  },
  name: {
    color: Colors.black,
    fontSize: responsiveFontSize(3),
    fontWeight: 'bold',
  },
  image: {
    width: responsiveWidth(30),
    height: responsiveWidth(30),
    resizeMode: 'contain',
  },
  bottomContainer: {
    flex: 1,
    backgroundColor: Colors.darkBlue2,
    padding: responsiveWidth(5),
  },
  itemLogo: {
    width: responsiveWidth(10),
    height: responsiveWidth(10),
    resizeMode: 'contain',
  },
});

export default UserCustomDrawer;
