import {View, Text, StyleSheet, TextInput, ScrollView} from 'react-native';
import React from 'react';
import {UserView} from '../../components';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';
import {Colors, Images} from '../../constants';
import {
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import Category from '../../components/user/Home/Category';
import images from '../../constants/images';
import {Image} from 'react-native';
import FeatherIcons from 'react-native-vector-icons/Feather';
import AllAstrologers from '../../components/user/Home/AllAstrologers';
import WhiteContainerStyles from '../../styles/WhiteContainerStyles';

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

const ListOfAstrologers = ({navigation}) => {
  const [searchText, setSearchText] = React.useState('');
  return (
    <UserView>
      <ScrollView>
        <View
          style={{
            flexDirection: 'row',
            gap: responsiveWidth(5),
            alignItems: 'center',
            padding: responsiveWidth(5),
          }}>
          <FontAwesomeIcons
            name="long-arrow-left"
            size={40}
            color={Colors.white}
            onPress={() => navigation.goBack()}
          />
          <View style={styles.searchContainer}>
            <FontAwesomeIcons
              name="search"
              size={20}
              color={Colors.darkBlue2}
            />
            <TextInput
              placeholder="Search Astrologers, Categories"
              placeholderTextColor={Colors.black}
              style={{flex: 1}}
              value={searchText}
              onChangeText={setSearchText}
            />
          </View>
        </View>
        <View style={WhiteContainerStyles.container}>
          <View style={{gap: responsiveWidth(2)}}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: responsiveFontSize(3),
                color: Colors.black,
              }}>
              Search Results
            </Text>
            <View>
              <AllAstrologers></AllAstrologers>
            </View>
          </View>
        </View>
      </ScrollView>
    </UserView>
  );
};

export default ListOfAstrologers;

const SearchedItem = ({title, image}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: responsiveWidth(2),
        borderBottomWidth: responsiveWidth(0.1),
        borderBottomColor: Colors.lightGrey,
      }}>
      <View style={{flexDirection: 'row'}}>
        <Image
          source={image}
          style={{
            width: responsiveWidth(8),
            height: responsiveWidth(8),
            borderRadius: responsiveWidth(5),
          }}
        />
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: responsiveFontSize(2.5),
            color: Colors.black,
            marginLeft: responsiveWidth(2),
          }}>
          {title}
        </Text>
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
