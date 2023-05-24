import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import { UserView } from '../../components';
import TopNavigator from '../../components/user/TopNavigator';
import WhiteContainerStyles from '../../styles/WhiteContainerStyles';
import { responsiveFontSize, responsiveWidth } from 'react-native-responsive-dimensions';
import { Colors, Images } from '../../constants';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Image } from 'react-native-elements';

const Panchang = () => {
    return (
        <UserView>
            <TopNavigator title="Panchang" />
            <ScrollView>
                <View style={[WhiteContainerStyles.container, {paddingTop: 0, paddingHorizontal: 0}]}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', backgroundColor: Colors.darkBlue, padding: responsiveWidth(4), borderTopStartRadius: responsiveWidth(5), borderTopEndRadius: responsiveWidth(5)}}>
                        <View style={{alignItems: 'center'}}>
                            <View style={{flexDirection: 'row'}}>
                                <MaterialIcons name="arrow-back-ios" size={responsiveFontSize(3)} color={Colors.white} />
                                <Text style={{fontWeight: 'bold', fontSize: responsiveFontSize(2), color: Colors.white}}>05 May 2023</Text>
                                <MaterialIcons name="arrow-forward-ios" size={responsiveFontSize(3)} color={Colors.white} />
                            </View>
                            <Text style={{fontWeight: 'bold', fontSize: responsiveFontSize(1.8), color: Colors.white}}>Friday</Text>
                        </View>
                        <View style={{flexDirection: 'row', backgroundColor: Colors.Yellow, paddingVertical: responsiveWidth(2), paddingHorizontal: responsiveWidth(3), borderRadius: responsiveWidth(1), gap: responsiveWidth(2)}}>
                            <Ionicons name="location-outline" size={responsiveFontSize(3)} color={Colors.black} />
                            <Text style={{fontWeight: 'bold', fontSize: responsiveFontSize(2), color: Colors.black}}>Chennai</Text>
                        </View>
                    </View>
                    <View style={{paddingHorizontal: responsiveWidth(4), paddingVertical: responsiveWidth(5), gap: responsiveWidth(4)}}>
                        <Text style={{fontWeight: 'bold', fontSize: responsiveFontSize(2.5), color: Colors.black}}>Today Panchang</Text>
                        <View style={[styles.darkBlueContainer, {gap: responsiveWidth(3)}]}>
                            <View style={{flexDirection: 'row', alignItems: 'center', gap: responsiveWidth(5), borderBottomColor: Colors.white, borderBottomWidth: responsiveWidth(0.1), paddingBottom: responsiveWidth(3)}}>
                                <Image source={Images.PanchangMoon} style={styles.panchangIcon} ></Image>
                                <View>
                                    <Text style={{fontWeight: 'bold', fontSize: responsiveFontSize(2), color: Colors.white}}>Panchang (05 May 2023)</Text>
                                    <Text style={{fontSize: responsiveFontSize(1.8), color: Colors.white}}>Friday</Text>
                                </View>
                            </View>
                            <View style={{gap: responsiveWidth(2)}}>
                                <View style={{flexDirection: 'row', alignItems: 'center', gap: responsiveWidth(5)}}>
                                    <Image source={Images.Sunrise} style={styles.miniIcon} ></Image>
                                    <Text style={{fontWeight: 500, fontSize: responsiveFontSize(2), color: Colors.white}}>Sunrise - 5:40 AM</Text>
                                </View>
                                <View style={{flexDirection: 'row', alignItems: 'center', gap: responsiveWidth(5)}}>
                                    <Image source={Images.Sunset} style={styles.miniIcon} ></Image>
                                    <Text style={{fontWeight: 500, fontSize: responsiveFontSize(2), color: Colors.white}}>Sunset - 6:46 PM</Text>
                                </View>
                                <View style={{flexDirection: 'row', alignItems: 'center', gap: responsiveWidth(5)}}>
                                    <Image source={Images.MoonSign} style={styles.miniIcon} ></Image>
                                    <Text style={{fontWeight: 500, fontSize: responsiveFontSize(2), color: Colors.white}}>MoonSign - Tula</Text>
                                </View>
                                <View style={{flexDirection: 'row', alignItems: 'center', gap: responsiveWidth(5)}}>
                                    <Image source={Images.Tithi} style={styles.miniIcon} ></Image>
                                    <Text style={{fontWeight: 500, fontSize: responsiveFontSize(2), color: Colors.white}}>Tithi - <Text style={{color: Colors.Yellow}}>Poornima</Text> upto 23:05:28</Text>
                                </View>
                                <View style={{flexDirection: 'row', alignItems: 'center', gap: responsiveWidth(5)}}>
                                    <Image source={Images.Nakshatra} style={styles.miniIcon} ></Image>
                                    <Text style={{fontWeight: 500, fontSize: responsiveFontSize(2), color: Colors.white}}>Nakshatra - <Text style={{color: Colors.Yellow}}>Swati</Text> upto 21:39:56</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                            <View style={styles.darkBlueContainer}>
                                <Text style={{color: Colors.white, fontWeight: 'bold'}}>Sun Sign: Mesha</Text>
                                <View style={{flexDirection: 'row', alignItems: 'center', gap: responsiveWidth(2)}}>
                                    <Image source={Images.Sunrise} style={styles.miniIcon} ></Image>
                                    <Text style={{fontWeight: 500, fontSize: responsiveFontSize(1.5), color: Colors.white}}>Sunrise : 5:40 AM</Text>
                                </View>
                                <View style={{flexDirection: 'row', alignItems: 'center', gap: responsiveWidth(2)}}>
                                    <Image source={Images.Sunset} style={styles.miniIcon} ></Image>
                                    <Text style={{fontWeight: 500, fontSize: responsiveFontSize(1.5), color: Colors.white}}>Sunset : 6:46 PM</Text>
                                </View>
                            </View>
                            <View style={styles.darkBlueContainer}>
                                <Text style={{color: Colors.white, fontWeight: 'bold'}}>Sun Sign: Mesha</Text>
                                <View style={{flexDirection: 'row', alignItems: 'center', gap: responsiveWidth(2)}}>
                                    <Image source={Images.Moonrise} style={styles.miniIcon} ></Image>
                                    <Text style={{fontWeight: 500, fontSize: responsiveFontSize(1.5), color: Colors.white}}>Moonrise : 18:40 AM</Text>
                                </View>
                                <View style={{flexDirection: 'row', alignItems: 'center', gap: responsiveWidth(2)}}>
                                    <Image source={Images.Moonset} style={styles.miniIcon} ></Image>
                                    <Text style={{fontWeight: 500, fontSize: responsiveFontSize(1.5), color: Colors.white}}>Moonset : 4:52 PM</Text>
                                </View>
                            </View>
                        </View>
                        <View style={[styles.darkBlueContainer, {flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', gap: responsiveWidth(3)}]}>
                            <View style={styles.yellowBorderContainer}>
                                <Text style={{color: Colors.Yellow}}>Tithi</Text>
                                <Text style={{color: Colors.white, fontWeight: 500, fontSize: responsiveFontSize(1.5)}}>Shashthi</Text>
                                <Text style={{color: Colors.white, fontWeight: 500, fontSize: responsiveFontSize(1.5)}}>Till - 11 : 45 PM</Text>
                                <Text style={{color: Colors.white, fontSize: responsiveFontSize(1.5)}}>Next - Saptami</Text>
                            </View>
                            <View style={styles.yellowBorderContainer}>
                                <Text style={{color: Colors.Yellow}}>Yoga</Text>
                                <Text style={{color: Colors.white, fontWeight: 500, fontSize: responsiveFontSize(1.5)}}>Vishkambha</Text>
                                <Text style={{color: Colors.white, fontWeight: 500, fontSize: responsiveFontSize(1.5)}}>Till - Full Night</Text>
                                <Text style={{color: Colors.white, fontSize: responsiveFontSize(1.5)}}>Next - Vishkambha</Text>
                            </View>
                            <View style={styles.yellowBorderContainer}>
                                <Text style={{color: Colors.Yellow}}>Karana</Text>
                                <Text style={{color: Colors.white, fontWeight: 500, fontSize: responsiveFontSize(1.5)}}>Gar - Till - 10:37 AM</Text>
                                <Text style={{color: Colors.white, fontWeight: 500, fontSize: responsiveFontSize(1.5)}}>Vanij - Till - 11:45 PM</Text>
                                <Text style={{color: Colors.white, fontSize: responsiveFontSize(1.5)}}>Next - Vishti, Bhav</Text>
                            </View>
                            <View style={styles.yellowBorderContainer}>
                                <Text style={{color: Colors.Yellow}}>Nakshatra</Text>
                                <Text style={{color: Colors.white, fontWeight: 500, fontSize: responsiveFontSize(1.5)}}>Vishkambha</Text>
                                <Text style={{color: Colors.white, fontWeight: 500, fontSize: responsiveFontSize(1.5)}}>Magha</Text>
                                <Text style={{color: Colors.white, fontSize: responsiveFontSize(1.5)}}>Next - Poorva Phalguni</Text>
                            </View>
                            <DataCard title={'Paksha'} value={'Krishna'} />
                            <DataCard title={'Day'} value={'Buddhavara'} />
                        </View>
                    </View>
                    <View style={{paddingHorizontal: responsiveWidth(4), paddingVertical: responsiveWidth(5), gap: responsiveWidth(4)}}>
                        <Text style={{fontWeight: 'bold', fontSize: responsiveFontSize(2.5), color: Colors.black}}>Auspicious / Inauspicius Timings</Text>
                        <View style={[styles.darkBlueContainer, {flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', gap: responsiveWidth(3)}]}>
                            <DataCard title={'Abhijit'} value={'None'} />
                            <DataCard title={'Dushta Muhurtas'} value={'11:54 AM To 12:36 PM'} />
                            <DataCard title={'Kantaka/Mrityu'} value={'04:03 PM To 04:44 PM'} />
                            <DataCard title={'Yamanghanta'} value={'09:09 AM To 09:50 AM'} />
                            <DataCard title={'Kulika'} value={'11:54 AM To 12:36 PM'} />
                            <DataCard title={'Kalavela'} value={'07:46 AM To 08:28 AM'} />
                            <DataCard title={'Yamaganda'} value={'Hemant'} />
                            <DataCard title={'Gulika Kaal'} value={'Simha'} />
                            <DataCard title={'Disha Shoola'} value={'Hemant'} />
                            <DataCard title={'Rahu kaal'} value={'12:15 PM To 01:33 PM'} />
                        </View>
                    </View>
                    <View style={{paddingHorizontal: responsiveWidth(4), paddingVertical: responsiveWidth(5), gap: responsiveWidth(4)}}>
                        <Text style={{fontWeight: 'bold', fontSize: responsiveFontSize(2.5), color: Colors.black}}>Hindu Month and Year</Text>
                        <View style={[styles.darkBlueContainer, {flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', gap: responsiveWidth(3)}]}>
                            <DataCard title={'Shaka Samvat'} value={'1944'} />
                            <DataCard title={'Day Duration'} value={'10:20:28'} />
                            <DataCard title={'Kali Samvat'} value={'5124'} />
                            <DataCard title={'Vikram Samvat'} value={'2079'} />
                            <DataCard title={'Month Amanta'} value={'Margashirsha'} />
                            <DataCard title={'Month Purnimanta'} value={'Pausha'} />
                        </View>
                    </View>
                    <View style={{paddingHorizontal: responsiveWidth(4), paddingVertical: responsiveWidth(5), gap: responsiveWidth(4)}}>
                        <Text style={{fontWeight: 'bold', fontSize: responsiveFontSize(2.5), color: Colors.black}}>Chandra bala today</Text>
                        <View style={[styles.darkBlueContainer]}>
                            <Text style={{color: Colors.white, fontWeight: 'bold'}}>Mithuna, Simha, Tula, Vrishchika, Kumbha, Meena</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </UserView>
    );
};

export default Panchang;

const DataCard = ({title, value}) => {
    return(
        <View style={styles.yellowBorderContainer}>
            <Text style={{color: Colors.Yellow}}>{title}</Text>
            <Text style={{color: Colors.white, fontSize: responsiveFontSize(1.5)}}>{value}</Text>
        </View>
    );
};


const styles = StyleSheet.create({
    darkBlueContainer: {
        backgroundColor: Colors.darkBlue,
        borderRadius: responsiveWidth(1),
        paddingHorizontal: responsiveWidth(2),
        paddingVertical: responsiveWidth(3),
    },
    panchangIcon: {
        width: responsiveWidth(10),
        height: responsiveWidth(10),
        resizeMode: 'contain',
    },
    miniIcon: {
        width: responsiveWidth(8),
        height: responsiveWidth(8),
        resizeMode: 'contain',
    },
    yellowBorderContainer: {
        borderWidth: responsiveWidth(0.2),
        borderColor: Colors.Yellow,
        borderRadius: responsiveWidth(1),
        padding: responsiveWidth(2),
        width: responsiveWidth(40),
    },
});