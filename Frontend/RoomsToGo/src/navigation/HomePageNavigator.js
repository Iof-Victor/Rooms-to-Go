import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomePageScreen from '../Screens/HomePageScreen';
import Header from '../Components/Header';
import ProductsScreen from '../Screens/ProductsScreen';
import {AppRoute} from './AppRoutes';

const Stack = createStackNavigator();

export const HomePageNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: ({navigation, options}) => {
          return <Header navigation={navigation} title={options?.title} />;
        },
      }}>
      <Stack.Screen
        name={AppRoute.HOME}
        component={HomePageScreen}
        options={{title: 'Home'}}
      />
      <Stack.Screen
        name="ProductsPage"
        component={ProductsScreen}
        options={{title: 'Products'}}
      />
    </Stack.Navigator>
  );
};
