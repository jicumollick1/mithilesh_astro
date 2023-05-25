import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {responsiveWidth} from 'react-native-responsive-dimensions';

const AdminView = ({children}) => {
  return (
    <LinearGradient
      colors={['#5FA5F6', '#FFE821']}
      style={styles.linearGradient}>
      {children}
    </LinearGradient>
  );
};

export default AdminView;

const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
        paddingTop: responsiveWidth(12),
        borderRadius: 5,
    },
});