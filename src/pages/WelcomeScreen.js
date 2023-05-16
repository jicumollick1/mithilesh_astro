import {View, Text, Button} from 'react-native';
import React from 'react';

const WelcomeScreen = ({navigation}) => {
  return (
    <View>
      <Text>WelcomeScreen</Text>

      <Button title="Login" onPress={navigation.navigate('Login')} />
      <Button title="Register"  onPress={navigation.navigate('SignUp')}/>
    </View>
  );
};

export default WelcomeScreen;
