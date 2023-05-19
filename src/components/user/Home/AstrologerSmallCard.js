import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import { Colors } from '../../../constants';
import { Button, Image } from 'react-native-elements';
import EntypoIcons from 'react-native-vector-icons/Entypo';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';

const AstrologerSmallCard = ({data}) => {
    const {name, image, type, rating, price, reviews, experience, speciality, status} = data;
    return(
        <View style={styles.card}>
            <View style={{position: 'absolute', left: 8, alignItems: 'center'}}>
                <Text style={{backgroundColor: Colors.darkBlue2, color: Colors.white, fontSize: responsiveFontSize(1.8), padding: responsiveWidth(1.5), fontWeight: 'bold'}}>{rating}</Text>
                <View style={styles.triangle}></View>
                <EntypoIcons name="star" size={responsiveWidth(3.5)} style={{position: 'absolute', bottom: responsiveWidth(2.2)}} color={'#FFBF41'} />
            </View>
            <View style={styles.pricingContainer}>
                <FontAwesomeIcons name="rupee" size={responsiveWidth(3.5)} color={Colors.Yellow} />
                <Text style={{color: Colors.white, fontWeight: 'bold'}}>{price}</Text>
            </View>
            <Image source={image} style={styles.cardImage} />
            <Text style={{color: Colors.black, fontSize: responsiveFontSize(2), fontWeight: 500}} >{name}</Text>
            <Text style={{color: Colors.black, fontSize: responsiveFontSize(1.5), fontWeight: 500}} >{type}</Text>
            <Text style={{color: Colors.black, fontSize: responsiveFontSize(1.5), fontWeight: 500}} >{speciality}</Text>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: responsiveWidth(1)}}>
                <Text style={{color: Colors.black, fontSize: responsiveFontSize(1.5), fontWeight: 500}} >{reviews} Reviews</Text>
                <Text style={{color: Colors.black, fontSize: responsiveFontSize(1.5), fontWeight: 500}} >|</Text>
                <Text style={{color: Colors.black, fontSize: responsiveFontSize(1.5), fontWeight: 500}} >Exp : {experience} Yrs</Text>
            </View>
            <View style={styles.online}>
                <View style={[styles.dot, {backgroundColor: Colors.white}]}></View>
                <Text style={{color: Colors.white}}>{status}</Text>
            </View>
            <Button title="Chat" buttonStyle={{backgroundColor: Colors.darkBlue2, borderRadius: responsiveWidth(2), paddingHorizontal: responsiveWidth(8), paddingVertical: responsiveWidth(0)}} />
        </View>
    );
};

export default AstrologerSmallCard;

const styles = StyleSheet.create({
    card: {
        backgroundColor: Colors.Yellow,
        alignItems: 'center',
        borderRadius: responsiveWidth(1),
        paddingHorizontal: responsiveWidth(4),
        paddingVertical: responsiveWidth(2),
        gap: responsiveWidth(1),
        width: responsiveWidth(50),
    },
    cardImage: {
        height: responsiveWidth(20),
        width: responsiveWidth(20),
        resizeMode: 'contain',
    },
    online: {
        backgroundColor: '#22C55E',
        borderRadius: responsiveWidth(1),
        flexDirection: 'row',
        alignItems: 'center',
        gap: responsiveWidth(1),
        paddingHorizontal: responsiveWidth(2),
        paddingVertical: responsiveWidth(0.5),
    },
    dot: {
        backgroundColor: Colors.white,
        width: responsiveWidth(3),
        height: responsiveWidth(3),
        borderRadius: responsiveWidth(3),
    },
    triangle: {
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderLeftWidth: responsiveWidth(4.5),
        borderRightWidth: responsiveWidth(4.5),
        borderBottomWidth: responsiveWidth(6),
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: Colors.white,
        transform: [
            {rotate: '180deg'}
        ]
    },
    pricingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: responsiveWidth(1),
        backgroundColor: Colors.darkBlue2,
        paddingLeft: responsiveWidth(3),
        paddingBottom: responsiveWidth(4),
        paddingTop: responsiveWidth(3),
        paddingRight: responsiveWidth(1),
        position: 'absolute',
        right: 0,
        borderBottomLeftRadius: responsiveWidth(50),
        borderBottomWidth: responsiveWidth(1),
        borderLeftWidth: responsiveWidth(1),
        borderColor: Colors.white,
    },
});