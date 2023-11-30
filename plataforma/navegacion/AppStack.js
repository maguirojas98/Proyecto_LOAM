import React, {useContext} from 'react';

import { createStackNavigator } from "@react-navigation/stack";

import Proximamente from '../screens/Proximamente';

import MovieScreen from '../screens/MovieScreen';
import PersonScreen from '../screens/PersonScreen';
import SearchScreen from '../screens/SearchScreen';

import CatalogoScreen from '../screens/CatalogoScreen';

import HomeScreen from '../screens/HomeScreen';

import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from '../components/CustomDrawer';
import VideoScreen from '../screens/VideoScreen';
import Notification from '../components/notifications';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function Hamburguesa() {
  return (
    <Drawer.Navigator 
    drawerContent={props => <CustomDrawer {...props} />}
    options={{headerShown: false}}
    screenOptions={{
      drawerStyle: {
        backgroundColor: 'black'
      },
      drawerActiveTintColor: 'yellow',
      drawerInactiveTintColor: 'white'
    }}
    >
      <Drawer.Screen name="Inicio" options={{headerShown: false}} component={HomeScreen} />
      <Drawer.Screen name="Notificacion" options={{headerShown: false}} component={Notification} />
    </Drawer.Navigator>
  );
}
const AppStack = () => {
  return (
      <Stack.Navigator options={{headerShown: false}}>
        <Stack.Screen name="Menu" options={{headerShown: false}} component={Hamburguesa} />
        <Stack.Screen name="HomeHome" options={{headerShown: false}} component={HomeScreen} />
        <Stack.Screen name="Movie" options={{headerShown: false}} component={MovieScreen} />
        <Stack.Screen name="Person" options={{headerShown: false}} component={PersonScreen} />
        <Stack.Screen name="Search" options={{headerShown: false}} component={SearchScreen} />
        <Stack.Screen name="VideoPlay" options={{headerShown: false}} component={VideoScreen} />
      </Stack.Navigator>
  );
};


const ProximamenteStackNavigator = () => {
  return (
    <Stack.Navigator options={{headerShown: false}}>
      <Stack.Screen name="Menu" options={{headerShown: false}} component={Hamburguesa} />
      <Stack.Screen name="ProximamenteTe" options={{headerShown: false}} component={Proximamente} />
      <Stack.Screen name="Movie" options={{headerShown: false}} component={MovieScreen} />
      <Stack.Screen name="Person" options={{headerShown: false}} component={PersonScreen} />
      <Stack.Screen name="Search" options={{headerShown: false}} component={SearchScreen} />
    </Stack.Navigator>
  );
}

const CatalogoStack = () => {
  return (
    <Stack.Navigator >
      <Stack.Screen name="Menu" options={{headerShown: false}} component={Hamburguesa} />
      <Stack.Screen name="Catalogo"options={{headerShown: false}} component={CatalogoScreen} />
      <Stack.Screen name="Movie" options={{headerShown: false}} component={MovieScreen} />
      <Stack.Screen name="Person" options={{headerShown: false}} component={PersonScreen} />
      <Stack.Screen name="Search" options={{headerShown: false}} component={SearchScreen} />
      <Stack.Screen name="VideoPlay" options={{headerShown: false}} component={VideoScreen} />
    </Stack.Navigator>
  );
}


export {AppStack, ProximamenteStackNavigator, CatalogoStack};