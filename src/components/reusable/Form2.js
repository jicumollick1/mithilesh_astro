import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Button,
  Dimensions,
  Alert,
  Image,
} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

// birthplace

import Modal from 'react-native-modal';
import {Autocomplete} from 'react-native-dropdown-autocomplete';
import {encode as btoa} from 'base-64';
import axios from 'axios';
import Geolocation from 'react-native-geolocation-service';
import {check, request, PERMISSIONS, RESULTS} from 'react-native-permissions';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/EvilIcons';
import {useNavigation} from '@react-navigation/native';
import {Fonts} from '../../constants';
const {width, height} = Dimensions.get('window');
export default function Form2({kundli, numerology, jamini, matchMaking}) {


  const navigation = useNavigation();
  // birthplace
  const countries = require('./country.json');

  const userId = '615266';
  const apiKey = '86c73e5bdf3f9df0dba70d35d641caf3';
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [lat, setLat] = useState('');
  const [lon, setLon] = useState('');
  const [place, setPlace] = useState('');
  const [country, setCountry] = useState('India');
  const [countryText, setCountryText] = useState('India');
  const [visible, setVisible] = useState(false);
  const [tabOption, setTabOption] = useState(1);
  const [pob, setPob] = useState('');
  const [currentPlace, setCurrentPlace] = useState('');
  const [timeZone, setTimeZone] = useState('5.5');
  const [body, setBody] = useState({lat: null, lon: null, place: null});
  const [date, setDate] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [hour, setHour] = useState('');
  const [min, setMin] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [data, setData] = useState({});
  // const [time, setTime] = useState('AM');
  // const [checked, setChecked] = React.useState(false);
  // const [gender, setGender] = useState(null);
  // const [isFocus, setIsFocus] = useState(false);
  // const [name, setName] = useState('');

  useEffect(() => {
    console.log('selectedDate', selectedDate);
    check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION).then(result => {
      switch (result) {
        case RESULTS.UNAVAILABLE:
          console.log(
            'This feature is not available (on this device / in this context)',
          );
          Alert.alert(
            'App',
            'We could not retrieve your location information. Please try to use manual coordinates for panchangam.',
          );
          break;
        case RESULTS.DENIED:
          console.log(
            'The permission has not been requested / is denied but requestable',
          );
          locationRequest();
          break;
        case RESULTS.LIMITED:
          console.log('The permission is limited: some actions are possible');
          break;
        case RESULTS.GRANTED:
          console.log('The permission is granted');
          getLocation();
          break;
        case RESULTS.BLOCKED:
          console.log('The permission is denied and not requestable anymore');
          Alert.alert(
            'App',
            'Location permission is turned off. Please turn on the permission in settings or use the manual coordinates for panchangam.',
          );
          break;
      }
    });
  }, [selectedDate]);

  const locationRequest = () => {
    request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION).then(result => {
      switch (result) {
        case RESULTS.UNAVAILABLE:
          console.log(
            'This feature is not available (on this device / in this context)',
          );
          break;
        case RESULTS.DENIED:
          console.log(
            'The permission has not been requested / is denied but requestable',
          );
          break;
        case RESULTS.LIMITED:
          console.log('The permission is limited: some actions are possible');
          break;
        case RESULTS.GRANTED:
          console.log('The permission is granted');
          this.getLocation();
          break;
        case RESULTS.BLOCKED:
          console.log('The permission is denied and not requestable anymore');
          break;
      }
    });
  };

  const handleModalSubmit = () => {
    setVisible(false);
    setTabOption(2);
    setCurrentPlace(place);
    if (lat || lon || place) {
      setBody({lat: lat, lon: lon});
    }
    // this.fetchTimeZone();
  };

  const handleCountrySelect = item => {
    console.log('country', item);
    setCountry(item);
  };

  const handleSelectItem = (item, id) => {
    setPlace(item.place);
    setCountry(item.country);
    setLat(item.latitude);
    setLon(item.longitude);
    console.log(item.place, item.latitude, item.longitude, item.country);
  };

  const fetchAddress = (latitude, longitude) => {
    fetch(
      'https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=' +
        latitude +
        '&longitude=' +
        longitude +
        '&localityLanguage=en',
    )
      .then(response => response.json())
      .then(responseJson => {
        let city = responseJson.city != '' ? ', ' + responseJson.city : '';
        let place = responseJson.locality + city;
        setPlace(place);
        setCurrentPlace(place);
        // console.log('lat lon', latitude, longitude, responseJson);
      });
  };

  const getLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        setLat(position.coords.latitude + '');
        setLon(position.coords.longitude + '');
        setBody({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
        fetchAddress(position.coords.latitude, position.coords.longitude);
      },
      error => {
        // See error code charts below.
        console.log(error.code, error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  };

  const locationModal = () => {
    // console.log('loc',lat,lon);
    return (
      <Modal
        avoidKeyboard={true}
        onBackdropPress={() => setVisible(false)}
        isVisible={visible}
        hideModalContentWhileAnimating={true}
        animationOutTiming={200}
        useNativeDriver={true}>
        <View
          style={{
            width: width * (90 / 100),
            height: width * 1.2,
            backgroundColor: '#111',
            borderRadius: 10,
            alignSelf: 'center',
          }}>
          <View
            style={{
              marginVertical: 15,
              height: 50,
              backgroundColor: '#fff',
              zIndex: 99,
            }}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <View
                style={{
                  flex: 1,
                  height: 50,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#2A4FD3',
                }}>
                <Text
                  style={{
                    color: '#FFF',
                    fontWeight: 'bold',
                  }}>
                  SEARCH CITY
                </Text>
              </View>
            </View>
          </View>

          <View style={{flex: 1, marginLeft: 0, marginTop: 10}}>
            <View
              style={[
                {
                  width: '100%',
                  marginTop: 10,
                  alignItems: 'stretch',
                  paddingHorizontal: 20,
                },
              ]}>
              <Autocomplete
                ref={ref => (countryref = ref)}
                inputStyle={{
                  borderColor: '#2A4FD3',
                  borderWidth: place == '' ? 0.5 : 1.5,
                  paddingLeft: 10,
                  fontSize: 15,
                  height: 50,
                  width: '100%',
                  color: '#fff',
                }}
                style={[styles.input, {borderColor: 'green'}]}
                pickerStyle={{marginLeft: -45, width: '100%'}}
                separatorStyle={{backgroundColor: 'green'}}
                scrollStyle={{borderColor: 'green'}}
                highLightColor={'green'}
                containerStyle={{borderColor: 'green', zIndex: 999}}
                placeholder={'Country (Select from the list) *'}
                placeholderColor={'#fff'}
                initialValue={countryText}
                minimumCharactersCount={1}
                // containerStyle={{backgroundColor: 'yellow', alignSelf: 'flex-start'}}
                // pickerStyle={{marginLeft: -45, width: '100%'}}
                highlightText
                valueExtractor={item => item}
                onChangeText={text => {
                  setCountryText(text);
                  text == '' ? countryref.handleBlur() : null;
                }}
                handleSelectItem={item => {
                  handleCountrySelect(item);
                }}
                data={countries}
              />
              <TouchableOpacity
                style={{position: 'absolute', right: 25, top: 20}}
                onPress={() => {
                  // setPlace('')
                  // setPob('')
                  setCountry('');
                  // setLat('')
                  // setLon('')
                  countryref.clearInput();
                  // this.forceUpdate();
                }}>
                <Icon name={'close'} size={25} color={'#000'} />
              </TouchableOpacity>
            </View>
            {country != '' ? (
              <View
                style={[
                  {
                    width: '100%',
                    marginTop: 10,
                    alignItems: 'stretch',
                    paddingHorizontal: 20,
                  },
                ]}>
                <Autocomplete
                  ref={ref => (autoref = ref)}
                  inputStyle={{
                    borderColor: '#2A4FD3',
                    borderWidth: place == '' ? 0.5 : 1.5,
                    paddingLeft: 10,
                    fontSize: 15,
                    height: 50,
                    width: '100%',
                    color: '#fff',
                  }}
                  style={[styles.input, {borderColor: 'green'}]}
                  pickerStyle={{marginLeft: -45, width: '100%'}}
                  separatorStyle={{backgroundColor: 'green'}}
                  scrollStyle={{borderColor: 'green'}}
                  highLightColor={'green'}
                  containerStyle={{borderColor: 'green', zIndex: 999}}
                  // pickerStyle={{marginLeft: -45, width: '100%'}}
                  placeholder={'Place of Birth (Select from the list)'}
                  placeholderColor={'#8e8e8e'}
                  initialValue={place}
                  minimumCharactersCount={3}
                  highlightText
                  valueExtractor={item => item.place}
                  rightContent
                  rightTextExtractor={item => item.country}
                  onChangeText={text => {
                    setPob(text);
                    text == '' ? autoref.handleBlur() : null;
                  }}
                  handleSelectItem={(item, id) => {
                    handleSelectItem(item, id);
                  }}
                  fetchData={async searchTerm => {
                    console.log(searchTerm);
                    setPlace(searchTerm);
                    setPob(searchTerm);
                    var reqData = {};
                    reqData['country'] = country;
                    reqData['name'] = searchTerm;
                    const headers = {
                      'Content-Type': 'application/json',
                      Authorization: 'Basic ' + btoa(userId + ':' + apiKey),
                    };
                    let response = await axios
                      .post(
                        'https://geo.astrologyapi.com/places/',
                        JSON.stringify(reqData),
                        {
                          headers: headers,
                        },
                      )
                      .then(response => {
                        console.log('search response', response);
                        return response.data;
                      })
                      .catch(error => {
                        console.log(error);
                        return [];
                      });
                    console.log('ST', response);
                    return await response;
                  }}
                />
                <TouchableOpacity
                  style={{position: 'absolute', right: 25, top: 20}}
                  onPress={() => {
                    // setPlace('');
                    // setPob('')
                    // setLat('')
                    // setLon('')
                    autoref.clearInput();
                    // this.forceUpdate();
                  }}>
                  <Icon name={'close'} size={25} color={'#000'} />
                </TouchableOpacity>
              </View>
            ) : null}
            <TouchableOpacity
              onPress={() => handleModalSubmit()}
              style={{
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'center',
                backgroundColor: '#2A4FD3',
                height: 50,
                borderRadius: 5,
                marginHorizontal: 40,
                zIndex: 888,
                marginTop: 5,
              }}>
              <Text style={{color: '#FFF', fontSize: 14, fontWeight: '500'}}>
                PROCEED
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  };

  const [text, setText] = useState('');
  const [selectedGender, setSelectedGender] = useState(null);

  const [birthdate, setBirthdate] = useState('');
  const [time, setTime] = useState('');
  // const [place, setPlace] = useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  const handleGenderSelect = gender => {
    setSelectedGender(gender);
  };

  const handleDateConfirm = date => {
    setBirthdate(date.toLocaleDateString());
    setDatePickerVisibility(false);
  };

  const handleTimeConfirm = date => {
    setTime(date.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'}));
    setTimePickerVisibility(false);
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const handleSubmit = () => {
    const birthDate = birthdate.split('/');
    const time1 = time.split(':');

    // Validate input before setting state
    if (birthDate.length !== 3 || time1.length !== 2) {
      // Handle invalid input error
      return;
    }

    // Use ES6 shorthand property syntax to create data object
    const data = {
      day: birthDate[0],
      month: birthDate[1],
      year: birthDate[2],
      hour: time1[0],
      min: time1[1]?.slice(0, 2),
      lat,
      lon,
      tzone: timeZone,
    };

    setData(data);
    console.log(data);

    // Consolidate state updates
    setDate(birthDate[0]);
    setMonth(birthDate[1]);
    setYear(birthDate[2]);
    setHour(time1[0]);
    setMin(time1[1]?.slice(0, 2));
    setFormSubmitted(true);
  };

  useEffect(() => {
    if (formSubmitted) {
      // setText('');
      // setSelectedGender(null);
      // setBirthdate('');
      // setTime('');
      // setDate('');
      // setMonth('');
      // setYear('');
      // setHour('');
      // setMin('');
      setFormSubmitted(false);
      navigation.navigate('HoroscopeCharts', {data: data});
    }
  }, [formSubmitted]);

  return (
    <>
      <View style={{marginBottom: 20}}>
        <Text style={[{marginBottom: 10}, styles.inputLabel]}>Age</Text>
        <TextInput
          style={styles.nameInput}
          onChangeText={setText}
          value={text}
          placeholder={'Enter Your Age'}
          placeholderTextColor={'#25262B'}
        />
      </View>

      <View style={styles.container}>
        <View style={{marginBottom: 20}}>
          <Text style={[{marginBottom: 10}, styles.inputLabel]}>
            Date of Birth:
          </Text>
          <Text
            style={{
              borderColor: '#2A4FD3',
              borderWidth: 1,
              borderRadius: 5,
              height: 40,
              color: '#25262B',
              paddingTop: 10,
              paddingHorizontal: 10,
            }}
            onPress={showDatePicker}>
            {' '}
            {birthdate || 'Select Birthdate'}{' '}
          </Text>
        </View>
        {numerology || (
          <>
            <View style={{marginBottom: 20}}>
              <Text style={[{marginBottom: 10}, styles.inputLabel]}>
                Time of Birth:
              </Text>
              <Text
                style={{
                  borderColor: '#2A4FD3',
                  borderWidth: 1,
                  borderRadius: 5,
                  height: 40,
                  color: '#25262B',
                  paddingTop: 10,
                  paddingHorizontal: 10,
                }}
                onPress={showTimePicker}>
                {' '}
                {time || 'Select Time'}
              </Text>
            </View>

            <Text style={[{marginBottom: 10}, styles.inputLabel]}>
              Place of Birth:
            </Text>
            <View
              style={{
                borderColor: '#2A4FD3',
                borderWidth: 1,
                borderRadius: 5,
                height: 40,
                color: '#25262B',
                paddingTop: 10,
                paddingHorizontal: 10,
              }}>
              <TouchableOpacity
                onPress={() => {
                  setVisible(true);
                }}
                style={{flexDirection: 'row'}}>
                <Text style={{color: '#25262B'}}>{currentPlace}</Text>
              </TouchableOpacity>
            </View>
          </>
        )}

        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleDateConfirm}
          onCancel={hideDatePicker}
        />
        <DateTimePickerModal
          isVisible={isTimePickerVisible}
          mode="time"
          onConfirm={handleTimeConfirm}
          onCancel={hideTimePicker}
        />
        {locationModal()}
      </View>

      {numerology || jamini || matchMaking ? (
        ''
      ) : (
        <View style={{position: 'relative', bottom: -40}}>
        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.button1}>
            <Text style={styles.buttonText1}>Skip</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button2}
            onPress={() => navigation.navigate('Step3')}>
            <Text style={styles.buttonText2}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  nameInput: {
    height: 40,
    borderColor: '#2A4FD3',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    color: '#25262B',
    // fontFamily: Fonts.ubuntuBold,
  },
  inputLabel: {
    fontFamily: Fonts.ubuntuBold,
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 16,
    lineHeight: 30,
    color: '#25262B',
  },
  container: {
    width: 330,
  },
  placeInput: {
    height: 40,
    borderColor: '#2A4FD3',
    color: '#2A4FD3',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  btnContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  button1: {
    backgroundColor: 'transparent',
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#2A4FD3',
    width: width * 0.35,
    height: height * 0.06,
    textAlign: 'center',
  },
  buttonText1: {
    fontFamily: Fonts.ubuntuBold,
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: 16,
    lineHeight: 30,
    color: '#2A4FD3',
    textAlign: 'center',
    
  },
  button2: {
    backgroundColor: '#2A4FD3',
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#2A4FD3',
    width: width * 0.35,
    height: height * 0.06,
    textAlign: 'center',
  },
  buttonText2: {
    fontFamily: Fonts.ubuntuBold,
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: 16,
    lineHeight: 30,
    color: '#FFF',
    textAlign: 'center',
  },
});
