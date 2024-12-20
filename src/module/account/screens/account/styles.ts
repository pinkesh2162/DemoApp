import { StyleSheet } from 'react-native';
import { background, buttonBackColor, white } from '../../../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: background,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginRight: 10,
  },
  info: {
    fontSize: 16,
  },
  button: {
    marginTop: 30,
    paddingVertical: 12,
    backgroundColor: buttonBackColor,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: white,
    fontSize: 16,
    fontWeight: '600',
  },
});

export default styles;
