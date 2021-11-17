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
      <SafeAreaView style={{height: '100%'}}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: 15,
          }}>
          <Text style={{textAlign: 'center'}}>
            Please check your email for six(6) digit code
          </Text>
        </View>
        <View
          style={{
            justifyContent: 'space-around',
            flexDirection: 'row',
            marginVertical: 30,
          }}>
          <TextInput style={styles.textInput} value={'5'} />
          <TextInput style={styles.textInput} value={'5'} />
          <TextInput style={styles.textInput} value={'5'} />
          <TextInput style={styles.textInput} value={'5'} />
          <TextInput style={styles.textInput} value={'5'} />
          <TextInput style={styles.textInput} value={'5'} />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: 20,
          }}>
          <Text>Code send in 0:30</Text>
          <TouchableOpacity style={{marginLeft: 5}}>
            <Text style={{color: '#5190FC'}}>Resend code</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={Navigate} style={styles.button}>
          <Text style={styles.buttonText}>Verify</Text>
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
    fontWeight: 'bold',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 10,
    paddingLeft: 20,
    width: 50,
    height: 50,
  },
});

export default Input;
