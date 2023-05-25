import {
  View,
  Text,
  ScrollView,
  TextInput,
  StyleSheet,
  Image,
  SafeAreaView,
} from 'react-native';
import React, { useState } from 'react';
import {Colors, Icons} from '../../constants';
import {
  responsiveFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {Button} from 'react-native-elements';
import WhiteContainerStyles from '../../styles/WhiteContainerStyles';
import ScreenHeader from '../../components/vendor/ScreenHeader';
import VendorView from '../../components/vendor/VendorView';
import Separator from '../../components/Separator';
import {Dropdown} from 'react-native-element-dropdown';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FocusStatusBar from '../../components/FocusStatusBar';
const MyProfile = () => {
    
    const [gender, setGender] = useState('Male');
    const [isFocus, setIsFocus] = useState(false);
    const [maritalStatus, setMaritalStatus] = useState('Single');
    const genderLabel = [
        {label: 'Male', value: 'Male'},
        {label: 'Female', value: 'Female'},
      ];

      const martialLabel = [
        {label: 'married', value: 'Single'},
        {label: 'singel', value: 'Married'},
      ];
    
      const renderRightIcon = () => {
        return (
          <Ionicons
            style={styles.icon}
            color={Colors.BLACK1}
            name="chevron-down"
            size={20}
          />
        );
      };
    
  return (
    <VendorView>
        <SafeAreaView />
      <FocusStatusBar
        barStyle={'light-content'}
        backgroundColor={Colors.primary}
        translucent
      />
      <ScreenHeader title={'My Profile'} />
      <Separator height={responsiveWidth(3)} />
      <View style={{flex: 1, gap: responsiveWidth(10)}}>
        <View style={{paddingHorizontal: responsiveWidth(5)}}>
          <Text
            style={{
              color: Colors.white,
              fontWeight: 'bold',
              fontSize: responsiveFontSize(2.5),
            }}>
            Provide birth information
          </Text>
          <Separator height={responsiveWidth(3)} />
          <Text style={{color: Colors.white, fontSize: responsiveFontSize(2)}}>
            In order to save time on consultation and to share with your
            astrologer
          </Text>
        </View>
        <View style={[WhiteContainerStyles.container]}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View
              style={{
                gap: responsiveWidth(6),
                marginVertical: responsiveWidth(3),
              }}>
              <View>
                <Text style={styles.inputHead}>Full Name</Text>
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
                  <Text style={styles.inputHead}>Gender</Text>
                  <Dropdown
                    style={styles.dropdown1}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    iconStyle={styles.iconStyle}
                    data={genderLabel}
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder={!isFocus ? 'Male' : 'Male'}
                    value={gender}
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    onChange={item => {
                      setGender(item.value);
                      setIsFocus(false);
                    }}
                    renderRightIcon={renderRightIcon}
                  />                  
                </View>
              <View>
                <Text style={styles.inputHead}>Age</Text>
                <View style={styles.inputContainer}>
                  <TextInput
                    //   onChangeText={text => setName(text)}
                    //   value={name}
                    style={styles.inputStyle}
                  />
                  
                </View>                
              </View>

              <View>
                <Text style={styles.inputHead}>Date of Birth</Text>
                <View style={styles.inputContainer}>
                  <TextInput
                    //   onChangeText={text => setName(text)}
                    //   value={name}
                    style={styles.inputStyle}
                  />
                  <Image source={Icons.vCalender} style={styles.inputIcon} />
                </View>                
              </View>
              <View>
                <Text style={styles.inputHead}>Mobile Number</Text>
                <View style={styles.inputContainer}>
                  <TextInput
                    //   onChangeText={text => setName(text)}
                    //   value={name}
                    style={styles.inputStyle}
                  />
                  <Image source={Icons.phone} style={styles.inputIcon} />
                </View>                
              </View>
              <View>
                <Text style={styles.inputHead}>Email</Text>
                <View style={styles.inputContainer}>
                  <TextInput
                    //   onChangeText={text => setName(text)}
                    //   value={name}
                    style={styles.inputStyle}
                  />
                  <Image source={Icons.vMail} style={styles.inputIcon} />
                </View>                
              </View>

              <View>
                  <Text style={styles.inputHead}>
                    Marital Status
                  </Text>
                  <Dropdown
                    style={styles.dropdown1}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    iconStyle={styles.iconStyle}
                    data={martialLabel}
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder={!isFocus ? 'Single' : 'Single'}
                    value={maritalStatus}
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    onChange={item => {
                      setMaritalStatus(item.value);
                      setIsFocus(false);
                    }}
                    renderRightIcon={renderRightIcon}
                  />
                  <Separator height={responsiveWidth(4)} />
                </View>
                <Separator height={responsiveWidth(10)}/>
              <Button
                title={'Save Changes'}                
                buttonStyle={{
                  backgroundColor: Colors.primary,
                  borderRadius: responsiveWidth(2),
                  paddingVertical:responsiveWidth(3)
                }}
              />
              <Separator height={responsiveWidth(10)}/>
            </View>
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
    // fontFamily: Fonts.POPPINS_MEDIUM,
    height: responsiveWidth(12),
  },
  inputIcon: {
    width: responsiveWidth(5),
    height: responsiveWidth(5),
    resizeMode: 'contain',
  },
  inputHead: {
    // fontFamily: Fonts.POPPINS_MEDIUM,
    color: Colors.black,
    marginBottom: responsiveWidth(2),
    fontSize: responsiveFontSize(1.8),
  },
  dropdown1: {
    borderColor: Colors.primary,
    borderWidth: responsiveWidth(0.24),
    borderRadius: responsiveWidth(2),
    paddingHorizontal: responsiveWidth(3),
    height: responsiveWidth(12),
  },
});

export default MyProfile;
