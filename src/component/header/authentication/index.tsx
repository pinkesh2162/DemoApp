import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import CustomText from '../../customText';
import {
  arrowLeft,
  ic_close,
  SourceSansProSemiBold,
  white,
} from '../../../constants';
import { styles } from './styles';
import { HeaderProps } from '../../../types';
import { localizedStrings } from '../../../localization';

const CustomHeader = (props: HeaderProps) => {
  const {
    title,
    subTitle,
    onPressLeft,
    onPressRight,
    backgroundColor,
    closeButton,
    numberOfLines,
    txtStyle,
    titleContainerStyle,
    imgStyle,
    rightCloseButton = false,
    rightText = localizedStrings.cancel,
    closeStyle,
  } = props;

  const [disable, setDisable] = useState(false);
  let backTapCount = 0;

  useEffect(() => {
    props.navigation.setOptions({
      headerShown: true,
      headerShadowVisible: false,
      headerTitleAlign: 'center',
      headerStyle: {
        backgroundColor: backgroundColor || white,
      },
      headerTitle: () => (
        <View style={[styles.titleContainer, titleContainerStyle]}>
          {title && (
            <CustomText
              title={title}
              fontSize={16}
              fontFamily={SourceSansProSemiBold}
              numberOfLines={numberOfLines}
              style={[txtStyle]}
            />
          )}
          {subTitle && (
            <CustomText
              title={subTitle}
              fontSize={12}
              fontFamily={SourceSansProSemiBold}
              style={[styles.subTitle, txtStyle]}
            />
          )}
        </View>
      ),
      ...(onPressLeft !== undefined
        ? {
            headerLeft: () => (
              <TouchableOpacity
                activeOpacity={1}
                onPress={() => {
                  if (closeButton) {
                    onPressLeft();
                  } else {
                    backTapCount += 1;
                    setDisable(true);
                    backTapCount === 1 && onPressLeft();
                  }
                }}
                disabled={disable}
                style={styles.leftContainer}
              >
                <Image source={arrowLeft} style={[styles.backIcon]} />
              </TouchableOpacity>
            ),
          }
        : { headerLeft: null }),
      ...(onPressRight !== undefined
        ? {
            headerRight: () => (
              <TouchableOpacity
                activeOpacity={1}
                onPress={onPressRight}
                style={styles.rightContainer}
              >
                {rightCloseButton ? (
                  <Image
                    source={ic_close}
                    style={[styles.closeIcon, closeStyle]}
                  />
                ) : (
                  <CustomText
                    title={rightText}
                    fontSize={14}
                    fontFamily={SourceSansProSemiBold}
                    textStyle={[styles.rightText, txtStyle]}
                  />
                )}
              </TouchableOpacity>
            ),
          }
        : { headerRight: null }),
    });
  }, [
    props.navigation,
    title,
    subTitle,
    backgroundColor,
    onPressLeft,
    closeButton,
    numberOfLines,
    txtStyle,
    titleContainerStyle,
    imgStyle,
    disable,
  ]);

  return null;
};

export default CustomHeader;
