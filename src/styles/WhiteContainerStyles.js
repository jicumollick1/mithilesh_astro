import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {responsiveWidth} from 'react-native-responsive-dimensions';

export default StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        paddingHorizontal: responsiveWidth(4),
        paddingVertical: responsiveWidth(6),
        borderTopStartRadius: responsiveWidth(5),
        borderTopEndRadius: responsiveWidth(5),
        flex: 1,
        gap: responsiveWidth(8),
    },
});
