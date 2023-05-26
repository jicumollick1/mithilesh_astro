import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {Colors, Images} from '../../../constants';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';
import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5';

const TransactionData = [
  {
    title: 'Money added to wallet',
    image: Images.Person1,
    time: '08 May, 12:35 pm',
    money: 250,
    type: 'credit',
  },
  {
    title: 'Paid for Live chat with Shivam Ji',
    image: Images.Person2,
    time: '08 May, 12:35 pm',
    money: 250,
    type: 'debit',
  },
  {
    title: 'Money added to wallet',
    image: Images.Person1,
    time: '08 May, 12:35 pm',
    money: 250,
    type: 'credit',
  },
  {
    title: 'Paid for Live chat with Shivam Ji',
    image: Images.Person2,
    time: '08 May, 12:35 pm',
    money: 250,
    type: 'debit',
  },
  {
    title: 'Money added to wallet',
    image: Images.Person1,
    time: '08 May, 12:35 pm',
    money: 250,
    type: 'credit',
  },
  {
    title: 'Paid for Live chat with Shivam Ji',
    image: Images.Person2,
    time: '08 May, 12:35 pm',
    money: 250,
    type: 'debit',
  },
  {
    title: 'Money added to wallet',
    image: Images.Person1,
    time: '08 May, 12:35 pm',
    money: 250,
    type: 'credit',
  },
  {
    title: 'Paid for Live chat with Shivam Ji',
    image: Images.Person2,
    time: '08 May, 12:35 pm',
    money: 250,
    type: 'debit',
  },
];

const AllTransactions = ({length}) => {
  return (
    <View style={{gap: responsiveWidth(3)}}>
      {TransactionData.slice(0, length ? length : TransactionData.length).map(
        (item, index) => {
          return (
            <Transaction
              key={index}
              title={item.title}
              image={item.image}
              time={item.time}
              money={item.money}
              type={item.type}
            />
          );
        },
      )}
    </View>
  );
};

export default AllTransactions;

const Transaction = ({title, image, time, money, type}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        borderBottomWidth: responsiveWidth(0.1),
        borderBottomColor: Colors.black,
        gap: responsiveWidth(3),
        paddingBottom: responsiveWidth(3),
      }}>
      <Image source={image} style={styles.image} />
      <View style={{flex: 1}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text
            style={{
              fontSize: responsiveFontSize(1.8),
              fontWeight: 'bold',
              color: Colors.black,
            }}>
            {title}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: responsiveWidth(1),
            }}>
            <Text
              style={{
                fontSize: responsiveFontSize(1.5),
                color: Colors.black,
                fontWeight: 'bold',
              }}>
              {type === 'debit' ? '-' : '+'}
            </Text>
            <FontAwesomeIcons
              name={'rupee'}
              size={12}
              color={Colors.black}></FontAwesomeIcons>
            <Text
              style={{
                fontSize: responsiveFontSize(1.5),
                color: Colors.black,
                fontWeight: 'bold',
              }}>
              {money}
            </Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text
            style={{fontSize: responsiveFontSize(1.6), color: Colors.black}}>
            {time}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: responsiveWidth(2),
            }}>
            <Text
              style={{
                fontSize: responsiveFontSize(1.5),
                color: Colors.black,
                fontWeight: 'bold',
              }}>
              {type === 'debit' ? 'Debited from' : 'Added from'}
            </Text>
            <FontAwesome5Icons
              name={'wallet'}
              size={15}
              color={Colors.darkBlue2}></FontAwesome5Icons>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: responsiveWidth(8),
    height: responsiveWidth(8),
    borderRadius: responsiveWidth(50),
  },
});
