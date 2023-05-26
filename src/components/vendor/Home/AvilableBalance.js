import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {Button} from 'react-native-elements';
import {Colors, Fonts, Icons, Images} from '../../../constants';

const AvilableBalance = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: Colors.primary,
        borderRadius: responsiveWidth(3),
        padding: responsiveWidth(5),
        paddingVertical: responsiveWidth(7),
      }}>
      <View style={{gap: responsiveWidth(2), width: '60%'}}>
        <Text
          style={{
            color: Colors.white,
            fontFamily: Fonts.ubuntuRegular,
            fontSize: responsiveFontSize(2.7),
          }}>
          Available Balance
        </Text>
        <Text
          style={{
            color: '#fff',
            fontSize: responsiveFontSize(2.7),
            fontFamily: Fonts.ubuntuRegular,
          }}>
          $ 10,540
        </Text>
      </View>
      <Image
        style={{
          width: responsiveWidth(15),
          height: responsiveWidth(15),
          resizeMode: 'contain',
          marginRight:responsiveWidth(5)
        }}
        source={Icons.vWalletMoney}
      />
    </View>
  );
};

export default AvilableBalance;
