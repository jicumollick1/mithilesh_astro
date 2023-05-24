import {View, Text, StyleSheet, TextInput} from 'react-native';
import React from 'react';
import {UserView} from '../../components';
import {Colors} from '../../constants';
import {
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {Image} from 'react-native';
import TopNavigator from '../../components/user/TopNavigator';
// import WhiteContainerStyles from '../../styles/WhiteContainerStyles';

const Notifications = ({navigation}) => {
  return (
    <UserView>
      <TopNavigator navigation={navigation} title="Notifications" />
      <View>
        <View style={{gap: responsiveWidth(2)}}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: responsiveFontSize(3),
              color: Colors.black,
            }}>
            Notifications
          </Text>
        </View>
      </View>
    </UserView>
  );
};

export default Notifications;
