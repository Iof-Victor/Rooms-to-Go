import {React, useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Header = props => {
  const {navigation, title} = props;
  const [goBackTrigger, setGoBackTrigger] = useState(true);

  useEffect(() => {
    if (title === 'Home') {
      setGoBackTrigger(false);
    }
    if (title === 'Cart') {
      setGoBackTrigger(false);
    }
    if (title === 'Log In') {
      setGoBackTrigger(false);
    }
  }, [title]);

  return (
    <SafeAreaView style={styles.backgroundColor}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          {goBackTrigger && (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              //disabled={title === 'Home'}
              testID="headerBackButton"
              style={styles.icon}>
              <Icon name="arrow-left" size={23} />
            </TouchableOpacity>
          )}

          <View style={styles.titleDisplay}>
            <Text style={styles.titleScreen}>{title}</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    shadowColor: 'grey',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.6,
    shadowRadius: 2,
    elevation: 2,
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 40,
  },
  icon: {
    marginHorizontal: 3,
  },
  titleScreen: {
    color: 'black',
    fontSize: 16,
  },
  titleDisplay: {
    alignItems: 'center',
    position: 'absolute',
    left: 170,
  },
  backgroundColor: {
    color: '#f1faee',
  },
});

export default Header;
