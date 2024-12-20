/* eslint-disable react/no-unstable-nested-components */
import React, { useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { localizedStrings, strings } from '../../localization';
import { Inventory, Orders, StockCount, Checkout, Account } from '../../module';
import TabBar from '../customTabBar';

const Tab = createBottomTabNavigator();

function TabNavigator() {
  useEffect(() => {
    strings().setLanguage('en');
  }, []);

  return (
    <Tab.Navigator tabBar={(props) => <TabBar {...props} />}>
      <Tab.Screen
        name={localizedStrings.inventories}
        component={Inventory}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name={localizedStrings.orders}
        component={Orders}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name={localizedStrings.stock_count}
        component={StockCount}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name={localizedStrings.check_out}
        component={Checkout}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name={localizedStrings.account}
        component={Account}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}

export default TabNavigator;
