import {View, Text, StyleSheet, TextInput, ScrollView} from 'react-native';
import React from 'react';
// import {UserView} from '../../components';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';
// import {Colors, Images} from '../../constants';
import {
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {Image} from 'react-native';
import {Button} from 'react-native-elements';
import WhiteContainerStyles from '../../styles/WhiteContainerStyles';
import TopNavigator from '../../components/user/TopNavigator';
import {Colors, Fonts, Icons, Images} from '../../constants';
import UserView from '../../components/UserView';
import EvilIconsIcons from 'react-native-vector-icons/EvilIcons';
import FeatherIcons from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import EntypoIcons from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity, Dimensions} from 'react-native';
import SuggestedAstrologers from '../../components/user/Home/SuggestedAstrologers';
import fonts from '../../constants/fonts';
import BlueButton from '../../components/reusable/BlueButton';

const {width, height} = Dimensions.get('window');
const MoneyAdded = ({navigation, route}) => {
  return (
    <UserView>
      <TopNavigator navigation={navigation} title="Money Added" />
      
        <View style={WhiteContainerStyles.container}>
          <ScrollView>
          <View style={{gap: responsiveWidth(2)}}>
            <Text
              style={{
                fontWeight: 600,
                fontSize: responsiveFontSize(3),
                color: Colors.black,
                textAlign: 'center',
                lineHeight: 35,
              }}>
              Money successfully added to your wallet
            </Text>

            {/* green Box  */}

            <View style={styles.greenBox}>
              <View>
                <Icon
                  name="checkmark-circle-outline"
                  size={63}
                  color={'#fff'}
                  style={{marginBottom: 10, textAlign: 'center'}}></Icon>
                <Text style={styles.boldPrice}> ₹ 1000.00</Text>
              </View>
            </View>

            <View>
              <Text
                style={{
                  fontWeight: 600,
                  fontSize: responsiveFontSize(3),
                  color: Colors.black,
                  lineHeight: 35,
                  marginTop: 10,
                }}>
                Available Balance
              </Text>

              {/* blueBox  */}
              <View style={styles.blueBox}>
                <Text style={styles.boldPrice}> ₹ 1200.00</Text>
                <Icon
                  name="wallet"
                  size={43}
                  color={'#FFFC48'}
                  style={{marginBottom: 10, textAlign: 'center'}}></Icon>
              </View>

              <BlueButton title={'Pay from your wallet'}></BlueButton>
            </View>
          </View>
          </ScrollView>
        </View>
      
    </UserView>
  );
};

export default MoneyAdded;

const styles = StyleSheet.create({
  blueBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: width * 0.91,
    height: 81,
    backgroundColor: '#1C45EB',
    borderRadius: 10,
    marginVertical: 20,
  },
  // greenBox
  greenBox: {
    width: width * 0.85,
    height: height * 0.24,
    backgroundColor: '#44D36C',
    borderRadius: 13,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: width * 0.03,
  },

  boldPrice: {
    fontFamily: fonts.ubuntuBold,
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: 44,
    // lineHeight: 20,
    display: 'flex',
    alignItems: 'center',
    letterSpacing: 0.02,
    color: '#FFFFFF',
  },
  // cardDesign

  card: {
    backgroundColor: Colors.Yellow,
    borderRadius: responsiveWidth(2),
    paddingLeft: responsiveWidth(12),
    paddingRight: responsiveWidth(5),
    paddingVertical: responsiveWidth(4),
    gap: responsiveWidth(1),
  },
  cardImage: {
    height: responsiveWidth(20),
    width: responsiveWidth(20),
    resizeMode: 'contain',
  },
  online: {
    backgroundColor: '#22C55E',
    borderRadius: responsiveWidth(1),
    flexDirection: 'row',
    alignItems: 'center',
    gap: responsiveWidth(1),
    paddingHorizontal: responsiveWidth(2),
    paddingVertical: responsiveWidth(0.5),
  },
  dot: {
    backgroundColor: Colors.white,
    width: responsiveWidth(3),
    height: responsiveWidth(3),
    borderRadius: responsiveWidth(3),
  },
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: responsiveWidth(4.5),
    borderRightWidth: responsiveWidth(4.5),
    borderBottomWidth: responsiveWidth(6),
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: Colors.white,
    transform: [{rotate: '180deg'}],
  },
  pricingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: responsiveWidth(1),
    backgroundColor: Colors.darkBlue2,
    width: responsiveWidth(15),
    height: responsiveWidth(15),
    justifyContent: 'center',
    position: 'absolute',
    right: 0,
    borderBottomLeftRadius: responsiveWidth(50),
    borderTopLeftRadius: responsiveWidth(5),
    borderBottomRightRadius: responsiveWidth(5),
    borderBottomWidth: responsiveWidth(1),
    borderLeftWidth: responsiveWidth(1),
    borderColor: Colors.white,
  },
  btn: {
    backgroundColor: Colors.darkBlue2,
    borderRadius: responsiveWidth(2),
    paddingHorizontal: responsiveWidth(3),
    paddingVertical: responsiveWidth(0.5),
    gap: responsiveWidth(3),
  },
  aboutText: {
    fontFamily: Fonts.ubuntuRegular,
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.005,
    color: '#E9FAFF',
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
});
