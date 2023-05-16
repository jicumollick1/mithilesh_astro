import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import User from '../routes/User';
import OnboardingScreen from '../pages/OnboardingScreen';
import WelcomeScreen from '../pages/WelcomeScreen';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import UserDrawer from './UserDrawer';

const Stack = createStackNavigator();

const Navigators = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: true}}>
        <Stack.Screen name={'OnboardingScreen'} component={OnboardingScreen} />
        <Stack.Screen name={'WelcomeScreen'} component={WelcomeScreen} />
        <Stack.Screen name={'Login'} component={Login} />
        <Stack.Screen name={'SignUp'} component={SignUp} />
        <Stack.Screen name={'User'} component={User} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigators;
