import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {Colors, Icons, Images} from '../../../constants';
import {Button} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import colors from '../../../constants/colors';
import Separator from '../../Separator';
const Astrologers = [
  {
    name: 'Smriti',
    image: Images.Person4,
    type: 'Vedic Astrologer',
    rating: 4.6,
    price: 8.0,
    reviews: 133,
    experience: 5,
    speciality: 'Vedic, Numerology, Vasthu',
    language: 'English, Hindi, Tamil',
    status: 'Online',
    badge: 'Premium',
  },
  {
    name: 'Sabarish',
    image: Images.Person2,
    type: 'Vedic Astrologer',
    rating: 4.4,
    price: 7.0,
    reviews: 133,
    experience: 5,
    speciality: 'Vedic, Numerology, Vasthu',
    language: 'English, Hindi, Tamil',
    status: 'Busy',
    badge: 'Basic',
  },
  {
    name: 'Saranya',
    image: Images.Person3,
    type: 'Vedic Astrologer',
    rating: 4.1,
    price: 5.0,
    reviews: 133,
    experience: 5,
    speciality: 'Vedic, Numerology, Vasthu',
    language: 'English, Hindi, Tamil',
    status: 'Online',
    badge: 'Basic',
  },
  {
    name: 'Shivam',
    image: Images.Person1,
    type: 'Vedic Astrologer',
    rating: 4.9,
    price: 10.0,
    reviews: 133,
    experience: 5,
    speciality: 'Vedic, Numerology, Vasthu',
    language: 'English, Hindi, Tamil',
    status: 'Busy',
    badge: 'Top Rated',
  },
];

const ChatCallHistory = () => {  
  const navigation = useNavigation();
  return (
    <View style={{gap: responsiveWidth(3)}}>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: responsiveFontSize(3),
          color: Colors.black,
        }}>
        Chat & Call History
      </Text>

      <Text
        style={{
          fontWeight: 'bold',
          fontSize: responsiveFontSize(2.6),
          color: Colors.black,
        }}>
        Today
      </Text>
      <Separator height={responsiveWidth(2)} />
      <View style={{gap: responsiveWidth(4)}}>
        {Astrologers.map((astrologer, index) => (
          <View
            style={{
              backgroundColor: colors.primary,
              borderRadius: responsiveWidth(2),
              padding: responsiveWidth(3),
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: responsiveFontSize(2.2),
                  color: Colors.white,
                }}>
                Audio call with {astrologer.name}
              </Text>

              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => navigation.navigate('AstrologerDetails', {data:astrologer})}
                style={{
                  backgroundColor: colors.secondary,
                  flexDirection: 'row',
                  width: responsiveWidth(20),
                  alignItems: 'center',
                  justifyContent: 'space-around',
                  height: responsiveWidth(7),
                  borderRadius: responsiveWidth(2),
                }}>
                <Image
                  source={Icons.phone}
                  style={{
                    width: responsiveWidth(4),
                    height: responsiveWidth(4),
                    resizeMode: 'contain',
                  }}
                />
                <Text
                  style={{
                    color: Colors.black,
                    fontSize: responsiveFontSize(2),
                  }}>
                  Call
                </Text>
              </TouchableOpacity>
            </View>

            <Text
              style={{
                fontSize: responsiveFontSize(1.7),
                color: Colors.white,
              }}>
              2 hr 14 minute{' '}
            </Text>

            <Separator height={responsiveWidth(2)} />

            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Image
                source={Images.Person1}
                style={{
                  width: responsiveWidth(8),
                  height: responsiveWidth(8),
                  resizeMode: 'contain',
                }}
              />
              <Text
                style={{
                  fontSize: responsiveFontSize(1.9),
                  color: Colors.white,
                }}>
                09:30 AM - 10:30 AM
              </Text>
            </View>
          </View>
        ))}
      </View>
      <Button
        title="View More"
        buttonStyle={{
          backgroundColor: Colors.lightBlue,
          borderRadius: responsiveWidth(5),
          alignSelf: 'center',
          paddingHorizontal: responsiveWidth(5),
        }}
        titleStyle={{color: Colors.black}}
        onPress={() => navigation.navigate('ListOfAstrologers')}
      />
    </View>
  );
};

export default ChatCallHistory;

const Option = ({title, active, setActive}) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: active === title ? '#2A4FD3' : Colors.lightBlue,
        paddingHorizontal: responsiveWidth(3),
        paddingVertical: responsiveWidth(1),
        borderRadius: responsiveWidth(5),
      }}
      onPress={() => setActive(title)}>
      <Text
        style={{
          color: active === title ? Colors.white : Colors.black,
          fontWeight: 'bold',
          fontSize: responsiveFontSize(2),
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};
