import React, {useState} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

const OTPInput = () => {
  const [otp, setOtp] = useState(['', '', '', '']);

  const handleChange = (value, index) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
  };

  return (
    <View style={styles.container}>
      {otp.map((digit, index) => (
        <TextInput
          key={index}
          style={styles.otpInput}
          maxLength={1}
          keyboardType="numeric"
          value={digit}
          onChangeText={value => handleChange(value, index)}
          placeholder={'-'}
          placeholderTextColor={'#2A4FD3'}
        />
      ))}
    </View>
  );
};

export default OTPInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginVertical: 10,
  },
  otpInput: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#2A4FD3',
    textAlign: 'center',
    marginHorizontal: 5,
    color: '#2A4FD3',
    fontWeight: '700',
  },
});
