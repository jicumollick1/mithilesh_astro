import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {Colors, Icons} from '../../../constants';
import {Button, Image} from 'react-native-elements';
import EntypoIcons from 'react-native-vector-icons/Entypo';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';
import EvilIconsIcons from 'react-native-vector-icons/EvilIcons';
import FeatherIcons from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {TouchableOpacity} from 'react-native';
const AstrologerCard = ({data, navigateTo, navigation}) => {
  const {
    name,
    image,
    type,
    rating,
    price,
    reviews,
    experience,
    speciality,
    language,
    status,
  } = data;
  //   const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate(navigateTo, {data})}>
      <View style={{position: 'absolute', left: 8, alignItems: 'center'}}>
        <Text
          style={{
            backgroundColor: Colors.darkBlue2,
            color: Colors.white,
            fontSize: responsiveFontSize(1.8),
            padding: responsiveWidth(1.5),
            fontWeight: 'bold',
          }}>
          {rating}
        </Text>
        <View style={styles.triangle}></View>
        <EntypoIcons
          name="star"
          size={responsiveWidth(3.5)}
          style={{position: 'absolute', bottom: responsiveWidth(2.2)}}
          color={'#FFBF41'}
        />
      </View>
      <View style={styles.pricingContainer}>
        <FontAwesomeIcons
          name="rupee"
          size={responsiveWidth(3.5)}
          color={Colors.Yellow}
        />
        <Text style={{color: Colors.white, fontWeight: 'bold'}}>{price}</Text>
      </View>
      <View style={{flexDirection: 'row', gap: responsiveWidth(3)}}>
        <Image source={image} style={styles.cardImage} />
        <View style={{justifyContent: 'space-between'}}>
          <Text
            style={{
              color: Colors.black,
              fontSize: responsiveFontSize(2.2),
              fontWeight: 'bold',
            }}>
            {name}
          </Text>
          <Text
            style={{
              color: Colors.black,
              fontSize: responsiveFontSize(2),
              fontWeight: 500,
            }}>
            {type}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: responsiveWidth(1),
            }}>
            <View style={styles.online}>
              <View
                style={[styles.dot, {backgroundColor: Colors.white}]}></View>
              <Text style={{color: Colors.white}}>{status}</Text>
            </View>
            <Text
              style={{
                color: Colors.black,
                fontSize: responsiveFontSize(1.5),
                fontWeight: 500,
              }}>
              {reviews} Reviews
            </Text>
            <Text
              style={{
                color: Colors.black,
                fontSize: responsiveFontSize(1.5),
                fontWeight: 500,
              }}>
              |
            </Text>
            <Text
              style={{
                color: Colors.black,
                fontSize: responsiveFontSize(1.5),
                fontWeight: 500,
              }}>
              Exp : {experience} Yrs
            </Text>
          </View>
        </View>
      </View>
      <View style={{gap: responsiveWidth(3)}}>
        <View
          style={{
            flexDirection: 'row',
            gap: responsiveWidth(2),
            alignItems: 'center',
          }}>
          <EvilIconsIcons
            name="star"
            size={responsiveWidth(5)}
            color={Colors.black}
          />
          <Text
            style={{
              color: Colors.black,
              fontSize: responsiveFontSize(1.5),
              fontWeight: 500,
            }}>
            {speciality}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            gap: responsiveWidth(4),
            alignItems: 'center',
          }}>
          <Image
            source={Icons.language}
            style={{
              height: responsiveWidth(4),
              width: responsiveWidth(4),
              resizeMode: 'contain',
            }}
          />
          <Text
            style={{
              color: Colors.black,
              fontSize: responsiveFontSize(1.5),
              fontWeight: 500,
            }}>
            {language}
          </Text>
        </View>
        <View style={{flexDirection: 'row', gap: responsiveWidth(3)}}>
          <Button
            title="Chat"
            buttonStyle={styles.btn}
            icon={
              <FeatherIcons
                name="phone-call"
                size={responsiveWidth(4)}
                color={Colors.white}
              />
            }
          />
          <Button
            title="Call"
            buttonStyle={styles.btn}
            icon={
              <MaterialIcons
                name="chat-bubble-outline"
                size={responsiveWidth(4)}
                color={Colors.white}
              />
            }
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default AstrologerCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.Yellow,
    borderRadius: responsiveWidth(1),
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
});
