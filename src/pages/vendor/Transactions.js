import {View, Text, ScrollView, SafeAreaView} from 'react-native';
import React from 'react';
import AllTransactions from '../../components/vendor/AllTransactions';
import WhiteContainerStyles from '../../styles/WhiteContainerStyles';
import {
  responsiveFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {Button} from 'react-native-elements';
import {Colors} from '../../constants';
import ScreenHeader from '../../components/vendor/ScreenHeader';
import VendorView from '../../components/vendor/VendorView';
import FocusStatusBar from '../../components/FocusStatusBar';

const Transactions = () => {
  return (
    <VendorView>
      <SafeAreaView />
      <FocusStatusBar
        barStyle={'light-content'}
        backgroundColor={Colors.primary}
        translucent
      />
      <ScreenHeader title={'All Transactions'} />
      <View style={{flex: 1}}>
        <View
          style={[
            WhiteContainerStyles.container,
            {gap: responsiveWidth(5), paddingBottom: responsiveWidth(5)},
          ]}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: responsiveFontSize(2.5),
              color: Colors.black,
            }}>
            All Transactions
          </Text>
          <ScrollView>

          <AllTransactions />
          </ScrollView>
          <Button
            title="View More"
            buttonStyle={{
              backgroundColor: Colors.lightBlue,
              borderRadius: responsiveWidth(5),
              alignSelf: 'center',
              paddingHorizontal: responsiveWidth(5),
            }}
            titleStyle={{color: Colors.black}}
          />
        </View>
      </View>
    </VendorView>
  );
};

export default Transactions;
