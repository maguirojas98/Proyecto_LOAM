import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Welcome from '../screens/Welcome';
import Login from '../screens/login';
import SignUp from '../screens/signup';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Wecome" component={Welcome} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Sing" component={SignUp} />
    </Stack.Navigator>
  );
};

export default AuthStack;