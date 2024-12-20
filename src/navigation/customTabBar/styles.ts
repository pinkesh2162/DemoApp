import { tabBarTopLineColor, white, SourceSansProRegular } from '../../constants';
import { isIphoneX } from 'react-native-iphone-x-helper';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    borderStyle: {
        height: 1,
        backgroundColor: tabBarTopLineColor,
    },
    tabContainer: {
        flexDirection: 'row',
        backgroundColor: white,
        height: isIphoneX() ? 75 : 65,
        justifyContent: 'center',
        alignItems: 'center',
    },
    tabItem: {
        flex: 1,
        alignItems: 'center',
    },
    icon: {
        height: 24,
        width: 24,
    },
    label: {
        width: '100%',
        marginBottom: isIphoneX() ? 5 : 0,
        textAlign: 'center',
        fontSize: 11,
        marginTop: 3,
        letterSpacing: 0.6,
        fontFamily: SourceSansProRegular,
        fontStyle: 'normal',
    },
});

