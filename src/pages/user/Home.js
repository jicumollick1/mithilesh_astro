import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import { Button } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import { responsiveFontSize, responsiveWidth } from 'react-native-responsive-dimensions';
import { Colors, Images } from '../../constants';
import { UserView } from '../../components';
import TopNavigationBar from '../../components/user/Home/TopNavigationBar';
import BookSlotBanner from '../../components/user/Home/BookSlotBanner';
import Categories from '../../components/user/Home/Categories';
import SuggestedAstrologers from '../../components/user/Home/SuggestedAstrologers';
import LiveAstrologers from '../../components/user/Home/LiveAstrologers';
import ConsultBanner from '../../components/user/Home/ConsultBanner';
import AllAstrologers from '../../components/user/Home/AllAstrologers';
import RecommendedCategories from '../../components/user/Home/RecommendedCategories';
import MatchMakingBanner from '../../components/user/Home/MatchMakingBanner';
import WhiteContainerStyles from '../../styles/WhiteContainerStyles';
import Octicons from 'react-native-vector-icons/Octicons';

const Home = ({navigation}) => {
  return (
    <UserView>
      <ScrollView>
        <View style={{flex: 1, gap: responsiveWidth(10), paddingVertical: responsiveWidth(5)}}>
          {/* navbar */}
          <TopNavigationBar />
          {/* banner */}
          <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: responsiveWidth(4)}}>
            <View style={{gap: responsiveWidth(3)}}>
              <Text style={{color: '#fff', fontWeight: 'bold', fontSize: responsiveFontSize(3)}}>Hi, Vijay!</Text>
              <Text style={{color: '#fff', fontWeight: 'bold', fontSize: responsiveFontSize(2)}}>Please fill your profile{'\n'}details for better connect.</Text>
              <Button title="Go to Profile" buttonStyle={{backgroundColor: '#2A4FD3', borderRadius: responsiveWidth(2), width: responsiveWidth(30), padding: responsiveWidth(1)}} />
            </View>
            <Image source={Images.HomeProfileAvatar} style={styles.homeAvatarImage} />
          </View>

          <View style={[WhiteContainerStyles.container, {gap: responsiveWidth(8), paddingVertical: responsiveWidth(3)}]}>
            <Octicons name={'horizontal-rule'} size={responsiveFontSize(4)} style={{alignSelf: 'center', position: 'absolute'}} color={Colors.darkBlue2} />
            <BookSlotBanner />
            <Categories />
            <SuggestedAstrologers />
            <LiveAstrologers />
            <ConsultBanner />
            <AllAstrologers />
            <RecommendedCategories />
            <MatchMakingBanner />
          </View>
        </View>
      </ScrollView>
    </UserView>
  );
};

export default Home;

const styles = StyleSheet.create({
  homeAvatarImage: {
    height: responsiveWidth(40),
    width: responsiveWidth(40),
    resizeMode: 'contain',
  },
});