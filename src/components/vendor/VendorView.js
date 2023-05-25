import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { Colors } from '../../constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import FocusStatusBar from '../FocusStatusBar';

const VendorView = ({children}) => {
  return (    
    <LinearGradient    
      colors={[Colors.primary, Colors.secondary]}
      style={styles.linearGradient}>                
      {children}        
    </LinearGradient>
  );
};

export default VendorView;

const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,        
    },
});