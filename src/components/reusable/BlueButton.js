import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import React from 'react';
import {Fonts} from '../../constants';
import { useNavigation } from '@react-navigation/native';
const {width, height} = Dimensions.get('window');
const BlueButton = ({title, navigate}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={styles.blueButton} onPress={()=> navigation.navigate(navigate)} >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default BlueButton;
const styles = StyleSheet.create({
  blueButton: {
    width: width * 0.9,
    height: 43,
    backgroundColor: '#1C45EB',
    // box-shadow: 0px 4px 4px rgba(235, 235, 235, 0.25);
    borderRadius: 10,
    marginTop: 15
  },
  buttonText: {
    fontFamily: Fonts.ubuntuBold,
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: 16,
    lineHeight: 20,
    letterSpacing: 0.02,
    color: '#E9FAFF',
    textAlign: 'center',
    paddingTop: 10,
  },
});
