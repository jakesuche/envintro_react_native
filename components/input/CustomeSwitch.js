import React from 'react';
import {View, Text, StyleSheet, TouchableWithoutFeedback} from 'react-native';

const Switch = ({value, onChange, label, switchStyle}) => {
  return (
    <TouchableWithoutFeedback  onPress={() => onChange(!value)}>
      <View style={{flexDirection: 'row', ...switchStyle}}>
        <View
          style={
            value ? styles.switchOnContainer : styles.switchOffContainer
          }>
              <View style={{...styles.dot, backgroundColor:value ? 'white' :'gray'}}>

              </View>
          </View>
        <Text style={{color: value ? '#5797f5' : null, marginLeft: 15}}>
          {label || 'label'}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  switchOnContainer: {
    width: 40,
    height: 20,
    paddingRight: 2,
    justifyContent: 'center',
    alignItems: 'flex-end',
    borderRadius: 10,
    backgroundColor: '#5797f5',
  },

  switchOffContainer: {
    width: 40,
    height:20,
    paddingLeft: 2,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
  },
});
export default Switch;
