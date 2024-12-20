import React from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import ShimmerPlaceHolder from '../common';

const InventoryShimmer = (props: {isLoading: boolean}) => {
  const {isLoading} = props;

  const ContainerLayout = (
    <>
      <ShimmerPlaceHolder
        style={styles.inventoryRenderContainer}
        stopAutoRun={false}
        visible={isLoading}
      />
      <ShimmerPlaceHolder
        style={styles.inventoryRenderContainerSecond}
        stopAutoRun={false}
        visible={isLoading}
      />
    </>
  );

  return (
    <View style={styles.inventoryListRenderOneContainerStyle}>
      {ContainerLayout}
    </View>
  );
};

export default InventoryShimmer;
