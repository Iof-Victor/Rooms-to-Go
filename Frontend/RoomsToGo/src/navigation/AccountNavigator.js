import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AuthScreen from '../Screens/AuthScreen';
import RegisterScreen from '../Screens/RegisterScreen';
import Header from '../Components/Header';
import MyAccountScreen from '../Screens/MyAccountScreen';

const Stack = createStackNavigator();

export const AccountNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: ({navigation, options}) => {
          return <Header navigation={navigation} title={options?.title} />;
        },
      }}>
      <Stack.Screen
        name="Log In"
        component={AuthScreen}
        options={{title: 'Log In'}}
      />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="My Account" component={MyAccountScreen} />
    </Stack.Navigator>
  );
};
