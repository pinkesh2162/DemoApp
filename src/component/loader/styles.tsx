import {StyleSheet} from 'react-native';
import {deviceWidth, transBack} from '../../constants';

export const styles = StyleSheet.create({
  loading: {
    position: 'absolute',
    height: '100%',
    width: deviceWidth,
    alignSelf: 'center',
    backgroundColor: transBack,
  },
});
