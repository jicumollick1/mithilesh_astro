import { View, Text, ScrollView, TextInput } from 'react-native';
import React from 'react';
import { UserView } from '../../components';
import TopNavigator from '../../components/user/TopNavigator';
import { Colors } from '../../constants';
import { responsiveFontSize, responsiveWidth } from 'react-native-responsive-dimensions';
import WhiteContainerStyles from '../../styles/WhiteContainerStyles';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FeatherIcons from 'react-native-vector-icons/Feather';
import { Button } from 'react-native-elements';

const MyProfile = () => {
    return (
        <UserView>
            <TopNavigator title={'My Profile'} />
            <View style={{flex: 1, gap: responsiveWidth(5)}}>
                <View style={{paddingHorizontal: responsiveWidth(5)}}>
                    <Text style={{color: Colors.white, fontWeight: 'bold', fontSize: responsiveFontSize(2.5)}}>Provide birth information</Text>
                    <Text style={{color: Colors.white, fontSize: responsiveFontSize(2)}}>In order to save time on consultation and to share with your astrologer</Text>
                </View>
                <View style={[WhiteContainerStyles.container]}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={{gap: responsiveWidth(5), marginVertical: responsiveWidth(3)}}>
                            <Input label={'Full Name'} placeholder={'Enter your name'} icon={<AntDesignIcons name={'user'} size={responsiveFontSize(2.5)} color={Colors.black} />} />
                            <Input label={'Gender'} placeholder={'Select your Gender'} />
                            <Input label={'Age'} placeholder={'Enter your age'} />
                            <Input label={'Place of Birth'} placeholder={'Enter your place of birth'} icon={<AntDesignIcons name={'enviromento'} size={responsiveFontSize(2.5)} color={Colors.black} />} />
                            <Input label={'Date of Birth'} placeholder={'Enter your date of birth'} icon={<EvilIcons name={'calendar'} size={responsiveFontSize(4)} color={Colors.black} />} />
                            <Input label={'Time of Birth'} placeholder={'Enter your time of birth'} icon={<MaterialCommunityIcons name={'clock-time-eight-outline'} size={responsiveFontSize(3)} color={Colors.black} />} />
                            <Input label={'Mobile Number'} placeholder={'Enter your mobile number'} icon={<FeatherIcons name={'phone-call'} size={responsiveFontSize(2.5)} color={Colors.black} />} />
                            <Input label={'Email'} placeholder={'Enter your email'} icon={<AntDesignIcons name={'mail'} size={responsiveFontSize(2.5)} color={Colors.black} />} />
                            <Input label={'Marital Status'} placeholder={'Select your marital status'} />
                            <Input label={'Occupation'} placeholder={'Enter your occupation'} />
                            <Button title={'Save Changes'} buttonStyle={{backgroundColor: Colors.darkBlue2, borderRadius: responsiveWidth(2)}} />
                        </View>
                    </ScrollView>
                </View>
            </View>
        </UserView>
    );
};

export default MyProfile;

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