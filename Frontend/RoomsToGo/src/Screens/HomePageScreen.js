import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ProductCard from '../Components/ProductCard';

const HomePageScreen = props => {
  const {navigation} = props;
  return (
    <View>
      <View style={styles.welcomeContainer}>
        <Text style={styles.welcomeTitle}>Welcome back user!</Text>
      </View>
      <ScrollView
        horizontal={true}
        contentContainerStyle={styles.productSwiper}
        style={styles.container}>
        <TouchableOpacity
          style={styles.productsIcon}
          onPress={() => navigation.navigate('ProductsPage')}>
          <MaterialCommunityIcons
            name="table-furniture"
            size={38}
            color="black"
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.productsIcon}
          onPress={() => navigation.navigate('ProductsPage')}>
          <MaterialCommunityIcons
            name="chair-rolling"
            size={38}
            color="black"
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.productsIcon}
          onPress={() => navigation.navigate('ProductsPage')}>
          <MaterialCommunityIcons name="wardrobe" size={38} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.productsIcon}
          onPress={() => navigation.navigate('ProductsPage')}>
          <MaterialCommunityIcons name="sofa" size={38} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.productsIcon}
          onPress={() => navigation.navigate('ProductsPage')}>
          <MaterialCommunityIcons name="bed-king" size={38} color="black" />
        </TouchableOpacity>
      </ScrollView>
      <View style={styles.productsContainer}>
        <ProductCard />
        <ProductCard />
      </View>
      <View>
        <Button
          onPress={() => navigation.navigate('ProductsPage')}
          title="Products"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  welcomeContainer: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 5,
  },
  productsContainer: {
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#C2D8D3',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  welcomeTitle: {
    fontSize: 15,
    color: 'black',
  },
  productSwiper: {
    justifyContent: 'space-evenly',
    flex: 1,
  },
  productsIcon: {
    padding: 5,
  },
});

export default HomePageScreen;
