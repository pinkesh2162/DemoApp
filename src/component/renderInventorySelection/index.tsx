import React, { useEffect } from 'react';
import { View, TouchableOpacity, Image, LayoutAnimation } from 'react-native';
import styles from './styles';
import {
  darkTextColor,
  dropdown,
  inActiveTintColor,
  textGrey,
} from '../../constants';
import { localizedStrings } from '../../localization';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import CustomText from '../customText';
import { RenderInventorySelectionProps } from '../../types';

const RenderInventorySelection: React.FC<RenderInventorySelectionProps> = (
  props
) => {
  const { selectedLocation, isKeyboardOpen, onTapAddProduct } = props;
  const { noOfInventory } = useSelector((state: RootState) => {
    return state.inventory;
  });

  useEffect(() => {
    /***
     * Animation if not going to use then remove it.
     */
    LayoutAnimation.configureNext({
      duration: 50,
      create: {
        type: LayoutAnimation.Types.easeIn,
        property: LayoutAnimation.Properties.scaleXY,
      },
      update: {
        type: LayoutAnimation.Types.easeOut,
        property: LayoutAnimation.Properties.opacity,
      },
    });
  }, [isKeyboardOpen]);

  if (noOfInventory === 1) {
    return (
      <View style={styles.emptyView}>
        <CustomText
          title={localizedStrings.add_new_product_to_inventory}
          color={darkTextColor}
          style={styles.titleText}
        />
      </View>
    );
  }

  if (isKeyboardOpen) {
    return (
      <View>
        <CustomText
          title={localizedStrings.add_new_product}
          style={styles.topProductText}
        />
        <View style={styles.borderStyle} />
      </View>
    );
  }

  return (
    <View style={{ alignSelf: 'center' }}>
      <CustomText
        title={localizedStrings.add_new_product_to_inventory}
        color={darkTextColor}
        style={styles.titleText}
      />
      <CustomText
        title={localizedStrings.inventory_name.toUpperCase()}
        color={textGrey}
        style={styles.productText}
      />
      <TouchableOpacity
        activeOpacity={0.9}
        style={styles.textInput}
        onPress={onTapAddProduct}
      >
        <View style={{ flexDirection: 'row' }}>
          <CustomText
            title={
              selectedLocation === ''
                ? localizedStrings.select_inventory
                : selectedLocation
            }
            numberOfLines={1}
            color={selectedLocation ? darkTextColor : inActiveTintColor}
            style={[
              styles.textStyle,
              {
                color: selectedLocation ? darkTextColor : inActiveTintColor,
              },
            ]}
          />
          <Image source={dropdown} style={styles.imageStyle} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default RenderInventorySelection;
