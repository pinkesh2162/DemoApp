import React from 'react';
import {StatusBar, SafeAreaView, StatusBarProps} from 'react-native';
import {black, isAndroid, isIOS} from '../../constants';
import {styles} from './styles';

const StatusBars: React.FC<StatusBarProps> = props => {
  if (isIOS) return;
  return (
    <SafeAreaView style={[styles.container, {backgroundColor: black}]}>
      <StatusBar
        translucent
        backgroundColor={black}
        barStyle={isAndroid ? 'light-content' : 'dark-content'}
        {...props}
      />
    </SafeAreaView>
  );
};

export default StatusBars;
