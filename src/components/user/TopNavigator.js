import { View, Text } from 'react-native';
import React from 'react';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';
import { Colors } from '../../constants';
import { responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';

const TopNavigator = ({navigation, title}) => {
  return (
    <View style={{flexDirection: 'row', gap: responsiveWidth(5), alignItems: 'center', padding: responsiveWidth(5)}}>
        <FontAwesomeIcons name="long-arrow-left" size={40} color={Colors.white} onPress={()=> navigation.goBack()} />
        <Text style={{fontWeight: 'bold', fontSize: responsiveFontSize(3), color: Colors.white, paddingLeft: responsiveWidth(12)}}>{title}</Text>
    </View>
  );
};

export default TopNavigator;