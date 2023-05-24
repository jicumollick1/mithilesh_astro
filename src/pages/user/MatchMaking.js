import { View, Text, Image, TextInput } from 'react-native';
import React, {useState} from 'react';
import { UserView } from '../../components';
import TopNavigator from '../../components/user/TopNavigator';
import WhiteContainerStyles from '../../styles/WhiteContainerStyles';
import { responsiveFontSize, responsiveWidth } from 'react-native-responsive-dimensions';
import { Colors, Images } from '../../constants';
import { Button } from 'react-native-elements';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const MatchMaking = ({navigation}) => {
    const [groom, setGroom] = useState(true);
    return (
        <UserView>
            <TopNavigator title={'Match Making'} />
            <View style={[WhiteContainerStyles.container, {gap: responsiveWidth(7)}]}>
                <View style={{gap: responsiveWidth(2)}}>
                    <Text style={{fontWeight: 'bold', fontSize: responsiveFontSize(3), color: Colors.black}}>New Match Making</Text>
                    <Text style={{ color: Colors.black}}>Please fill the details to get your match making details</Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Button title={'Groom details'} buttonStyle={{backgroundColor: groom?Colors.darkBlue2:Colors.white, borderRadius: responsiveWidth(1), gap: responsiveWidth(2), paddingHorizontal: responsiveWidth(4), borderColor: Colors.darkBlue2, borderWidth: responsiveWidth(0.2)}} titleStyle={{color: groom?Colors.white:Colors.darkBlue2,}} icon={<Image source={Images.Groom} style={{width: responsiveWidth(7), height: responsiveWidth(7)}} />} onPress={()=>setGroom(true)} />
                    <Button title={'Bride details'} buttonStyle={{backgroundColor: groom?Colors.white:Colors.darkBlue2, borderRadius: responsiveWidth(1), gap: responsiveWidth(2), paddingHorizontal: responsiveWidth(4), borderColor: Colors.darkBlue2, borderWidth: responsiveWidth(0.2)}} titleStyle={{color: groom?Colors.darkBlue2:Colors.white,}} icon={<Image source={Images.Bride} style={{width: responsiveWidth(7), height: responsiveWidth(7)}} />} onPress={()=>setGroom(false)} />
                </View>
                <View style={{gap: responsiveWidth(4)}}>
                    <Input label={'Name'} placeholder={'Enter your name'} icon={<AntDesignIcons name={'user'} size={responsiveFontSize(3)} color={Colors.black} />} />
                    <Input label={'Date of Birth'} placeholder={'Enter your date of birth'} icon={<EvilIcons name={'calendar'} size={responsiveFontSize(4)} color={Colors.black} />} />
                    <Input label={'Time of Birth'} placeholder={'Enter your time of birth'} icon={<MaterialCommunityIcons name={'clock-time-eight-outline'} size={responsiveFontSize(3)} color={Colors.black} />} />
                    <Input label={'Place of Birth'} placeholder={'Enter your place of birth'} icon={<EvilIcons name={'location'} size={responsiveFontSize(4)} color={Colors.black} />} />
                </View>
                {
                    !groom && (
                        <Button title={'Generate Matching Report'} buttonStyle={{backgroundColor: Colors.darkBlue2, borderRadius: responsiveWidth(1)}} onPress={()=> navigation.navigate('MatchScore')} />
                    )
                }
            </View>
        </UserView>
    );
};

export default MatchMaking;

const Input = ({label, icon, placeholder, value, onChangeText, secureTextEntry}) => {
    return(
        <View style={{gap: responsiveWidth(1)}}>
            <Text style={{color: Colors.black, fontWeight: 500, fontSize: responsiveFontSize(2)}}>{label}</Text>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: responsiveWidth(3), backgroundColor: 'rgba(42, 79, 211, 0.05)', borderWidth: 1, borderColor: Colors.darkBlue2, borderRadius: responsiveWidth(2), paddingHorizontal: responsiveWidth(2)}}>
                {icon}
                <TextInput placeholder={placeholder} value={value} onChangeText={onChangeText} secureTextEntry={secureTextEntry} />
            </View>
        </View>
    );
};