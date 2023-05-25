import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {ScrollView} from 'react-native-gesture-handler';
import {Colors, Images} from '../../../constants';
import {Image} from 'react-native-elements';
import {TouchableOpacity} from 'react-native-gesture-handler';
import AstrologerSmallCard from './AstrologerSmallCard';

const Options = [
  {
    title: 'Marriage',
    logo: Images.Marriage,
  },
  {
    title: 'Career',
    logo: Images.Career,
  },
  {
    title: 'Life',
    logo: Images.Life,
  },
  {
    title: 'Love',
    logo: Images.Love,
  },
  {
    title: 'Wealth',
    logo: Images.Wealth,
  },
  {
    title: 'Health',
    logo: Images.Health,
  },
];

const Astrologers = [
  {
    name: 'Smriti',
    image: Images.Person1,
    type: 'Vedic Astrologer',
    rating: 4.6,
    price: 7.0,
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
    price: 7.0,
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
    price: 7.0,
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
    price: 7.0,
    reviews: 133,
    experience: 5,
    speciality: 'Vedic, Numerology, Vasthu',
    status: 'Busy',
  },
];

const SuggestedAstrologers = () => {
  return (
    <View style={{gap: responsiveWidth(5)}}>
      <View style={{gap: responsiveWidth(3)}}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: responsiveFontSize(3),
            color: Colors.black,
          }}>
          Suggested Astrologers
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            gap: responsiveWidth(4),
            flexWrap: 'wrap',
          }}>
          {Options.map((option, index) => (
            <Option key={index} title={option.title} logo={option.logo} />
          ))}
        </View>
      </View>
      <ScrollView horizontal={true}>
        <View style={{flexDirection: 'row', gap: responsiveWidth(5)}}>
          {Astrologers.map((astrologer, index) => (
            <AstrologerSmallCard key={index} data={astrologer} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default SuggestedAstrologers;

const Option = ({title, logo}) => {
  const [isSelected, setIsSelected] = useState(false);
  return (
    <TouchableOpacity
      style={[
        styles.optionContainer,
        {
          backgroundColor: isSelected
            ? Colors.darkBlue2
            : 'rgba(42, 79, 211, 0.1)',
        },
      ]}
      onPress={() => setIsSelected(!isSelected)}>
      <Image source={logo} style={styles.image} />
      <Text
        style={{
          color: isSelected ? Colors.white : Colors.black,
          fontSize: responsiveFontSize(2),
          fontWeight: 500,
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    height: responsiveWidth(6),
    width: responsiveWidth(6),
    resizeMode: 'contain',
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: responsiveWidth(10),
    gap: responsiveWidth(2),
    paddingHorizontal: responsiveWidth(4),
    paddingVertical: responsiveWidth(1.5),
  },
});
