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
  TextInput,
} from 'react-native';
import React from 'react';

const {width, height} = Dimensions.get('window');
// import globalStyle from '../../styles/globalStyle';
// import InputGroup1 from '../reusable/InputGroup1';
import UserView from '../components/UserView';
import {Fonts, Images} from '../constants';
import {useState} from 'react';
import images from '../constants/images';
import Form2 from '../components/reusable/Form2';

export default function Step2({navigation}) {
  const [username, setUsername] = useState('');

  return (
    <UserView>
      <View>
        <Text style={styles.stepText}>Step 2 of 3</Text>
        <Image source={Images.step} style={styles.stepImage}></Image>
      </View>

      <View style={styles.box1}>
        <Form2 ></Form2> 
      </View>
    </UserView>
  );
}

const styles = StyleSheet.create({
  stepText: {
    fontFamily: Fonts.ubuntuBold,
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: 24,
    lineHeight: 30,
    color: '#E9FAFF',
    marginLeft: width * 0.08,
  },
  stepImage: {
    width: width * 0.6,
    height: height * 0.58,
    resizeMode: 'contain',
    marginLeft: width * 0.4,
    marginTop: height * -0.15,
  },
  loginImage: {
    width: width * 0.9,
    height: height * 0.58,
    resizeMode: 'contain',
    marginLeft: width * 0.05,
  },
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
  mainImage: {
    width: 270,
    height: 300,
    marginLeft: '10%',
    resizeMode: 'contain',
  },
  sideImage: {
    width: 70,
    height: 50,
    position: 'relative',
    bottom: 60,

    left: -25,
    resizeMode: 'contain',
  },
  backgroundImage: {
    position: 'absolute',
    top: 100,
    left: '-5%',
    width: 380,
    height: 340,
  },
  box1: {
    width: 350,
    height: height * 0.63,
    backgroundColor: '#E9FAFF',
    borderRadius: 16,
    padding: 10,
    paddingBottom: 20,
    marginBottom: 30,
    marginLeft: 20,
    marginTop: height * -0.15,
  },
  title: {
    fontFamily: Fonts.ubuntuBold,
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: 24,
    lineHeight: 30,
    color: '#25262B',
  },

  details: {
    fontFamily: Fonts.ubuntuRegular,
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.02,
    color: 'rgba(37, 38, 43, 0.75)',
    marginTop: 10,
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
    height: 40,
    backgroundColor: '#2A4FD3',
    borderRadius: 5,
    // flex: 1,
    alignItems: 'center',
  },
  createBtn: {
    boxSizing: 'border-box',
    width: 325,
    height: 40,
    border: '1px solid #E3B773',
    borderRadius: 5,
    marginTop: 20,
  },
  registerTitle: {
    width: 113,
    height: 21,
    fontFamily: 'Yeseva One',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 24,
    lineHeight: 20,
    letterSpacing: 0.02,
    color: '#25262B',
  },
  registerDetail: {
    width: 229,
    height: 41,

    fontFamily: Fonts.LORA_REGULAR,
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 20,
    color: 'rgba(37, 38, 43, 0.61)',
    marginTop: 20,
  },
  buttonContainer: {
    width: 140,
    height: 45,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#25262B',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  image: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  text: {
    fontSize: 16,
    marginLeft: 10,
    fontWeight: 500,
    color: '#25262B',
  },
  notice: {
    width: 300,
    height: 20,
    fontFamily: Fonts.LORA_REGULAR,
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.002,
    color: '#3F3F3E',
    textAlign: 'center',
  },
});
