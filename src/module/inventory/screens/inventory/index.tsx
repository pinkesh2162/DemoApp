import React, { useEffect, useRef } from 'react';
import { View, SafeAreaView, TouchableOpacity, Image, Alert } from 'react-native';
import styles from './styles';
import {
  CustomText,
  StatusBars,
  CustomTabView,
  AddItemAndTransfer,
} from '../../../../component';
import { localizedStrings } from '../../../../localization';
import { darkTextColor, dotIcon } from '../../../../constants';
import { EditInventory, ViewInventory } from '../index';
import { ScreenProps } from '../../../../types';
import { RootState, useAppDispatch } from '../../../../redux/store';
import { useSelector } from 'react-redux';
import { getInventory } from '../../../../redux/slices/inventorySlice';
import { isInternetAvailable } from '../../../../utils/networkConnection';

const Inventory = (props: ScreenProps) => {
  const { navigation } = props;
  const routes: any = [
    { key: 'first', title: localizedStrings.you_can_edit.toUpperCase() },
    { key: 'second', title: localizedStrings.you_can_view.toUpperCase() },
  ];

  const popupRef = useRef<any>(null);

  const dispatch = useAppDispatch();
  const { user } = useSelector((state: RootState) => state.authSlice);

  useEffect(() => {
    checkNetworkConnection();
    navigation.addListener('focus', () => {
      checkNetworkConnection();
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigation]);

  const openSetting = () => {
    if (popupRef.current) {
      popupRef.current.modalOpen();
    }
  };

  const checkNetworkConnection = async () => {
    const isConnected = await isInternetAvailable();
    if (isConnected) {
      const userId = user.id;
      dispatch(getInventory(userId));
    }
  };

  const renderScenes: any = (routeKey: string) => {
    switch (routeKey) {
      case 'first':
        return <EditInventory />;
      case 'second':
        return <ViewInventory />;
      default:
        return null;
    }
  };

  const customStyles: any = {
    tabIndicatorStyle: styles.tabIndicatorStyle,
    tabBarStyle: styles.tabBarStyle,
    tabBarSubStyle: styles.tabBarSubStyle,
    tabTextStyle: styles.tabTextStyle,
  };

  const onPressPopupItem = (index: any) => {
    switch (index) {
      case 0:
        Alert.alert(localizedStrings.this_is_demo);
        break;
      case 1:
        Alert.alert(localizedStrings.this_is_demo);
        break;
      default:
        break;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBars />
      <View style={styles.topHeaderView}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.dotIconView}
          onPress={openSetting}
        >
          <Image source={dotIcon} style={styles.dotIcon} />
        </TouchableOpacity>
      </View>
      <View style={styles.topView}>
        <CustomText
          title={localizedStrings.Inventories}
          fontSize={32}
          isBold
          color={darkTextColor}
          textStyle={styles.titleStyle}
        />
      </View>
      <CustomTabView
        routes={routes}
        renderScenes={renderScenes}
        initialIndex={0}
        styles={customStyles}
      />
      <AddItemAndTransfer
        ref={popupRef}
        isTransferDisable={false}
        onPress={onPressPopupItem}
      />
    </SafeAreaView>
  );
};

export default Inventory;
