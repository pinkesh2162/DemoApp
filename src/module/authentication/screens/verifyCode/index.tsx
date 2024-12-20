import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Alert,
  KeyboardAvoidingView,
  ScrollView,
  Keyboard,
  Text,
} from 'react-native';
import {
  behavior,
  black,
  buttonBackColor,
  darkTextColor,
  deviceHeight,
  errorColor,
  errorTitle,
  inActiveTintColor,
  isIOS,
  SourceSansProSemiBold,
  textGrey,
} from '../../../../constants';
import { localizedStrings } from '../../../../localization';
import { styles } from './styles';
import { NoInternetConnectionPopUpRef, ScreenProps } from '../../../../types';
import {
  Button,
  ConfirmationPopup,
  CustomText,
  CustomTextInput,
  NoInternetConnectionPopUp,
} from '../../../../component';
import CustomHeader from '../../../../component/header/authentication';
import { isInternetAvailable } from '../../../../utils/networkConnection';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../redux/store';

const VerifyCodeScreen: React.FC<ScreenProps> = (props) => {
  const { navigation } = props;
  const noInternetRef = useRef<NoInternetConnectionPopUpRef>(null);
  const email = useSelector(
    (state: RootState) => state.authSlice.forgetPasswordData.Email
  );
  const verificationData = useSelector(
    (state: RootState) => state.authSlice.forgetPasswordData
  );

  const [verificationCode, setVerificationCode] = useState<string>('');
  const [isKeyboardOpen, setIsKeyboardOpen] = useState<boolean>(false);
  const [isEmptyCode, setIsEmptyCode] = useState<boolean>(false);
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  useEffect(() => {
    console.log("verificationData['Code']", verificationData['Code']);
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setIsKeyboardOpen(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setIsKeyboardOpen(false);
      }
    );
    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const onPressVerifyCode = async () => {
    const isInternetOn: Promise<boolean> = isInternetAvailable();
    if (await isInternetOn) {
      if (checkValidation()) {
        navigation.navigate('NewPassword');
      }
    } else {
      noInternetRef.current?.openModal();
    }
  };

  const checkValidation = (): boolean => {
    let message = '';
    if (verificationCode === '') {
      message = localizedStrings.verification_code_required;
    } else if (verificationCode !== verificationData['Code']) {
      message = localizedStrings.invalid_verify_code;
    }

    if (message !== '') {
      Alert.alert(errorTitle, message);
      return false;
    }
    return true;
  };

  const onPressOkButton = () => {
    setModalVisible(false);
    navigation.popToTop();
  };

  const onPressCancelButton = () => {
    setModalVisible(false);
  };

  const onPressLeft = () => {
    setModalVisible(true);
  };

  const renderVerifyCodeView = () => {
    const height = isIOS && deviceHeight < 667 ? deviceHeight - 120 : '100%';
    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior={behavior}
        enabled
      >
        <ScrollView
          contentContainerStyle={{ height }}
          scrollEnabled={isKeyboardOpen}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.viewContainer}>
            <CustomText
              title={localizedStrings.email_sent}
              fontFamily={SourceSansProSemiBold}
              fontSize={32}
              lineHeight={40}
              color={darkTextColor}
            />
            <Text style={styles.infoText}>
              <CustomText
                title={localizedStrings.enter_the_code_we_sent}
                color={inActiveTintColor}
                fontSize={16}
                textStyle={styles.infoText}
              />
              <CustomText
                title={email}
                color={inActiveTintColor}
                fontSize={16}
                textStyle={styles.infoText}
                fontFamily={SourceSansProSemiBold}
              />
              <CustomText
                title={localizedStrings.to_recover_your_password}
                color={inActiveTintColor}
                fontSize={16}
                textStyle={styles.infoText}
              />
            </Text>
            <CustomTextInput
              onChangeText={(text) => {
                if (text === '') {
                  setVerificationCode(text);
                  setIsEmptyCode(true);
                } else {
                  setVerificationCode(text);
                  setIsEmptyCode(false);
                }
              }}
              borderColor={
                verificationCode !== ''
                  ? isEmptyCode
                    ? errorColor
                    : buttonBackColor
                  : isEmptyCode
                  ? errorColor
                  : textGrey
              }
              value={verificationCode}
              allowFontScaling={false}
              keyboardType="numeric"
              autoCapitalize="none"
              selectionColor={black}
              containerStyle={styles.inputContainerStyle}
            />
            <View style={styles.buttonContainer}>
              <Button
                title={localizedStrings.continue.toUpperCase()}
                disabled={isEmptyCode}
                onPress={onPressVerifyCode}
              />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  };

  return (
    <View style={styles.mainContainer}>
      <CustomHeader
        navigation={navigation}
        onPressLeft={onPressLeft}
        closeButton
      />
      {renderVerifyCodeView()}
      <ConfirmationPopup
        modalVisible={modalVisible}
        alertBody={localizedStrings.are_you_sure_to_reset_password}
        isOkShow={false}
        isLeftRightButton={true}
        okButtonTitle={localizedStrings.move_on.toUpperCase()}
        cancelButtonTitle={localizedStrings.go_back.toUpperCase()}
        onOkButtonTap={onPressOkButton}
        onCancelButtonTap={onPressCancelButton}
      />
      <NoInternetConnectionPopUp ref={noInternetRef} />
    </View>
  );
};

export default VerifyCodeScreen;
