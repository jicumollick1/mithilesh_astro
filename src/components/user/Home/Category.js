import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { responsiveWidth } from 'react-native-responsive-dimensions';
import { Colors } from '../../../constants';
import { Image } from 'react-native-animatable';

const Category = ({title, logo}) => {
    return(
        <View style={{alignItems: 'center'}}>
            <Image source={logo} style={styles.image} />
            <Text style={{color: Colors.white}}>{title}</Text>
        </View>
    );
};

export default Category

const styles = StyleSheet.create({
    image: {
        height: responsiveWidth(20),
        width: responsiveWidth(20),
        resizeMode: 'contain',
    },
});