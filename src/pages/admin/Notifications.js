import {View, Text} from 'react-native';
import React from 'react';
import { Colors, Images } from '../../constants';
import { responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import WhiteContainerStyles from '../../styles/WhiteContainerStyles';
import { Image } from 'react-native';
import TopNavigator from '../../components/admin/TopNavigator';
import { Button } from 'react-native-elements';
import AdminView from '../../components/AdminView';

const AllNotifications = [
    {
        title: 'Stressfull family life?',
        image: Images.Person1,
        time: '08 May, 12:35 pm',
    },
    {
        title: 'Transform your life with experts kundli analysis',
        image: Images.Person2,
        time: '08 May, 12:35 pm',
    },
    {
        title: 'Welcoming on board, Tarot & Vastu expert, Ravi 🙌',
        image: Images.Person3,
        time: '08 May, 12:35 pm',
    },
    {
        title: 'Welcome famous astrologer Sonam Ji🙏',
        image: Images.Person4,
        time: '08 May, 12:35 pm',
    },
];

const Notifications = ({navigation}) => {
  return (
    <AdminView>
      <TopNavigator navigation={navigation} title="Notifications" />
      <View style={WhiteContainerStyles.container}>
        <View style={{gap: responsiveWidth(2)}}>
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
      </View> 
    </AdminView>
  );
};

export default Notifications;

const Notification = ({title, image, time}) => {
    return(
        <View style={{flexDirection: 'row', alignItems: 'center', gap: responsiveWidth(3), paddingVertical: responsiveWidth(3), borderBottomWidth: responsiveWidth(0.1), borderBottomColor: Colors.lightGrey}}>
            <Image source={image} style={{height: responsiveWidth(10), width: responsiveWidth(10), borderRadius: responsiveWidth(10)}} />
            <View style={{flex: 1}}>
                <Text style={{fontWeight: 'bold', fontSize: responsiveFontSize(2), color: Colors.black}}>{title}</Text>
                <Text style={{fontSize: responsiveFontSize(1.5), color: Colors.black}}>{time}</Text>
            </View>
        </View>
    );
};