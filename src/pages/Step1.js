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
import * as ImagePicker from 'react-native-image-picker';
export default function Step1({navigation}) {
  const [username, setUsername] = useState('');

  const [text, setText] = useState('');
  const [selectedGender, setSelectedGender] = useState(null);

  const handleGenderSelect = gender => {
    setSelectedGender(gender);
  };

  const [image, setImage] = useState(null);

  const handleChooseImage = () => {
    ImagePicker.showImagePicker({mediaType: 'photo'}, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = {uri: response.uri};
        setImage(source);
      }
    });
  };

  return (
    <UserView>
      <View>
        <Text style={styles.stepText}>Step 2 of 3</Text>
        <Image source={Images.step} style={styles.stepImage}></Image>
      </View>

      <View style={styles.box1}>
        <View>
          <View style={{marginBottom: 20}}>
            <View style={{alignItems: 'center'}}>

              <Image source={require('../assets/images/avatar.png')} style={{width: 100, height: 100}} ></Image>
              <TouchableOpacity onPress={handleChooseImage}>
                {image ? (
                  <Image
                    source={image}
                    style={{width: 200, height: 200, borderRadius: 100}}
                  />
                ) : (
                  <Text>Choose Image</Text>
                )}
              </TouchableOpacity>
            </View>
          </View>
          <View style={{marginBottom: 40}}>
            <Text style={[styles.inputLabel, {marginBottom: 10}]}>Name</Text>
            <TextInput
              style={styles.nameInput}
              onChangeText={setText}
              value={text}
              placeholder={'Enter Your Name'}
              placeholderTextColor={'#25262B'}
            />
          </View>
          <View style={{marginBottom: 40}}>
            <Text style={[styles.inputLabel, {marginBottom: 20}]}>Gender</Text>
            <View
              style={{
                // flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginBottom: 10,
                }}
                onPress={() => handleGenderSelect('male')}>
                <View
                  style={{
                    height: 20,
                    width: 20,
                    borderRadius: 10,
                    borderWidth: 1,
                    borderColor: '#2A4FD3',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  {selectedGender === 'male' && (
                    <View
                      style={{
                        height: 10,
                        width: 10,
                        borderRadius: 5,
                        backgroundColor: '#2A4FD3',
                      }}
                    />
                  )}
                </View>
                <Text style={{marginLeft: 10, color: '#25262B'}}>Male</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginBottom: 10,
                }}
                onPress={() => handleGenderSelect('female')}>
                <View
                  style={{
                    height: 20,
                    width: 20,
                    borderRadius: 10,
                    borderWidth: 1,
                    borderColor: '#2A4FD3',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  {selectedGender === 'female' && (
                    <View
                      style={{
                        height: 10,
                        width: 10,
                        borderRadius: 5,
                        backgroundColor: '#2A4FD3',
                      }}
                    />
                  )}
                </View>
                <Text style={{marginLeft: 10, color: '#25262B'}}>Female</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginBottom: 10,
                }}
                onPress={() => handleGenderSelect('other')}>
                <View
                  style={{
                    height: 20,
                    width: 20,
                    borderRadius: 10,
                    borderWidth: 1,
                    borderColor: '#2A4FD3',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  {selectedGender === 'other' && (
                    <View
                      style={{
                        height: 10,
                        width: 10,
                        borderRadius: 5,
                        backgroundColor: '#2A4FD3',
                      }}
                    />
                  )}
                </View>
                <Text style={{marginLeft: 10, color: '#25262B'}}>Other</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={{position: 'relative', bottom: -40}}>
            <View style={styles.btnContainer}>
              <TouchableOpacity style={styles.button1}>
                <Text style={styles.buttonText1}>Skip</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button2}
                onPress={() => navigation.navigate('Step2')}>
                <Text style={styles.buttonText2}>Next</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </UserView>
  );
}

const styles = StyleSheet.create({
  nameInput: {
    height: 40,
    borderColor: '#2A4FD3',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    color: '#25262B',
    // fontFamily: Fonts.ubuntuBold,
  },
  inputLabel: {
    fontFamily: Fonts.ubuntuBold,
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 16,
    lineHeight: 30,
    color: '#25262B',
  },
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
    position: 'relative',
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

  btnContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  button1: {
    backgroundColor: 'transparent',
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#2A4FD3',
    width: width * 0.35,
    height: height * 0.06,
    textAlign: 'center',
  },
  buttonText1: {
    fontFamily: Fonts.ubuntuBold,
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: 16,
    lineHeight: 30,
    color: '#2A4FD3',
    textAlign: 'center',
    
  },
  button2: {
    backgroundColor: '#2A4FD3',
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#2A4FD3',
    width: width * 0.35,
    height: height * 0.06,
    textAlign: 'center',
  },
  buttonText2: {
    fontFamily: Fonts.ubuntuBold,
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: 16,
    lineHeight: 30,
    color: '#FFF',
    textAlign: 'center',
  },
});
