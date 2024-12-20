/* eslint-disable react-native/no-inline-styles */
import React, { useRef, useState } from 'react';
import {
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {
  emailRegex,
  aspectWidth,
  deviceWidth,
  darkTextColor,
  SourceSansProSemiBold,
  green,
  errorTitle,
  message,
  status,
  behavior,
  keyboardVerticalOffset,
} from '../../../../constants';
import { localizedStrings } from '../../../../localization';
import { ScreenProps, NoInternetConnectionPopUpRef } from '../../../../types';
import styles from './styles';
import CustomHeader from '../../../../component/header/authentication';
import {
  Button,
  CustomPasswordField,
  CustomText,
  NoInternetConnectionPopUp,
  CustomTextInput,
  RenderProgressView,
} from '../../../../component';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../../redux/store';
import { loginSuccess } from '../../../../redux/slices/authSlice';
// import { login } from '../../../../apiServices/apiUrls';
import { isInternetAvailable } from '../../../../utils/networkConnection';

const LoginScreen: React.FC<ScreenProps> = (props: ScreenProps) => {
  const { navigation } = props;
  const dispatch = useDispatch<AppDispatch>();
  const noInternetRef = useRef<NoInternetConnectionPopUpRef>(null);

  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [inCorrectEmailMessage, setInCorrectEmailMessage] = useState('');
  const [inCorrectPasswordMessage, setInCorrectPasswordMessage] = useState('');

  const onLoginPress = async () => {
    setIsLoading(true);
    try {
      // example
      // const response = await POST(login, {
      //   email: email,
      //   password: password,
      // });
      const response = {
        User: {
          id: 1187,
          FirstName: 'Demo App',
          LastName: 'Developer',
          Email: 'demoUser@example.com',
          PhoneNumber: '',
          userRoleId: 1,
          StoreName: 'Demo App Developer',
          StoreLanguageId: '1',
          UserType: 1,
          currencyId: '1',
          currencySymbol: {
            currencyId: '1',
            symbol: 'kr',
            thousandSeparator: ' ',
            decimalSeparator: ',',
            locationOfSymbol: '2',
          },
          currency: {
            currencyId: '1',
            symbol: 'kr',
            thousandSeparator: ' ',
            decimalSeparator: ',',
            locationOfSymbol: '2',
          },
        },
        ApiKey: 'testing',
        StatusCode: 200,
        Status: true,
        Message: 'User login successfully',
      };
      if (response) {
        handleLoginSuccess(response);
      } else {
        Alert.alert(errorTitle, "Can't find response!");
      }
    } catch (error) {
      console.log('error', JSON.stringify(error));
      const temp: any = error ? error : 'Unknown error occurred!';
      Alert.alert(errorTitle, temp);
    }
  };

  const onLogin = async () => {
    const isInternetOn: Promise<boolean> = isInternetAvailable();
    if (await isInternetOn) {
      if (email === 'test@gmail.com' && password === 'Test') {
        onLoginPress();
      } else {
        Alert.alert(errorTitle, 'Use test@gmail.com and Pass:Test For Login');
      }
    } else {
      noInternetRef.current?.openModal();
    }
  };

  const handleLoginSuccess = (response: any) => {
    if (response[status] === true) {
      setIsLoading(false);
      dispatch(
        loginSuccess({
          user: response.User,
          apiKey: response.ApiKey,
        }),
      );
    } else {
      setIsLoading(false);
      Alert.alert(errorTitle, response[message]);
    }
  };

  const validateEmail = (text: string) => {
    if (text === '') {
      setEmail(text);
      setIsEmailValid(false);
    } else if (!emailRegex.test(text)) {
      setEmail(text.trim());
      setIsEmailValid(false);
      setInCorrectEmailMessage(localizedStrings.incorrect_email);
    } else {
      setEmail(text.trim());
      setIsEmailValid(true);
      setInCorrectEmailMessage('');
    }
  };

  const validatePassword = (text: string) => {
    const trimmedText = text.trim();
    if (trimmedText === '') {
      setPassword('');
      setIsPasswordValid(false);
      return;
    }
    if (text === '') {
      setPassword(text);
      setIsPasswordValid(false);
    } else {
      setPassword(text.trim());
      setIsPasswordValid(true);
      setInCorrectPasswordMessage('');
    }
  };

  const onPressForgotPassword = () => {
    navigation.navigate('ForgotPassword');
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={behavior}
      keyboardVerticalOffset={keyboardVerticalOffset}
      enabled>
      <CustomHeader
        navigation={navigation}
        onPressLeft={() => {
          navigation.goBack();
        }}
      />
      <View style={styles.inputContainer}>
        <View>
          <View style={styles.titleContainer}>
            <CustomText
              fontSize={aspectWidth * 32}
              lineHeight={deviceWidth * 0.09662}
              textStyle={{ textAlign: 'left', marginLeft: 5 }}
              fontFamily={SourceSansProSemiBold}
              color={darkTextColor}
              title={localizedStrings.log_in_to_Demo}
            />
          </View>
          <View style={{ marginTop: 16 }}>
            <CustomTextInput
              onChangeText={validateEmail}
              value={email}
              title={localizedStrings.email.toUpperCase()}
              keyboardType="email-address"
              autoCapitalize="none"
              placeholder={localizedStrings.example_example_com}
              errorMessage={inCorrectEmailMessage}
            />
            <CustomPasswordField
              placeholder={localizedStrings.password}
              value={password}
              isPasswordField
              title={localizedStrings.password.toUpperCase()}
              onChangeText={validatePassword}
              errorMessage={inCorrectPasswordMessage}
            />
          </View>
          <View style={styles.forgotView}>
            <TouchableOpacity
              style={styles.forgetText}
              onPress={onPressForgotPassword}
              activeOpacity={0.6}>
              <CustomText
                title={localizedStrings.forgotten_password}
                color={green}
                fontSize={14}
                fontFamily={SourceSansProSemiBold}
              />
            </TouchableOpacity>
          </View>
        </View>
        <Button
          disabled={!isEmailValid || !isPasswordValid}
          title={localizedStrings.continue.toUpperCase()}
          style={{ bottom: 0 }}
          onPress={onLogin}
        />
      </View>
      <NoInternetConnectionPopUp ref={noInternetRef} />
      <RenderProgressView isLoading={isLoading} />
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
