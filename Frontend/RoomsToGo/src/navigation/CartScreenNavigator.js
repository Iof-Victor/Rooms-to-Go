import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import CartScreen from '../Screens/CartScreen';
import CheckOutScreen from '../Screens/CheckOutScreen';
import PaymentScreen from '../Screens/PaymentScreen';
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
      <Stack.Screen
        name="CheckOut"
        component={CheckOutScreen}
        //options={{title: 'CheckOut'}}
      />
      <Stack.Screen
        name="Payment"
        component={PaymentScreen}
        //options={{title: 'CheckOut'}}
      />
    </Stack.Navigator>
  );
};
