import { View, Text } from 'react-native'
import React from 'react'
import FeatherIcons from 'react-native-vector-icons/Feather';
import { responsiveFontSize, responsiveWidth } from 'react-native-responsive-dimensions';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const TopNavigationBar = () => {
  const navigation = useNavigation();
  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: responsiveWidth(4)}}>
        <TouchableOpacity style={{backgroundColor:'#3565E9', borderRadius: responsiveWidth(10), padding: responsiveWidth(2)}} onPress={()=> navigation.openDrawer()} >
            <Text style={{color: '#fff', fontWeight: 'bold', fontSize: responsiveFontSize(3)}}>VK</Text>
        </TouchableOpacity>
        <View style={{flexDirection: 'row', gap: responsiveWidth(5)}}>
            <FeatherIcons name="search" size={responsiveFontSize(5)} color="#fff" onPress={()=> navigation.navigate('Search')} />
            <FeatherIcons name="bell" size={responsiveFontSize(5)} color="#fff" onPress={()=> navigation.navigate('Notifications')} />
        </View>
    </View>
  )
}

export default TopNavigationBar