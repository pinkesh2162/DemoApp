import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Alert,
  KeyboardAvoidingView,
  ScrollView,
  Keyboard,
} from 'react-native';
import {
  behavior,
  black,
  buttonBackColor,
  darkTextColor,
  deviceHeight,
  emailRegex,
  errorColor,
  errorTitle,
  inActiveTintColor,
  isIOS,
  SourceSansProSemiBold,
  textGrey,
  data,
  status,
} from '../../../../constants';
import { localizedStrings } from '../../../../localization';
import { styles } from './styles';
import { NoInternetConnectionPopUpRef, ScreenProps } from '../../../../types';
import {
  Button,
  CustomText,
  CustomTextInput,
  NoInternetConnectionPopUp,
  RenderProgressView,
} from '../../../../component';
import CustomHeader from '../../../../component/header/authentication';
import { isInternetAvailable } from '../../../../utils/networkConnection';
import { useDispatch } from 'react-redux';
import { setForgetData } from '../../../../redux/slices/authSlice';

const ForgotPassword: React.FC<ScreenProps> = Props => {
  const { navigation } = Props;
  const noInternetRef = useRef<NoInternetConnectionPopUpRef>(null);
  const dispatch = useDispatch();

  const [emailText, setEmailText] = useState<string>('');
  const [isKeyBoardOpen, setIsKeyBoardOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isEmptyEmail, setIsEmptyEmail] = useState<boolean>(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState<string>('');

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setIsKeyBoardOpen(true);
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setIsKeyBoardOpen(false);
      },
    );
    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const onPressRestorePassword = async () => {
    const isInternetOn: Promise<boolean> = isInternetAvailable();
    if (await isInternetOn) {
      if (checkValidation()) {
        setIsLoading(true);
        getRestorePassword();
      }
    } else {
      noInternetRef.current?.openModal();
    }
  };

  const getRestorePassword = async () => {
    // Example
    // const requestBody = {
    //   [email]: emailText,
    // };
    try {
      // Example
      // const response = await POST(forgetPassword, requestBody);
      handleRestorePasswordResponse({
        StatusCode: 404,
        Status: false,
        Message: 'User not found',
      });
    } catch (error: any) {
      setIsLoading(false);
      Alert.alert(errorTitle, error?.message || 'Unknown error occurred');
    }
  };

  const handleRestorePasswordResponse = (response: any) => {
    setIsLoading(false);
    if (response[status]) {
      const dataObj = response[data];
      dispatch(setForgetData(dataObj));
      navigation.navigate('VerifyCode');
    } else {
      Alert.alert(errorTitle, response.Message);
    }
  };

  const checkValidation = (): boolean => {
    let message = '';
    if (emailText === '') {
      setIsEmptyEmail(true);
      setEmailErrorMessage(localizedStrings.enter_email_address);
      message = localizedStrings.email_is_required;
    } else if (!emailRegex.test(emailText)) {
      setIsEmptyEmail(true);
      setEmailErrorMessage(localizedStrings.invalid_email);
      message = localizedStrings.invalid_email;
    }

    return message === '';
  };

  const renderEmailErrorView = () => {
    if (isEmptyEmail) {
      return (
        <View style={styles.errorContainer}>
          <CustomText
            textStyle={styles.textStyle}
            fontSize={16}
            color={black}
            title={emailErrorMessage}
          />
        </View>
      );
    }
    return null;
  };

  const renderForgotPasswordView = () => {
    const height = isIOS && deviceHeight < 667 ? deviceHeight - 120 : '100%';

    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior={behavior}
        enabled>
        <CustomHeader
          navigation={navigation}
          onPressLeft={() => {
            navigation.goBack();
          }}
        />
        <ScrollView
          contentContainerStyle={{ height }}
          scrollEnabled={isKeyBoardOpen}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled">
          <View style={styles.viewContainer}>
            <CustomText
              title={localizedStrings.forgot_your_password}
              fontFamily={SourceSansProSemiBold}
              fontSize={32}
              lineHeight={40}
              color={darkTextColor}
            />
            <CustomText
              title={localizedStrings.forgot_password_big_text}
              color={inActiveTintColor}
              fontSize={16}
              textStyle={styles.infoText}
            />
            <CustomTextInput
              onChangeText={text => {
                setEmailText(text);
                setIsEmptyEmail(false);
              }}
              borderColor={
                emailText !== ''
                  ? isEmptyEmail
                    ? errorColor
                    : buttonBackColor
                  : isEmptyEmail
                    ? errorColor
                    : textGrey
              }
              value={emailText}
              placeholder={localizedStrings.E_mail}
              allowFontScaling={false}
              keyboardType="email-address"
              autoCapitalize="none"
              selectionColor={black}
              containerStyle={styles.inputContainerStyle}
            />
            {renderEmailErrorView()}
            <View style={styles.buttonContainer}>
              <Button
                title={localizedStrings.recover_password.toUpperCase()}
                onPress={onPressRestorePassword}
              />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  };

  return (
    <View style={styles.mainContainer}>
      {renderForgotPasswordView()}
      <NoInternetConnectionPopUp ref={noInternetRef} />
      <RenderProgressView isLoading={isLoading} />
    </View>
  );
};

export default ForgotPassword;
