import { StyleSheet } from "react-native";
import { darkTextColor, deviceHeight, deviceWidth, isIOS, SourceSansPro, textInputColor, transBack, white } from "../../constants";

export const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: transBack,
        justifyContent: "flex-end",
    },
    container: {
        backgroundColor: white,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        paddingBottom: isIOS ? 20 : 0,
        overflow: "hidden"
    },
    topHeaderView: {
        height: 56,
        width: '100%',
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center"
    },
    ImageView: {
        height: 56,
        justifyContent: 'center',
    },
    arrowImage: {
        marginLeft: 24,
        resizeMode: 'contain',
    },
    cellView: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        height: 48,
    },
    cellTitle: {
        marginLeft: 8,
        lineHeight: 24,
        alignSelf: 'center',
        letterSpacing: -0.05,
    },
    borderStyle: {
        width: '100%',
        height: 1,
        backgroundColor: textInputColor,
    },
    view: {
        margin: 0,
        height: 'auto',
    },
    imageStyle: {
        marginLeft: 24,
        tintColor: darkTextColor
    },
    flatListContainer: {
        marginTop: 24, marginBottom: 20
    },
    titleStyle: {
        lineHeight: 24,
        letterSpacing: -0.06,
        alignItems: "center",
        textAlign: "center",
    },
    titleView: {
        marginLeft: -deviceWidth * 0.1
    }
});
