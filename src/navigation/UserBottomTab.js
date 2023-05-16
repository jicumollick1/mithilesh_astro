import React, {useRef, useContext, useEffect} from 'react';
import {View, Text, Image, Animated, Dimensions, Platform} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {t} from 'i18next';
import {Icons} from '../constants';
import Separator from '../components/Separator';
import Home from '../pages/user/Home';
import Phone from '../pages/user/Phone';
import Profile from '../pages/user/Profile';
import Wallet from '../pages/user/Wallet';
const Tab = createBottomTabNavigator();
const UserBottomTab = ({navigation}) => {
  // animated tab indicator
  const tabOffsetValue = useRef(new Animated.Value(0)).current;

  function getWidth() {
    let width = Dimensions.get('window').width;
    width = responsiveWidth(100);
    return width / 5;
  }
  return (
    <>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => {
            let activeIcon, inActiveIcon, name;
            if (route.name === 'Home') {
              inActiveIcon = Icons.homeFilled;
              activeIcon = Icons.homeFilled;
              name = 'Home';
            } else if (route.name === 'Phone') {
              inActiveIcon = Icons.phone;
              activeIcon = Icons.phone;
              name = 'Phone';
            } else if (route.name === 'Wallet') {
              inActiveIcon = Icons.wallet;
              activeIcon = Icons.wallet;
              name = 'Wallet';
            } else if (route.name === 'Profile') {
              inActiveIcon = Icons.profile;
              activeIcon = Icons.profile;
              name = 'Profile';
            }
            return (
              <View
                style={{
                  alignItems: 'center',
                  height: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: getWidth(),
                  paddingTop: responsiveWidth(4),
                }}>
                <Image
                  style={{
                    height: responsiveWidth(5),
                    width: responsiveWidth(5),
                    tintColor: focused ? 'blue' : '#fff',
                  }}
                  source={focused ? activeIcon : inActiveIcon}
                />
                <Separator height={responsiveWidth(2)} />
                <Text
                  style={{
                    color: focused ? 'blue' : '#fff',
                    fontSize: responsiveFontSize(1.4),
                  }}>
                  {name}
                </Text>
                <Separator height={5} />
              </View>
            );
          },
          tabBarStyle: {
            backgroundColor: 'yellow',
            height:
              Platform.OS === 'ios' ? responsiveWidth(25) : responsiveWidth(14),
            borderTopWidth: 0,
            elevation: 0,
          },
          tabBarActiveTintColor: 'red',
          tabBarInactiveTintColor: 'grey',
          headerShown: false,
          gestureEnabled: false,
        })}>
        <Tab.Screen
          listeners={({navigation, route}) => ({
            tabPress: e => {
              Animated.spring(tabOffsetValue, {
                toValue: 0,
                useNativeDriver: true,
              }).start();
            },
          })}
          name="Home"
          component={Home}
        />
        <Tab.Screen
          listeners={({navigation, route}) => ({
            tabPress: e => {
              Animated.spring(tabOffsetValue, {
                toValue: getWidth() * 1.25,
                useNativeDriver: true,
              }).start();
            },
          })}
          name="Phone"
          component={Phone}
        />
        <Tab.Screen
          listeners={({navigation, route}) => ({
            tabPress: e => {
              Animated.spring(tabOffsetValue, {
                toValue: getWidth() * 2.5,
                useNativeDriver: true,
              }).start();
            },
          })}
          name="Wallet"
          component={Wallet}
        />
        <Tab.Screen
          listeners={({navigation, route}) => ({
            tabPress: e => {
              Animated.spring(tabOffsetValue, {
                toValue: getWidth() * 3.75,
                useNativeDriver: true,
              }).start();
            },
          })}
          name="Profile"
          component={Profile}
        />
      </Tab.Navigator>
      <Animated.View
        style={{
          width: getWidth() / 2.5,
          height: responsiveHeight(0.6),
          backgroundColor: 'blue',
          left: responsiveWidth(8),
          transform: [{translateX: tabOffsetValue}],
          bottom:
            Platform.OS === 'ios' ? responsiveWidth(22) : responsiveWidth(13),
          position: 'absolute',
        }}
      />
    </>
  );
};

export default UserBottomTab;
