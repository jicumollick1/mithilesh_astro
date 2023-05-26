import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {
  responsiveFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {Colors} from '../../constants';
import WhiteContainerStyles from '../../styles/WhiteContainerStyles';
import Octicons from 'react-native-vector-icons/Octicons';
import FocusStatusBar from '../../components/FocusStatusBar';
import {
  AvilableBalance,
  Categories,
  ChatCallHistory,
  HomeHeader,
} from '../../components/vendor/Home';
import colors from '../../constants/colors';
import Separator from '../../components/Separator';


const Home = ({navigation}) => {
  return (
    <View style={{backgroundColor: Colors.primary}}>
      <SafeAreaView />
      <FocusStatusBar
        barStyle={'light-content'}
        backgroundColor={Colors.primary}
        translucent
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            gap: responsiveWidth(10),
            paddingVertical: responsiveWidth(5),
          }}>
          {/* navbar */}
          <HomeHeader />
          <View
            style={[
              WhiteContainerStyles.container,
              {
                gap: responsiveWidth(3),
                paddingVertical: responsiveWidth(3),
                backgroundColor: colors.secondary,
              },
            ]}>
            <Pointer/>
            <Separator height={responsiveWidth(2)} />

            <AvilableBalance />
            <Separator height={responsiveWidth(4)} />
            <Categories />
            <Separator height={responsiveWidth(4)} />
            <ChatCallHistory />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

function Pointer() {
    return (
      <View
        style={{
          backgroundColor: Colors.primary,          
          width: responsiveWidth(12),
          alignItems: 'center',
          justifyContent: 'center',
          height: responsiveWidth(2.2),
          alignSelf: 'center',
          marginTop:responsiveWidth(-2)
        }}>
        <View
          style={{
            width: responsiveWidth(8),
            height: responsiveWidth(0.6),
            backgroundColor: Colors.white,
          }}/>
      </View>
    );
  }

export default Home;

const styles = StyleSheet.create({
  homeAvatarImage: {
    height: responsiveWidth(40),
    width: responsiveWidth(40),
    resizeMode: 'contain',
  },
});
