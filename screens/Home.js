/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import InputGroup from '../components/input/input';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  TouchableOpacity,
  Button,
} from 'react-native';

const Input = ({navigation}) => {
  const Navigate = () => {
    navigation.navigate('Login');
  };
  const Navigate2 = () => {
    navigation.navigate('Signup');
  };
  return (
    <View style={{justifyContent: 'center', flex: 1, backgroundColor: 'white'}}>
      <View style={{flexDirection: 'column'}}>
        <View style={styles.imageContainer}>
          <Text> image</Text>
        </View>
        <View style={{padding: 40}}>
          <View style={{justifyContent: 'center',alignItems: 'center', marginVertical:20}}>
            <Text style={{fontSize:19, color:'#000'}}>Create a Free Account</Text>
          </View>

          <TouchableOpacity onPress={Navigate} style={styles.button}>
            <Text style={styles.buttonText}>Log in</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={Navigate2}  style={styles.button1}>
            <Text style={styles.buttonText}>Sign in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#5190FC',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 15,
    height: 44,
    borderRadius: 10,
    borderColor: 'none',
    marginVertical:10
  },
  button1:{
    backgroundColor: '#5137FC',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 15,
    height: 44,
    borderRadius: 10,
    borderColor: 'none',
    marginVertical:10  
  },
  buttonText: {
    color: 'white',
  },
  forgot: {
    marginRight: 30,
    marginBottom: 10,
  },
});

export default Input;
