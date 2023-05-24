import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import { UserView } from '../../components';
import TopNavigator from '../../components/user/TopNavigator';
import WhiteContainerStyles from '../../styles/WhiteContainerStyles';
import { Colors } from '../../constants';
import { Button } from '@rneui/themed';
import { responsiveFontSize, responsiveWidth } from 'react-native-responsive-dimensions';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';
import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5';
import AllTransactions from '../../components/user/Transactions/AllTransactions';

const Wallet = ({navigation}) => {
  return (
    <UserView>
      <TopNavigator title={'Wallet'} />
      <ScrollView>
        <View style={{backgroundColor: Colors.darkBlue2, padding: responsiveWidth(4), margin: responsiveWidth(5), borderRadius: responsiveWidth(2), gap: responsiveWidth(5)}}>
          <View style={{backgroundColor: Colors.Yellow, padding: responsiveWidth(3), borderRadius: responsiveWidth(2), gap: responsiveWidth(3)}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={{fontSize: responsiveFontSize(2.5), color: Colors.black}}>Wallet Balance</Text>
              <FontAwesome5Icons name={'wallet'} size={25} color={Colors.darkBlue2} ></FontAwesome5Icons>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: responsiveWidth(3)}}>
              <FontAwesomeIcons name={'rupee'} size={35} color={Colors.black} ></FontAwesomeIcons>
              <Text style={{color: Colors.black, fontSize: responsiveFontSize(3), fontWeight: 'bold'}}>1050.00</Text>
            </View>
          </View>
          <View style={{gap: responsiveWidth(4)}} >
              <Text style={{fontSize: responsiveFontSize(2.5), fontWeight: 'bold', color: Colors.white}}>Add Money to wallet</Text>
              <View style={[styles.addonBorder,{padding: 15, gap: 20}]}>
                <View style={[styles.addonBorder,{paddingHorizontal: 20, paddingVertical: 5, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}]}>
                  <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
                    <FontAwesomeIcons name={'rupee'} size={25} color={Colors.white} ></FontAwesomeIcons>
                    <Text style={{fontSize: 25, fontWeight: 'bold', color: Colors.white, textAlign: 'center'}}>1000</Text>
                  </View>
                  <Button title={'Apply Promo'} buttonStyle={{backgroundColor: 'transparent'}} titleStyle={{color: Colors.Yellow}} ></Button>
                </View>
                <View style={{flexDirection: 'row', gap: responsiveWidth(1), justifyContent: 'space-between'}}>
                  <AddonButton price={100} />
                  <AddonButton price={200} />
                  <AddonButton price={500} />
                  <AddonButton price={1000} />
                </View>
                <Button buttonStyle={{backgroundColor: Colors.Yellow, borderRadius: responsiveWidth(2)}} titleStyle={{color: Colors.black, fontSize: responsiveFontSize(2), fontWeight: 'bold'}} >Proceed to add {<FontAwesomeIcons name={'rupee'} size={20} color={Colors.black} ></FontAwesomeIcons>} 1000</Button>
              </View>
            </View>
          </View>
          <View style={[WhiteContainerStyles.container, {gap: responsiveWidth(5), paddingBottom: responsiveWidth(5)}]}>
            <Text style={{fontWeight: 'bold', fontSize: responsiveFontSize(2.5), color: Colors.black}}>Recent transactions</Text>
            <AllTransactions length={6} />
            <Button title={'See all transctions'} buttonStyle={{backgroundColor: Colors.darkBlue2, borderRadius: responsiveWidth(3)}} onPress={()=> navigation.navigate('Transactions')} ></Button>
          </View>
      </ScrollView>
    </UserView>
  );
};

export default Wallet;

const AddonButton = ({price}) => {
  return (
    <Button title={`+${price}`} buttonStyle={[styles.addonBorder, {backgroundColor: 'transparent', borderRadius: responsiveWidth(50), paddingHorizontal: 15, paddingVertical: 5}]} titleStyle={{color: Colors.white, fontWeight: 'bold'}} ></Button>
  );
};

const styles = StyleSheet.create({
  addonBorder: {
    borderWidth: 1,
    borderColor: Colors.Yellow,
    borderRadius: 10,
  },
});
