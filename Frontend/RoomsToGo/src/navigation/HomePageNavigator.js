import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomePageScreen from '../Screens/HomePageScreen';

const Stack = createStackNavigator();

export const HomePageNavigator = () => {
  return (
    <Stack.Navigator
    //   screenOptions={{
    //     header: ({scene, previous, navigation}) => {
    //       const {options} = scene.descriptor;
    //       const title =
    //         options.headerTitle !== undefined
    //           ? options.headerTitle
    //           : options.title !== undefined
    //           ? options.title
    //           : scene.route.name;
    //       return (
    //         <Header
    //           title={title}
    //           leftButton={previous ? true : false}
    //           style={[options.headerStyle, {zIndex: 9999}]}
    //           navigation={navigation}
    //         />
    //       );
    //     },
    //   }}>
    >
      <Stack.Screen name="Home" component={HomePageScreen} />
    </Stack.Navigator>
  );
};
