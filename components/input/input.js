import React from 'react';
import Feather from 'react-native-vector-icons/Feather';

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
} from 'react-native';

const Input = ({
  title,
  placeholder,
  secureTextEntry,
  keyboardType,
  autoCompleteType,
  inputStyle,
  onChange,
  errorMsg = '',
  containerStyle,
  appendComponent,
  prependComponent,
  autoCapitalize,
  label,
}) => {
  return (
    <View style={{marginBottom: 20, marginHorizontal: 10}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text style={{color: 'gray'}}>{label || title}</Text>
        <Text style={{color: 'red'}}>{errorMsg}</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          height: 55,
          paddingHorizontal: 19,
          marginTop: 13,
          borderRadius: 10,
          backgroundColor: '#DAE9F7',
          shadowColor: 'black',
          shadowOffset: {width: 0, height: 2},
          shadowOpacity: 0.26,
          shadowRadius: 3,
          elevation: 5,
          ...containerStyle
        }}>
        {prependComponent}
        <TextInput
          style={{
            flex: 1,

            ...inputStyle,
          }}
          placeholder={placeholder}
          placeholderTextColor="gray"
          autoCompleteType={autoCompleteType}
          autoCapitalize={autoCapitalize}
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
          // onChangeText={text=>onChange(text)}
        />
        {appendComponent}
      </View>
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

{
  /* <Text
        style={{
          position: 'absolute',
          top: -13,
          left: 30,
          backgroundColor: 'white',
          fontSize: 14,
          paddingLeft: 5,
          paddingRight: 5,
          fontWeight: '300',

        }}>
        {title}
      </Text>
      <TextInput secureTextEntry={secureTextEntry} placeholder={placeholder} /> */
}
