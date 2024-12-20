import React, {
  useState,
  useImperativeHandle,
  forwardRef,
  useCallback,
} from 'react';
import {View, Image, Modal} from 'react-native';
import {
  darkTextColor,
  noInterNet_Icon,
  SourceSansProSemiBold,
} from '../../constants';
import {localizedStrings} from '../../localization';
import {styles} from './styles';
import {NoInternetConnectionPopUpRef} from '../../types';
import {CustomText, Button} from '../../component';

interface NoInternetConnectionPopUpProps {}

const NoInternetConnectionPopUp = forwardRef<
  NoInternetConnectionPopUpRef,
  NoInternetConnectionPopUpProps
>((props, ref) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  useImperativeHandle(ref, () => ({
    openModal: () => {
      setIsModalVisible(true);
    },
    closeModal: () => {
      setIsModalVisible(false);
    },
  }));

  const modalClose = useCallback(() => {
    setIsModalVisible(false);
  }, []);

  return (
    <Modal
      animationType="fade"
      transparent
      visible={isModalVisible}
      onRequestClose={modalClose}
      hardwareAccelerated={false}>
      <View style={[styles.container]}>
        <View style={styles.disableInventoryView}>
          <Image source={noInterNet_Icon} style={styles.imageStyle} />
          <CustomText
            title={localizedStrings.no_internet_connection_test}
            fontSize={20}
            fontFamily={SourceSansProSemiBold}
            lineHeight={28}
            color={darkTextColor}
            textStyle={styles.quiteStockText}
          />
          <CustomText
            title={localizedStrings.no_internet_connection_popup_subtext}
            fontSize={16}
            lineHeight={24}
            color={darkTextColor}
            textStyle={styles.anyChangesText}
          />
          <View style={styles.borderStyle} />
          <View style={styles.disableInventoryBtnView}>
            <Button
              style={styles.noStayButtonView}
              title={localizedStrings.ok.toUpperCase()}
              onPress={modalClose}
              textStyle={styles.noStayText}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
});

export default NoInternetConnectionPopUp;
