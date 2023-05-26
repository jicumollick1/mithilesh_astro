import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import WhiteContainerStyles from '../../styles/WhiteContainerStyles';
import TopNavigator from '../../components/admin/TopNavigator';
import {Colors, Fonts, Icons} from '../../constants';
import {Dimensions} from 'react-native';
import fonts from '../../constants/fonts';
import CallCard from '../../components/admin/CallCard';
import AdminView from '../../components/AdminView';
import FeatherIcons from 'react-native-vector-icons/Feather';

const {width, height} = Dimensions.get('window');
const CallHistory = ({navigation, route}) => {
  const [searchText, setSearchText] = useState('');

  const [selectedOption, setSelectedOption] = useState('Select an option');
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleOptionSelect = option => {
    setSelectedOption(option);
    setDropdownVisible(false);
  };

  return (
    <AdminView>
      <TopNavigator navigation={navigation} title="Call History" />
      <ScrollView>
        <View style={WhiteContainerStyles.container}>
          <View style={{gap: responsiveWidth(2)}}>
            <View style={styles.searchContainer}>
              <FeatherIcons name="search" size={20} color={'#fff'} />
              <TextInput
                placeholder="Search Call History"
                placeholderTextColor={'#fff'}
                style={{flex: 1, color: '#fff'}}
                value={searchText}
                onChangeText={setSearchText}
              />
            </View>

            {/* dropdown  */}
            <View style={styles.container}>
              <TouchableOpacity style={styles.button} onPress={toggleDropdown}>
                <Text style={styles.buttonText}>{selectedOption}</Text>
              </TouchableOpacity>
              {dropdownVisible && (
                <View style={styles.dropdown}>
                  <TouchableOpacity
                    style={styles.option}
                    onPress={() => handleOptionSelect('Daily')}>
                    <Text style={styles.optionText}>Daily</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.option}
                    onPress={() => handleOptionSelect('Weekly')}>
                    <Text style={styles.optionText}>Weekly</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.option}
                    onPress={() => handleOptionSelect('Monthly')}>
                    <Text style={styles.optionText}>Monthly</Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>
            <View>
              <Text
                style={{
                  fontWeight: 600,
                  fontSize: responsiveFontSize(3),
                  color: Colors.black,
                  lineHeight: 35,
                }}>
                Call History
              </Text>

              {/* Call Card  */}

              <CallCard />
              <CallCard />
              <CallCard />
              <CallCard />
              <CallCard />
            </View>
          </View>
        </View>
      </ScrollView>
    </AdminView>
  );
};

export default CallHistory;

const styles = StyleSheet.create({
  // call card design

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

  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#5FA5F7',
    paddingHorizontal: responsiveWidth(3),
    borderRadius: responsiveWidth(50),
    gap: responsiveWidth(2),
    flex: 1,
  },
});
