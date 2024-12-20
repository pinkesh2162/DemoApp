import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {buttonBackColor, SourceSansProSemiBold} from '../../constants';
import {styles} from './styles';
import {CustomAlertProps} from '../../types';
import CustomText from '../customText';
import {localizedStrings} from '../../localization';

const CustomAlert: React.FC<CustomAlertProps> = ({
  onOkButtonTap = () => {},
  onCancelButtonTap = () => {},
  alertBody = 'Title',
  okButtonTitle = localizedStrings.ok.toUpperCase(),
  okButtonTitleColor = buttonBackColor,
  cancelButtonTitle = localizedStrings.cancel.toUpperCase(),
  cancelButtonTitleColor = buttonBackColor,
  isOkShow = false,
  isLeftRightButton = false,
}) => {
  const renderButtons = () => {
    if (isOkShow) {
      return (
        <View style={styles.singleButtonContainer}>
          <TouchableOpacity onPress={onOkButtonTap} style={styles.button}>
            <CustomText
              title={okButtonTitle}
              fontSize={16}
              style={{color: okButtonTitleColor}}
            />
          </TouchableOpacity>
        </View>
      );
    }

    if (isLeftRightButton) {
      return (
        <View style={styles.leftRightButtonContainer}>
          <TouchableOpacity onPress={onOkButtonTap} style={styles.halfButton}>
            <CustomText
              title={okButtonTitle}
              fontSize={16}
              style={{
                color: okButtonTitleColor,
                textAlign: 'right',
                ...styles.buttonText,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={onCancelButtonTap}
            style={styles.halfButton}>
            <CustomText
              title={cancelButtonTitle}
              fontSize={16}
              style={{
                color: cancelButtonTitleColor,
                textAlign: 'left',
                ...styles.buttonText,
              }}
            />
          </TouchableOpacity>
        </View>
      );
    }

    return (
      <View style={styles.doubleButtonContainer}>
        <TouchableOpacity
          onPress={onOkButtonTap}
          style={styles.halfHeightButton}>
          <CustomText
            title={okButtonTitle}
            fontSize={16}
            style={{
              color: okButtonTitleColor,
              ...styles.buttonText,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onCancelButtonTap}
          style={styles.halfHeightButton}>
          <CustomText
            title={cancelButtonTitle}
            fontSize={16}
            style={{
              color: cancelButtonTitleColor,
              ...styles.buttonText,
            }}
          />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.alertBodyContainer}>
          <Text style={styles.alertBodyText}>{alertBody}</Text>
        </View>
        <View style={styles.separatorView} />
        {renderButtons()}
      </View>
    </View>
  );
};

export default CustomAlert;
