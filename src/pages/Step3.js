import {
  Button,
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';

const {width, height} = Dimensions.get('window');
// import globalStyle from '../../styles/globalStyle';
// import InputGroup1 from '../reusable/InputGroup1';
import UserView from '../components/UserView';
import {Colors, Fonts, Images} from '../constants';
import { responsiveFontSize, responsiveWidth } from 'react-native-responsive-dimensions';

export default function Step3({navigation}) {
  const [selectedButtons, setSelectedButtons] = useState([]);

  const handleButtonSelection = buttonIndex => {
    const isSelected = selectedButtons.includes(buttonIndex);

    if (isSelected) {
      setSelectedButtons(
        selectedButtons.filter(button => button !== buttonIndex),
      );
    } else {
      setSelectedButtons([...selectedButtons, buttonIndex]);
    }
  };

  const Options = [
    {
      title: 'Marriage',
      logo: Images.Marriage,
    },
    {
      title: 'Career',
      logo: Images.Career,
    },
    {
      title: 'Life',
      logo: Images.Life,
    },
    {
      title: 'Love',
      logo: Images.Love,
    },
    {
      title: 'Wealth',
      logo: Images.Wealth,
    },
    {
      title: 'Health',
      logo: Images.Health,
    },
  ];

  return (
    <UserView>
      <View>
        <Text style={styles.stepText}>Step 3 of 3</Text>
        <Image source={Images.step} style={styles.stepImage}></Image>
      </View>

      <View style={styles.box1}>
        <View>
          {/* <Text style={[styles.buttonText, {marginBottom: 20}]}>
            Choose your Wishlist
          </Text>
          <View>
            <View style={styles.container}>
              <View style={styles.buttonContainer}>{renderButtons()}</View>
            </View>
          </View> */}

          <Text
            style={{
              fontWeight: 'bold',
              fontSize: responsiveFontSize(3),
              color: Colors.black,
              marginBottom: 10
            }}>
            Choose your Wishlist
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              gap: responsiveWidth(4),
              flexWrap: 'wrap',
            }}>
            {Options.map((option, index) => (
              <Option key={index} title={option.title} logo={option.logo} />
            ))}
          </View>
          <View style={{position: 'relative', bottom: -140}}>
            <Text style={styles.bottomTitle}>Your Profile is ready to use</Text>

            <TouchableOpacity
              style={styles.button2}
              onPress={() => navigation.navigate('User')}>
              <Text style={styles.buttonText2}>Let's Go</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </UserView>
  );
}

const Option = ({title, logo}) => {
  const [isSelected, setIsSelected] = useState(false);
  return (
    <TouchableOpacity
      style={[
        styles.optionContainer,
        {
          backgroundColor: isSelected
            ? Colors.darkBlue2
            : 'rgba(42, 79, 211, 0.1)',
        },
      ]}
      onPress={() => setIsSelected(!isSelected)}>
      <Image source={logo} style={styles.image} />
      <Text
        style={{
          color: isSelected ? Colors.white : Colors.black,
          fontSize: responsiveFontSize(2),
          fontWeight: 500,
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    gap: 20,
  },
  button: {
    // width: 110,
    // height: 50,
    borderRadius: 15,
    color: 'red',
    backgroundColor: 'rgba(42, 79, 211, 0.1)',
    paddingHorizontal: 15,
    paddingVertical: 6,
  },
  selectedButton: {
    // margin: 10,
    // paddingHorizontal: 20,
    // paddingVertical: 10,
    borderRadius: 15,
    color: 'red',
    backgroundColor: '#2A4FD3',
    paddingHorizontal: 15,
    paddingVertical: 6,
    // elevation: 2,
  },
  buttonText: {
    fontFamily: Fonts.ubuntuBold,
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: 16,
    lineHeight: 30,
    color: '#25262B',
  },
  selectedButtonText: {
    fontFamily: Fonts.ubuntuBold,
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: 16,
    lineHeight: 30,
    color: '#fff',
  },
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
    width: width * 0.83,
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
  bottomTitle: {
    fontFamily: Fonts.ubuntuRegular,
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 16,
    lineHeight: 30,
    color: '#25262B',
    textAlign: 'center',
    marginBottom: 10,
  },
  image: {
    height: responsiveWidth(6),
    width: responsiveWidth(6),
    resizeMode: 'contain',
},
optionContainer: {
    // flex: 1,
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-evenly',
    borderRadius: responsiveWidth(10),
    gap: responsiveWidth(4),
    paddingHorizontal: responsiveWidth(4),
    paddingVertical: responsiveWidth(1.5),
},
});
