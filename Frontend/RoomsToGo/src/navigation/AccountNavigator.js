import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AuthScreen from '../Screens/AuthScreen';

const Stack = createStackNavigator();

export const AccountNavigator = () => {
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
      <Stack.Screen name="Log In" component={AuthScreen} />
    </Stack.Navigator>
  );
};
