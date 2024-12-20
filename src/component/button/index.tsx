import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {styles} from './styles';
import {button_green, button_green_disabled, white} from '../../constants';
import {ButtonProps} from '../../types';

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const {
    title,
    onPress,
    backgroundColor = button_green,
    textColor = white,
    disabled = false,
    style,
    textStyle,
    activeOpacity,
  } = props;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        {backgroundColor: disabled ? button_green_disabled : backgroundColor},
        style,
      ]}
      activeOpacity={activeOpacity ? activeOpacity : 0.8}
      disabled={disabled}>
      <Text
        allowFontScaling={false}
        style={[styles.buttonText, {color: textColor}, textStyle]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
