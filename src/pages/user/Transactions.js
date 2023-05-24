import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import { UserView } from '../../components';
import AllTransactions from '../../components/user/Transactions/AllTransactions';
import TopNavigator from '../../components/user/TopNavigator';
import WhiteContainerStyles from '../../styles/WhiteContainerStyles';
import { responsiveFontSize, responsiveWidth } from 'react-native-responsive-dimensions';
import { Button } from 'react-native-elements';
import { Colors } from '../../constants';

const Transactions = () => {
    return (
        <UserView>
            <TopNavigator title={'Transactions'} />
            <View style={{flex: 1}}>
                <View style={[WhiteContainerStyles.container, {gap: responsiveWidth(5), paddingBottom: responsiveWidth(5)}]}>
                    <Text style={{fontWeight: 'bold', fontSize: responsiveFontSize(2.5), color: Colors.black}}>Recent transactions</Text>
                    <AllTransactions />
                    <Button title="View More" buttonStyle={{backgroundColor: Colors.lightBlue, borderRadius: responsiveWidth(5), alignSelf: 'center', paddingHorizontal: responsiveWidth(5)}}  titleStyle={{color: Colors.black}}/>
                </View>
            </View>
        </UserView>
    );
};

export default Transactions;