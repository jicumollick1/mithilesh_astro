import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import React from 'react';
import { UserView } from '../../components';
import TopNavigator from '../../components/user/TopNavigator';
import { Colors, Images } from '../../constants';
import { responsiveFontSize, responsiveWidth } from 'react-native-responsive-dimensions';
import { Button } from 'react-native-elements';
import WhiteContainerStyles from '../../styles/WhiteContainerStyles';
import VendorView from '../../components/vendor/VendorView';
import ScreenHeader from '../../components/vendor/ScreenHeader';
import { SafeAreaView } from 'react-native';
import FocusStatusBar from '../../components/FocusStatusBar';
import Separator from '../../components/Separator';

const MatchScore = ({navigation}) => {
    return (
        <VendorView>
             <SafeAreaView />
            <FocusStatusBar
                barStyle={'light-content'}
                backgroundColor={Colors.primary}
                translucent
            />
            <ScreenHeader title={'Match Score'} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{paddingHorizontal: responsiveWidth(5), marginVertical: responsiveWidth(5), gap: responsiveWidth(5)}}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', backgroundColor: Colors.secondary, padding: responsiveWidth(2), borderRadius: responsiveWidth(2)}}>
                        <Image source={Images.VindianWedding} style={styles.avatar} />
                        <View style={{justifyContent: 'space-between'}}>
                            <View style={{flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'flex-end'}}>
                                <View style={{backgroundColor: Colors.primary, paddingHorizontal: responsiveWidth(4), paddingVertical: responsiveWidth(2.5), borderRadius: responsiveWidth(50)}}>
                                    <Text style={{fontWeight: 'bold', fontSize: responsiveFontSize(5), color: Colors.white}}>28</Text>
                                </View>
                                <Text style={{color: Colors.black, fontWeight: 500, fontSize: responsiveFontSize(2.5)}}>/36</Text>
                            </View>
                            <Text style={{color: Colors.black, fontWeight: 'bold', fontSize: responsiveFontSize(2.5)}}>Score Obtained</Text>
                        </View>
                    </View>
                    <Button title={'Consult With Astrologer'} titleStyle={{color:Colors.black}} buttonStyle={{backgroundColor: Colors.secondary, borderRadius: responsiveWidth(1), alignSelf: 'center', paddingHorizontal: responsiveWidth(5)}} onPress={()=> navigation.navigate('LiveChatsAndCalls')} />
                </View>
                <View style={[WhiteContainerStyles.container, {paddingHorizontal: responsiveWidth(2), paddingVertical: responsiveWidth(2), gap: responsiveWidth(5),backgroundColor:Colors.secondary}]}>
                    <View style={{backgroundColor: Colors.primary, borderRadius: responsiveWidth(1), paddingVertical: responsiveWidth(5)}}>
                        <Text style={{color: Colors.white, fontWeight: 'bold', fontSize: responsiveFontSize(2.5), paddingHorizontal: responsiveWidth(3)}}>Guna Milan Details</Text>
                        <Separator height={responsiveWidth(3)}/>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: responsiveWidth(2), paddingHorizontal: responsiveWidth(3)}}>
                            <Text style={{color: Colors.Yellow, textAlign: 'center', width: '25%', fontWeight: 'bold', fontSize: responsiveFontSize(2)}}>Guna</Text>
                            <Text style={{color: Colors.Yellow, textAlign: 'center', width: '25%', fontWeight: 'bold', fontSize: responsiveFontSize(2)}}>Maximum</Text>
                            <Text style={{color: Colors.Yellow, textAlign: 'center', width: '25%', fontWeight: 'bold', fontSize: responsiveFontSize(2)}}>Obtained</Text>
                            <Text style={{color: Colors.Yellow, textAlign: 'center', width: '25%', fontWeight: 'bold', fontSize: responsiveFontSize(2)}}>Area of Life</Text>
                        </View>
                        <Info guna={'Varna'} maximum={'1'} obtained={'1.0'} area={'Work'} />
                        <Info guna={'Vashya'} maximum={'2'} obtained={'2.0'} area={'Work'} />
                        <Info guna={'Tara'} maximum={'3'} obtained={'3.0'} area={'Work'} />
                        <Info guna={'Yoni'} maximum={'4'} obtained={'4.0'} area={'Work'} />
                        <Info guna={'Maitri'} maximum={'5'} obtained={'5.0'} area={'Work'} />
                        <Info guna={'Gana'} maximum={'6'} obtained={'6.0'} area={'Work'} />
                        <Info guna={'Bhakoot'} maximum={'7'} obtained={'7.0'} area={'Work'} />
                        <Info guna={'Nadi'} maximum={'8'} obtained={'8.0'} area={'Work'} />
                    </View>
                    <View style={{gap: responsiveWidth(3)}}>
                        <Text style={{fontWeight: 'bold', fontSize: responsiveFontSize(3), color: Colors.black}}>Horoscope Matching Details</Text>
                        <View style={{borderColor: Colors.primary, borderWidth: responsiveWidth(0.3), borderRadius: responsiveWidth(1), padding: responsiveWidth(3), gap: responsiveWidth(3)}}>
                            <BulletPoint text={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'} />
                            <BulletPoint text={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'} />
                            <BulletPoint text={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'} />
                        </View>
                    </View>            
                </View>
            </ScrollView>
        </VendorView>
    );
};

export default MatchScore;

const Info = ({guna, maximum, obtained, area}) => {
    return(
        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: responsiveWidth(2), paddingHorizontal: responsiveWidth(3), borderTopColor: Colors.Yellow, borderTopWidth: responsiveWidth(0.2)}}>
            <Text style={{color: Colors.white, textAlign: 'center', width: '25%', fontSize: responsiveFontSize(2)}}>{guna}</Text>
            <Text style={{color: Colors.white, textAlign: 'center', width: '25%', fontSize: responsiveFontSize(2)}}>{maximum}</Text>
            <Text style={{color: Colors.white, textAlign: 'center', width: '25%', fontSize: responsiveFontSize(2)}}>{obtained}</Text>
            <Text style={{color: Colors.white, textAlign: 'center', width: '25%', fontSize: responsiveFontSize(2)}}>{area}</Text>
        </View>
    );
};

const BulletPoint = ({text}) => {
    return(
        <View style={{flexDirection: 'row', gap: responsiveWidth(3), alignItems: 'flex-start'}}>
            <View style={{width: responsiveWidth(2), height: responsiveWidth(2), borderRadius: responsiveWidth(50), backgroundColor: Colors.primary, marginTop: responsiveWidth(2)}} />
            <Text style={{color: Colors.black, fontSize: responsiveFontSize(1.8)}}>{text}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    avatar: {
        width: responsiveWidth(30),
        height: responsiveWidth(30),
        resizeMode: 'contain',
    },
});