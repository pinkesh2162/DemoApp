import { StyleSheet } from 'react-native';
import { background, deviceWidth } from '../../../../constants';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: background,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    centerView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 48,
    },
    image: {
        height: 110,
        width: 150,
        resizeMode: 'contain',
    },
    titleText: {
        marginTop: 38,
    },
    subTitleText: {
        marginTop: 5
    },
    buttonView: {
        marginBottom: deviceWidth * 0.2
    }
});

export default styles;