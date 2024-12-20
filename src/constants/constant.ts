import {Dimensions, Platform} from 'react-native';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const aspectHeight = Dimensions.get('window').height / 667;
const aspectWidth = Dimensions.get('window').width / 375;

const isAndroid = Platform.OS === 'android';
const isIOS = Platform.OS === 'ios';

const behavior = isIOS ? 'padding' : 'height';
const keyboardVerticalOffset = 90;

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const successTitle = 'Success';
const errorTitle = 'Oops!';

export {
  deviceHeight,
  deviceWidth,
  aspectHeight,
  aspectWidth,
  isAndroid,
  isIOS,
  emailRegex,
  successTitle,
  errorTitle,
  behavior,
  keyboardVerticalOffset,
};
