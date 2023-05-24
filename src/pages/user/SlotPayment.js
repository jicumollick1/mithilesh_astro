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
import Icon from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity, Dimensions} from 'react-native';
import fonts from '../../constants/fonts';
import BlueButton from '../../components/reusable/BlueButton';
const {width, height} = Dimensions.get('window');
const SlotPayment = ({navigation, route}) => {
  return (
    <UserView>
      <TopNavigator navigation={navigation} title="Slot Payment" />
      <ScrollView>
        <View style={{marginLeft: width * 0.05}}>
          <View style={styles.yellowBox}>
            <Text
              style={{
                fontWeight: 600,
                fontSize: responsiveFontSize(3),
                color: Colors.black,
                lineHeight: 35,
                marginTop: 10,
              }}>
              Total Money to pay
            </Text>

            <Text style={styles.boldPrice2}> ₹ 300.00</Text>
            <TouchableOpacity
              buttonStyle={{}}
              style={{
                backgroundColor: '#1C45EB',
                borderRadius: 10,
                width: width * 0.8,
                // height: 40,
              }}
              titleStyle={{}}
              onPress={() => navigation.navigate('SlotBooked')}>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 20,
                  textAlign: 'center',
                  paddingVertical: 8,
                  fontWeight: 600,
                }}>
                Pay ₹ 300.00 from wallet
              </Text>
            </TouchableOpacity>

            {/* <BlueButton title={'Pay ₹ 300.00 from wallet'}></BlueButton> */}
          </View>
        </View>
        <View style={[WhiteContainerStyles.container, {paddingBottom: 30}]}>
          <ScrollView>
            <View style={{gap: responsiveWidth(2)}}>
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
              </View>

              <View style={{gap: 15}}>
                <Text style={{fontSize: 20, fontWeight: 'bold', color: '#000'}}>
                  Add Money to wallet
                </Text>
                <View style={[styles.goldBorder, {padding: 15, gap: 20}]}>
                  <View
                    style={[
                      styles.goldBorder,
                      {
                        paddingHorizontal: 20,
                        paddingVertical: 5,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      },
                    ]}>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 10,
                      }}>
                      <FontAwesomeIcons
                        name={'rupee'}
                        size={25}
                        color={'#000'}></FontAwesomeIcons>
                      <Text
                        style={{
                          fontSize: 25,
                          fontWeight: 'bold',
                          color: '#000',
                          textAlign: 'center',
                        }}>
                        1000
                      </Text>
                    </View>
                    <Button
                      title={'Apply Promo'}
                      buttonStyle={{backgroundColor: 'transparent'}}
                      titleStyle={{color: '#1C45EB'}}></Button>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      gap: 5,
                      justifyContent: 'space-between',
                    }}>
                    <AddonButton price={100} />
                    <AddonButton price={200} />
                    <AddonButton price={500} />
                    <AddonButton price={1000} />
                  </View>
                  <TouchableOpacity
                    buttonStyle={{}}
                    style={{
                      backgroundColor: '#1C45EB',
                      borderRadius: 10,
                      // height: 40,
                    }}
                    titleStyle={{}}
                    onPress={() => navigation.navigate('MoneyAdded')}>
                    <Text
                      style={{
                        color: '#fff',
                        fontSize: 20,
                        textAlign: 'center',
                        paddingVertical: 8,
                        fontWeight: 600,
                      }}>
                      Proceed to add{' '}
                      <FontAwesomeIcons
                        name={'rupee'}
                        size={20}
                        color={'#fff'}></FontAwesomeIcons>{' '}
                      1000{' '}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </UserView>
  );
};

export default SlotPayment;

const AddonButton = ({title, price}) => {
  return (
    <Button
      title={`+${price}`}
      buttonStyle={[
        styles.goldBorder,
        {
          backgroundColor: 'transparent',
          borderRadius: 20,
          paddingHorizontal: 15,
          paddingVertical: 5,
        },
      ]}
      titleStyle={{color: '#000', fontWeight: 'bold'}}></Button>
  );
};
const styles = StyleSheet.create({
  goldBorder: {
    borderWidth: 1,
    borderColor: '#1C45EB',
    borderRadius: 10,
  },
  // YellowBox

  yellowBox: {
    // flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: width * 0.91,
    height: height * 0.25,
    // height: 81,
    backgroundColor: '#FFFC48',
    borderRadius: 10,
    marginVertical: 20,
    paddingHorizontal: 40,
  },

  // BlueBox
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
  boldPrice2: {
    fontFamily: fonts.ubuntuBold,
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: 44,
    // lineHeight: 20,
    display: 'flex',
    alignItems: 'center',
    letterSpacing: 0.02,
    color: '#111',
    marginVertical: 10
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
