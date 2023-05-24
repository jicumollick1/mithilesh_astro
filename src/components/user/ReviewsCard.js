import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';
import React from 'react';
import {Colors, Fonts, Images} from '../../constants';
const {width, height} = Dimensions.get('window');
import FeatherIcons from 'react-native-vector-icons/Feather';
import {responsiveWidth} from 'react-native-responsive-dimensions';

const ReviewsCard = () => {
  return (
    <View style={styles.callCard}>
      <View style={styles.bottomContainer}>
        <View style={{flexDirection: 'row'}}>
          <Image style={styles.personsImage} source={Images.Person6} />
          <View style={{marginLeft:10}}>
            <Text style={styles.time}>Ravi</Text>
          </View>
        </View>
        <View></View>
      </View>
      <View>
        <Text style={styles.description}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's{' '}
        </Text>
      </View>
    </View>
  );
};

export default ReviewsCard;

const styles = StyleSheet.create({
  // call card design

  callCard: {
    width: width * 0.91,
    height: height * 0.16,
    backgroundColor: '#fff',
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
    color: '#393737',
    marginTop: 10
  },
  bottomContainer: {
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
    color: '#25262B',
  },
  personsImage: {
    width: 30,
    height: 30,
  },
});
