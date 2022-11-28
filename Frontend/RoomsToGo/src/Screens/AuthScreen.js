import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

const AuthScreen = () => {
  const [email, setEmail] = useState();
  return (
    <View>
      <TextInput
        value={email}
        placeholder="Email"
        keyboardType="email-address"
      />
      <Text>Auth Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default AuthScreen;
