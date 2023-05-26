import * as React from 'react';
import {StatusBar, View} from 'react-native';
import {useIsFocused} from '@react-navigation/native';

function FocusStatusBar(props) {
  const isFocused = useIsFocused();
  return isFocused ? (
    <View style={{height: StatusBar.currentHeight}}>
      <StatusBar {...props} />
    </View>
  ) : null;
}

export default FocusStatusBar;
