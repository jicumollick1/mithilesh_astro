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

import Separator from '../components/Separator';
import { Icons } from '../constants';
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
          
          
        </View>
        <Separator height={responsiveWidth(5)} />

        <Separator height={responsiveWidth(5)} />
        <ScrollView contentContainerStyle={{}}>
          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate('MyDrawer')}
              style={styles.drawerItemView}>
              <Image
                source={Icons.home}
                resizeMode="contain"
                style={styles.drawerItemsLogo}
              />
              <Text style={styles.drawerItemText}>Home</Text>
            </TouchableOpacity>


            <TouchableOpacity
              onPress={() => setModalVisible(true)}
              style={styles.drawerItemView}>
              <Image
                source={Icons.logOut}
                resizeMode="contain"
                style={styles.drawerItemsLogo}
              />
              <Text style={styles.drawerItemText}>
               Logout
              </Text>
            </TouchableOpacity>

            <Separator height={responsiveWidth(5)} />

            <TouchableOpacity
              activeOpacity={1}
              onPress={() => navigation.closeDrawer()}
              style={styles.backBtn}>
              <Image
                source={Icons.arrowLeftGrey}
                resizeMode="contain"
                style={styles.btnArrow}
              />
              <Text style={styles.btnText}>Back</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        statusBarTranslucent>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
           
          </View>
        </View>
      </Modal>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'blue',
  },
  headerContainer: {
    alignItems: 'center',
    paddingTop: responsiveHeight(2),
    backgroundColor: 'blue',
    paddingBottom: responsiveHeight(2),
  },
  headerText: {
    fontSize: responsiveFontSize(3),
    color: 'gray',
    // fontFamily: Fonts.LOBSTERTWO_BOLD,
  },
  headerSubText: {
    fontSize: responsiveFontSize(2.5),
    color: 'gray',
    // fontFamily: Fonts.LOBSTERTWO_REGULAR,
  },
  drawerItemsLogo: {
    width: responsiveWidth(5),
    height: responsiveWidth(5),
    marginRight: responsiveWidth(4),
  },
  drawerItemView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: responsiveWidth(5),
    marginBottom: responsiveHeight(3),
    alignItems: 'center',
  },
  drawerItemText: {
    color: 'red',
    fontSize: responsiveFontSize(1.8),
    marginTop: responsiveHeight(1),
    // fontFamily: Fonts.POPPINS_SEMI_BOLD,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    width: responsiveWidth(70),
    height: responsiveWidth(40),
    backgroundColor: 'white',
    borderRadius: responsiveHeight(2),
    padding: responsiveHeight(3),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    justifyContent: 'space-between',
  },
  modalText: {
    // fontFamily: Fonts.Inter_MEDIUM,
    color: 'gray',
    fontSize: responsiveFontSize(2),
  },
  backBtn: {
    width: responsiveWidth(35),
    height: responsiveWidth(13),
    backgroundColor: 'blue',
    borderRadius: responsiveWidth(20),
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
  },
  btnArrow: {
    width: responsiveWidth(5),
    height: responsiveWidth(5),
    marginRight: responsiveWidth(3),
  },
  btnText: {
    color: 'gray',
    fontSize: responsiveFontSize(1.8),
    marginTop: responsiveHeight(0.5),
    // fontFamily: Fonts.POPPINS_SEMI_BOLD,
  },
});

export default UserCustomDrawer;
