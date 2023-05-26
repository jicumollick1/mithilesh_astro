import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { responsiveWidth } from 'react-native-responsive-dimensions';
import { Colors } from '../../../constants';
import { Image } from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
const Category = ({title, logo, screen}) => {
    const navigation = useNavigation();
    return(
        <TouchableOpacity activeOpacity={.8} style={{alignItems: 'center'}} onPress={()=> navigation.navigate(screen)} >
            <Image source={logo} style={styles.image} />
            <Text style={{color: Colors.white}}>{title}</Text>
        </TouchableOpacity>
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