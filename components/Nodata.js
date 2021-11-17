import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

const Nodata = ({title, onPress}) => {

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 16, marginTop: -100, fontFamily:'Poppins'}}>
        {title ? title : 'No data found'}
      </Text>
      <Feather size={40} name="inbox" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },

});

export default Nodata;
