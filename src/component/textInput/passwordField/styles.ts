import { StyleSheet } from "react-native";
import { aspectWidth, deviceHeight, deviceWidth, errorTextColor, SourceSansProRegular, textGrey, textInputColor } from "../../../constants";

export const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
        alignSelf: "center"
    },
    textInputTitle: {
        fontSize: aspectWidth * 12,
        lineHeight: deviceWidth * 0.03865,
        color: textGrey,
        fontFamily: SourceSansProRegular,
        letterSpacing: 1,
    },
    textErrorTitle: {
        fontSize: aspectWidth * 14,
        lineHeight: deviceWidth * 0.03865,
        color: errorTextColor,
        textAlign: 'right',
        fontFamily: SourceSansProRegular,
    },
    textInput: {
        marginTop: 4,
        height: deviceHeight * 0.0536,
        borderWidth: 0,
        borderRadius: 4,
        paddingLeft: 16,
        fontFamily: SourceSansProRegular,
        fontSize: aspectWidth * 16,
    },
    passwordView: {
        marginTop: 4,
        width: deviceWidth - 48,
        flexDirection: 'row',
        borderColor: textInputColor,
        borderWidth: 1,
        borderRadius: 4,
    },
    eyeIconView: {
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    eyeIcon: {
        height: 25,
        width: 25,
        resizeMode: 'contain',
    },
});