import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { UserView } from '../../components';
import { Images, Colors } from '../../constants';
import { responsiveFontSize, responsiveWidth } from 'react-native-responsive-dimensions';
import FeatherIcons from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const InCall = ({navigation}) => {
    return (
        <UserView>
            <View style={styles.blurBackground}>
                <View style={{flexDirection: 'row', gap: responsiveWidth(5), justifyContent: 'space-between', alignItems: 'center'}}>
                    <Image source={Images.Person4} style={styles.image} />
                    <View style={{alignItems: 'center'}}>
                        <MaterialCommunityIcons name="chevron-triple-right" size={responsiveFontSize(5)} color={Colors.white} />
                        <Text style={{color: Colors.white, fontWeight: 500}}>Connected</Text>
                    </View>
                    <Image source={Images.Person2} style={styles.image} />
                </View>
                <View style={{alignItems: 'center', gap: responsiveWidth(1)}}>
                    <Text style={{color: Colors.lightGreen, fontSize: responsiveFontSize(2)}}>In Call with</Text>
                    <Text style={{color: Colors.white, fontSize: responsiveFontSize(2.5), fontWeight: 'bold'}}>Swetha</Text>
                    <Text style={{color: Colors.white, fontSize: responsiveFontSize(2)}}>01:27</Text>
                </View>
                <View style={{backgroundColor: 'rgba(42, 79, 211, 0.56)', paddingVertical: responsiveWidth(5), paddingHorizontal: responsiveWidth(15), borderRadius: responsiveWidth(7), gap: responsiveWidth(1)}}>
                    <Text style={{color: Colors.white, fontSize: responsiveFontSize(2.5), fontWeight: 'bold'}}>Time Remaining</Text>
                    <View style={{flexDirection: 'row', gap: responsiveWidth(2), alignItems: 'center'}}>
                        <FeatherIcons name={'phone-call'} size={responsiveWidth(7)} color={Colors.lightGreen} style={{marginRight: responsiveWidth(3)}} />
                        <Text style={{color: Colors.lightGreen, fontSize: responsiveFontSize(3), fontWeight: 'bold'}}>13:32:54</Text>
                    </View>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center', gap: responsiveWidth(10)}}>
                    <TouchableOpacity style={{gap: responsiveWidth(2), alignItems: 'center'}}>
                        <View style={{backgroundColor: 'rgba(255, 252, 72, 0.2)', borderRadius: responsiveWidth(50), padding: responsiveWidth(3)}}>
                            <Ionicons name="volume-high" size={responsiveFontSize(3)} color={Colors.white} />
                        </View>
                        <Text style={{color: Colors.white}}>Speaker</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{backgroundColor: '#CB2F2F', borderRadius: responsiveWidth(50), padding: responsiveWidth(4), marginBottom: responsiveWidth(8)}} onPress={()=> navigation.navigate('CallEnded')} >
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
        </UserView>
    );
};

export default InCall;

const styles = StyleSheet.create({
    image: {
        width: responsiveWidth(20),
        height: responsiveWidth(20),
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