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
      <TopNavigator title="Notifications" />
      <View style={[WhiteContainerStyles.container, {gap: responsiveWidth(2)}]}>
        <Text style={{fontWeight: 'bold', fontSize: responsiveFontSize(3), color: Colors.black}}>Notifications</Text>
        <View style={{gap: responsiveWidth(2)}}>
          {
              AllNotifications.map((item, index) => (
                  <Notification key={index} title={item.title} image={item.image} time={item.time} />
              ))
          }
        </View>
        <Button title="View More" buttonStyle={{backgroundColor: Colors.lightBlue, borderRadius: responsiveWidth(5), alignSelf: 'center', paddingHorizontal: responsiveWidth(5)}} titleStyle={{color: Colors.black}} />
      </View> 
    </UserView>
  );
};

export default Notifications;
