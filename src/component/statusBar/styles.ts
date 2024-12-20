import { Platform, StatusBar, StyleSheet } from "react-native";

const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

export const styles = StyleSheet.create({
    container: {
        height: STATUS_BAR_HEIGHT,
    },
});