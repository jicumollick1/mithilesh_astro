import { View, Text, TextInput, Image, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import React, {useState} from 'react';
import WhiteContainerStyles from '../../styles/WhiteContainerStyles';
import { responsiveFontSize, responsiveWidth } from 'react-native-responsive-dimensions';
import { Colors, Icons, Images } from '../../constants';
import { Button, SearchBar } from 'react-native-elements';
import FeatherIcons from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import VendorView from '../../components/vendor/VendorView';
import { ScreenHeader } from '../../components/vendor/Home';
import FocusStatusBar from '../../components/FocusStatusBar';
const Astrologers = [
    {
        name: 'Sivan',
        image: Images.Person1,
    },
    {
        name: 'Girish',
        image: Images.Person2,
    },
    {
        name: 'Girish',
        image: Images.Person3,
    },
    {
        name: 'Monika',
        image: Images.Person4,
    },
    {
        name: 'Prem',
        image: Images.Person5,
    },
    {
        name: 'Tilak',
        image: Images.Person6,
    },
];

const LiveChatCalls = ({navigation}) => {
    const [searchText, setSearchText] = useState('');
    const [selected, setSelected] = useState('Live chats');
    return (
        <VendorView>
        <SafeAreaView />
        <FocusStatusBar
            barStyle={'light-content'}
            backgroundColor={Colors.primary}
            translucent
        />
         <ScreenHeader title={'Live Chats & Calls'} />
            <View style={{flex: 1, gap: responsiveWidth(6)}}>
                <View style={{paddingHorizontal: responsiveWidth(2), gap: responsiveWidth(5)}}>
                    <SearchBar  searchIcon={<Image source={Icons.vSearchBlack}  style={{width:responsiveWidth(7),height:responsiveWidth(7),resizeMode:'contain'}}/> }  placeholderTextColor={Colors.black} placeholder='Search Messages..' inputContainerStyle={{fontSize:responsiveFontSize(1.8),backgroundColor:Colors.white,borderRadius:responsiveWidth(10),paddingHorizontal:responsiveWidth(2)}} round lightTheme      containerStyle={{backgroundColor: null,borderTopWidth:null,borderBottomWidth:null}}/>
                    <View style={{gap: responsiveWidth(3),paddingHorizontal: responsiveWidth(3)}}>
                        <Text style={{color: Colors.white, fontWeight: 'bold', fontSize: responsiveFontSize(2)}}>Recents</Text>
                        <View style={{flexDirection: 'row', gap: responsiveWidth(4)}}>
                            {
                                Astrologers.slice(0,6).map((item, index) => (
                                    <AstrologerIcon key={index} image={item.image} name={item.name} />
                                ))
                            }
                        </View>
                    </View>
                </View>
                <View style={[WhiteContainerStyles.container, {gap: responsiveWidth(3)}]}>
                    <View style={{flexDirection: 'row', gap: responsiveWidth(5)}}>
                        <Button title={"Live Chats"} buttonStyle={{backgroundColor: Colors.white, padding: 0}} titleStyle={{color: selected==='Live chats'?Colors.black:'rgba(37, 38, 43, 0.75)', fontWeight: 'bold', fontSize: responsiveFontSize(2), borderBottomColor: selected==='Live chats'?Colors.primary:Colors.white, borderBottomWidth: responsiveWidth(1)}} onPress={()=> setSelected('Live chats')} />
                        <Button title={"Audio Call"} buttonStyle={{backgroundColor: Colors.white, padding: 0}} titleStyle={{color: selected==='Audio Call'?Colors.black:'rgba(37, 38, 43, 0.75)', fontWeight: 'bold', fontSize: responsiveFontSize(2), borderBottomColor: selected==='Audio Call'?Colors.primary:Colors.white, borderBottomWidth: responsiveWidth(1)}} onPress={()=> setSelected('Audio Call')} />
                    </View>
                    <ScrollView  showsVerticalScrollIndicator={false}>
                        {
                            Astrologers.map((item, index) => (
                                <Chat key={index} image={item.image} name={item.name} message={'Hello, I am facing some issues in my life. Can you please help me?'} time={'10:00 AM'} onClick={()=>navigation.navigate('Chats')} />
                            ))
                        }
                    </ScrollView>
                </View>
            </View>
        </VendorView>
    );
};

export default LiveChatCalls;

const AstrologerIcon = ({image, name, onPress}) => {
    return (
        <TouchableOpacity style={{alignItems: 'center', justifyContent: 'center', gap: responsiveWidth(1)}}>
            <Image source={image} style={{width: responsiveWidth(12), height: responsiveWidth(12), borderRadius: responsiveWidth(15)}} />
            <Text style={{color: Colors.white, fontWeight: 'bold', fontSize: responsiveFontSize(1.5)}}>{name}</Text>
        </TouchableOpacity>
    );
};

const Chat = ({image, name, message, time, onClick}) => {
    return (
        <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center', gap: responsiveWidth(3), borderBottomColor: Colors.darkBlue2, borderBottomWidth: responsiveWidth(0.1), paddingVertical: responsiveWidth(3)}} onPress={onClick} >
            <Image source={image} style={{width: responsiveWidth(12), height: responsiveWidth(12), borderRadius: responsiveWidth(15)}} />
            <View style={{flex: 1, gap: responsiveWidth(1)}}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                    <Text style={{color: Colors.black, fontWeight: 'bold', fontSize: responsiveFontSize(1.7)}}>{name}</Text>
                    <Text style={{color: Colors.black, fontWeight: 500, fontSize: responsiveFontSize(1.5)}}>{time}</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center', gap: responsiveWidth(1)}}>
                    <Ionicons name={'checkmark-done'} size={responsiveFontSize(2)} color={Colors.primary} />
                    <Text style={{color: Colors.black, fontSize: responsiveFontSize(1.5)}}>{message.slice(0,50)}{message.length>=50?'...':''}</Text> 
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    searchContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: Colors.white,
      paddingHorizontal: responsiveWidth(3),
      borderRadius: responsiveWidth(50),
      gap: responsiveWidth(2),
      flex: 1,
    },
});