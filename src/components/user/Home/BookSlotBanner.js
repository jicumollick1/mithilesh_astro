import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import { responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import { Button } from 'react-native-elements';
import { Colors, Images } from '../../../constants';

const BookSlotBanner = () => {
  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-between',backgroundColor: Colors.darkBlue, borderRadius: responsiveWidth(2), padding: responsiveWidth(3)}}>
      <View style={{gap: responsiveWidth(2), width: '60%'}}>
        <Text style={{color: Colors.Yellow, fontWeight: 'bold', fontSize: responsiveFontSize(2)}}>Book a Slot Now</Text>
        <Text style={{color: '#fff'}}>Your Ultimate Answer to a Balanced, Prosperous and Healthy Life.</Text>
        <Button title="Chat now" buttonStyle={{backgroundColor: Colors.Yellow, borderRadius: responsiveWidth(2), width: responsiveWidth(25), padding: responsiveWidth(1)}} titleStyle={{color: Colors.darkBlue}} />
      </View>
      <Image source={Images.BookSlot} />
    </View>
  );
};

export default BookSlotBanner;