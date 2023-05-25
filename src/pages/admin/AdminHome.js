import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';
import React from 'react';
import AdminView from '../../components/AdminView';
import TopNavigationBar from '../../components/admin/Home/TopNavigationBar';
import { responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import WhiteContainerStyles from '../../styles/WhiteContainerStyles';
import Octicons from 'react-native-vector-icons/Octicons';
import { Colors, Images } from '../../constants';

const AdminHome = () => {
    return (
        <AdminView>
            <ScrollView>
              <View style={{flex: 1, gap: responsiveWidth(5), paddingVertical: responsiveWidth(5)}}>
                {/* navbar */}
                <TopNavigationBar />
                <Text style={{color: Colors.white, fontWeight: 'bold', fontSize: responsiveFontSize(2.2), marginHorizontal: responsiveWidth(5)}}>Hello, Admin!</Text>
                <View style={WhiteContainerStyles.container}>
                    <Octicons name={'horizontal-rule'} size={responsiveFontSize(4)} style={{alignSelf: 'center', position: 'absolute'}} color={Colors.darkBlue2} />
                    <View style={{gap: responsiveWidth(10)}}>
                        <View style={{gap: responsiveWidth(5)}}>
                            <Text style={{color: Colors.black, fontWeight: 'bold', fontSize: responsiveFontSize(2.5),}}>Today's Stats</Text>
                            <View style={{backgroundColor: Colors.Yellow, flexDirection: 'row', borderRadius: responsiveWidth(2), padding: responsiveWidth(4)}}>
                                <Image source={Images.TotalDownloadsGraph} style={styles.totalDownloadImage} />
                                <View style={{flex: 1, justifyContent: 'space-between', padding: responsiveWidth(5)}}>
                                    <View style={{gap: responsiveWidth(1)}}>
                                        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: responsiveWidth(3)}}>
                                            <Text style={{color: Colors.black, fontWeight: 'bold', fontSize: responsiveFontSize(2)}}>Users</Text>
                                            <View style={{height: responsiveWidth(2), width: responsiveWidth(5), backgroundColor: Colors.darkBlue2}}></View>
                                        </View>
                                        <Text style={{color: Colors.darkBlue2, fontWeight: 'bold', fontSize: responsiveFontSize(2)}}>70%</Text>
                                    </View>
                                    <View style={{gap: responsiveWidth(1)}}>
                                        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: responsiveWidth(3)}}>
                                            <Text style={{color: Colors.black, fontWeight: 'bold', fontSize: responsiveFontSize(2)}}>Vendors</Text>
                                            <View style={{height: responsiveWidth(2), width: responsiveWidth(5), backgroundColor: Colors.black}}></View>
                                        </View>
                                        <Text style={{color: Colors.darkBlue2, fontWeight: 'bold', fontSize: responsiveFontSize(2)}}>30%</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{backgroundColor: Colors.darkBlue2, padding: responsiveWidth(4), borderRadius: responsiveWidth(2), gap: responsiveWidth(5)}}>
                                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                                    <Text style={{color: Colors.white, fontWeight: 'bold', fontSize: responsiveFontSize(2.5),}}>Consultaions</Text>
                                    <Text style={{color: Colors.white, fontSize: responsiveFontSize(1.5),}}>Last 7 days</Text>
                                </View>
                                <Image source={Images.ConsultationsGraph} style={styles.ConsultationsImage} />
                            </View>
                            <View style={{flexDirection: 'row', gap: responsiveWidth(5)}}>
                                <View style={{flex: 1, backgroundColor: Colors.darkBlue2, padding: responsiveWidth(3), borderRadius: responsiveWidth(3)}}>
                                    <Text style={{color: Colors.white}}>New Users</Text>
                                    <Text style={{fontWeight: 'bold', fontSize: 20, color: Colors.white}}>587</Text>
                                    <Text style={{color: '#fff', alignSelf: 'flex-end'}}>+7.5%</Text>
                                </View>
                                <View style={{flex: 1, backgroundColor: Colors.darkBlue2, padding: responsiveWidth(3), borderRadius: responsiveWidth(3)}}>
                                    <Text style={{color: Colors.white}}>Vendor onboards</Text>
                                    <Text style={{fontWeight: 'bold', fontSize: 20, color: Colors.white}}>87</Text>
                                    <Text style={{color: '#fff', alignSelf: 'flex-end'}}>-0.5%</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
              </View>
            </ScrollView>
        </AdminView>
    );
};

export default AdminHome;

const styles = StyleSheet.create({
    totalDownloadImage: {
        height: responsiveWidth(50),
        width: responsiveWidth(50),
        resizeMode: 'contain',
    },
    ConsultationsImage: {
        height: responsiveWidth(40),
        width: responsiveWidth(80),
        resizeMode: 'contain',
        alignSelf: 'center',
    },
});