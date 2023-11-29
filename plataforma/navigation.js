import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from './screens/HomeScreen';
import MovieScreen from './screens/MovieScreen';
import PersonScreen from './screens/PersonScreen';
import SearchScreen from './screens/SearchScreen';
import Welcome from './screens/Welcome';
import Login from './screens/login';
import SignUp from './screens/signup';



const Stack = createNativeStackNavigator();


export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" options={{headerShown: false}} component={HomeScreen} />
        <Stack.Screen name="Movie" options={{headerShown: false}} component={MovieScreen} />
        <Stack.Screen name="Person" options={{headerShown: false}} component={PersonScreen} />
        <Stack.Screen name="Search" options={{headerShown: false}} component={SearchScreen} />
        <Stack.Screen name="Welcome" options={{headerShown: false}} component={Welcome} />
        <Stack.Screen name="login" options={{headerShown: false}} component={Login} />
        <Stack.Screen name="signup" options={{headerShown: false}} component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  )
  
}