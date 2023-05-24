import {View, Text, StyleSheet, TextInput} from 'react-native';
import React from 'react';
// import {UserView} from '../../components';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';
// import {Colors, Images} from '../../constants';
import {
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {Image} from 'react-native';
import {Button} from 'react-native-elements';
import WhiteContainerStyles from '../../styles/WhiteContainerStyles';
import TopNavigator from '../../components/user/TopNavigator';
import {Colors, Fonts, Icons, Images} from '../../constants';
import UserView from '../../components/UserView';
import EvilIconsIcons from 'react-native-vector-icons/EvilIcons';
import FeatherIcons from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import EntypoIcons from 'react-native-vector-icons/Entypo';
import {TouchableOpacity} from 'react-native';
import SuggestedAstrologers from '../../components/user/Home/SuggestedAstrologers';

const AstrologerDetails = ({navigation, route}) => {
  const [active, setActive] = React.useState('');

  const {data} = route.params;
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
    badge,
  } = data;
  console.log(data);
  return (
    <UserView>
      <TopNavigator navigation={navigation} title="Astrologer Details" />
      <View style={[styles.card, {marginHorizontal: 20, marginBottom: 20}]}>
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
      </View>
      <View style={WhiteContainerStyles.container}>
        <View style={{gap: responsiveWidth(2)}}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: responsiveFontSize(3),
              color: Colors.black,
            }}>
            About Astrologer
          </Text>

          <View
            style={{
              backgroundColor: '#1C45EB',
              borderRadius: 5,
              marginVertical: 20,
            }}>
            <Text style={styles.aboutText}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's. Lorem Ipsum is
              simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's{' '}
            </Text>
          </View>

          <View style={{marginBottom: 15}}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: responsiveFontSize(3),
                color: Colors.black,
              }}>
              Specialization
            </Text>
            <View
              style={{
                flexDirection: 'row',
                gap: responsiveWidth(4),
                flexWrap: 'wrap',
                marginVertical: 20,
              }}>
              {/* <Option title="All" active={active} setActive={setActive} /> */}
              <Option title="Vedic" active={active} setActive={setActive} />
              <Option title="Tarot" active={active} setActive={setActive} />
              <Option
                title="Kp Astrology"
                active={active}
                setActive={setActive}
              />
              <Option
                title="Numerology"
                active={active}
                setActive={setActive}
              />
              <Option title="Vasthu" active={active} setActive={setActive} />
              <Option title="Lal Kitab" active={active} setActive={setActive} />
            </View>
          </View>

          <View style={{marginBottom: 15}}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: responsiveFontSize(3),
                color: Colors.black,
              }}>
              Languages Known
            </Text>
            <View
              style={{
                flexDirection: 'row',
                gap: responsiveWidth(4),
                flexWrap: 'wrap',
                marginVertical: 20,
              }}>
              {/* <Option title="All" active={active} setActive={setActive} /> */}
              <Option title="English" active={active} setActive={setActive} />
              <Option title="Hindi" active={active} setActive={setActive} />
              <Option title="Bengali" active={active} setActive={setActive} />
            </View>
          </View>
          <View style={{marginBottom: 15}}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: responsiveFontSize(3),
                color: Colors.black,
              }}>
              Charges of fee
            </Text>
            <View
              style={{
                flexDirection: 'row',
                gap: responsiveWidth(4),
                flexWrap: 'wrap',
                marginVertical: 20,
              }}>
              {/* <Option title="All" active={active} setActive={setActive} /> */}
              <Option
                title={`₹  ${price} / min`}
                active={active}
                setActive={setActive}
              />
            </View>
          </View>
          <View style={{marginBottom: 15}}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: responsiveFontSize(3),
                color: Colors.black,
              }}>
              Astrologer Badge
            </Text>
            <View
              style={{
                flexDirection: 'row',
                gap: responsiveWidth(4),
                flexWrap: 'wrap',
                marginVertical: 20,
              }}>
              {/* <Option title="All" active={active} setActive={setActive} /> */}
              <Option
                title={` ${badge} Astrologer`}
                active={active}
                setActive={setActive}
              />
            </View>
          </View>
          {/* call and chat button  */}
          <View style={{marginBottom: 15}}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <TouchableOpacity
                style={{
                  backgroundColor: '#2A4FD3',
                  borderRadius: 9.6373,
                  width: 160,
                  height: 33,
                }}>
                <Text
                  style={{
                    textAlign: 'center',
                    alignItems: 'center',
                    color: '#fff',
                    fontWeight: 600,
                    paddingTop: 8,
                  }}>
                  {' '}
                  <FeatherIcons
                    name="phone-call"
                    size={responsiveWidth(4)}
                    color={Colors.white}
                  />
                  {'   '}
                  Call Astrologer
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: '#2A4FD3',
                  borderRadius: 9.6373,
                  width: 160,
                  height: 33,
                }}>
                <Text
                  style={{
                    textAlign: 'center',
                    alignItems: 'center',
                    color: '#fff',
                    fontWeight: 600,
                    paddingTop: 8,
                  }}>
                  {' '}
                  <FeatherIcons
                    name="message-square"
                    size={responsiveWidth(4)}
                    color={Colors.white}
                  />
                  {'   '}
                  Chat Astrologer
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={{marginBottom: 15}}>
            <SuggestedAstrologers></SuggestedAstrologers>
          </View>
        </View>
      </View>
    </UserView>
  );
};

export default AstrologerDetails;

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

const styles = StyleSheet.create({
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
