import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const CheckOutScreen = props => {
  const {navigation} = props;
  const [address, setAddress] = useState();
  const [county, setCounty] = useState();
  const [city, setCity] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  return (
    <ScrollView style={{backgroundColor: '#fff'}}>
      <View style={styles.header}>
        <Text style={styles.headerText}>CheckOut</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.inputView}>
          <TextInput
            value={address}
            placeholder="Address"
            style={styles.textInput}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            value={county}
            placeholder="County"
            style={styles.textInput}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput value={city} placeholder="City" style={styles.textInput} />
        </View>
        <View style={styles.inputView}>
          <TextInput
            value={phoneNumber}
            placeholder="Phone Number"
            style={styles.textInput}
          />
        </View>
        <View style={styles.totalPrice}>
          <Text style={styles.price}>Total:1000$</Text>
        </View>
        <View>
          <TouchableOpacity
            style={styles.paymentButton}
            onPress={() => navigation.navigate('Payment')}>
            <Text style={styles.paymentText}>Continue to Payment</Text>
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
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 15,
  },
  headerText: {
    fontSize: 18,
    color: '#808080',
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
  paymentButton: {
    backgroundColor: '#284B63',
    marginTop: 30,
    width: 250,
    borderRadius: 15,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  paymentText: {
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
  totalPrice: {
    borderColor: '#000000',
    borderWidth: 1,
    borderRadius: 8,
    marginTop: 30,
    paddingTop: 15,
    paddingBottom: 15,
    width: 200,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  price: {
    paddingLeft: 53,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#284B63',
  },
});
export default CheckOutScreen;
