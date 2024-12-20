import {StyleSheet} from 'react-native';
import {
  background,
  darkTextColor,
  deviceWidth,
  textInputColor,
  white,
} from '../../../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: background,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backIcon: {
    width: 24,
    height: 24,
    tintColor: darkTextColor,
  },
  headerTitle: {
    fontSize: 18,
    color: darkTextColor,
    // fontWeight: 'bold',
  },
  titleContainer: {
    alignItems: 'flex-start',
  },
  inputContainer: {
    padding: 16,
    justifyContent: 'space-between',
    flex: 1,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: textInputColor,
    marginBottom: 16,
    fontSize: 16,
  },
  errorInput: {
    borderBottomColor: 'red',
  },
  loginButton: {
    backgroundColor: 'green',
    color: white,
    padding: 16,
    textAlign: 'center',
    borderRadius: 8,
  },
  forgotView: {
    alignItems: 'flex-end',
    width: deviceWidth - 48,
    height: 28,
  },
  forgetText: {
    padding: 5,
    paddingTop: 0,
  },
});

export default styles;
