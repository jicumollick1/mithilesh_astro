import { View, Text, TextInput } from 'react-native';
import React, { useMemo, useState } from 'react';
import { UserView } from '../../components';
import TopNavigator from '../../components/user/TopNavigator';
import WhiteContainerStyles from '../../styles/WhiteContainerStyles';
import { responsiveFontSize, responsiveWidth } from 'react-native-responsive-dimensions';
import { Colors } from '../../constants';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Button } from 'react-native-elements';
import RadioGroup from 'react-native-radio-buttons-group';
import { StyleSheet } from 'react-native';

const GenerateKundli = ({navigation}) => {
    const radioButtons = useMemo(() => ([
        {
            id: '1', // acts as primary key, should be unique and non-empty string
            label: 'Male',
            value: 'male',
        },
        {
            id: '2',
            label: 'Female',
            value: 'female',
        },
        {
            id: '3',
            label: 'Others',
            value: 'others',
        },
    ]), []);

    const [gender, setGender] = useState();
    return (
        <UserView>
            <TopNavigator title={'Kundli'} />
            <View style={[WhiteContainerStyles.container, {gap: responsiveWidth(7)}]}>
                <View style={{gap: responsiveWidth(2)}}>
                    <Text style={{fontWeight: 'bold', fontSize: responsiveFontSize(3), color: Colors.black}}>New Kundli</Text>
                    <Text style={{ color: Colors.black}}>Please fill the details to get your kundli report</Text>
                </View>
                <View style={{gap: responsiveWidth(4)}}>
                    <Input label={'Name'} placeholder={'Enter your name'} icon={<AntDesignIcons name={'user'} size={responsiveFontSize(3)} color={Colors.black} />} />
                    <View style={{gap: responsiveWidth(1)}}>
                        <Text style={{color: Colors.black, fontWeight: 500, fontSize: responsiveFontSize(2)}}>Gender</Text>
                        <RadioGroup radioButtons={radioButtons} onPress={setGender} selectedId={gender} containerStyle={styles.radioContainerStyle} />
                    </View>
                    <Input label={'Date of Birth'} placeholder={'Enter your date of birth'} icon={<EvilIcons name={'calendar'} size={responsiveFontSize(4)} color={Colors.black} />} />
                    <Input label={'Time of Birth'} placeholder={'Enter your time of birth'} icon={<MaterialCommunityIcons name={'clock-time-eight-outline'} size={responsiveFontSize(3)} color={Colors.black} />} />
                    <Input label={'Place of Birth'} placeholder={'Enter your place of birth'} icon={<EvilIcons name={'location'} size={responsiveFontSize(4)} color={Colors.black} />} />
                </View>
                <Button title={'Generate Kundli'} buttonStyle={{backgroundColor: Colors.darkBlue2, borderRadius: responsiveWidth(1)}} onPress={()=> navigation.navigate('Kundli')} />
            </View>
        </UserView>
    );
};

export default GenerateKundli;

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

const styles = StyleSheet.create({
    radioContainerStyle: {
        flexDirection: 'row',
    },
});