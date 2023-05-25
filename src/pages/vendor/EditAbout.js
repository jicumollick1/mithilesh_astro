import {View, Text, StyleSheet, ScrollView, TextInput} from 'react-native';
import React from 'react';
import {
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {Button} from 'react-native-elements';
import WhiteContainerStyles from '../../styles/WhiteContainerStyles';
import {Colors, Fonts, Icons} from '../../constants';
import {TouchableOpacity} from 'react-native';
import VendorView from '../../components/vendor/VendorView';
import ScreenHeader from '../../components/vendor/ScreenHeader';
import {SafeAreaView} from 'react-native';
import FocusStatusBar from '../../components/FocusStatusBar';
import Separator from '../../components/Separator';

const EditAbout = () => {
  const [active, setActive] = React.useState('');
  return (
    <VendorView>
      <SafeAreaView />
      <FocusStatusBar
        barStyle={'light-content'}
        backgroundColor={Colors.primary}
        translucent
      />
      <ScreenHeader title="About" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={[
            WhiteContainerStyles.container,
            {backgroundColor: Colors.secondary},
          ]}>
          <View style={{gap: responsiveWidth(5)}}>
            <Text
              style={{
                fontFamily: Fonts.ubuntuRegular,
                fontSize: responsiveFontSize(1.8),
                color: Colors.black,
              }}>
              Add a short summary about yourself
            </Text>

            <Text
              style={{
                fontWeight: 'bold',
                fontSize: responsiveFontSize(2.5),
                color: Colors.black,
              }}>
              About
            </Text>

            <View
              style={{
                backgroundColor: Colors.primary,
                borderRadius: responsiveWidth(3),
              }}>
              <TextInput multiline style={styles.textInput1} />
            </View>
              <Text style={{alignSelf:'flex-end'}}>0/1000</Text>

            <Text
              style={{
                fontWeight: 'bold',
                fontSize: responsiveFontSize(2.5),
                color: Colors.black,
              }}>
              Specialization
            </Text>
        

            <TextInput multiline style={{...styles.aboutText,height:responsiveWidth(20)}}/>
          

            <Text
              style={{
                fontWeight: 'bold',
                fontSize: responsiveFontSize(2.5),
                color: Colors.black,
              }}>
              Languages Known
            </Text>

            <TextInput multiline style={styles.aboutText} s/>
          </View>

          <Separator height={responsiveWidth(5)} />
          <View>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: responsiveFontSize(2.5),
                color: Colors.black,
              }}>
              Charges of fee (Min)
            </Text>

            <Separator height={responsiveWidth(5)} />
            <TextInput multiline style={styles.aboutText} s/>
            <Separator height={responsiveWidth(5)} />
            <View>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: responsiveFontSize(2.5),
                  color: Colors.black,
                }}>
                Experience
              </Text>
              <Separator height={responsiveWidth(5)} />
              <TextInput multiline style={styles.aboutText} s/>
            </View>
            <Separator height={responsiveWidth(10)} />
            <Button
              titleStyle={{
                fontFamily: Fonts.ubuntuRegular,
                fontSize: responsiveFontSize(2.3),
              }}
              title={'Save Changes'}
              buttonStyle={{
                backgroundColor: Colors.primary,
                borderRadius: responsiveWidth(2),
                paddingVertical: responsiveWidth(3),
              }}
            />
            <Separator height={responsiveWidth(10)} />
          </View>
        </View>
      </ScrollView>
    </VendorView>
  );
};

const Option = ({title, active, setActive}) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: active === title ? Colors.primary : Colors.lightRed1,
        paddingHorizontal: responsiveWidth(3),
        paddingVertical: responsiveWidth(1),
        borderRadius: responsiveWidth(5),
      }}
      onPress={() => setActive(title)}>
      <Text
        style={{
          color: active === title ? Colors.white : Colors.black,
          fontFamily: Fonts.ubuntuRegular,
          fontSize: responsiveFontSize(2),
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  // cardDesign

  card: {
    backgroundColor: Colors.white,
    borderRadius: responsiveWidth(2),
    paddingLeft: responsiveWidth(12),
    paddingRight: responsiveWidth(5),
    paddingVertical: responsiveWidth(4),
    gap: responsiveWidth(1),
  },
  cardImage: {
    height: responsiveWidth(15),
    width: responsiveWidth(15),
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
    borderBottomColor: Colors.primary,
    transform: [{rotate: '180deg'}],
  },
  pricingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: responsiveWidth(1),
    backgroundColor: Colors.primary,
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
    color: Colors.white,
    height: responsiveWidth(15),
    backgroundColor: Colors.primary,
    borderRadius:responsiveWidth(3),
    padding: responsiveWidth(3),
},
  textInput1: {
    fontFamily: Fonts.ubuntuRegular,
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.005,
    color: Colors.white,
    height: responsiveWidth(29),
    padding: responsiveWidth(3),
  },
});

export default EditAbout;
