import { View, Text, ImageBackground, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React, {useEffect} from 'react';
import { Colors, Images } from '../../constants';
import { responsiveFontSize, responsiveWidth } from 'react-native-responsive-dimensions';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Calling = ({navigation}) => {
    useEffect(()=> {
        const Timeout = setTimeout(()=> {
            navigation.navigate('InCall');
        }, 5000);
        return (()=> {
            clearTimeout(Timeout);
        });
    });
    return (
        <ImageBackground source={Images.Person4} resizeMode="stretch" style={styles.cover} blurRadius={2} >
            <View style={styles.blurBackground}>
                <View style={{alignItems: 'center', gap: responsiveWidth(2), marginTop: responsiveWidth(15)}}>
                    <Image source={Images.Person4} style={styles.avatar} />
                    <Text style={{color: Colors.white, fontSize: responsiveFontSize(2)}}>Calling</Text>
                    <Text style={{color: Colors.white, fontSize: responsiveFontSize(2.5), fontWeight: 'bold'}}>Swetha</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center', gap: responsiveWidth(10)}}>
                    <TouchableOpacity style={{gap: responsiveWidth(2), alignItems: 'center'}}>
                        <View style={{backgroundColor: 'rgba(255, 252, 72, 0.2)', borderRadius: responsiveWidth(50), padding: responsiveWidth(3)}}>
                            <Ionicons name="volume-high" size={responsiveFontSize(3)} color={Colors.white} />
                        </View>
                        <Text style={{color: Colors.white}}>Speaker</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{backgroundColor: '#CB2F2F', borderRadius: responsiveWidth(50), padding: responsiveWidth(4), marginBottom: responsiveWidth(8)}}>
                        <MaterialIcons name="call-end" size={responsiveFontSize(5)} color={Colors.white} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{gap: responsiveWidth(2), alignItems: 'center'}}>
                        <View style={{backgroundColor: 'rgba(255, 252, 72, 0.2)', borderRadius: responsiveWidth(50), padding: responsiveWidth(3)}}>
                            <Ionicons name="mic-off" size={responsiveFontSize(3)} color={Colors.white} />
                        </View>
                        <Text style={{color: Colors.white}}>Mute</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    );
};

export default Calling;

const styles = StyleSheet.create({
    cover: {
        width: '100%',
        height: '100%',
    },
    avatar: {
        width: responsiveWidth(40),
        height: responsiveWidth(40),
        borderRadius: responsiveWidth(50),
        resizeMode: 'contain',
    },
    blurBackground: {
        flex: 1,
        paddingVertical: responsiveWidth(20),
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
});