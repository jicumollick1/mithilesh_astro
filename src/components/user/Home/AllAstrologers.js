import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import { responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import { Colors, Images } from '../../../constants';
import AstrologerCard from './AstrologerCard';
import { Button } from 'react-native-elements';

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
        language: 'English, Hindi, Tamil',
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
        language: 'English, Hindi, Tamil',
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
        language: 'English, Hindi, Tamil',
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
        language: 'English, Hindi, Tamil',
        status: 'Busy',
    },
];

const AllAstrologers = () => {
    const [active, setActive] = React.useState('All');
    return (
        <View style={{gap: responsiveWidth(3)}}>
            <Text style={{fontWeight: 'bold', fontSize: responsiveFontSize(3), color: Colors.black}}>All Astrologers</Text>
            <View style={{flexDirection: 'row', gap: responsiveWidth(4), flexWrap: 'wrap'}}>
                <Option title="All" active={active} setActive={setActive} />
                <Option title="Vedic" active={active} setActive={setActive} />
                <Option title="Tarot" active={active} setActive={setActive} />
                <Option title="Kp Astrology" active={active} setActive={setActive} />
                <Option title="Numerology" active={active} setActive={setActive} />
                <Option title="Vasthu" active={active} setActive={setActive} />
                <Option title="Lal Kitab" active={active} setActive={setActive} />
            </View>
            <View style={{gap: responsiveWidth(3)}}>
                {
                    Astrologers.map((astrologer, index) => <AstrologerCard key={index} data={astrologer} />)
                }
            </View>
            <Button title="View More" buttonStyle={{backgroundColor: Colors.lightBlue, borderRadius: responsiveWidth(5), alignSelf: 'center', paddingHorizontal: responsiveWidth(5)}} titleStyle={{color: Colors.black}} />
        </View>
    );
};

export default AllAstrologers;

const Option = ({title, active, setActive}) => {
    return(
        <TouchableOpacity style={{backgroundColor: active===title?'#2A4FD3':Colors.lightBlue, paddingHorizontal: responsiveWidth(3), paddingVertical: responsiveWidth(1), borderRadius: responsiveWidth(5)}} onPress={()=> setActive(title)} >
            <Text style={{color: active===title?Colors.white:Colors.black, fontWeight: 'bold', fontSize: responsiveFontSize(2)}}>{title}</Text>
        </TouchableOpacity>
    );
};