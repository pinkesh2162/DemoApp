import React from 'react';
import {Modal} from 'react-native';
import CustomAlert from '../customAlert';
import {ConfirmationPopupProps} from '../../types';

const ConfirmationPopup: React.FC<ConfirmationPopupProps> = ({
  modalVisible,
  alertBody,
  isOkShow = false,
  isLeftRightButton = true,
  okButtonTitle = 'OK',
  cancelButtonTitle = 'CANCEL',
  onOkButtonTap,
  onCancelButtonTap,
  onClose,
}) => {
  return (
    <Modal
      animationType="fade"
      transparent
      visible={modalVisible}
      onRequestClose={() => {
        if (onClose) onClose();
      }}>
      <CustomAlert
        alertBody={alertBody}
        isOkShow={isOkShow}
        isLeftRightButton={isLeftRightButton}
        okButtonTitle={okButtonTitle}
        cancelButtonTitle={cancelButtonTitle}
        onOkButtonTap={onOkButtonTap || (() => {})}
        onCancelButtonTap={onCancelButtonTap || (() => {})}
      />
    </Modal>
  );
};

export default ConfirmationPopup;
