import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import CartScreen from '../Screens/CartScreen';

const Stack = createStackNavigator();

export const CartScreenNavigator = () => {
  return (
    <Stack.Navigator
    // screenOptions={{
    //   header: ({scene, previous, navigation}) => {
    //     const {options} = scene.descriptor;
    //     const title =
    //       options.headerTitle !== undefined
    //         ? options.headerTitle
    //         : options.title !== undefined
    //         ? options.title
    //         : scene.route.name;
    //     return (
    //       <Header
    //         title={title}
    //         leftButton={previous ? true : false}
    //         style={options.headerStyle}
    //         navigation={navigation}
    //         searchButton={false}
    //       />
    //     );
    //   },
    // }}>
    >
      <Stack.Screen name="Cart" component={CartScreen} />
    </Stack.Navigator>
  );
};
