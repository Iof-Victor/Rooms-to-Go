import React, {useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
} from 'react-native';

import axios from 'axios';

function checkFieldsEquality(field1, field2) {
  if (field1 === field2) {
    return true;
  }
  return false;
}

const RegisterScreen = props => {
  const {navigation} = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [alertMessage, setAlertMessage] = useState('');

  const handleRegister = async () => {
    if (
      email.lenght != 0 &&
      password.lenght != 0 &&
      username.lenght != 0 &&
      confirmEmail.lenght != 0 &&
      confirmPassword.lenght != 0 &&
      username.length != 0
    ) {
      if (!checkFieldsEquality(password, confirmPassword)) {
        setAlertMessage('Password and Confirm Password fields must match');
      } else if (!checkFieldsEquality(email, confirmEmail)) {
        setAlertMessage('Email and Confirm Email fields must match');
      } else {
        try {
          const res = await axios
            .post('/createUser', {
              username,
              password,
              email,
            })
            .catch(function (error) {
              if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log(error.response.data.email);
                if (error.response.data.email && error.response.data.username) {
                  setAlertMessage(
                    'Username and Email are already used. Please pick something else',
                  );
                } else if (error.response.data.email) {
                  setAlertMessage(error.response.data.email);
                } else {
                  setAlertMessage(
                    'Username is already used. Please pick something else',
                  );
                }
              } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                console.log(error.request);
              } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
              }
            });
          if (res.data) {
            console.log('user sucesfully created');
            navigation.navigate('My Account');
          }
        } catch {
          console.log('error creating the user');
        }
      }
    } else {
      setAlertMessage('Please fill in all the fields!');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/imagines/logo.png')}
          style={styles.logo}
        />
      </View>

      <View>
        <Text style={styles.errorAlert}>{alertMessage}</Text>
      </View>

      <View style={styles.inputView}>
        <TextInput
          value={username}
          placeholder="UserName"
          style={styles.textInput}
          onChangeText={newText => setUsername(newText)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          value={email}
          placeholder="Email"
          style={styles.textInput}
          keyboardTypes="email"
          onChangeText={newText => setEmail(newText)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          value={confirmEmail}
          placeholder="Confirm Email"
          style={styles.textInput}
          keyboardTypes="email"
          onChangeText={newText => setConfirmEmail(newText)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          value={password}
          placeholder="Password"
          style={styles.textInput}
          secureTextEntry
          onChangeText={newText => setPassword(newText)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          value={confirmPassword}
          placeholder="Confirm Password"
          style={styles.textInput}
          secureTextEntry
          onChangeText={newText => setConfirmPassword(newText)}
        />
      </View>
      <View>
        <TouchableOpacity
          style={styles.registerButton}
          onPress={() => {
            handleRegister();
          }}>
          <Text style={styles.logInText}>Register</Text>
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
    height: 50,
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
  errorAlert: {
    color: 'red',
    top: 24,
    fontSize: 12,
  },
});

export default RegisterScreen;
