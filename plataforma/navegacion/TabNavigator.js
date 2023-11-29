import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Ionicons } from '@expo/vector-icons'; 

import { AppStack, ProximamenteStackNavigator, CatalogoStack } from "./AppStack";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {

  const getTabBarIcon = (route, focused, color) => {
    let iconName;

    if (route.name === 'Home') {
      iconName = focused ? 'home' : 'home-outline';
    } else if (route.name === 'Proximamente') {
      iconName = focused ? 'time' : 'time-outline';
    } else if (route.name === 'Catalogo'){
      iconName = focused ? 'book' : 'book-outline';
    }

    // 
    return <Ionicons name={iconName} size={25} color={color.black} />;
  };

  return (
    <Tab.Navigator  
    screenOptions={{
      headerShown: false,
      activeTintColor: 'black', // Color de ícono activo
      inactiveTintColor: 'white', // Color de ícono inactivo
      tabBarStyle: {backgroundColor: '#D4AF37', height: 55},
      tabBarLabelStyle: { color: 'black' }
    }}
  
    >
      <Tab.Screen
        name="Home"
        component={AppStack}
        options={({ route }) => ({
          tabBarIcon: ({ focused, color }) =>
            getTabBarIcon(route, focused, color),
        })}
      />
      <Tab.Screen
        name="Proximamente"
        component={ProximamenteStackNavigator}
        options={({ route }) => ({
          tabBarIcon: ({ focused, color }) =>
            getTabBarIcon(route, focused, color),
        })}
      />
      <Tab.Screen
        name="Catalogo"
        component={CatalogoStack}
        options={({ route }) => ({
          tabBarIcon: ({ focused, color }) =>
            getTabBarIcon(route, focused, color),
        })}      
      />  
    </Tab.Navigator>
  );
};

export default TabNavigator;
