import {
  Button,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const {width, height} = Dimensions.get('window');

// import Fonts from '../../constants/Fonts';
import UserView from '../components/UserView';
import { Fonts, Images } from '../constants';
export default function WelcomeScreen({navigation}) {
  return (
    <UserView >
      

      <View>
         <Image
          source={Images.welcomeLeft}
          style={styles.welcomeLeft}
        /> 
         <Image
          source={Images.welcomeRight}
          style={styles.welcomeRight}
        /> 
      </View>

      <View style={{marginTop: 30, marginHorizontal: 15}}>
        <Text style={styles.registerTitle}>Welcome</Text>
        <Text style={styles.registerDetail}>
        Get Involved in Astrology with us
        </Text>
      </View>

      <View style={{justifyContent: 'center', alignItems: 'center'}}>

        <TouchableOpacity style={[styles.loginBtn, {marginTop: 30}]}>
          <Text
            style={{
              fontWeight: 600,
              textAlign: 'center',
              paddingVertical: 12,
              fontSize: 16,
              width: '100%',
              color: '#fff',
            }}
            onPress={() => navigation.navigate('Login')}>
            {' '}
            Login
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.createBtn}>
          <Text
            // color="#F0EAD5"
            style={{
              fontSize: 16,
              fontFamily: Fonts.ubuntuBold,
              fontWeight: 700,
              textAlign: 'center',
              paddingVertical: 10,
              color: '#2A4FD3',
              borderWidth: 1,
              borderColor: '#2A4FD3',
              borderRadius: 10,
              
            }}
            onPress={() => navigation.navigate('SignUp')}>
            {' '}
            Create Account{' '}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        {/* <Image
          source={require('../../assets/png/leaf.png')}
          style={styles.leaf}
        /> */}
        {/* <Image
          source={require('../../assets/png/Asset4walkthrough81.png')}
          style={styles.progressImage}
        /> */}

        {/* <Button title={'jiku'}>Skip</Button> */}
      </View>
    </UserView>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 110,
    height: 45,
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    paddingHorizontal: 20,
  },
  star: {
    height: 40,
    width: 40,
  },
  welcomeRight: {
    // position: 'absolute',
    marginTop: height * 0.2,
    marginLeft: width * 0.6,
    width: 170,
    height: 250,
    // marginTop: 70,
    // marginLeft: '10%',
    resizeMode: 'contain',
  },
  welcomeLeft: {
    position: 'absolute',
    top: 10,
    left: '1%',
    width: 180,
    height: 300,
    paddingHorizontal: 0,
  },
  box1: {
    // width: 350,
    backgroundColor: '#25262B',
    borderRadius: 16,
    padding: 10,
    marginTop: 50,
    marginHorizontal: 15,
  },
  title: {
    color: '#F0EAD5',
    // fontFamily: Fonts.HAGATTA_REGULAR,
    fontSize: 24,
    lineHeight: 30,
    width: 350,
  },

  footer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 40,
  },
  leaf: {
    width: 100,
    height: 50,
    marginLeft: -15,
  },

  progressImage: {
    width: 30,
    height: 30,
  },
  loginBtn: {
    width: 325,
    // height: 40,
    backgroundColor: '#2A4FD3',
    borderRadius: 10,
    // flex: 1,
    alignItems: 'center',
    
  },
  createBtn: {
    boxSizing: 'border-box',
    width: 325,
    // height: 40,
    border: '1px solid #2A4FD3',
    borderRadius: 10,
    marginTop: 20,
  },
  registerTitle: {
    width: 113,
    height: 21,
    fontFamily: Fonts.ubuntuBold,
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 24,
    lineHeight: 20,
    letterSpacing: 0.02,
    color: '#FFF',
  },
  registerDetail: {
    // width: 229,
    // height: 41,

    fontFamily: Fonts.ubuntuRegular,
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 20,
    color: '#FFF',
    marginTop: 20,
  },
});
