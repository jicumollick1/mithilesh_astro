import {StyleSheet, Dimensions, Text, View} from 'react-native';
import React from 'react';
import {responsiveWidth} from 'react-native-responsive-dimensions';
import { Colors } from '../constants';

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        backgroundColor: Colors.white,
        paddingHorizontal: responsiveWidth(4),
        paddingTop: responsiveWidth(6),
        borderTopStartRadius: responsiveWidth(5),
        borderTopEndRadius: responsiveWidth(5),
        flex: 1,
    },
});
