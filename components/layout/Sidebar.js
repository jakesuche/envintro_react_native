import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  TouchableWithoutFeedback,
  SafeAreaView,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Material from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import IonIcons from 'react-native-vector-icons/Ionicons';

import {sidebarroute} from './Routes';

const Sidebar = ({CloseDrawer}) => {
  const [subMenu, setSubMenu] = useState(false);
  const Router = route => {
    if (route.sub) {
      setSubMenu(init => !init);
    } else {
      return;
    }
  };
  console.log('kksks');
  return (
    <ScrollView>
    <View style={[styles.container, styles.navigationContainer]}>
      <View style={styles.navHeader}>
        <View style={styles.textWrapper}>
          <Text style={{textAlign: 'center', fontSize: 19}}>U</Text>
        </View>

        <Text style={{fontSize: 14, marginVertical: 4}}>Nicon net</Text>
        <Text style={{fontSize: 14}}>Uchechidi@gmail.com</Text>
      </View>
      
      <SafeAreaView style={{padding: 15}}>
     
        <View>
          {sidebarroute.map(navList => {
            return (
              <TouchableOpacity key={navList.id}>
                <TouchableOpacity
                  
                  onPress={() => Router(navList)}
                  style={styles.listItem}>
                  {navList.icon == 'feedback' ? (
                    <MaterialIcon
                      style={styles.icon}
                      name={navList.icon}
                      
                    />
                  ) : navList.icon == 'package' ? (
                    <Material
                      style={styles.icon}
                      name={navList.icon}
                      
                    />
                  ) : navList.icon == 'file-document' ? (
                    <Material
                      style={styles.icon}
                      name={navList.icon}
                      
                    />
                  ) : navList.id == 7 ? (
                    <IonIcons
                      style={styles.icon}
                      name={navList.icon}
                      
                    />
                  ) : (
                    <Entypo
                      style={styles.icon}
                      name={navList.icon}
                      
                    />
                  )}
                  <Text style={{flex: 5, fontSize: 14, color: '#000'}}>
                    {navList.name}
                  </Text>
                 {
                   navList.sub && ( 
                    <Entypo style={{flex:0}} name="chevron-right"/>
                  )
                 }
                </TouchableOpacity>

                {navList?.sub && subMenu ? (
                  <View style={{marginLeft: 60}}>
                    {navList?.sub?.map(subList => {
                      return (
                        <TouchableOpacity
                          key={subList.id}
                          style={styles.listItem}>
                          <Text style={{fontSize: 13}}>{subList.name}</Text>
                        </TouchableOpacity>
                      );
                    })}
                  </View>
                ) : null}
              </TouchableOpacity>
            );
          })}
        </View>
       
      </SafeAreaView>
      
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 9,
  },
  navHeader: {
    backgroundColor: 'gray',
    height: 160,
    paddingLeft: 10,
    paddingTop: 16,
    flexDirection: 'column',
  },
  textWrapper: {
    backgroundColor: 'red',
    padding: 10,
    width: 60,
    height: 60,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    flex: 1,
    color: '#000',
    fontSize: 28,
    marginLeft:10

  },
});

export default Sidebar;
