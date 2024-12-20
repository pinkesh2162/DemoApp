import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import moment from 'moment';
import {isInternetAvailable} from '../../utils/networkConnection';
import {localizedStrings} from '../../localization';
import {getDayDifference} from '../../helper/commonFunctions';
import {rightIcon} from '../../constants';
import {styles} from './styles';
import {RenderDataItemProps} from '../../types/inventoryTypes';

const InventoryEditItem: React.FC<RenderDataItemProps> = ({
  item,
  onInventoryTap,
}) => {
  if (item.name === undefined) {
    return <View style={[styles.mainView, {height: 96}]} />;
  }

  const currentDate = moment(new Date()).format('YYYY-MM-DD');
  const expiryDate = moment(item.lastUpdatedAt).format('YYYY-MM-DD');
  const days = getDayDifference(expiryDate, currentDate);

  return (
    <View>
      <TouchableOpacity
        style={[
          styles.mainView,
          {justifyContent: 'space-between', flexDirection: 'row'},
        ]}
        activeOpacity={0.8}
        onPress={async () => {
          const isConnected = await isInternetAvailable();
          if (isConnected) {
            onInventoryTap(item);
          } else {
            // noInternetConnectionModalRef?.modalOpen();
          }
        }}>
        <View>
          <Text style={styles.titleStyle}>{item.name}</Text>
          {item?.lastUpdatedAt && (
            <Text style={styles.descriptionText}>
              {localizedStrings.last_update}{' '}
              {days === 0
                ? localizedStrings.today_text +
                  localizedStrings.at +
                  moment(item.lastUpdatedAt).format('hh:mm A')
                : days === -1
                ? localizedStrings.yesterday +
                  localizedStrings.at +
                  moment(item.lastUpdatedAt).format('hh:mm A')
                : `${days} `.replace('-', '') + localizedStrings.day_ago}
            </Text>
          )}
        </View>
        <View style={styles.arrowView}>
          <Image source={rightIcon} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default InventoryEditItem;
