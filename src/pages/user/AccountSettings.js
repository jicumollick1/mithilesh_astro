import { View, Text, TextInput } from 'react-native';
import React, {useState} from 'react';
import { UserView } from '../../components';
import TopNavigator from '../../components/user/TopNavigator';
import WhiteContainerStyles from '../../styles/WhiteContainerStyles';
import { responsiveFontSize, responsiveWidth } from 'react-native-responsive-dimensions';
import { Colors } from '../../constants';
import { Button } from 'react-native-elements';
import FontistoIcons from 'react-native-vector-icons/Fontisto';
import FeatherIcons from 'react-native-vector-icons/Feather';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';
import Octicons from 'react-native-vector-icons/Octicons';

const AccountSettings = ({navigation}) => {
    const [notifications, setNotifications] = useState(true);
    const [passwordVisible, setPasswordVisible] = useState(false);

    return (
        <UserView>
            <TopNavigator title={'Account Settings'} />
            <View style={[WhiteContainerStyles.container, {gap: responsiveWidth(8)}]}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={{fontWeight: 'bold', fontSize: responsiveFontSize(2.5), color: Colors.black}}>Notifications</Text>
                    {
                        notifications?
                            <FontistoIcons name="toggle-on" size={responsiveFontSize(5)} color={Colors.lightGreen} style={{position: 'absolute', right: 0}} onPress={()=> setNotifications(false)} />
                        :
                            <FontistoIcons name="toggle-off" size={responsiveFontSize(5)} color={Colors.darkGrey} style={{position: 'absolute', right: 0}} onPress={()=> setNotifications(true)} />
                    }
                </View>
                <View style={{gap: responsiveWidth(2)}}>
                    <Text style={{fontWeight: 'bold', fontSize: responsiveFontSize(2.5), color: Colors.black}}>Support</Text>
                    <Button title="Contact Us" buttonStyle={{backgroundColor: Colors.darkBlue2, gap: responsiveWidth(5)}} icon={<FeatherIcons name="phone-call" size={responsiveFontSize(2.5)} color={Colors.white} />} onPress={()=> navigation.navigate('ContactUs')} />
                </View>
                <View style={{gap: responsiveWidth(5)}}>
                    <Text style={{fontWeight: 'bold', fontSize: responsiveFontSize(2.5), color: Colors.black}}>Account Information</Text>
                    <Input label={'User name'} placeholder={'Enter your name'} icon={<AntDesignIcons name={'user'} size={responsiveFontSize(2.5)} color={Colors.black} />} />
                    <Input label={'Password'} placeholder={'Enter your password'} icon={<Octicons name={passwordVisible?'eye-closed':'eye'} size={responsiveFontSize(2.5)} color={Colors.black} onPress={()=> setPasswordVisible(!passwordVisible)} />} secureTextEntry={!passwordVisible} />
                </View>
                <Button title={'Delete Account'} buttonStyle={{backgroundColor: Colors.white, borderRadius: responsiveWidth(2), borderColor: Colors.darkBlue2, borderWidth: responsiveWidth(0.4)}} titleStyle={{color: Colors.darkBlue2}} />
                <Text style={{color: Colors.black, fontWeight: 500}}>Your account will permanently get deleted and data wil get lost</Text>
                <Button title={'Save Changes'} buttonStyle={{backgroundColor: Colors.darkBlue2, borderRadius: responsiveWidth(2)}} />
            </View>
        </UserView>
    );
};

export default AccountSettings;

const Input = ({label, icon, placeholder, value, onChangeText, secureTextEntry}) => {
    return(
        <View style={{gap: responsiveWidth(2)}}>
            <Text style={{color: Colors.black, fontWeight: 500, fontSize: responsiveFontSize(2)}}>{label}</Text>
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: responsiveWidth(3), backgroundColor: 'rgba(42, 79, 211, 0.05)', borderWidth: 1, borderColor: Colors.darkBlue2, borderRadius: responsiveWidth(3), paddingHorizontal: responsiveWidth(2)}}>
                <TextInput placeholder={placeholder} value={value} onChangeText={onChangeText} secureTextEntry={secureTextEntry} />
                {icon}
            </View>
        </View>
    );
};