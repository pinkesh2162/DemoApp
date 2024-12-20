import { SafeAreaView } from 'react-native';
import React from 'react';
import { darkTextColor } from '../../../../constants';
import styles from './style';
import { CustomText } from '../../../../component';
import { localizedStrings } from '../../../../localization';

const ViewInventory = () => {
  return (
    <SafeAreaView style={styles.container}>
      <CustomText
        title={localizedStrings.this_is_demo}
        fontSize={24}
        color={darkTextColor}
        isBold
        textStyle={styles.productText}
      />
    </SafeAreaView>
  );
};

export default ViewInventory;
