import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';
import {
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {Image} from 'react-native';
import {Button} from 'react-native-elements';
import WhiteContainerStyles from '../../styles/WhiteContainerStyles';
import {Colors, Fonts, Icons} from '../../constants';
import EvilIconsIcons from 'react-native-vector-icons/EvilIcons';
import EntypoIcons from 'react-native-vector-icons/Entypo';
import {TouchableOpacity} from 'react-native';
import VendorView from '../../components/vendor/VendorView';
import ScreenHeader from '../../components/vendor/ScreenHeader';
import {SafeAreaView} from 'react-native';
import FocusStatusBar from '../../components/FocusStatusBar';
import Separator from '../../components/Separator';

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
    <VendorView>
      <SafeAreaView />
      <FocusStatusBar
        barStyle={'light-content'}
        backgroundColor={Colors.primary}
        translucent
      />
      <ScreenHeader title="About" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[styles.card, {marginHorizontal: 20, marginBottom: 20,marginTop:responsiveFontSize(2)}]}>
          <View style={{position: 'absolute', left: 8, alignItems: 'center'}}>
            <Text
              style={{
                backgroundColor: Colors.primary,
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
              color={Colors.lightYellow}
            />
          </View>
          <View style={styles.pricingContainer}>
            <FontAwesomeIcons
              name="rupee"
              size={responsiveWidth(3.5)}
              color={Colors.white}
            />
            <Text style={{color: Colors.white, fontWeight: 'bold'}}>
              {price}
            </Text>
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
                    style={[
                      styles.dot,
                      {backgroundColor: Colors.white},
                    ]}></View>
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
          </View>
        </View>
        <View
          style={[
            WhiteContainerStyles.container,
            {backgroundColor: Colors.secondary},
          ]}>
          <View style={{gap: responsiveWidth(2)}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: responsiveFontSize(2.5),
                  color: Colors.black,
                }}>
                About Astrologer
              </Text>
              <Image
                source={Icons.vEditBlack}
                style={{
                  width: responsiveWidth(7),
                  height: responsiveWidth(7),
                  resizeMode: 'contain',
                }}
              />
            </View>

            <View
              style={{
                backgroundColor: Colors.primary,
                borderRadius: 5,
                marginVertical: 20,
              }}>
              <Text style={styles.aboutText}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's. Lorem Ipsum is
                simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's{' '}
              </Text>
            </View>

            <View style={{marginBottom: 15}}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: responsiveFontSize(2.5),
                    color: Colors.black,
                  }}>
                  Specialization
                </Text>
                <Image
                  source={Icons.vEditBlack}
                  style={{
                    width: responsiveWidth(7),
                    height: responsiveWidth(7),
                    resizeMode: 'contain',
                  }}
                />
              </View>

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
                <Option
                  title="Lal Kitab"
                  active={active}
                  setActive={setActive}
                />
              </View>
            </View>

            <View style={{marginBottom: 15}}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: responsiveFontSize(2.5),
                    color: Colors.black,
                  }}>
                  Languages Known
                </Text>

                <Image
                  source={Icons.vEditBlack}
                  style={{
                    width: responsiveWidth(7),
                    height: responsiveWidth(7),
                    resizeMode: 'contain',
                  }}
                />
              </View>

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
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: responsiveFontSize(2.5),
                    color: Colors.black,
                  }}>
                  Charges of fee
                </Text>

                <Image
                  source={Icons.vEditBlack}
                  style={{
                    width: responsiveWidth(7),
                    height: responsiveWidth(7),
                    resizeMode: 'contain',
                  }}
                />
              </View>

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
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: responsiveFontSize(2.5),
                    color: Colors.black,
                  }}>
                  Experience
                </Text>

                <Image
                  source={Icons.vEditBlack}
                  style={{
                    width: responsiveWidth(7),
                    height: responsiveWidth(7),
                    resizeMode: 'contain',
                  }}
                />
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  gap: responsiveWidth(4),
                  flexWrap: 'wrap',
                  marginVertical: 20,
                }}>
                <Option
                  title={`5 years`}
                  active={active}
                  setActive={setActive}
                />
              </View>

            </View>
              <Button
              titleStyle={{
                fontFamily:Fonts.ubuntuRegular,
                fontSize:responsiveFontSize(2.3)
              }}
                title={'Save Changes'}                
                buttonStyle={{
                  backgroundColor: Colors.primary,
                  borderRadius: responsiveWidth(2),
                  paddingVertical:responsiveWidth(3)
                }}
              />
              <Separator height={responsiveWidth(10)}/>
          </View>
        </View>
      </ScrollView>
    </VendorView>
  );
};

export default AstrologerDetails;

const Option = ({title, active, setActive}) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: active === title ? Colors.primary : Colors.lightRed1,
        paddingHorizontal: responsiveWidth(3),
        paddingVertical: responsiveWidth(1),
        borderRadius: responsiveWidth(5),
      }}
      onPress={() => setActive(title)}>
      <Text
        style={{
          color: active === title ? Colors.white : Colors.black,
          fontFamily: Fonts.ubuntuRegular,
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
    backgroundColor: Colors.white,
    borderRadius: responsiveWidth(2),
    paddingLeft: responsiveWidth(12),
    paddingRight: responsiveWidth(5),
    paddingVertical: responsiveWidth(4),
    gap: responsiveWidth(1),
  },
  cardImage: {
    height: responsiveWidth(15),
    width: responsiveWidth(15),
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
    borderBottomColor: Colors.primary,
    transform: [{rotate: '180deg'}],
  },
  pricingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: responsiveWidth(1),
    backgroundColor: Colors.primary,
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
