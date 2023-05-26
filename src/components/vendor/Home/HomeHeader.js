import {View, Text, Image} from 'react-native';
import React from 'react';
import FeatherIcons from 'react-native-vector-icons/Feather';
import {
  responsiveFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Avatar, Badge} from 'react-native-elements';
import {Icons, Images} from '../../../constants';
import Separator from '../../Separator';
import colors from '../../../constants/colors';

const HomeHeader = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: responsiveWidth(4),
        alignItems: 'center',
      }}>
      <TouchableOpacity activeOpacity={.6}
        style={{borderRadius: responsiveWidth(10), padding: responsiveWidth(2)}}
        onPress={() => navigation.openDrawer()}>
        <Avatar
          source={Images.Person4}
          style={{width: responsiveWidth(14), height: responsiveWidth(14)}}
        />
        <Image
          source={Icons.vDrawer}
          style={{
            width: responsiveWidth(6),
            height: responsiveWidth(6),
            resizeMode: 'contain',
            position:'absolute',
            bottom:responsiveWidth(1.5),
            right:0,
          }}          
        />
      </TouchableOpacity>
      <View style={{flexDirection: 'row', gap: responsiveWidth(5)}}>
        <Image
          source={Icons.vSearch}
          style={{
            width: responsiveWidth(10),
            height: responsiveWidth(10),
            resizeMode: 'contain',
          }}
        />
        <Separator width={responsiveWidth(0)} />

        <View>
          <Image
            source={Icons.vBell}
            style={{
              width: responsiveWidth(10),
              height: responsiveWidth(10),
              resizeMode: 'contain',
            }}
          />
          <Badge
            value={3}
            badgeStyle={{
              backgroundColor: 'white',
              width: responsiveWidth(5),
              height: responsiveWidth(5),
              position: 'absolute',
              bottom: responsiveWidth(7),
              left:responsiveWidth(5),
            }}
            textStyle={{color: colors.primary}}
          />
        </View>
      </View>
    </View>
  );
};

export default HomeHeader;
