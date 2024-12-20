import { StyleSheet } from "react-native";
import { blackLight, darkThemeColor, deviceHeight, separatorColor, SourceSansProRegular, SourceSansProSemiBold, white } from "../../constants";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: blackLight,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },
    subContainer: {
        backgroundColor: white,
        width: '90%',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 10,
        paddingBottom: 10,
    },
    alertBodyContainer: {
        marginVertical: '5%',
        width: '95%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    alertBodyText: {
        fontFamily: SourceSansProRegular,
        fontSize: 18,
        lineHeight: 20,
        textAlign: 'center',
        color: darkThemeColor,
    },
    separatorView: {
        height: 1,
        width: '100%',
        backgroundColor: separatorColor,
        marginTop: '5%',
    },
    singleButtonContainer: {
        flexDirection: 'row',
        width: '100%',
        height: deviceHeight * 0.0749,
    },
    leftRightButtonContainer: {
        flexDirection: 'row',
        width: '100%',
        height: deviceHeight * 0.0749,
        justifyContent: 'space-between',
    },
    doubleButtonContainer: {
        flexDirection: 'column',
        width: '100%',
        height: deviceHeight * 0.168,
    },
    button: {
        backgroundColor: white,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
    },
    halfButton: {
        backgroundColor: white,
        width: '45%',
        height: '100%',
        justifyContent: 'center',
    },
    halfHeightButton: {
        backgroundColor: white,
        width: '100%',
        height: '50%',
        justifyContent: 'center',
    },
    buttonText: {
        fontFamily: SourceSansProSemiBold,
        letterSpacing: 1,
    },
});