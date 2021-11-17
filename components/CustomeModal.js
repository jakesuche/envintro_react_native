import React from 'react';
import { View,
    Text,
    StyleSheet,
    SafeAreaView,
    Modal,
} from 'react-native'
    import Feather from 'react-native-vector-icons/Feather';
    import FontAwesome from 'react-native-vector-icons/FontAwesome';


const CustomeModal = ({children, setModalVisibility , modalVisible, title}) => {
    return (
    <Modal visible={modalVisible} animationType="slide" transparent={false}>
      <SafeAreaView>
      <View
          style={{
            padding: 15,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: '#5797F5',
          }}>
          <Feather
            onPress={() => setModalVisibility(false)}
            size={23}
            color="#fff"
            name="arrow-left"
            style={{flex:1}}
          />
          <Text style={{color: '#fff', fontSize: 16, fontWeight: 'bold', flex:3}}>
            {title ? title :'Modal title here'}
          </Text>
        </View>
       <View>
          {children}
       </View>
      </SafeAreaView>
      </Modal>
    );
  };


  

  const styles = StyleSheet.create({
    container: {
      backgroundColor: 'red',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    inputWrapper: {
      flex: 1,
      justifyContent: 'center',
      padding: 15,
    },
    viewMore: {
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 15,
      flexDirection: 'row',
      flex: 1,
    },
   
   

  });


  export default CustomeModal