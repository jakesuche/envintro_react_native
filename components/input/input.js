

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
} from 'react-native';

const Input =  ({title, placeholder , secureTextEntry})  => {
  return (
    <View style={styles.inputRapper}>
      <Text
        style={{
          position: 'absolute',
          top: -13,
          left: 30,
          backgroundColor: 'white',
          fontSize: 14,
          paddingLeft:5,
          paddingRight:5,
          fontWeight: '300'
        }}>
        {title}
      </Text>
      <TextInput secureTextEntry={secureTextEntry} placeholder={placeholder}/>
    </View>
  );
};

const styles = StyleSheet.create({
  inputRapper: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    margin: 15,
    paddingLeft: 10,
    borderColor: 'black',
    borderWidth: 0.8,
    borderRadius: 5,
  },
});

export default Input;
