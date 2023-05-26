import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
const {width, height} = Dimensions.get('window');
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {Fonts, Images} from '../constants';

const WelcomeCard = ({title, content, image, backgroundColor, index, list}) => {
  return (
    <View style={[styles.container, {backgroundColor: backgroundColor}]}>
      <ImageBackground
        style={{
          width: responsiveWidth(100),
          flexWrap: 'wrap',
          height: responsiveHeight(73),
          alignItems: 'center',
          paddingLeft: 0,
          paddingVertical: 20,
        }}
        resizeMode="stretch">
        <View>
          {index === 4 || index === 0 ? (
            <View style={styles.buttonContainer}>
              {/* <Text style={styles.appName}>Bhagya Vakta</Text> */}
            </View>
          ) : (
            <View style={styles.buttonContainer}>
              {/* <Text style={styles.appName}>Bhagya Vakta</Text> */}
              <TouchableOpacity
                onPress={() => list.current.scrollToEnd()}
                style={{
                  zIndex: 1,
                  marginTop: responsiveWidth(5),
                  position: 'absolute',
                  right: 30,
                  top: 30,
                }}>
                <Text style={styles.skipText}>Skip</Text>
              </TouchableOpacity>
            </View>
          )}

          {index === 0 ? (
            <View>
              <Text style={styles.splashText}>Splash Screen</Text>
            </View>
          ) : (
            <>
              <Image
                resizeMode="contain"
                style={[styles.image, {marginTop: 140}]}
                source={Images[image]}
              />
            </>
          )}
        </View>
      </ImageBackground>

      {index === 0 ? (
        <></>
      ) : (
        <>
          <View style={styles.textContainer}>
            <Text style={styles.titleText}>{title}</Text>
            <Text style={styles.contentText}>{content}</Text>
          </View>
          <View style={styles.indicatorContainer}>
            {index === 1 ? (
              <>
                <Text style={styles.indicator1}></Text>
                <Text style={styles.indicator2}></Text>
                <Text style={styles.indicator3}></Text>
              </>
            ) : (
              <></>
            )}
            {index === 2 ? (
              <>
                <Text style={styles.indicator2}></Text>
                <Text style={styles.indicator1}></Text>
                <Text style={styles.indicator3}></Text>
              </>
            ) : (
              <></>
            )}
            {index === 3 ? (
              <>
                <Text style={styles.indicator2}></Text>
                <Text style={styles.indicator3}></Text>
                <Text style={styles.indicator1}></Text>
              </>
            ) : (
              <></>
            )}
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: responsiveWidth(100),
  },
  image: {
    height: responsiveHeight(40),
    width: responsiveWidth(100),
    resizeMode: 'contain',
  },
  titleText: {
    marginBottom: responsiveHeight(1),
    marginTop: height * 0.02,
    fontFamily: Fonts.ubuntuBold,
    fontWeight: 700,
    fontSize: 24,
    lineHeight: 30,
    /* identical to box height, or 125% */
    textAlign: 'center',
    letterSpacing: 0.01,
    color: '#FFFC48',
  },
  contentText: {
    // fontFamily: Fonts.LOBSTERTWO_REGULAR,
    fontFamily: Fonts.ubuntuRegular,
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 20,
    /* or 143% */

    textAlign: 'center',
    letterSpacing: 0.02,
    color: '#FFFFFF',
  },
  textContainer: {
    paddingHorizontal: responsiveWidth(5),
    marginLeft: responsiveWidth(5),
    backgroundColor: '#2A4FD3',
    borderRadius: 16,
    width: width * 0.9,
    height: height * 0.15,
    // justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: responsiveWidth(5),
  },
  buttonText: {
    fontSize: responsiveFontSize(2.2),
    color: 'blue',
    // fontFamily: Fonts.POPPINS_BOLD,
  },
  appName: {
    color: 'yellow',
    // fontFamily: Fonts.CINZEL_BOLD,
    fontSize: responsiveFontSize(2.2),
  },
  skipText: {
    color: '#fff',
    // fontFamily: Fonts.CINZEL_REGULAR,
    fontSize: responsiveFontSize(2),
  },
  getStartedText: {
    color: 'blue',
    // fontFamily: Fonts.CINZEL_BOLD,
    fontSize: responsiveFontSize(2.6),
  },
  indicatorContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    // alignItems: 'center',
    marginTop: 12,
  },
  indicator1: {
    width: 63,
    height: 8,
    backgroundColor: '#2A4FD3',
    borderRadius: 1,
    marginHorizontal: 5,
  },
  indicator2: {
    width: 10,
    height: 8,
    backgroundColor: '#FFF',
    borderRadius: 1,
    marginHorizontal: 5,
  },
  indicator3: {
    width: 10,
    height: 8,
    backgroundColor: '#FFF',
    borderRadius: 1,
  },

  splashText: {
    position: 'absolute',
    top: height * 0.5,
    left: width * 0.3,
    width: 160,
    fontFamily: Fonts.ubuntuBold,
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: 24,
    lineHeight: 30,
    textAlign: 'center',
    letterSpacing: 0.01,
    color: '#FFFFFF',
  },
});

export default WelcomeCard;
