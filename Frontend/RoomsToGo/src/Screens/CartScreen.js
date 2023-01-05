import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CartProductCard from '../Components/CartProductCard';

const CartScreen = props => {
  const {navigation} = props;
  return (
    <ScrollView style={{flex: 1}} contentContainerStyle={{paddingBottom: 60}}>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <MaterialCommunityIcons
            name="cart"
            size={38}
            color="#D9D9D9"
            style={styles.cartIcon}
          />
          <Text style={styles.cartTitle}>My cart</Text>
        </View>
        <View style={styles.productsContainer}>
          <View style={styles.productCard}>
            <CartProductCard />
          </View>
          <View style={styles.productCard}>
            <CartProductCard />
          </View>
          <View style={styles.productCard}>
            <CartProductCard />
          </View>
          <View style={styles.productCard}>
            <CartProductCard />
          </View>
          <View style={styles.productCard}>
            <CartProductCard />
          </View>
        </View>
        <View style={styles.totalPrice}>
          <Text style={styles.price}>Total:1000$</Text>
        </View>
        <View>
          <TouchableOpacity
            style={styles.logInButton}
            onPress={() => navigation.navigate('CheckOut')}>
            <Text style={styles.logInText}>Checkout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    flexDirection: 'row',
  },
  cartIcon: {
    marginLeft: 8,
  },
  cartTitle: {
    fontSize: 18,
    color: '#808080',
    marginLeft: 8,
    marginTop: 4,
  },
  productsContainer: {
    paddingTop: 20,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  productCard: {
    paddingTop: 15,
    marginLeft: 15,
  },
  totalPrice: {
    borderColor: '#000000',
    borderWidth: 1,
    borderRadius: 8,
    marginTop: 30,
    marginLeft: '24%',
    marginRight: '24%',
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
  logInButton: {
    position: 'absolute',
    left: 84,
    top: 10,
    backgroundColor: '#284B63',
    marginTop: 20,
    width: 230,
    borderRadius: 15,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  logInText: {
    alignItems: 'center',
    fontSize: 18,
    color: 'white',
  },
});

export default CartScreen;
