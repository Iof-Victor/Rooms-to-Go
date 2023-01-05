import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import axios from 'axios';

const AuthScreen = props => {
  const {navigation} = props;
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [alertMessage, setAlertMessage] = useState('');
  const handleAuth = async () => {
    if (username.length != 0 && password.length != 0) {
      try {
        const res = await axios
          .post('/loginUser', {
            username,
            password,
          })
          .catch(function (error) {
            if (error.response) {
              // The request was made and the server responded with a status code
              // that falls out of the range of 2xx
              setAlertMessage(error.response.data.text);
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

        //console.log(1);
        if (res.data) {
          console.log(res.data);
          navigation.navigate('My Account');
        }
      } catch {
        console.log('Login not ok');
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
        <View style={styles.emailIcon}>
          <MaterialCommunityIcons name="email" size={38} color="#D9D9D9" />
        </View>
        <TextInput
          value={username}
          placeholder="Username"
          style={styles.textInput}
          onChangeText={newText => setUsername(newText)}
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
          onChangeText={newText => setPassword(newText)}
        />
      </View>
      <View>
        <TouchableOpacity
          style={styles.logInButton}
          onPress={() => {
            handleAuth();
          }}>
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
