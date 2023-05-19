import {View, Text, StyleSheet, TextInput} from 'react-native';
import React from 'react';
import { UserView } from '../../components';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';
import { Colors, Images } from '../../constants';
import { responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import WhiteContainerStyles from '../../styles/WhiteContainerStyles';
import Category from '../../components/user/Home/Category';
import images from '../../constants/images';
import { Image } from 'react-native';
import FeatherIcons from 'react-native-vector-icons/Feather';

const Categories = [
  {
    title: 'Vedic',
    logo: Images.Vedic,
  },
  {
    title: 'Numerology',
    logo: Images.Numerology,
  },
  {
    title: 'Kp Astrology',
    logo: Images.KpAstrology,
  },
];

const Search = ({navigation}) => {
  const [searchText, setSearchText] = React.useState('');
  return (
    <UserView>
      <View style={{flexDirection: 'row', gap: responsiveWidth(5), alignItems: 'center', padding: responsiveWidth(5)}}>
        <FontAwesomeIcons name="long-arrow-left" size={40} color={Colors.white} onPress={()=> navigation.goBack()} />
        <View style={styles.searchContainer}>
          <FontAwesomeIcons name="search" size={20} color={Colors.darkBlue2} />
          <TextInput placeholder="Search Astrologers, Categories" placeholderTextColor={Colors.black} style={{flex: 1}} value={searchText} onChangeText={setSearchText} />
        </View>
      </View>
      <View style={WhiteContainerStyles.container}>
        <View style={{gap: responsiveWidth(2)}}>
          <Text style={{fontWeight: 'bold', fontSize: responsiveFontSize(3), color: Colors.black}}>Specialization</Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', backgroundColor: Colors.darkBlue, borderRadius: responsiveWidth(2), padding: responsiveWidth(4), flexWrap: 'wrap', gap: responsiveWidth(5)}}>
              {
                  Categories.map((item, index) => (
                      <Category key={index} title={item.title} logo={item.logo} />
                  ))
              }
          </View>
        </View>
        <View style={{gap: responsiveWidth(3)}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
            <Text style={{fontWeight: 'bold', fontSize: responsiveFontSize(3), color: Colors.black}}>Recent Searches</Text>
            <Text style={{fontWeight: 'bold', color: Colors.black}}>Clear All</Text>  
          </View>
          <View style={{gap: responsiveWidth(1)}}>
            <SearchedItem title="Kp Astrologers" image={images.Person1} />
            <SearchedItem title="Vedic Astrologers" image={images.Person2} />
          </View>
        </View>
      </View> 
    </UserView>
  );
};

export default Search;

const SearchedItem = ({title, image}) => {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingVertical: responsiveWidth(2), borderBottomWidth: responsiveWidth(0.1), borderBottomColor: Colors.lightGrey}}>
      <View style={{flexDirection: 'row'}}>
        <Image source={image} style={{width: responsiveWidth(8), height: responsiveWidth(8), borderRadius: responsiveWidth(5)}} />
        <Text style={{fontWeight: 'bold', fontSize: responsiveFontSize(2.5), color: Colors.black, marginLeft: responsiveWidth(2)}}>{title}</Text>
      </View>
      <FeatherIcons name="arrow-up-right" size={20} color={Colors.darkBlue2} />
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    paddingHorizontal: responsiveWidth(2),
    borderRadius: responsiveWidth(1),
    gap: responsiveWidth(2),
    flex: 1,
  },
});
