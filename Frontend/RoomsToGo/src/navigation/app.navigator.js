import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {HomePageNavigator} from './HomePageNavigator';
import {CartScreenNavigator} from './CartScreenNavigator';
import {AccountNavigator} from './AccountNavigator';
import {AppRoute} from './AppRoutes';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from '../Components/Header';
const BottomTab = createBottomTabNavigator();
const Stack = createStackNavigator();

export const TabBarNavigator = () => {
  return (
    <BottomTab.Navigator initialRouteName={AppRoute.HOME}>
      <BottomTab.Screen
        name={AppRoute.HOME}
        component={HomePageNavigator}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => <Icon name="home" size={15} />,
          headerShown: false,
        }}
      />
      <BottomTab.Screen
        name={AppRoute.CART}
        component={CartScreenNavigator}
        options={{
          tabBarLabel: 'Cart',
          tabBarIcon: () => <Icon name="shopping-cart" size={15} />,
          headerShown: false,
        }}
      />
      <BottomTab.Screen
        name={AppRoute.MY_ACCOUNT}
        component={AccountNavigator}
        options={{
          tabBarLabel: 'Account',
          tabBarIcon: () => <Icon name="user-circle" size={15} />,
          headerShown: false,
        }}
      />
    </BottomTab.Navigator>
  );
};

export const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="App"
        component={TabBarNavigator}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
