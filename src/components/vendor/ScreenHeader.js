import {View, Text, Image} from 'react-native';
import React from 'react';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';
import {Colors, Icons} from '../../constants';
import {
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {useNavigation} from '@react-navigation/native';
import Separator from '../Separator';
import { TouchableOpacity } from 'react-native-gesture-handler';
const ScreenHeader = ({title}) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flexDirection: 'row',        
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: responsiveWidth(5),
        paddingVertical: responsiveWidth(2),
      }}>
        <TouchableOpacity activeOpacity={.6} onPress={()=>navigation.goBack()}>
      <Image
        source={Icons.vArrowRight}
        style={{
          width: responsiveWidth(10),
          height: responsiveWidth(10),
          resizeMode: 'contain',          
        }}
      />

        </TouchableOpacity>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: responsiveFontSize(3),
          color: Colors.white,          
        }}>
        {title}
      </Text>
      <Separator width={responsiveWidth(8)}/>
    </View>
  );
};

export default ScreenHeader;
