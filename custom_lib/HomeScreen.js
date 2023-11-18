import React from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet,StatusBar } from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.imagetag} source={require('../assets/Tech.png')} />

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} 
        onPress={() => navigation.navigate('CreateBill')}>
          <Text style={styles.headingtxt}> Create Bill </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.headingtxt}> Saved Bills </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagetag: {
    width: 500,
    height: 100,
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  button: {
    flex: 1,
    marginRight: 22,
  },
  headingtxt: {
    fontSize: 28,
    backgroundColor: 'lightblue',
    borderRadius: 10,
    marginLeft: 15,
    marginRight: 10,
  },
});

export default HomeScreen;