import { StyleSheet } from 'react-native';
import { darkTextColor, green, SourceSansPro, SourceSansProSemiBold } from '../../../constants';

export const styles = StyleSheet.create({
  leftContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  titleContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  subTitle: {
    marginTop: 4,
    color: '#A9A9A9',
    fontSize: 12,
    fontFamily: SourceSansPro,
  },
  backIcon: {
    width: 24,
    height: 24,
    tintColor: darkTextColor,
  },
  closeIcon: {
    width: 24,
    height: 24,
    tintColor: darkTextColor,
  },
  rightText: {
    lineHeight: 18,
    color: green,
    fontStyle: 'normal',
    marginRight: 24,
  },
  rightContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }
})
