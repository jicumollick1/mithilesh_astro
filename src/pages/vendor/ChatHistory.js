import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import WhiteContainerStyles from '../../styles/WhiteContainerStyles';
import {Colors, Fonts} from '../../constants';
import {Dimensions} from 'react-native';
import fonts from '../../constants/fonts';
import ChatCard from '../../components/vendor/ChatCard';
import ScreenHeader from '../../components/vendor/ScreenHeader';
import VendorView from '../../components/vendor/VendorView';

const {width, height} = Dimensions.get('window');
const ChatHistory = ({navigation, route}) => {
  return (
    <VendorView>
      <ScreenHeader title="Chat History" />

      <View style={WhiteContainerStyles.container}>
        <View style={{gap: responsiveWidth(2)}}>
          <View>
            <Text
              style={{
                fontWeight: 600,
                fontSize: responsiveFontSize(3),
                color: Colors.black,
                lineHeight: 35,
              }}>
              Chat History
            </Text>

            {/* Call Card  */}
            <ChatCard></ChatCard>
            <ChatCard></ChatCard>
            <ChatCard></ChatCard>
            <ChatCard></ChatCard>
            <ChatCard></ChatCard>
          </View>
        </View>
      </View>
    </VendorView>
  );
};

export default ChatHistory;

const styles = StyleSheet.create({
  callCard: {
    width: width * 0.91,
    height: 111,
    backgroundColor: 'rgba(42, 79, 211, 0.6)',
    borderRadius: 10,
    marginVertical: 10,
    padding: 15,
  },
  title: {
    fontFamily: Fonts.ubuntuBold,
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: 16,
    lineHeight: 20,
    letterSpacing: 0.02,
    color: '#FFFFFF',
  },
  description: {
    fontFamily: Fonts.ubuntuRegular,
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.02,
    color: '#FFFFFF',
  },
  bottomContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  time: {
    fontFamily: Fonts.ubuntuBold,
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.02,
    color: '#FFFFFF',
  },
  personsImage: {
    width: 50,
    height: 25,
  },

  // Blue box design
  blueBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: width * 0.91,
    height: 81,
    backgroundColor: '#1C45EB',
    borderRadius: 10,
    marginVertical: 20,
  },
  // greenBox
  greenBox: {
    width: width * 0.85,
    height: height * 0.24,
    backgroundColor: '#44D36C',
    borderRadius: 13,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: width * 0.03,
  },

  boldPrice: {
    fontFamily: fonts.ubuntuBold,
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: 44,
    // lineHeight: 20,
    display: 'flex',
    alignItems: 'center',
    letterSpacing: 0.02,
    color: '#FFFFFF',
  },
  // cardDesign

  card: {
    backgroundColor: Colors.Yellow,
    borderRadius: responsiveWidth(2),
    paddingLeft: responsiveWidth(12),
    paddingRight: responsiveWidth(5),
    paddingVertical: responsiveWidth(4),
    gap: responsiveWidth(1),
  },
  cardImage: {
    height: responsiveWidth(20),
    width: responsiveWidth(20),
    resizeMode: 'contain',
  },
  online: {
    backgroundColor: '#22C55E',
    borderRadius: responsiveWidth(1),
    flexDirection: 'row',
    alignItems: 'center',
    gap: responsiveWidth(1),
    paddingHorizontal: responsiveWidth(2),
    paddingVertical: responsiveWidth(0.5),
  },
  dot: {
    backgroundColor: Colors.white,
    width: responsiveWidth(3),
    height: responsiveWidth(3),
    borderRadius: responsiveWidth(3),
  },
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: responsiveWidth(4.5),
    borderRightWidth: responsiveWidth(4.5),
    borderBottomWidth: responsiveWidth(6),
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: Colors.white,
    transform: [{rotate: '180deg'}],
  },
  pricingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: responsiveWidth(1),
    backgroundColor: Colors.darkBlue2,
    width: responsiveWidth(15),
    height: responsiveWidth(15),
    justifyContent: 'center',
    position: 'absolute',
    right: 0,
    borderBottomLeftRadius: responsiveWidth(50),
    borderTopLeftRadius: responsiveWidth(5),
    borderBottomRightRadius: responsiveWidth(5),
    borderBottomWidth: responsiveWidth(1),
    borderLeftWidth: responsiveWidth(1),
    borderColor: Colors.white,
  },
  btn: {
    backgroundColor: Colors.darkBlue2,
    borderRadius: responsiveWidth(2),
    paddingHorizontal: responsiveWidth(3),
    paddingVertical: responsiveWidth(0.5),
    gap: responsiveWidth(3),
  },
  aboutText: {
    fontFamily: Fonts.ubuntuRegular,
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.005,
    color: '#E9FAFF',
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
});