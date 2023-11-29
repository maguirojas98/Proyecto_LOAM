import React, {useContext} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

import Ionicons from 'react-native-vector-icons/Ionicons';

import {AuthContext} from '../context/AuthContext'


const CustomDrawer = props => {
  const {userInfo, logout} = useContext(AuthContext);
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{backgroundColor: 'black'}}>
        <ImageBackground
          source={require('../assets/images/banner.jpg')}
          style={{padding: 20}}>
          <Image
            source={require('../assets/images/Logo.png')}
            style={{height: 80, width: 80, borderRadius: 40, marginBottom: 10}}
          />
          <Text
            style={{
              color: '#fff',
              fontSize: 18,
              fontFamily: 'Roboto',
              marginBottom: 5,
              fontWeight: 'bold',
            }}>
             ELASTIC ENTERTAMMENT
          </Text>
        </ImageBackground>
        <View style={{flex: 1, backgroundColor: 'black', paddingTop: 10}}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={{padding: 20, borderTopWidth: 1, borderTopColor: '#ccc'}}>
        <TouchableOpacity onPress={() => {logout()}} style={{paddingVertical: 15}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ionicons name="exit-outline" size={22} color="#fff" />
            <Text
              style={{
                fontSize: 15,
                fontFamily: 'Roboto',
                marginLeft: 5,
                color: 'white'
              }}>
              Sign Out
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;