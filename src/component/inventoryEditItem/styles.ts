import { StyleSheet } from "react-native";
import { darkTextColor, deviceWidth, SourceSansProRegular, SourceSansProSemiBold, textGrey, textInputColor, white } from "../../constants";

export const styles = StyleSheet.create({
    mainView: {
        width: '100%',
        padding: 24,
        backgroundColor: white,
    },
    titleStyle: {
        fontSize: 20,
        fontFamily: SourceSansProSemiBold,
        letterSpacing: -0.06,
        lineHeight: 28,
        color: darkTextColor,
    },
    descriptionText: {
        fontSize: 14,
        lineHeight: 20,
        fontFamily: SourceSansProRegular,
        color: textGrey,
    },
    arrowView: {
        justifyContent: 'center',
        alignItems: 'center'
    }
});