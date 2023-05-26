import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import { UserView } from '../../components';
import TopNavigator from '../../components/user/TopNavigator';
import { Button } from 'react-native-elements';
import { responsiveFontSize, responsiveWidth } from 'react-native-responsive-dimensions';
import { Colors, Fonts, Images } from '../../constants';
import WhiteContainerStyles from '../../styles/WhiteContainerStyles';
import FeatherIcons from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import LogoutModal from './LogoutModal';

const Profile = ({navigation}) => {
  return (
    <UserView>
      <TopNavigator title={'My account'} />
      <View style={{flex: 1, gap: responsiveWidth(5)}}>
          <View style={{backgroundColor: Colors.white, alignItems: 'center', marginHorizontal: responsiveWidth(5), marginTop: responsiveWidth(12), borderRadius: responsiveWidth(3), gap: responsiveWidth(4), padding: responsiveWidth(3)}}>
            <View style={{alignItems: 'center', paddingTop: responsiveWidth(19)}}>
              <Image source={Images.Person1} style={styles.image} />
              <Text style={{color: Colors.black, fontWeight: 'bold', fontSize: responsiveFontSize(2.5)}}>Vijay Kumar</Text>
              <Text style={{color: Colors.black, fontWeight: 500}}>26/ Male | Delhi</Text>
              <Text style={{color: Colors.black, fontWeight: 500}}>Leo</Text>
            </View>
            <View style={{flexDirection: 'row', borderColor: Colors.darkBlue2, borderWidth: responsiveWidth(0.3), borderRadius: responsiveWidth(2), padding: responsiveWidth(2), gap: responsiveWidth(4)}}>
              <View style={{alignItems: 'center'}}>
                <View style={{flexDirection: 'row', alignItems: 'center', backgroundColor: Colors.darkBlue2, gap: responsiveWidth(3), borderRadius: responsiveWidth(2), paddingVertical: responsiveWidth(1), paddingHorizontal: responsiveWidth(3)}}>
                  <FeatherIcons name="phone-call" size={responsiveFontSize(1.8)} color={Colors.white} />
                  <Text style={{color: Colors.white, fontWeight: 500}}>26</Text>
                </View>
                <Text style={{color: Colors.black, fontWeight: 500}}>Calls</Text>
              </View>
              <View style={{alignItems: 'center'}}>
                <View style={{flexDirection: 'row', alignItems: 'center', backgroundColor: Colors.darkBlue2, gap: responsiveWidth(3), borderRadius: responsiveWidth(2), paddingVertical: responsiveWidth(1), paddingHorizontal: responsiveWidth(3)}}>
                  <FeatherIcons name="phone-call" size={responsiveFontSize(1.8)} color={Colors.white} />
                  <Text style={{color: Colors.white, fontWeight: 500}}>26</Text>
                </View>
                <Text style={{color: Colors.black, fontWeight: 500}}>Chats</Text>
              </View>
            </View>
            <Button title="Edit Profile" buttonStyle={{backgroundColor: Colors.darkBlue2, borderRadius: responsiveWidth(2), gap: responsiveWidth(5), width: responsiveWidth(60)}} titleStyle={{fontFamily: Fonts.ubuntuBold, fontSize: responsiveFontSize(2)}} icon={<FontAwesome5 name="user" size={responsiveFontSize(2.5)} color={Colors.white} />} onPress={()=> navigation.navigate('MyProfile')} />
          </View>
          <View style={[WhiteContainerStyles.container, {gap: responsiveWidth(20), paddingVertical: responsiveWidth(3)}]}>
            <Button title="Account Settings" buttonStyle={{backgroundColor: Colors.darkBlue2, borderRadius: responsiveWidth(2), gap: responsiveWidth(5), justifyContent: 'flex-start', paddingHorizontal: responsiveWidth(5)}} titleStyle={{fontFamily: Fonts.ubuntuBold, fontSize: responsiveFontSize(2)}} icon={<Ionicons name="settings-sharp" size={responsiveFontSize(3)} color={Colors.white} />} onPress={()=> navigation.navigate('AccountSettings')} />
            <LogoutModal />
          </View>
      </View>
    </UserView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  image: {
    width: responsiveWidth(25),
    height: responsiveWidth(25),
    borderRadius: responsiveWidth(50),
    position: 'absolute',
    bottom: responsiveWidth(19),
  },
});