import { StyleSheet } from "react-native";
import { background, deviceHeight, deviceWidth, transBack } from "../../../../constants";

export const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: background,
    },
    container: {
        height: deviceHeight,
    },
    viewContainer: {
        height: '100%',
        width: '100%',
        alignItems: 'center',
        flexDirection: 'column',
        marginTop: deviceHeight * 0.025
    },
    infoText: {
        width: deviceWidth - 48,
        marginTop: '5%',
    },
    loading: {
        position: 'absolute',
        height: '100%',
        width: deviceWidth,
        alignSelf: 'center',
        backgroundColor: transBack
    },
    textStyle: {
        textAlign: 'left',
        alignSelf: "flex-start"
    },
    errorContainer: {
        paddingHorizontal: 10,
        alignItems: 'flex-start',
        width: deviceWidth - 48,
    },
    inputContainerStyle: {
        marginBottom: 10
    },
    buttonContainer: {
        marginTop: '10%'
    }
});