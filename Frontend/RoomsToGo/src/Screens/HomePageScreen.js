import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const HomePageScreen = props => {
  const {navigation} = props;
  return (
    <View>
      <Text>HomePage Screen</Text>
      <Button
        onPress={() => navigation.navigate('ProductsPage')}
        title="Products"
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default HomePageScreen;
