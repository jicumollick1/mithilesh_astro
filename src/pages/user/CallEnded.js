import { View, Text, TextInput, Image, ImageBackground,StyleSheet } from 'react-native';
import React from 'react';
import { Button, Rating, AirbnbRating } from 'react-native-elements';
import { Colors, Images } from '../../constants';
import { responsiveFontSize, responsiveWidth } from 'react-native-responsive-dimensions';

const CallEnded = ({navigation}) => {
    return (
        <ImageBackground source={Images.Person4} resizeMode="stretch" style={styles.cover} blurRadius={2} >
            <View style={styles.blurBackground}>
                <View style={{flexDirection: 'row', gap: responsiveWidth(5), justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: responsiveWidth(5), marginTop: responsiveWidth(10)}}>
                    <Image source={Images.Person4} style={styles.image} />
                    <Text style={{color: Colors.white, fontWeight: 500}}>Call Ended</Text>
                    <Image source={Images.Person2} style={styles.image} />
                </View>
                <View style={{flex: 1, backgroundColor: 'rgba(42, 79, 211, 0.18)', paddingVertical: responsiveWidth(10), paddingHorizontal: responsiveWidth(5), justifyContent: 'space-between', borderRadius: responsiveWidth(5), gap: responsiveWidth(5)}}>
                    <View style={{alignItems: 'center', gap: responsiveWidth(3)}}>
                        <Image source={Images.Good} style={styles.image} />
                        <Text style={{color: Colors.white, fontSize: responsiveFontSize(3), fontWeight: 'bold'}}>Rate this Call</Text>
                        <AirbnbRating
                          count={5}
                          showRating={false}
                          defaultRating={5}
                          size={30}
                          selectedColor={'#FECB5C'}
                          starContainerStyle={{
                              width: responsiveWidth(70),
                              justifyContent: 'space-between',
                            }}
                        />
                    </View>
                    <View style={{gap: responsiveWidth(3)}}>
                        <Text style={{color: Colors.white, fontSize: responsiveFontSize(2), fontWeight: 'bold'}}>Write a review</Text>
                        <TextInput style={{textAlignVertical:'top',justifyContent: "flex-start", backgroundColor: 'white', borderRadius: responsiveWidth(2)}}
                          placeholder="write a review here"
                          multiline={true}
                          numberOfLines = {5}
                        />
                    </View>
                    <View style={{gap: responsiveWidth(3)}}>
                        <Button title="Submit Review" buttonStyle={{backgroundColor: Colors.darkBlue2}} />
                        <Button title="Back to home" buttonStyle={{backgroundColor: Colors.white}} titleStyle={{color: Colors.darkBlue2}} onPress={()=> navigation.navigate('UserDrawer')} />
                    </View>
                </View>
            </View>
        </ImageBackground>
    );
};

export default CallEnded;

const styles = StyleSheet.create({
    cover: {
        width: '100%',
        height: '100%',
    },
    image: {
        width: responsiveWidth(20),
        height: responsiveWidth(20),
        borderRadius: responsiveWidth(50),
        resizeMode: 'contain',
    },
    blurBackground: {
        flex: 1,
        paddingVertical: responsiveWidth(15),
        justifyContent: 'space-between',
        paddingHorizontal: responsiveWidth(5),
        gap: responsiveWidth(10),
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
});