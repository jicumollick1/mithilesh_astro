import { View, Text } from 'react-native';
import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import { Colors, Images } from '../../../constants';
import AstrologerSmallCard from './AstrologerSmallCard';

const Astrologers = [
    {
        name: 'Smriti',
        image: Images.Person1,
        type: 'Vedic Astrologer',
        rating: 4.6,
        price: 7.00,
        reviews: 133,
        experience: 5,
        speciality: 'Vedic, Numerology, Vasthu',
        status: 'Online',
    },
    {
        name: 'Sabarish',
        image: Images.Person2,
        type: 'Vedic Astrologer',
        rating: 4.6,
        price: 7.00,
        reviews: 133,
        experience: 5,
        speciality: 'Vedic, Numerology, Vasthu',
        status: 'Busy',
    },
    {
        name: 'Saranya',
        image: Images.Person3,
        type: 'Vedic Astrologer',
        rating: 4.6,
        price: 7.00,
        reviews: 133,
        experience: 5,
        speciality: 'Vedic, Numerology, Vasthu',
        status: 'Online',
    },
    {
        name: 'Shivam',
        image: Images.Person4,
        type: 'Vedic Astrologer',
        rating: 4.6,
        price: 7.00,
        reviews: 133,
        experience: 5,
        speciality: 'Vedic, Numerology, Vasthu',
        status: 'Busy',
    },
];

const LiveAstrologers = () => {
    return (
        <View style={{gap: responsiveWidth(3)}}>
            <Text style={{fontWeight: 'bold', fontSize: responsiveFontSize(3), color: Colors.black}}>Live Astrologers</Text>
            <ScrollView horizontal={true}>
                <View style={{flexDirection: 'row', gap: responsiveWidth(5)}}>
                    {
                        Astrologers.map((astrologer, index) => <AstrologerSmallCard key={index} data={astrologer} />)
                    }
                </View>
            </ScrollView>
        </View>
    )
}

export default LiveAstrologers