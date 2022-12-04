import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomePageNavigator} from './HomePageNavigator';
import {CartScreenNavigator} from './CartScreenNavigator';
import {AccountNavigator} from './AccountNavigator';
import {AppRoute} from './AppRoutes';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomePageScreen from '../Screens/HomePageScreen';
//Icon.loadFont();

const BottomTab = createBottomTabNavigator();

export const AppNavigator = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        name={AppRoute.HOME}
        component={HomePageNavigator}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => <Icon name="home" size={10} />,
        }}
      />
      <BottomTab.Screen
        name={AppRoute.CART}
        component={CartScreenNavigator}
        options={{
          tabBarLabel: 'Cart',
          tabBarIcon: () => <Icon name="shopping-cart" size={10} />,
        }}
      />
      <BottomTab.Screen
        name={AppRoute.MY_ACCOUNT}
        component={AccountNavigator}
        options={{
          tabBarLabel: 'Account',
          tabBarIcon: () => <Icon name="user-circle" size={10} />,
        }}
      />
    </BottomTab.Navigator>
  );
};
