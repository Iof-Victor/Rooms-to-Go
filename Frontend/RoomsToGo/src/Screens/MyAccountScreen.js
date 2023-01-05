import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const MyAccountScreen = props => {
  const {navigation} = props;
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [username, setUsername] = useState();
  const [confirmEmail, setConfirmEmail] = useState();
  return (
    <ScrollView style={{backgroundColor: '#fff'}}>
      <View style={styles.container}>
        <View style={styles.inputView}>
          <TextInput
            value={username}
            placeholder="First Name"
            style={styles.textInput}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            value={email}
            placeholder="Last Name"
            style={styles.textInput}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            value={confirmEmail}
            placeholder="Change Email"
            style={styles.textInput}
            keyboardTypes="email"
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            value={password}
            placeholder="Phone Number"
            style={styles.textInput}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            value={password}
            placeholder="Phone Number"
            style={styles.textInput}
            secureTextEntry
          />
        </View>
        <View>
          <TouchableOpacity
            style={styles.registerButton}
            onPress={() => navigation.navigate('My Account')}>
            <Text style={styles.logInText}>Edit Account</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    position: 'absolute',
    top: 0,
    alignItems: 'center',
    right: 130,
    backgroundColor: 'white',
  },
  logo: {
    resizeMode: 'cover',
    height: 160,
    width: 150,
  },
  inputView: {
    marginBottom: 25,
    marginTop: 20,
    alignItems: 'center',
    marginBottom: 10,
  },
  textInput: {
    backgroundColor: '#D9D9D9',
    height: 70,
    width: 350,
    borderRadius: 15,
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
  },
  registerButton: {
    backgroundColor: '#9EB7B8',
    position: 'absolute',
    top: 50,
    left: -60,
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
    top: 190,
    left: -85,
  },
  registerTextContainer: {
    fontSize: 16,
    alignItems: 'center',
    fontWeight: '300',
  },
  emailIcon: {
    position: 'absolute',
    top: 15,
    right: 310,
  },
  passwordIcon: {
    position: 'absolute',
    top: 15,
    right: 310,
  },
});

export default MyAccountScreen;
