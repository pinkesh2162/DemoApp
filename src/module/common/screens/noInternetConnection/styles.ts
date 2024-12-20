import { StyleSheet } from "react-native";
import { button_green, darkTextColor, deviceWidth, SourceSansProSemiBold, textGrey, white } from "../../../../constants";

export const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: white,
    },
    content: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    noInternetText: {
        lineHeight: 24,
        marginTop: 10,
        fontStyle: 'normal'
    },
    retryButton: {
        height: 48,
        width: deviceWidth * 0.26,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: button_green,
        marginTop: 15,
    },
    retryButtonText: {
        letterSpacing: 1.2,
        marginVertical: 16
    },
});