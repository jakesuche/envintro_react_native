/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import InputGroup from '../components/input/input';
const BG_IMG = require('../assets/backgrounds/Login_Bg.jpg');

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
  Image,
} from 'react-native';

const Input = ({navigation}) => {
  const Navigate = () => {
    navigation.navigate('forgotPassword');
  };
  const NavigateToSignup = () => {
    navigation.navigate('Signup');
  };
  return (
    <View style={{justifyContent: 'center', flex: 1, backgroundColor: 'white'}}>
       <Image
        
        source={BG_IMG}
        style={StyleSheet.absoluteFillObject}
        blurRadius={1}
      />
      <View style={{flexDirection: 'column'}}>
      
        <View style={styles.imageContainer}>
          <Text> image</Text>
        </View>
        
        <View style={{padding: 25}}>
          <InputGroup title={'Email Adress'} />
          
          <InputGroup title={'Password'} />
          
          <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
            <View></View>
            <TouchableOpacity onPress={Navigate} style={styles.forgot}>
              <Text>Forgot Password</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Log in</Text>
          </TouchableOpacity>
    
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              marginVertical: 10,
            }}>
            <Text>Haven't any account </Text>
            <TouchableOpacity onPress={NavigateToSignup}>
              <Text style={{color: '#5190FC'}}>Sign up</Text>
            </TouchableOpacity>
          </View>
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
