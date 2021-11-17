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
    navigation.navigate('Onboarding');
  };
  return (
    <View style={styles.container}>
      <SafeAreaView style={{height:'100%'}}>
        <View style={{justifyContent: 'center', alignItems: 'center', marginVertical:15}}>
          <Text style={{textAlign: 'center'}}>Please enter your email address below to recieve your OTP number.</Text>
        </View>
        <View style={{justifyContent: 'center', marginVertical:15}}>
         <InputGroup title="Email address" placeholder="Enter your email address"/>
        </View>
        
         <TouchableOpacity onPress={Navigate} style={styles.button} >
             <Text style={styles.buttonText}>Send OTP</Text>
         </TouchableOpacity>
      

      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    padding: 15,
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
