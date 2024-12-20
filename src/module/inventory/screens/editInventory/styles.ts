import {StyleSheet} from 'react-native';
import {background, deviceWidth, textInputColor} from '../../../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  borderStyle: {
    borderColor: textInputColor,
    borderWidth: 1,
    width: deviceWidth - 48,
    alignSelf: 'center',
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
