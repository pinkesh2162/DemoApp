import React, { useRef } from 'react';
import { View, Image } from 'react-native';
import styles from './styles';
import {
  darkTextColor,
  welcomeIcon,
  aspectWidth,
  deviceWidth,
} from '../../../../constants';
import { localizedStrings } from '../../../../localization';
import { NoInternetConnectionPopUpRef, ScreenProps } from '../../../../types';
import {
  Button,
  CustomText,
  NoInternetConnectionPopUp,
  StatusBars,
} from '../../../../component';
import { isInternetAvailable } from '../../../../utils/networkConnection';

const Welcome: React.FC<ScreenProps> = (props: ScreenProps) => {
  const { navigation } = props;

  const noInternetRef = useRef<NoInternetConnectionPopUpRef>(null);

  const onLogin = async () => {
    const isInternetOn: Promise<boolean> = isInternetAvailable();
    if (await isInternetOn) {
      onTapLogin();
    } else {
      noInternetRef.current?.openModal();
    }
  };

  const onTapLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <StatusBars />
      <View style={styles.centerView}>
        <Image source={welcomeIcon} style={styles.image} />
        <CustomText
          textStyle={styles.titleText}
          lineHeight={deviceWidth * 0.09662}
          fontSize={aspectWidth * 32}
          isBold
          title={localizedStrings.inventory_count_made_easy}
          color={darkTextColor}
        />
        <CustomText
          textStyle={styles.subTitleText}
          title={localizedStrings.welcome_message_text}
        />
      </View>
      <View style={styles.buttonView}>
        <Button
          activeOpacity={0.8}
          title={localizedStrings.login.toUpperCase()}
          onPress={onLogin}
        />
      </View>
      <NoInternetConnectionPopUp ref={noInternetRef} />
    </View>
  );
};

export default Welcome;
