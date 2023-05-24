import {StyleSheet, Dimensions, Text, View} from 'react-native';
import React from 'react';
import {responsiveWidth} from 'react-native-responsive-dimensions';

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    backgroundColor: '#E9FAFF',
    paddingHorizontal: responsiveWidth(4),
    paddingVertical: responsiveWidth(6),
    borderTopStartRadius: responsiveWidth(5),
    borderTopEndRadius: responsiveWidth(5),
    flex: 1,
    gap: responsiveWidth(8),
    height: height * 1,
  },
});
