import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {UserView} from '../../components';
import TopNavigator from '../../components/user/TopNavigator';
import WhiteContainerStyles from '../../styles/WhiteContainerStyles';
import {
  responsiveFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {Colors, Images} from '../../constants';
import {Button} from 'react-native-elements';
import FeatherIcons from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Astrologers = [
  {
    name: 'Sivan',
    image: Images.Person1,
  },
  {
    name: 'Girish',
    image: Images.Person2,
  },
  {
    name: 'Girish',
    image: Images.Person3,
  },
  {
    name: 'Monika',
    image: Images.Person4,
  },
  {
    name: 'Prem',
    image: Images.Person5,
  },
  {
    name: 'Tilak',
    image: Images.Person6,
  },
];

const Phone = ({navigation}) => {
  const [searchText, setSearchText] = useState('');
  const [selected, setSelected] = useState('Live chats');
  return (
    <UserView>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: responsiveFontSize(3),
          color: Colors.white,
          padding: responsiveWidth(5),
          textAlign: 'center',
        }}>
        Live Chats & Calls
      </Text>
      <View style={{flex: 1, gap: responsiveWidth(5)}}>
        <View
          style={{
            paddingHorizontal: responsiveWidth(5),
            gap: responsiveWidth(3),
          }}>
          <View style={styles.searchContainer}>
            <FeatherIcons name="search" size={20} color={Colors.black} />
            <TextInput
              placeholder="Search Messages..."
              placeholderTextColor={Colors.black}
              style={{flex: 1}}
              value={searchText}
              onChangeText={setSearchText}
            />
          </View>
          <View style={{gap: responsiveWidth(3)}}>
            <Text
              style={{
                color: Colors.white,
                fontWeight: 'bold',
                fontSize: responsiveFontSize(2),
              }}>
              Recents
            </Text>
            <View style={{flexDirection: 'row', gap: responsiveWidth(4)}}>
              {Astrologers.slice(0, 6).map((item, index) => (
                <AstrologerIcon
                  key={index}
                  image={item.image}
                  name={item.name}
                />
              ))}
            </View>
          </View>
        </View>
        <View
          style={[WhiteContainerStyles.container, {gap: responsiveWidth(3)}]}>
          <View style={{flexDirection: 'row', gap: responsiveWidth(5)}}>
            <Button
              title={'Live Chats'}
              buttonStyle={{backgroundColor: Colors.white, padding: 0}}
              titleStyle={{
                color:
                  selected === 'Live chats'
                    ? Colors.black
                    : 'rgba(37, 38, 43, 0.75)',
                fontWeight: 'bold',
                fontSize: responsiveFontSize(2),
                borderBottomColor:
                  selected === 'Live chats' ? Colors.darkBlue2 : Colors.white,
                borderBottomWidth: responsiveWidth(1),
              }}
              onPress={() => setSelected('Live chats')}
            />
            <Button
              title={'Audio Call'}
              buttonStyle={{backgroundColor: Colors.white, padding: 0}}
              titleStyle={{
                color:
                  selected === 'Audio Call'
                    ? Colors.black
                    : 'rgba(37, 38, 43, 0.75)',
                fontWeight: 'bold',
                fontSize: responsiveFontSize(2),
                borderBottomColor:
                  selected === 'Audio Call' ? Colors.darkBlue2 : Colors.white,
                borderBottomWidth: responsiveWidth(1),
              }}
              onPress={() => setSelected('Audio Call')}
            />
          </View>
          <ScrollView>
            {Astrologers.map((item, index) => (
              <Chat
                key={index}
                image={item.image}
                name={item.name}
                message={
                  'Hello, I am facing some issues in my life. Can you please help me?'
                }
                time={'10:00 AM'}
                onClick={() => navigation.navigate('Chats')}
              />
            ))}
          </ScrollView>
        </View>
      </View>
    </UserView>
  );
};

export default Phone;

const AstrologerIcon = ({image, name, onPress}) => {
  return (
    <TouchableOpacity
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        gap: responsiveWidth(1),
      }}>
      <Image
        source={image}
        style={{
          width: responsiveWidth(12),
          height: responsiveWidth(12),
          borderRadius: responsiveWidth(15),
        }}
      />
      <Text
        style={{
          color: Colors.white,
          fontWeight: 'bold',
          fontSize: responsiveFontSize(1.5),
        }}>
        {name}
      </Text>
    </TouchableOpacity>
  );
};

const Chat = ({image, name, message, time, onClick}) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        gap: responsiveWidth(3),
        borderBottomColor: Colors.darkBlue2,
        borderBottomWidth: responsiveWidth(0.1),
        paddingVertical: responsiveWidth(3),
      }}
      onPress={onClick}>
      <Image
        source={image}
        style={{
          width: responsiveWidth(12),
          height: responsiveWidth(12),
          borderRadius: responsiveWidth(15),
        }}
      />
      <View style={{flex: 1, gap: responsiveWidth(1)}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: Colors.black,
              fontWeight: 'bold',
              fontSize: responsiveFontSize(1.7),
            }}>
            {name}
          </Text>
          <Text
            style={{
              color: Colors.black,
              fontWeight: 500,
              fontSize: responsiveFontSize(1.5),
            }}>
            {time}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: responsiveWidth(1),
          }}>
          <Ionicons
            name={'checkmark-done'}
            size={responsiveFontSize(2)}
            color={Colors.darkBlue2}
          />
          <Text
            style={{color: Colors.black, fontSize: responsiveFontSize(1.5)}}>
            {message.slice(0, 50)}
            {message.length >= 50 ? '...' : ''}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    paddingHorizontal: responsiveWidth(3),
    borderRadius: responsiveWidth(50),
    gap: responsiveWidth(2),
    flex: 1,
  },
});
