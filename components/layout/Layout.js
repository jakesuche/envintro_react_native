import React, {useRef} from 'react';

import Feather from 'react-native-vector-icons/Feather';
import NavigationView from './Sidebar'



import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
  DrawerLayoutAndroid,
} from 'react-native';



const Layout = ({children, title}) => {
  const drawer = useRef(null);
  const Navigate = () => {
    navigation.navigate('Onboarding');
  };

  const CloseDrawer = () => {
      drawer.current.closeDrawer();
  }
  
  const DrawView = () => {
    return (
      <View>
        <NavigationView CloseDrawer={CloseDrawer}  />
      </View>
    )
  }



  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition={'left'}
      renderNavigationView={DrawView}>
      <View style={styles.container}>
      <View style={styles.nav}>
          <TouchableOpacity onPress={() => drawer.current.openDrawer()}>
            <Feather size={25} color="#000" name="menu" />
          </TouchableOpacity>

          <Text style={{color:'#000', fontSize:17, fontWeight:'800', fontFamily:'Poppins'}}> { title || 'Username'}</Text>
          <TouchableOpacity>
            <Feather size={25} color="#000" name="bell" />
          </TouchableOpacity>
        </View>
     {children}
     </View>
    </DrawerLayoutAndroid>
  );
};

const styles = StyleSheet.create({
  nav: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 80,
    alignItems: 'center',
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  container: {
    justifyContent: 'center',
    backgroundColor: '#E8E6E5',
    position:'relative'
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
  
 
});

export default Layout;
