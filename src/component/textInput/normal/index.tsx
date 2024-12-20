import React from 'react';
import { View, Text, TextInput } from 'react-native';
import {
  textInputEditColor,
  textInputColor,
  errorBorderColor,
  errorTextColor,
  textGrey,
  black,
  aspectWidth,
  deviceWidth,
} from '../../../constants';
import { styles } from './styles';
import { CustomTextInputProps } from '../../../types';
import CustomText from '../../customText';

const CustomTextInput = ({
  title,
  errorMessage,
  value,
  onChangeText,
  placeholder,
  keyboardType = 'default',
  isEditing,
  onFocus,
  onBlur,
  containerStyle,
  borderColor,
}: CustomTextInputProps) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={styles.textInputTitle}>{title}</Text>
      <View
        style={[
          styles.passwordView,
          {
            borderColor: borderColor
              ? borderColor
              : isEditing
                ? textInputEditColor
                : errorMessage
                  ? errorBorderColor
                  : textInputColor,
          },
        ]}>
        <TextInput
          style={[
            styles.textInput,
            {
              flex: 1,
              marginTop: 0,
              color: errorMessage ? errorTextColor : black,
            },
          ]}
          placeholder={placeholder}
          placeholderTextColor={textGrey}
          value={value}
          onChangeText={onChangeText}
          keyboardType={keyboardType}
          autoCapitalize="none"
          onFocus={onFocus}
          onBlur={onBlur}
        />
      </View>
      {errorMessage ? (
        <View style={styles.errorView}>
          <CustomText
            title={errorMessage}
            color={errorTextColor}
            fontSize={aspectWidth * 14}
            lineHeight={deviceWidth * 0.03865}
            textStyle={{ textAlign: 'left' }}
          />
          {/* <Text style={styles.textErrorTitle}>{}</Text> */}
        </View>
      ) : null}
    </View>
  );
};

export default CustomTextInput;
