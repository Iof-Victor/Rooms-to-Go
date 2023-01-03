import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const AuthScreen = props => {
  const {navigation} = props;
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/imagines/logo.png')}
          style={styles.logo}
        />
      </View>
      <View style={styles.inputView}>
        <View style={styles.emailIcon}>
          <MaterialCommunityIcons name="email" size={38} color="#D9D9D9" />
        </View>
        <TextInput
          value={email}
          placeholder="Email"
          style={styles.textInput}
          keyboardType="email-address"
        />
      </View>
      <View style={styles.inputView}>
        <View style={styles.passwordIcon}>
          <MaterialCommunityIcons name="lock" size={38} color="#D9D9D9" />
        </View>
        <TextInput
          value={password}
          placeholder="Password"
          style={styles.textInput}
          secureTextEntry
        />
      </View>
      <View>
        <TouchableOpacity
          style={styles.logInButton}
          onPress={() => navigation.navigate('My Account')}>
          <Text style={styles.logInText}>Log In</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          style={styles.registerContainer}
          onPress={() => navigation.navigate('Register')}>
          <Text style={styles.registerTextContainer}>
            No account? Sign up here
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    position: 'absolute',
    top: -40,
    alignItems: 'center',
    right: 100,
  },
  logo: {
    resizeMode: 'contain',
    height: 300,
    width: 200,
  },
  inputView: {
    marginBottom: 10,
    marginTop: 10,
    alignItems: 'center',
  },
  textInput: {
    backgroundColor: '#D9D9D9',
    height: 70,
    width: 340,
    borderRadius: 20,
    alignItems: 'center',
    paddingLeft: 20,
    marginLeft: 25,
  },
  logInButton: {
    backgroundColor: '#9EB7B8',
    marginTop: 20,
    width: 150,
    borderRadius: 15,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logInText: {
    alignItems: 'center',
    fontSize: 15,
    color: 'white',
  },
  registerContainer: {
    position: 'absolute',
    top: 175,
    left: -85,
  },
  registerTextContainer: {
    fontSize: 16,
    alignItems: 'center',
    fontWeight: '300',
  },
  passwordIcon: {
    position: 'absolute',
    top: 3,
    right: 327,
    padding: 10,
  },
  emailIcon: {
    position: 'absolute',
    top: 3,
    right: 330,
    padding: 10,
  },
});

export default AuthScreen;
