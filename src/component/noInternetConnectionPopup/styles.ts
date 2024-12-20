import { StyleSheet } from "react-native";
import { backgroundGrey, blackLight, button_green, darkTextColor, deviceHeight, deviceWidth, SourceSansProRegular, SourceSansProSemiBold, textInputColor, white } from "../../constants";

export const styles = StyleSheet.create({
    container: {
        height: deviceHeight,
        width: deviceWidth,
        backgroundColor: blackLight,
        alignSelf: 'center',
        justifyContent: 'center',
    },
    quiteStockText: {
        marginTop: 15,
        letterSpacing: 0.08,
    },
    anyChangesText: {
        marginTop: 13,
        marginHorizontal: '12%',
    },
    borderStyle: {
        marginTop: 30,
        height: 1,
        width: '100%',
        borderColor: textInputColor,
        borderWidth: 1,
    },
    noStayButtonView: {
        width: '100%',
        height: 48,
        backgroundColor: button_green,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
        borderWidth: 0.5,
        borderColor: textInputColor,
    },
    noStayText: {
        lineHeight: 16,
        letterSpacing: 1.2,
    },
    imageStyle: {
        alignSelf: 'center',
        marginTop: 22,
    },
    disableInventoryView: {
        width: deviceWidth - 48,
        borderRadius: 14,
        borderWidth: 1,
        borderColor: backgroundGrey,
        alignSelf: 'center',
        backgroundColor: white,
    },
    disableInventoryBtnView: {
        flexDirection: 'row',
        marginHorizontal: 20,
        justifyContent: 'space-between',
    },
});
