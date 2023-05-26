import {View, Text} from 'react-native';
import React from 'react';
import {
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {Colors, Images} from '../../../constants';
import {Category} from '.';

const AllCategories = [
  {
    title: 'Kundli',
    logo: Images.VKundli,
    screen: 'GenerateKundli',
  },
  {
    title: 'Panchang',
    logo: Images.VPanchang,
    screen: 'Panchang',
  },
  {
    title: 'Match Making',
    logo: Images.VMatchMaking,
    screen: 'MatchMaking',
  },
  {
    title: 'Wallet',
    logo: Images.VWallet,
    screen: 'Home',
  },
  {
    title: 'Live Chat & Calls',
    logo: Images.VLiveChatCalls,
  },
  {
    title: 'Slot Bookings',
    logo: Images.VSlotBookings,
    screen: 'Home',
  },
];

const Categories = () => {
  return (
    <View style={{gap: responsiveWidth(3)}}>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: responsiveFontSize(3),
          color: Colors.black,
        }}>
        Categories
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          backgroundColor: Colors.primary,
          borderRadius: responsiveWidth(2),
          padding: responsiveWidth(4),
          flexWrap: 'wrap',
          gap: responsiveWidth(5),
        }}>
        {AllCategories.map((item, index) => (
          <Category
            key={index}
            title={item.title}
            logo={item.logo}
            screen={item.screen}
          />
        ))}
      </View>
    </View>
  );
};

export default Categories;
