import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import { Images } from '../constants';

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
          {index === 3 ? (
            <View style={styles.buttonContainer}>
              <Text style={styles.appName}>Bhagya Vakta</Text>
            </View>
          ) : (
            <View style={styles.buttonContainer}>
              <Text style={styles.appName}>Bhagya Vakta</Text>
              <TouchableOpacity
                onPress={() => list.current.scrollToEnd()}
                style={{zIndex: 1}}>
                <Text style={styles.skipText}>Skip</Text>
              </TouchableOpacity>
            </View>
          )}
        

          <Image
            resizeMode="contain"
            style={[styles.image, {marginTop: 140}]}
            source={Images[image]}
          />
        </View>
      </ImageBackground>
      <View style={styles.textContainer}>
        <Text style={styles.titleText}>{title}</Text>
        <Text style={styles.contentText}>{content}</Text>
      </View>
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
    fontSize: 15,
    color: 'red',
    marginBottom: responsiveHeight(2),
    // fontFamily: Fonts.CINZEL_BOLD,
  },
  contentText: {
    fontSize: 13,
    color: 'green',
    // fontFamily: Fonts.LOBSTERTWO_REGULAR,
  },
  textContainer: {
    paddingHorizontal: responsiveWidth(5),
    marginLeft: responsiveWidth(3),
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
    color: 'red',
    // fontFamily: Fonts.CINZEL_REGULAR,
    fontSize: responsiveFontSize(2),
  },
  getStartedText: {
    color: 'blue',
    // fontFamily: Fonts.CINZEL_BOLD,
    fontSize: responsiveFontSize(2.6),
  },
});

export default WelcomeCard;
