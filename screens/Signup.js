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
   KeyboardAvoidingView
 } from 'react-native';
 
 const Input = ({navigation}) => {

  const Navigate = () =>{
    navigation.navigate("Login")

  }
   return (
    <ScrollView contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}>
       <View style={styles.container}>
         <View style={{flexDirection: 'column'}}>
           <View style={styles.imageContainer}>
             <Text> image signup</Text>
           </View>
            
           <View style={{padding: 25}}>
             <InputGroup title={'Full Name'} />
             <InputGroup title={'Email'} />
             <InputGroup title={'Phone Number'} />
             <InputGroup title={'Password'} />
             <InputGroup title={'Confirm Password'} />
           
             <View
               style={{justifyContent: 'space-between', flexDirection: 'row'}}>
               <View></View>
               <TouchableOpacity style={styles.forgot}>
                 <Text>Forgot Password</Text>
               </TouchableOpacity>
             </View>
 
             <TouchableOpacity onPress={()=>navigation.navigate("VerifyEmail")} style={styles.button}>
               <Text style={styles.buttonText}>Register</Text>
             </TouchableOpacity>
 
             <View
               style={{
                 flexDirection: 'row',
                 alignItems: 'center',
                 justifyContent: 'center',
                 marginVertical: 10,
               }}>
               <Text>Haven't any account </Text>
               <TouchableOpacity onPress={Navigate} >
              <Text style={{color:'#5190FC'}}>Log in</Text>
            </TouchableOpacity>
             </View>
           </View>
           
         </View>
        
       </View>
       </ScrollView>
    
   );
 };
 
 const styles = StyleSheet.create({
   container: {
    justifyContent: 'center',
     flex:1,
     backgroundColor:'white'
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
 
 export default Input;
 