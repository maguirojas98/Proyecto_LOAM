import {View, Text, ActivityIndicator} from 'react-native';
import React, {useContext} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import AuthStack from './AuthStack';
//import AppStack from './AppStack';
import { AppStack, ProximamenteStackNavigator } from './AppStack';


import { AuthContext } from '../context/AuthContext';
import TabNavigator from './TabNavigator';

const AppNav = () => {
    const {splashLoading, userInfo} = useContext(AuthContext);

    if(splashLoading){
        
     return(
        <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
            <ActivityIndicator size={'large'} />
            <Text>Esperando...</Text>
        </View>
     );
    }

    return(
        <NavigationContainer>
            {userInfo.token != null ? <TabNavigator /> : <AuthStack />}
        </NavigationContainer>
    );
} 

export default AppNav