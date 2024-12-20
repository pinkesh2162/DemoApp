import {StyleSheet} from 'react-native';
import {
  background,
  button_green,
  deviceWidth,
  SourceSansProSemiBold,
  white,
} from '../../../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: background,
  },
  tabIndicatorStyle: {
    backgroundColor: button_green,
    height: 2,
    left: 15,
  },
  tabBarStyle: {
    backgroundColor: white,
    marginTop: 10,
    borderTopWidth: 0,
    elevation: 0,
  },
  tabBarSubStyle: {
    width: 'auto',
  },
  tabTextStyle: {
    fontSize: 12,
    letterSpacing: 1.2,
    fontFamily: SourceSansProSemiBold,
    justifyContent: 'flex-start',
  },
  topView: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
  },
  titleStyle: {
    lineHeight: 40,
    letterSpacing: -0.05,
    textAlign: 'left',
    marginLeft: 24,
    // marginTop: -10,
  },
  topHeaderView: {
    height: 56,
    width: deviceWidth,
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'flex-end',
  },
  dotIconView: {
    width: 72,
    height: 56,
    justifyContent: 'center',
    alignSelf: 'flex-end',
  },
  dotIcon: {
    height: 25,
    width: 25,
    marginLeft: 30,
    resizeMode: 'contain',
  },
});

export default styles;
