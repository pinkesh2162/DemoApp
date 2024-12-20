import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {
  activeTintColor,
  inActiveTintColor,
  brandMarkTab,
  checkOut,
  ic_delivery,
  profile,
  stockCount,
} from '../../constants';
import {localizedStrings} from '../../localization';
import {styles} from './styles';

const TabBar: React.FC<BottomTabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  return (
    <View>
      <View style={styles.borderStyle} />
      <View style={styles.tabContainer}>
        {state.routes.map((route, index) => {
          let iconName;
          switch (route.name) {
            case localizedStrings.inventories:
              iconName = brandMarkTab;
              break;
            case localizedStrings.orders:
              iconName = ic_delivery;
              break;
            case localizedStrings.stock_count:
              iconName = stockCount;
              break;
            case localizedStrings.check_out:
              iconName = checkOut;
              break;
            case localizedStrings.account:
              iconName = profile;
              break;
          }

          const {options} = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              key={route.key}
              accessibilityRole="button"
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              onPress={onPress}
              onLongPress={onLongPress}
              style={styles.tabItem}
              activeOpacity={0.9}>
              <Image
                source={iconName}
                style={[
                  styles.icon,
                  {tintColor: isFocused ? activeTintColor : inActiveTintColor},
                ]}
              />
              <Text
                style={[
                  styles.label,
                  {color: isFocused ? activeTintColor : inActiveTintColor},
                ]}>
                {String(label)}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default TabBar;
