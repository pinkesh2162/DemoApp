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
  errorColor,
  errorTitle,
  isIOS,
  password,
  placeHolderColor,
  SourceSansProSemiBold,
  status,
  textGrey,
  userId,
  userIdCapital,
} from '../../../../constants';
import { localizedStrings } from '../../../../localization';
import { styles } from './styles';
import { NoInternetConnectionPopUpRef, ScreenProps } from '../../../../types';
import {
  Button,
  ConfirmationPopup,
  CustomPasswordField,
  CustomText,
  NoInternetConnectionPopUp,
  RenderProgressView,
} from '../../../../component';
import CustomHeader from '../../../../component/header/authentication';
import { isInternetAvailable } from '../../../../utils/networkConnection';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../redux/store';
import { PUT } from '../../../../apiServices/apiServices';
import { updatePassword } from '../../../../apiServices/apiUrls';
import { setForgetData } from '../../../../redux/slices/authSlice';

const NewPasswordScreen: React.FC<ScreenProps> = (Props) => {
  const { navigation } = Props;
  const noInternetPopupRef = useRef<NoInternetConnectionPopUpRef>(null);
  const dispatch = useDispatch();
  const resetPasswordData = useSelector(
    (state: RootState) => state.authSlice.forgetPasswordData
  );

  const [newPasswordValue, setNewPasswordValue] = useState<string>('');
  const [isKeyboardVisible, setIsKeyboardVisible] = useState<boolean>(false);
  const [isPasswordEmpty, setIsPasswordEmpty] = useState<boolean>(true);
  const [isConfirmationModalVisible, setIsConfirmationModalVisible] =
    useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const keyboardShowListener = Keyboard.addListener('keyboardDidShow', () => {
      setIsKeyboardVisible(true);
    });
    const keyboardHideListener = Keyboard.addListener('keyboardDidHide', () => {
      setIsKeyboardVisible(false);
    });
    return () => {
      keyboardShowListener.remove();
      keyboardHideListener.remove();
    };
  }, []);

  const handleSavePassword = async () => {
    const isConnected = await isInternetAvailable();
    if (isConnected) {
      setIsLoading(true);
      updatePasswordOnServer();
    } else {
      noInternetPopupRef.current?.openModal();
    }
  };

  const updatePasswordOnServer = async () => {
    const requestBody = {
      [userId]: resetPasswordData[userIdCapital],
      [password]: newPasswordValue,
    };
    try {
      const response = await PUT(updatePassword, requestBody);
      processPasswordUpdateResponse(response);
    } catch (error: any) {
      console.log('Update Password Error:', JSON.stringify(error));
      setIsLoading(false);
      Alert.alert(errorTitle, error?.message || 'An unknown error occurred');
    }
  };

  const processPasswordUpdateResponse = (response: any) => {
    setIsLoading(false);
    if (response[status]) {
      dispatch(setForgetData({}));
      navigation.popToTop();
    } else {
      console.log('Response Error:', JSON.stringify(response));
      Alert.alert(errorTitle, response.Message);
    }
  };

  const handleConfirmInterrupt = () => {
    setIsConfirmationModalVisible(false);
    navigation.popToTop();
  };

  const handleCancelInterrupt = () => {
    setIsConfirmationModalVisible(false);
  };

  const handleBackPress = () => {
    setIsConfirmationModalVisible(true);
  };

  const renderPasswordInputSection = () => {
    const viewHeight =
      isIOS && deviceHeight < 667 ? deviceHeight - 120 : '100%';

    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior={behavior}
        enabled
      >
        <ScrollView
          contentContainerStyle={{ height: viewHeight }}
          scrollEnabled={isKeyboardVisible}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.viewContainer}>
            <CustomText
              title={localizedStrings.new_password}
              fontFamily={SourceSansProSemiBold}
              fontSize={32}
              lineHeight={40}
              color={darkTextColor}
            />
            <View style={{ height: '5%' }} />
            <CustomPasswordField
              onChangeText={(text) => {
                setNewPasswordValue(text);
                setIsPasswordEmpty(text === '');
              }}
              isEditing={newPasswordValue !== ''}
              isPasswordField
              borderColor={
                newPasswordValue !== ''
                  ? isPasswordEmpty
                    ? errorColor
                    : buttonBackColor
                  : isPasswordEmpty
                  ? errorColor
                  : textGrey
              }
              value={newPasswordValue}
              allowFontScaling={false}
              placeholder={localizedStrings.enter_new_password}
              placeholderTextColor={placeHolderColor}
              selectionColor={black}
              containerStyle={styles.inputContainerStyle}
            />

            <View style={styles.buttonContainer}>
              <Button
                title={localizedStrings.save_and_login.toUpperCase()}
                disabled={isPasswordEmpty}
                onPress={handleSavePassword}
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
        onPressLeft={handleBackPress}
        closeButton
      />
      {renderPasswordInputSection()}
      <ConfirmationPopup
        modalVisible={isConfirmationModalVisible}
        alertBody={localizedStrings.are_you_sure_to_reset_password}
        isOkShow={false}
        isLeftRightButton={true}
        okButtonTitle={localizedStrings.interrupt.toUpperCase()}
        cancelButtonTitle={localizedStrings.go_back.toUpperCase()}
        onOkButtonTap={handleConfirmInterrupt}
        onCancelButtonTap={handleCancelInterrupt}
      />
      <NoInternetConnectionPopUp ref={noInternetPopupRef} />
      <RenderProgressView isLoading={isLoading} />
    </View>
  );
};

export default NewPasswordScreen;
