import { NavigationProp, ParamListBase } from "@react-navigation/native";
import { ImageProps, StyleProp, TextInputProps, TextProps, TextStyle, ViewStyle } from "react-native";

export interface CustomTextProps extends TextProps {
    title: string | number;
    fontSize?: number;
    color?: string;
    fontFamily?: string;
    textStyle?: StyleProp<TextStyle>;
    isBold?: boolean;
    lineHeight?: any;
}

export interface ButtonProps {
    title: string;
    onPress?: () => void;
    backgroundColor?: string;
    textColor?: string;
    disabled?: boolean;
    style?: ViewStyle;
    textStyle?: TextStyle;
    activeOpacity?: number;
}

export interface CustomTextInputProps extends TextInputProps {
    title?: string;
    errorMessage?: string;
    value: string;
    onChangeText: (text: string) => void;
    placeholder?: string;
    keyboardType?: 'default' | 'email-address' | 'numeric';
    isEditing?: boolean;
    onFocus?: () => void;
    onBlur?: () => void;
    isPasswordField?: boolean;
    secureTextEntry?: boolean;
    containerStyle?: ViewStyle;
    borderColor?: string;
}

export interface LoaderProps {
    isLoading: boolean;
}

export interface CustomTabViewProps {
    routes: { key: string; title: string }[];
    renderScenes: (routeKey: string) => JSX.Element;
    initialIndex?: number;
    styles: {
        tabIndicatorStyle: ViewStyle;
        tabBarStyle: ViewStyle;
        tabBarSubStyle: ViewStyle;
        tabTextStyle: TextStyle;
    };
}

export interface HeaderProps extends TextProps {
    title?: string;
    subTitle?: string;
    navigation: NavigationProp<ParamListBase>;
    onPressLeft?: () => void;
    onPressRight?: () => void;
    closeButton?: boolean;
    txtStyle?: StyleProp<TextStyle>;
    numberOfLines?: number;
    titleContainerStyle?: StyleProp<ViewStyle>;
    imgStyle?: StyleProp<ViewStyle>;
    backgroundColor?: string;
    rightCloseButton?: string;
    rightText?: string;
    closeStyle?: StyleProp<ImageProps>;
}