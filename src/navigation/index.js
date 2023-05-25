import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import User from '../routes/User';
import OnboardingScreen from '../pages/OnboardingScreen';
import WelcomeScreen from '../pages/WelcomeScreen';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import UserDrawer from './UserDrawer';
import Context from '../context/context';
import VerifyOtp from '../pages/VerifyOtp';
import Step2 from '../pages/Step2';
import Step1 from '../pages/Step1';
import Step3 from '../pages/Step3';
import Vendor from '../routes/Vendor';
const Stack = createStackNavigator();

const data = {};
const Navigators = () => {
  return (
    <Context.Provider value={data}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name={'Vendor'} component={Vendor} />
          <Stack.Screen name={'User'} component={User} />
          <Stack.Screen name={'OnboardingScreen'} component={OnboardingScreen} />
          <Stack.Screen name={'WelcomeScreen'} component={WelcomeScreen} />
          <Stack.Screen name={'Login'} component={Login} />
          <Stack.Screen name={'SignUp'} component={SignUp} />
          <Stack.Screen name={'VerifyOtp'} component={VerifyOtp} />
          <Stack.Screen name={'Step1'} component={Step1} />
          <Stack.Screen name={'Step2'} component={Step2} />
          <Stack.Screen name={'Step3'} component={Step3} />
        </Stack.Navigator>
      </NavigationContainer>
    </Context.Provider>
  );
};

export default Navigators;
