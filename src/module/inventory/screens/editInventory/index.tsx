import { SafeAreaView } from 'react-native';
import React, { } from 'react';
import { darkTextColor } from '../../../../constants';
import styles from './styles';
import { CustomText } from '../../../../component';
import { localizedStrings } from '../../../../localization';

const EditInventory = () => {
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

export default EditInventory;
