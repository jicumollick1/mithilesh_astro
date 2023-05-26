import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';
import React from 'react';
import {Colors, Fonts, Images} from '../../constants';
const {width, height} = Dimensions.get('window');
import FeatherIcons from 'react-native-vector-icons/Feather';
import {responsiveWidth} from 'react-native-responsive-dimensions';
const CallCard = () => {
  return (
    <View style={styles.callCard}>
      <View>
        <Text style={styles.title}>
          {' '}
          <FeatherIcons
            name="phone-call"
            size={responsiveWidth(4)}
            color={Colors.white}
          />{' '}
          Audio call with Shivam Ji
        </Text>
        <Text style={styles.description}>Sun, 07-05-2023</Text>
      </View>

      <View style={styles.bottomContainer}>
        <Image style={styles.personsImage} source={Images.callPersons} />
        <Text style={styles.time}>09:30 AM - 10:30 AM</Text>
      </View>
    </View>
  );
};

export default CallCard;

const styles = StyleSheet.create({
  // call card design

  callCard: {
    width: width * 0.91,
    height: 111,
    backgroundColor: 'rgba(42, 79, 211, 0.6)',
    borderRadius: 10,
    marginVertical: 10,
    padding: 15,
  },
  title: {
    fontFamily: Fonts.ubuntuBold,
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: 16,
    lineHeight: 20,
    letterSpacing: 0.02,
    color: '#FFFFFF',
  },
  description: {
    fontFamily: Fonts.ubuntuRegular,
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.02,
    color: '#FFFFFF',
  },
  bottomContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  time: {
    fontFamily: Fonts.ubuntuBold,
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.02,
    color: '#FFFFFF',
  },
  personsImage: {
    width: 50,
    height: 25,
  },
});
