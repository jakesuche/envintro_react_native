

import React from 'react';
import Input from './components/input/input';
import Login from './screens/login'
import Navigation from './Navigation'

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


const App = () => {
  

  return  <Navigation />
   
  
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  inputRapper: {
    flexDirection: 'column',

    justifyContent: 'flex-start',
    margin: 20,
    paddingLeft: 10,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius:10
  },
});

export default App;
