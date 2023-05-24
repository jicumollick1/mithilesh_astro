import { View, Text, StyleSheet } from 'react-native';
import React, {useState} from 'react';
import { UserView } from '../../components';
import TopNavigator from '../../components/user/TopNavigator';
import WhiteContainerStyles from '../../styles/WhiteContainerStyles';
import { responsiveFontSize, responsiveWidth } from 'react-native-responsive-dimensions';
import { Colors, Images } from '../../constants';
import { Image } from 'react-native-elements';

const Kundli = () => {
    const [chart, setChart] = useState('lagna')
    return (
        <UserView>
            <TopNavigator title={'Kundli'} />
            <View style={[WhiteContainerStyles.container, {gap: responsiveWidth(5)}]}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={{fontWeight: 'bold', fontSize: responsiveFontSize(2.5), color: Colors.black, paddingBottom: responsiveWidth(1), borderBottomWidth: responsiveWidth(chart==='lagna'?1:0), borderColor: Colors.darkBlue2}} onPress={()=> setChart('lagna')} >Lagna Chart</Text>
                    <Text style={{fontWeight: 'bold', fontSize: responsiveFontSize(2.5), color: Colors.black, paddingBottom: responsiveWidth(1), borderBottomWidth: responsiveWidth(chart==='navamsa'?1:0), borderColor: Colors.darkBlue2}} onPress={()=> setChart('navamsa')} >Navamsa Chart</Text>
                </View>
                {
                    chart === 'lagna' && 
                    <View style={{gap: responsiveWidth(5)}}>
                        <Image source={Images.KundliChart} style={styles.chartImage} />
                        <View style={{backgroundColor: Colors.lightYellow, padding: responsiveWidth(3), gap: responsiveWidth(4), borderRadius: responsiveWidth(1)}}>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                <ColoredText text={'La 23  38’11”'} color={'#833212'} />
                                <ColoredText text={'Su 03  26’57’’'} color={'#9E2424'} />
                                <ColoredText text={'Mo 28  51’28’’'} color={'#4A6E99'} />
                            </View>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                <ColoredText text={'Ma 23  38’11”'} color={'#1D634A'} />
                                <ColoredText text={'Me 03  26’57’’'} color={'#4A6E99'} />
                                <ColoredText text={'Ju 28  51’28’’'} color={'#C163AF'} />
                            </View>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                <ColoredText text={'Ve 23  38’11”'} color={'#1D634A'} />
                                <ColoredText text={'Sa 03  26’57’’'} color={'#833212'} />
                                <ColoredText text={'Ra 28  51’28’’'} color={'#833212'} />
                            </View>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                <ColoredText text={'Ke 23  38’11”'} color={'#833212'} />
                                <ColoredText text={'Ur 03  26’57’’'} color={'#9E2424'} />
                                <ColoredText text={'Ne 28  51’28’’'} color={'#1D634A'} />
                            </View>
                        </View>
                    </View>
                }
                {
                    chart === 'navamsa' &&
                    <View>
                        <Image source={Images.KundliChart} style={styles.chartImage} />
                    </View>
                }
            </View>
        </UserView>
    );
};

export default Kundli;

const ColoredText = ({text, color}) => {
    return (
        <Text style={{color: color, fontWeight: 'bold'}}>{text}</Text>
    );
};

const styles = StyleSheet.create({
    chartImage: {
        width: responsiveWidth(100),
        height: responsiveWidth(100),
        resizeMode: 'contain'
    },
});