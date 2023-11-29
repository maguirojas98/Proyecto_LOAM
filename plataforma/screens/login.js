import { useNavigation } from "@react-navigation/native";
import React, { useContext, useState } from "react";
import { Image, SafeAreaView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { ArrowLeftIcon } from "react-native-heroicons/solid";
import { theme } from "../theme";
import { AuthContext } from '../context/AuthContext';
import Spinner from 'react-native-loading-spinner-overlay';

export default function Login(){
    const navigation = useNavigation();
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const { isLoading, login } = useContext(AuthContext);
    return(
        <View className="flex-1 bg-white" style={{backgroundColor: theme.background}} >
           <Spinner visible={isLoading} />
            <SafeAreaView className="flex">
                <View className="flex-row justify-start pt-20">
                    <TouchableOpacity
                        onPress={()=>navigation.goBack()}
                        className="bg-yellow-400 p-2 rounded-tr-2xl rounded-bl-2xl ml-4"
                    >
                        <ArrowLeftIcon size="20" color="yellow" />
                    </TouchableOpacity>
                </View>
                <View className="flex-row justify-center">
                    <Image source={require("../assets/images/Logo.png")}
                        style={{width: 200, height: 200}}/>
                </View>
            </SafeAreaView>
            <View className="form space-y-2">
                <Text className="text-gray-700 ml-4">Email</Text>
                <TextInput
                    className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
                    placeholder="Ingresa Email"
                    value={email} 
                    onChangeText={text => setEmail(text)}
                />
                <Text className="text-gray-700 ml-4">Contraseña</Text>
                <TextInput
                    className="p-4 bg-gray-100 text-gray-700 rounded-2xl"
                    secureTextEntry
                    placeholder="Ingrese Contraseña"
                    value={password} 
                    onChangeText={text => setPassword(text)}
                />
                <TouchableOpacity 
                    className="py-3 bg-yellow-400 rounded-xl"
                    onPress={()=>{login(email,password)}}
                >
                    <Text className="font-xl font-bold text-center text-gray-700">Ingresar</Text>
                </TouchableOpacity >
            </View>
            <View className="flex-row justify-center">
                    <Text className="text-white font-semibold">No tienes cuenta?</Text>
                    <TouchableOpacity onPress={()=>navigation.navigate('Sign')}>
                        <Text className="font-semibold text-black">Registrarse</Text>
                    </TouchableOpacity>
            </View>
        </View>
    )
}