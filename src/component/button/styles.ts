import { StyleSheet } from "react-native";
import { deviceWidth, button_green, white, SourceSansProSemiBold } from "../../constants";

export const styles = StyleSheet.create({
    button: {
        borderRadius: 4,
        width: deviceWidth - 48,
        backgroundColor: button_green,
        alignSelf: "center"
    },
    buttonText: {
        color: white,
        marginVertical: 16,
        fontFamily: SourceSansProSemiBold,
        fontSize: 16,
        textAlign: 'center',
    },
});