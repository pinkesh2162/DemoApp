import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import {
  textInputEditColor,
  textInputColor,
  errorBorderColor,
  errorTextColor,
  textGrey,
  eyeIcon,
  eyeCrossed,
  black,
} from '../../../constants';
import {styles} from './styles';
import {CustomTextInputProps} from '../../../types';

const CustomPasswordField = ({
  title,
  errorMessage,
  value,
  onChangeText,
  placeholder,
  keyboardType = 'default',
  isEditing,
  onFocus,
  onBlur,
  isPasswordField = false,
}: CustomTextInputProps) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(prevState => !prevState);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textInputTitle}>{title}</Text>
      <View
        style={[
          styles.passwordView,
          {
            borderColor: isEditing
              ? textInputEditColor
              : errorMessage
              ? errorBorderColor
              : textInputColor,
          },
        ]}>
        <TextInput
          secureTextEntry={isPasswordField && !isPasswordVisible}
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
        {isPasswordField && (
          <TouchableOpacity
            onPress={togglePasswordVisibility}
            style={styles.eyeIconView}
            activeOpacity={0.8}>
            <Image
              source={isPasswordVisible ? eyeIcon : eyeCrossed}
              style={[
                styles.eyeIcon,
                {
                  tintColor: errorMessage ? errorBorderColor : 'gray',
                },
              ]}
            />
          </TouchableOpacity>
        )}
      </View>
      {errorMessage ? (
        <Text style={styles.textErrorTitle}>{errorMessage}</Text>
      ) : null}
    </View>
  );
};

export default CustomPasswordField;
