import {View, Text} from 'react-native';
import React from 'react';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';
import {Colors} from '../../constants';
import {
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {useNavigation} from '@react-navigation/native';
const TopNavigator = ({title}) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flexDirection: 'row',
        gap: responsiveWidth(5),
        alignItems: 'center',
        justifyContent: 'center',
        padding: responsiveWidth(5),
      }}>
      <FontAwesomeIcons
        name="long-arrow-left"
        size={40}
        color={Colors.white}
        onPress={() => navigation.goBack()}
        style={{position: 'absolute', left: responsiveWidth(5)}}
      />
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: responsiveFontSize(3),
          color: Colors.white,
        }}>
        {title}
      </Text>
    </View>
  );
};

export default TopNavigator;
