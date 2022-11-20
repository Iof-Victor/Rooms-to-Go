import React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {AppNavigator} from './src/navigation/app.navigator';

const App = () => {
  return (
    <NavigationContainer>
      <AppNavigator>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Welcome App</Text>
          <Button
            onPress={() => console.log('lessss goo')}
            title="Test Button"
          />
        </View>
      </AppNavigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
