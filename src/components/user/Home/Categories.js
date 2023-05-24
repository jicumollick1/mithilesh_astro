import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import { responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import { Colors, Images } from '../../../constants';
import Category from './Category';

const AllCategories = [
    {
        title: 'Kundli',
        logo: Images.Kundli,
        screen: 'GenerateKundli',
    },
    {
        title: 'Panchang',
        logo: Images.Panchang,
        screen: 'Panchang',
    },
    {
        title: 'Match Making',
        logo: Images.MatchMaking,
        screen: 'MatchMaking',
    },
    {
        title: 'Wallet',
        logo: Images.Wallet,
        screen: 'Home',
    },
    {
        title: 'Live Chat & Calls',
        logo: Images.LiveChatCalls,
    },
    {
        title: 'Slot Bookings',
        logo: Images.SlotBookings,
        screen: 'Home',
    },
];

const Categories = () => {
    return (
        <View style={{gap: responsiveWidth(3)}}>
            <Text style={{fontWeight: 'bold', fontSize: responsiveFontSize(3), color: Colors.black}}>Categories</Text>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', backgroundColor: Colors.darkBlue, borderRadius: responsiveWidth(2), padding: responsiveWidth(4), flexWrap: 'wrap', gap: responsiveWidth(5)}}>
                {
                    AllCategories.map((item, index) => (
                        <Category key={index} title={item.title} logo={item.logo} screen={item.screen} />
                    ))
                }
            </View>
        </View>
    );
};

export default Categories;