import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import CartScreen from '../Screens/CartScreen';
import Header from '../Components/Header';
const Stack = createStackNavigator();

export const CartScreenNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: ({navigation, options}) => {
          return <Header navigation={navigation} title={options?.title} />;
        },
      }}>
      <Stack.Screen
        name="Cart"
        component={CartScreen}
        options={{title: 'Cart'}}
      />
    </Stack.Navigator>
  );
};
