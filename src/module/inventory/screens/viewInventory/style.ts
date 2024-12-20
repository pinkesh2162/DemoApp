import {StyleSheet} from 'react-native';
import {background} from '../../../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  productText: {
    alignSelf: 'center',
    textAlign: 'center',
    fontStyle: 'normal',
    marginTop: 8,
    lineHeight: 24,
  },
});

export default styles;
