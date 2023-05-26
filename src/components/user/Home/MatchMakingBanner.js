import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { Button, Image } from 'react-native-elements';
import { Colors, Images } from '../../../constants';
import { responsiveFontSize, responsiveWidth } from 'react-native-responsive-dimensions';

const MatchMakingBanner = () => {
    return (
        <View style={{flexDirection: 'row', backgroundColor: '#1D45E9', borderRadius: responsiveWidth(1), justifyContent: 'space-between'}}>
            <View style={{gap: responsiveWidth(1), padding: responsiveWidth(2), justifyContent: 'space-between', width: '60%'}}>
                <Text style={{color: Colors.Yellow, fontWeight: 'bold', fontSize: responsiveFontSize(2.5)}}>Getting Married?</Text>
                <Text style={{color: '#fff', fontSize: responsiveFontSize(1.7)}}>Check your match making points and get better understanding about your partner</Text>
                <Button title="Consult now" buttonStyle={{backgroundColor: Colors.Yellow, borderRadius: responsiveWidth(2), width: responsiveWidth(30), paddingHorizontal: responsiveWidth(3), paddingVertical: responsiveWidth(0.1)}} titleStyle={{color: Colors.darkBlue}} />
            </View>
            <Image source={Images.CoupleStress} style={styles.image} />
        </View>
    );
};

export default MatchMakingBanner;

const styles = StyleSheet.create({
    image: {
        height: responsiveWidth(30),
        width: responsiveWidth(30),
        resizeMode: 'contain',
    },
});