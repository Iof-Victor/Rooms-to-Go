import React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';

const CartProductCard = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/imagines/logo.png')}
        style={styles.logo}
      />
      <View style={styles.detailsContainer}>
        <View style={styles.productTitle}>
          <Text style={styles.title}>Product Card</Text>
        </View>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>300$</Text>
        </View>
        <View>
          <TouchableOpacity
            style={styles.cartButton}
            onPress={() => console.log('added to cart')}>
            <Text style={styles.cartText}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    //alignItems: 'center',
    backgroundColor: '#E7EAEA',
    // marginLeft: 5,
    // marginRight: 5,
    borderRadius: 5,
    flexDirection: 'row',
    height: 180,
    width: 360,
    
  },
  logo: {
    resizeMode: 'contain',
    height: 135,
    width: 135,
    borderRadius: 10,
    marginLeft: 10,
    marginTop: 22,
  },
  detailsContainer:{
    marginRight:40,
    marginTop:28,
    alignContent: 'center',
  },
  productTitle: {
    marginTop: 10,
    marginBottom: 10,
  },
  priceContainer: {
    paddingTop: 5,
  },
  title: {
    fontSize: 17,
    //fontWeight: 'bold',
  },
  price: {
    fontSize: 15,
    paddingLeft:35,
  },
  cartButton: {
    backgroundColor: '#9EB7B8',
    marginTop: 8,
    marginBottom: 5,
    width: 100,
    borderRadius: 15,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cartText: {
    alignItems: 'center',
    fontSize: 14,
    color: 'white',
  },
});

export default CartProductCard;
