import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import axios from 'axios';

const ProductsScreen = () => {
  let productType = '';

  [products, setProducts] = useState([]);
  [page, setPage] = useState(1);

  const handleChangePage = () => {
    if (page !== 1) {
      setPage(page - 1);
    }
  };

  const fetchProducts = async () => {
    try {
      const res = await axios
        .get('/getAllProducts', {
          params: {
            productType: '',
            pageNumber: page > 0 ? page : 1,
            nrOfProducts: 3,
          },
        })
        .catch(function (error) {
          if (error.response) {
            console.log(error.response);
          } else if (error.request) {
            console.log(error.request);
          } else {
            console.log('Error', error.message);
          }
        });
      if (res.data) {
        setProducts([res.data]);
      }
    } catch {
      console.log('error fetching the products');
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [page]);

  return (
    <View>
      <Text>Product Screen Test</Text>
      <Button
        title="next-page"
        onPress={() => {
          setPage(page + 1);
        }}>
        Next Page
      </Button>
      <Button
        title="prev-page"
        onPress={() => {
          handleChangePage();
        }}>
        Prev Page
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ProductsScreen;
