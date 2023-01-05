import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const PaymentScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Payment Methods</Text>
      <Text style={styles.methodText}>Select a Payment Method</Text>
      <View style={styles.paymentOptionsContainer}>
        <TouchableOpacity style={styles.paymentOption}>
          <View style={styles.paymentTextContainer}>
            <Text>Apple Pay</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.paymentOptionsContainer}>
        <TouchableOpacity style={styles.paymentOption}>
          <View style={styles.paymentTextContainer}>
            <Text>Visa/MasterCard</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.paymentOptionsContainer}>
        <TouchableOpacity style={styles.paymentOption}>
          <View style={styles.paymentTextContainer}>
            <Text>At Delivery</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          style={styles.paymentButton}
          onPress={() => navigation.navigate('Payment')}>
          <Text style={styles.paymentText}>Continue to Payment</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'column',
  },
  headerText: {
    fontSize: 20,
    color: '#808080',
    marginTop: 20,
  },
  methodText: {
    fontSize: 17,
    marginTop: 40,
    marginBottom: 20,
  },
  paymentOptionsContainer: {
    marginTop: 30,
    marginBottom: 20,
    justifyContent: 'space-between',
  },
  paymentOption: {
    backgroundColor: '#dbdbdb',
    height: 50,
    width: 350,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderRadius: 15,
    justifyContent: 'center',
  },
  paymentTextContainer: {
    marginLeft: 20,
  },
  paymentButton: {
    backgroundColor: '#284B63',
    marginTop: 120,
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
});

export default PaymentScreen;
