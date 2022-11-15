import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const BottomTab = createBottomTabNavigator();

export const AppNavigator = () => {
  return <BottomTab.Navigator></BottomTab.Navigator>;
};
