import React from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
import {localizedStrings} from '../../../../localization';
import {styles} from './styles';
import {
  darkTextColor,
  noInterNet_Icon,
  SourceSansProSemiBold,
  white,
} from '../../../../constants';
import {CustomText} from '../../../../component';

interface NoInternetProps {
  onRetry: () => void;
  containerStyle?: object;
  contentStyle?: object;
}

const NoInternet: React.FC<NoInternetProps> = ({
  onRetry,
  containerStyle,
  contentStyle,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <View style={[styles.content, contentStyle]}>
        <Image source={noInterNet_Icon} />
        <CustomText
          title={localizedStrings.no_internet_connection_test}
          fontSize={24}
          isBold
          textStyle={styles.noInternetText}
          color={darkTextColor}
        />
        <CustomText
          title={localizedStrings.no_internet_connection_subtext}
          fontFamily={SourceSansProSemiBold}
        />
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={onRetry}
          style={styles.retryButton}>
          <CustomText
            title={localizedStrings.retry_text.toUpperCase()}
            fontFamily={SourceSansProSemiBold}
            color={white}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NoInternet;
