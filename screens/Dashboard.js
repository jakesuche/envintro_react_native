import React, {useRef} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Layout from '../components/layout/Layout';


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
  DrawerLayoutAndroid,
} from 'react-native';

const dashboardList = [
  {
    title: 'Quality to be packed',
    color: '#2EBBFE',
    icon: 'archive',
  },
  {
    title: 'Packages to be shipped',
    color: '#FC6A3A',
    icon: 'truck',
  },
  {
    title: 'Packages to be delivered',
    color: '#2EE3FE',
    icon: 'gift',
  },
  {
    title: 'Quantity to be invoiced',
    color: '#7D29E6',
    icon: 'file-text',
  },
];
//

const Dashboard = ({navigation}) => {

  const Navigate = () => {
    navigation.navigate('Onboarding');
  };
  return (
      <Layout>
        <SafeAreaView style={{height: '100%', padding: 15}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginVertical: 10,
            }}>
            <Text style={{color:'#000', fontSize:16}}>Sales Activity</Text>

            <TouchableOpacity>
              <AntDesign size={20} color="#000" name="reload1" />
            </TouchableOpacity>
          </View>

          {dashboardList.map((dash, i) => {
            return (
              <View key={i} style={styles.card}>
                <View
                  style={{
                    justifyContent: 'space-around',
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      backgroundColor: dash.color,
                      padding: 12,
                      borderRadius: 140,
                      
                    }}>
                    <Feather color="white" size={24} name={dash.icon} />
                  </View>

                  <View >
                    <Text>0</Text>
                    <Text>{dash.title}</Text>
                  </View>
                  <TouchableOpacity >
                    <Feather size={20} color="#000" name="chevron-right" />
                  </TouchableOpacity>
                </View>
              </View>
            );
          })}
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginVertical: 10,
            }}>
            <Text style={{color:'#000', fontSize:16}}>Inventory Summary (In Quality)</Text>
          </View>
          <View style={styles.card}>
            <View style={styles.innerCard}>
              <View
                style={{
                  borderLeftColor: '#FC6A3A',
                  borderLeftWidth: 1,
                  paddingLeft: 10,
                  paddingRight: 10,
                }}>
                <Text>In hand</Text>
                <Text>0</Text>
              </View>
              <View
                style={{
                  borderLeftColor: '#7D29E6',
                  borderLeftWidth: 1,
                  paddingLeft: 10,
                  paddingRight: 10,
                }}>
                <Text>To be recieved</Text>
                <Text>0</Text>
              </View>
            </View>
          </View>
          
        </SafeAreaView>
      </Layout>
  
  );
};

const styles = StyleSheet.create({
 
  container: {
    justifyContent: 'center',
    backgroundColor: '#E8E6E5',
    position:'relative'
  },

  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 25,
    marginVertical: 7,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.26,
    shadowRadius: 3,
    elevation: 3,
  },
  innerCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding:10
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

export default Dashboard;
