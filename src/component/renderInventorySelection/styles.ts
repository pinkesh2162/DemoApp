import { StyleSheet } from 'react-native';
import {
    aspectWidth,
    borderColor,
    button_green,
    darkTextColor,
    deviceWidth,
    SourceSansProRegular,
    SourceSansProSemiBold,
    textGrey,
    textInputColor,
    white,
} from '../../constants';

const styles = StyleSheet.create({
    emptyView: {
        paddingLeft: 24
    },
    titleText: {
        fontSize: 32,
        lineHeight: aspectWidth * 40,
        width: deviceWidth - 48,
        fontFamily: SourceSansProSemiBold,
        letterSpacing: -0.05,
        color: darkTextColor
    },
    productText: {
        width: deviceWidth - 48,
        marginTop: 24,
        fontSize: 12,
        lineHeight: 16,
        color: textGrey,
        fontFamily: SourceSansProSemiBold,
        letterSpacing: 1.2,
        alignSelf: 'center',
    },
    textInput: {
        marginTop: 4,
        width: deviceWidth - 48,
        height: 48,
        borderColor: borderColor,
        borderWidth: 1,
        borderRadius: 4,
        paddingLeft: 16,
        justifyContent: 'center'
    },
    bottomButton: {
        width: deviceWidth - 48,
        backgroundColor: button_green,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        marginTop: 10,
        alignSelf: 'center',
        zIndex: 1000,
    },
    continueText: {
        marginTop: 16,
        marginBottom: 16,
        fontSize: 16,
        lineHeight: 20,
        color: white,
        fontFamily: SourceSansProSemiBold,
        letterSpacing: 1.02,
    },
    textStyle: {
        fontSize: 16,
        lineHeight: 24,
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontFamily: SourceSansProRegular,
        width: '90%',
        alignSelf: 'center',
    },
    imageStyle: {
        alignSelf: 'center',
        resizeMode: 'contain',
    },
    topProductText: {
        fontSize: 18,
        lineHeight: 24,
        fontFamily: SourceSansProSemiBold,
        fontStyle: 'normal',
        letterSpacing: -0.05,
        color: darkTextColor,
        marginLeft: 24,
    },
    borderStyle: {
        width: '100%',
        height: 1,
        backgroundColor: textInputColor,
        marginTop: 8,
    },
});

export default styles;
