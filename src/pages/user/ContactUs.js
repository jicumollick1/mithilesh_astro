import { View, Text } from 'react-native';
import React from 'react';
import { UserView } from '../../components';
import TopNavigator from '../../components/user/TopNavigator';
import WhiteContainerStyles from '../../styles/WhiteContainerStyles';
import { responsiveFontSize, responsiveWidth } from 'react-native-responsive-dimensions';
import { Colors } from '../../constants';
import CallModal from './CallModal';

const ContactUs = () => {
    return (
        <UserView>
            <TopNavigator title={'Contact Us'} />
            <View style={[WhiteContainerStyles.container, {gap: responsiveWidth(8)}]}>
                <View style={{gap: responsiveWidth(4)}}>
                    <Text style={{fontWeight: 'bold', fontSize: responsiveFontSize(2.5), color: Colors.black}}>Feel free to contact us</Text>
                    <Container title={'Address'} value={'Lorem Ipsum, India'} />
                    <Container title={'Contact Number'} value={'+91 1234567890'} />
                    <Container title={'Email'} value={'loremipsum@lorem.in'} />
                    <Text style={{color: Colors.black, fontSize: responsiveFontSize(1.5), textAlign: 'center'}}>Our Business hours are Mon - Fri 9.30 am to 6.30 pm PST</Text>
                </View>
                <CallModal />
            </View>
        </UserView>
    );
};

export default ContactUs;

const Container = ({title, value}) => {
    return(
        <View style={{backgroundColor: Colors.darkBlue2, borderRadius: responsiveWidth(1), padding: responsiveWidth(4), gap: responsiveWidth(3)}}>
            <Text style={{fontWeight: 'bold', fontSize: responsiveFontSize(2), color: Colors.white}}>{title}</Text>
            <Text style={{fontSize: responsiveFontSize(1.5), color: Colors.white}}>{value}</Text>
        </View>
    );
}