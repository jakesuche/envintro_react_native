import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Login from './screens/login';
import Signup from './screens/Signup';
import Forgot from './screens/ForgotPassword';
import Onboarding from './screens/Onboarding';
import Home from './screens/Home';
import VerifyEmail from './screens/VerifyEmail';
import Dashboard from './screens/Dashboard';
import Customers from './screens/Customers';
{/* <Stack.Screen
          name="Customer"
          options={{headerShown: false}}
          component={Customers}></Stack.Screen> */}
function Navigation() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={"Customer"}>
      <Stack.Screen
          name="Customer"
          options={{headerShown: false}}
          component={Customers}></Stack.Screen>
      <Stack.Screen
          name="Dashboard"
          options={{headerShown: false}}
          component={Dashboard}></Stack.Screen>
        <Stack.Screen
          name="Home"
          options={{headerShown: false}}
          component={Home}></Stack.Screen>
        <Stack.Screen
          name="Login"
          options={{headerShown: false}}
          component={Login}></Stack.Screen>
        <Stack.Screen
          options={{
            headerShown: false,
            title: 'Register',
            headerStyle: {
              backgroundColor: '#1c1c1c',
              shadowOpacity: 0,
            },
            headerTintColor: 'white',
          }}
          name="Signup"
          component={Signup}></Stack.Screen>
        <Stack.Screen
          options={{
            title: 'Forgot password',
            headerStyle: {
              backgroundColor: '#1c1c1c',
              shadowOpacity: 0,
            },
            headerTintColor: 'white',
          }}
          name="forgotPassword"
          component={Forgot}></Stack.Screen>
        <Stack.Screen
          options={{
            headerShown: false,
            title: 'Onboard',
            headerStyle: {
              backgroundColor: '#1c1c1c',
              shadowOpacity: 0,
            },
            headerTintColor: 'white',
          }}
          name="Onboarding"
          component={Onboarding}></Stack.Screen>
          <Stack.Screen
          options={{
            
            title: 'Verify Email',
            headerStyle: {
              backgroundColor: '#1c1c1c',
              shadowOpacity: 0,
            },
            headerTintColor: 'white',
          }}
          name="VerifyEmail"
          component={VerifyEmail}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
