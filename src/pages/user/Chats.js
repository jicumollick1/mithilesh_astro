import { View, Text, TextInput, Image, ScrollView } from 'react-native';
import React, {useState} from 'react';
import { UserView } from '../../components';
import TopNavigator from '../../components/user/TopNavigator';
import WhiteContainerStyles from '../../styles/WhiteContainerStyles';
import { Colors, Fonts, Images } from '../../constants';
import { responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import EntypoIcons from 'react-native-vector-icons/Entypo';
import FeatherIcons from 'react-native-vector-icons/Feather';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';
import EmojiSelector, { Categories } from "react-native-emoji-selector";
import Ionicons from 'react-native-vector-icons/Ionicons';

const Chats = ({navigation}) => {
    const [showEmoji, setShowEmoji] = useState(false);
    return (
        <UserView>
            <TopNavigator title={'Chats'} />
            <View style={[WhiteContainerStyles.container, {paddingHorizontal: responsiveWidth(0), paddingVertical: responsiveWidth(0), justifyContent: 'space-between'}]}>
                <View style={{flex: 1, paddingHorizontal: responsiveWidth(4), gap: responsiveWidth(3)}}>
                    <View style={{flexDirection: 'row', alignItems: 'center', gap: responsiveWidth(3), backgroundColor: Colors.darkBlue2, borderRadius: responsiveWidth(50), padding: responsiveWidth(2)}}>
                        <Image source={Images.Person1} style={{width: responsiveWidth(10), height: responsiveWidth(10), borderRadius: responsiveWidth(50)}} />
                        <View style={{flex: 1, justifyContent: 'space-between'}}>
                            <Text style={{color: Colors.white, fontWeight: 'bold'}}>Swetha</Text>
                            <Text style={{color: Colors.white}}>Online</Text>
                        </View>
                        <FeatherIcons name={'phone-call'} size={responsiveWidth(7)} color={Colors.white} style={{marginRight: responsiveWidth(3)}} onPress={()=> navigation.navigate('Calling')} />
                    </View>
                    <ScrollView style={{flex: 1}}>
                        <View style={{gap: responsiveWidth(5), paddingBottom: responsiveWidth(3)}}>
                            <View style={{gap: responsiveWidth(3)}}>
                                <Text style={{alignSelf: 'center', color: Colors.black, fontWeight: 'bold'}}>Today</Text>
                                <LeftChat image={Images.Person1} message={'Hello Guruji! Namaste'} time={'3.00pm'} />
                                <RightChat message={'Thanks , You will have a bright future and blessed with guru'} time={'3.00pm'} />
                            </View>
                            <View style={{gap: responsiveWidth(3)}}>
                                <Text style={{alignSelf: 'center', color: Colors.black, fontWeight: 'bold'}}>Today</Text>
                                <LeftChat image={Images.Person1} message={'Hello Guruji! Namaste'} time={'3.00pm'} />
                                <RightChat message={'Thanks , You will have a bright future and blessed with guru'} time={'3.00pm'} />
                            </View>
                            <View style={{gap: responsiveWidth(3)}}>
                                <Text style={{alignSelf: 'center', color: Colors.black, fontWeight: 'bold'}}>Today</Text>
                                <LeftChat image={Images.Person1} message={'Hello Guruji! Namaste'} time={'3.00pm'} />
                                <RightChat message={'Thanks , You will have a bright future and blessed with guru'} time={'3.00pm'} />
                            </View>
                            <View style={{gap: responsiveWidth(3)}}>
                                <Text style={{alignSelf: 'center', color: Colors.black, fontWeight: 'bold'}}>Today</Text>
                                <LeftChat image={Images.Person1} message={'Hello Guruji! Namaste'} time={'3.00pm'} />
                                <RightChat message={'Thanks , You will have a bright future and blessed with guru'} time={'3.00pm'} />
                            </View>
                        </View>
                    </ScrollView>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center', gap: responsiveWidth(5), backgroundColor: Colors.darkYellow, padding: responsiveWidth(5)}}>
                    <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', gap: responsiveWidth(3), backgroundColor: Colors.white, borderRadius: responsiveWidth(50), padding: responsiveWidth(2)}}>
                        {
                            showEmoji?
                                <EntypoIcons name={'keyboard'} size={responsiveWidth(5)} color={Colors.black} onPress={() => setShowEmoji(false)} />
                            :
                                <EntypoIcons name={'emoji-happy'} size={responsiveWidth(5)} color={Colors.black} onPress={()=> setShowEmoji(true)} />
                        }
                        <TextInput placeholder="Type message here..." placeholderTextColor={Colors.black} style={{flex: 1, padding: 0}} />
                        <FeatherIcons name={'mic'} size={responsiveWidth(5)} color={Colors.black} />
                        <EntypoIcons name={'attachment'} size={responsiveWidth(5)} color={Colors.black} />
                    </View>
                    <FontAwesomeIcons name={'send'} size={responsiveWidth(5)} color={Colors.black} />
                </View>
                {
                    showEmoji && (
                        <EmojiSelector
                            category={Categories.symbols}
                            onEmojiSelected={emoji => console.log(emoji)}
                        />
                    )
                }
            </View>
        </UserView>
    );
};

export default Chats;

const LeftChat = ({image, message, time}) => {
    return (
        <View style={{flexDirection: 'row', gap: responsiveWidth(1), width: responsiveWidth(70)}}>
            <Image source={image} style={{width: responsiveWidth(4), height: responsiveWidth(4), borderRadius: responsiveWidth(50)}} />
            <View style={{alignItems: 'flex-end'}}>
                <View style={{flexDirection: 'row', backgroundColor: Colors.darkBlue2, borderRadius: responsiveWidth(2), paddingHorizontal: responsiveWidth(2), paddingVertical: responsiveWidth(3), gap: responsiveWidth(3)}}>
                    <Text style={{color: Colors.white, fontFamily: Fonts.ubuntuRegular}}>{message}</Text>
                    <Ionicons name={'checkmark-done'} size={responsiveFontSize(2)} color={Colors.white} style={{alignSelf: 'flex-end'}} />
                </View>
                <Text style={{color: '#000', fontSize: responsiveFontSize(1.5)}}>{time}</Text>
            </View>
        </View>
    );
};

const RightChat = ({message, time}) => {
    return (
        <View style={{alignItems: 'flex-end', alignSelf: 'flex-end', width: responsiveWidth(60)}}>
            <View style={{flexDirection: 'row', backgroundColor: Colors.darkGrey, borderRadius: responsiveWidth(2), paddingHorizontal: responsiveWidth(2), paddingVertical: responsiveWidth(3), gap: responsiveWidth(3)}}>
                <Text style={{color: Colors.white, fontFamily: Fonts.ubuntuRegular}}>{message}</Text>
                <Text style={{color: Colors.white, alignSelf: 'flex-end', fontSize: responsiveFontSize(1.5)}}>{time}</Text>
            </View>
        </View>
    );
};
