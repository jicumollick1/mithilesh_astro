import {
  View,
  Text,
  ScrollView,
  TextInput,
  StyleSheet,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Colors, Fonts, Icons} from '../../constants';
import {
  responsiveFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {Button} from 'react-native-elements';
import WhiteContainerStyles from '../../styles/WhiteContainerStyles';
import ScreenHeader from '../../components/vendor/ScreenHeader';
import VendorView from '../../components/vendor/VendorView';
import Separator from '../../components/Separator';
import FocusStatusBar from '../../components/FocusStatusBar';
import colors from '../../constants/colors';
import icons from '../../constants/icons';

const accDetails = [
  {
    'Acc.Holder Name': 'Vijay Kumar',
    'Bank Name': 'HDFC Bank',
    'Acc No': '87569228912',
    'IFSC Code': 'HDFC1679',
    'Branch Name': 'Delhi',
  },
];
const AccountSettings = ({navigation}) => {
  return (
    <VendorView>
      <SafeAreaView />
      <FocusStatusBar
        barStyle={'light-content'}
        backgroundColor={Colors.primary}
        translucent
      />
      <ScreenHeader title={'Account Settings'} />
      <Separator height={responsiveWidth(3)} />
      <View style={{flex: 1, gap: responsiveWidth(10)}}>
        <View
          style={[
            WhiteContainerStyles.container,
            {backgroundColor: colors.secondary},
          ]}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={styles.heading}>Account Information</Text>
            <View
              style={{
                gap: responsiveWidth(6),
                marginVertical: responsiveWidth(3),
              }}>
              <View>
                <Text style={styles.inputHead}>User name</Text>
                <View style={styles.inputContainer}>
                  <TextInput
                    //   onChangeText={text => setName(text)}
                    //   value={name}
                    style={styles.inputStyle}
                  />
                  <Image source={Icons.profile} style={styles.inputIcon} />
                </View>
              </View>

              <View>
                <Text style={styles.inputHead}>Password</Text>
                <View style={styles.inputContainer}>
                  <TextInput
                    //   onChangeText={text => setName(text)}
                    //   value={name}
                    secureTextEntry={true}
                    style={styles.inputStyle}
                  />
                  <Image source={Icons.vEye} style={styles.inputIcon} />
                </View>
              </View>

              <Separator height={responsiveWidth(0)} />
              <Button
                title={'Save Changes'}
                titleStyle={{
                    fontSize: responsiveFontSize(2.2),
                    fontFamily: Fonts.ubuntuRegular,
                }}
                buttonStyle={{
                  backgroundColor: Colors.primary,
                  borderRadius: responsiveWidth(2),
                  paddingVertical: responsiveWidth(3.5),
                }}
              />

              <Separator height={responsiveWidth(0)} />
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Text style={styles.heading}>Bank details</Text>
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => navigation.navigate('MyProfile')}
                  style={styles.btn}>
                  <Image source={Icons.vPlus} style={styles.btnIcon} />
                  <Text
                    style={{
                      color: Colors.primary,
                      fontSize: responsiveFontSize(2),
                    }}>
                    Add
                  </Text>
                </TouchableOpacity>
              </View>

              <View style={styles.boxContainer}>
                <View
                  style={{
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexDirection: 'row',
                  }}>
                  <Text
                    style={{
                      color: Colors.white,
                      fontSize: responsiveFontSize(2),
                    }}>
                    Bank Details
                  </Text>
                  <Image
                    source={icons.vEdit}
                    style={{
                      width: responsiveWidth(6),
                      height: responsiveWidth(6),
                      resizeMode: 'contain',
                      marginRight: responsiveWidth(4),
                    }}
                  />
                </View>
                {accDetails.map((details, index) => (
                  <View key={index}>
                    {Object.entries(details).map(([key, value]) => (
                      <View
                        key={key}
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                          gap: responsiveWidth(5),
                          paddingVertical: responsiveWidth(1.4),
                        }}>
                        <Text
                          style={{
                            width: responsiveWidth(30),
                            color: Colors.white,
                          }}>
                          {key}
                        </Text>
                        <Text style={{color: Colors.white}}>-</Text>
                        <Text style={{color: Colors.white}}>{value}</Text>
                      </View>
                    ))}
                  </View>
                ))}
              </View>

              <Separator height={responsiveWidth(0)} />
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Text style={styles.heading}>UPI ID</Text>
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => navigation.navigate('MyProfile')}
                  style={styles.btn}>
                  <Image source={Icons.vPlus} style={styles.btnIcon} />
                  <Text
                    style={{
                      color: Colors.primary,
                      fontSize: responsiveFontSize(2),
                    }}>
                    Add
                  </Text>
                </TouchableOpacity>
              </View>

              <View style={styles.boxContainer}>
                <View
                  style={{
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexDirection: 'row',
                  }}>
                  <Text
                    style={{
                      color: Colors.white,
                      fontSize: responsiveFontSize(2),
                    }}>
                    UPI ID
                  </Text>
                  <Image
                    source={icons.vEdit}
                    style={{
                      width: responsiveWidth(6),
                      height: responsiveWidth(6),
                      resizeMode: 'contain',
                      marginRight: responsiveWidth(4),
                    }}
                  />
                </View>
                <Text style={{color: Colors.white}}>rakesh12@oksbi</Text>
              </View>
              <Separator height={responsiveWidth(0)} />
              <Button
                title="Delete Account"
                titleStyle={{
                  color: Colors.primary,
                  fontSize: responsiveFontSize(2),
                  fontFamily: Fonts.ubuntuRegular,
                }}
                buttonStyle={{
                  backgroundColor: Colors.secondary,
                  borderRadius: responsiveWidth(3),
                  paddingVertical: responsiveWidth(3.5),
                  borderWidth: responsiveWidth(0.4),
                  borderColor: colors.primary,
                }}
              />

              <Text
                style={{
                  color: Colors.black,
                  fontSize: responsiveFontSize(2),
                  fontFamily: Fonts.ubuntuRegular,
                }}>
                Your account will permanently get deleted and data wil get lost
              </Text>
              <Text style={styles.heading}>Support</Text>

              <Button
                icon={
                  <Image
                    source={icons.vCall}
                    style={{
                      width: responsiveWidth(6),
                      height: responsiveWidth(6),
                      resizeMode: 'contain',
                      marginRight: responsiveWidth(4),
                    }}
                  />
                }
                title={'Contact us'}
                titleStyle={{
                    fontSize: responsiveFontSize(2.2),
                    fontFamily: Fonts.ubuntuRegular,
                }}
                buttonStyle={{
                  backgroundColor: Colors.primary,
                  borderRadius: responsiveWidth(2),
                  paddingVertical: responsiveWidth(3.5),
                }}
              />
            </View>
            <Separator height={responsiveWidth(6)} />
          </ScrollView>
        </View>
      </View>
    </VendorView>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    borderWidth: responsiveWidth(0.24),
    borderColor: Colors.primary,
    borderRadius: responsiveWidth(2),
    justifyContent: 'space-between',
    paddingHorizontal: responsiveWidth(3),
    alignItems: 'center',
    flexDirection: 'row',
    height: responsiveWidth(12),
  },
  inputStyle: {
    flex: 1,
    color: Colors.black,
    fontSize: responsiveFontSize(1.8),
    alignSelf: 'stretch',
    fontFamily: Fonts.ubuntuRegular,
    height: responsiveWidth(12),
  },
  inputIcon: {
    width: responsiveWidth(5),
    height: responsiveWidth(5),
    resizeMode: 'contain',
  },
  inputHead: {
    fontFamily: Fonts.ubuntuRegular,
    color: Colors.black,
    marginBottom: responsiveWidth(3),
    fontSize: responsiveFontSize(2),
  },
  heading: {
    fontFamily: Fonts.ubuntuBold,
    color: Colors.black,
    marginBottom: responsiveWidth(2),
    fontSize: responsiveFontSize(2.5),
  },
  dropdown1: {
    borderColor: Colors.primary,
    borderWidth: responsiveWidth(0.24),
    borderRadius: responsiveWidth(2),
    paddingHorizontal: responsiveWidth(3),
    height: responsiveWidth(12),
  },
  btn: {
    backgroundColor: colors.secondary,
    flexDirection: 'row',
    width: responsiveWidth(20),
    alignItems: 'center',
    justifyContent: 'space-around',
    height: responsiveWidth(7),
    borderRadius: responsiveWidth(5),
    borderWidth: responsiveWidth(0.3),
    borderColor: Colors.primary,
    paddingHorizontal: responsiveWidth(2),
  },
  btnIcon: {
    width: responsiveWidth(4),
    height: responsiveWidth(4),
    resizeMode: 'contain',
  },
  boxContainer: {
    backgroundColor: colors.primary,
    paddingHorizontal: responsiveWidth(4),
    borderRadius: responsiveWidth(3.5),
    paddingVertical: responsiveWidth(5),
    gap: responsiveWidth(3),
  },
});

export default AccountSettings;
