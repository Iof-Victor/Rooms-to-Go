import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomePageNavigator} from './HomePageNavigator';
import {CartScreenNavigator} from './CartScreenNavigator';
import {AccountNavigator} from './AccountNavigator';
import {AppRoute} from './AppRoutes';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomePageScreen from '../Screens/HomePageScreen';

const BottomTab = createBottomTabNavigator();

export const AppNavigator = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        name={AppRoute.HOME}
        component={HomePageNavigator}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => <Icon name="home" size={10} />,
        }}
      />
      <BottomTab.Screen
        name={AppRoute.CART}
        component={CartScreenNavigator}
        options={{
          tabBarLabel: 'Cart',
          tabBarIcon: ({color, size}) => (
            <Icon name="shopping-cart" size={10} />
          ),
        }}
      />
      <BottomTab.Screen
        name={AppRoute.MY_ACCOUNT}
        component={AccountNavigator}
        options={{
          tabBarLabel: 'Account',
          tabBarIcon: ({color, size}) => <Icon name="user-circle" size={10} />,
        }}
      />
    </BottomTab.Navigator>
  );
};
