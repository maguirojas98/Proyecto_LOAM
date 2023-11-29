import { useNavigation } from "@react-navigation/native";
import React, { useContext, useState } from "react";
import { Image, SafeAreaView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { ArrowLeftIcon } from "react-native-heroicons/solid";
import { theme } from "../theme";
import { AuthContext } from "../context/AuthContext";



export default function SignUp(){
    const navigation = useNavigation();
    const [email,setEmail]= useState();
    const [password,setPassword]= useState();

    const { crearUsuario } = useContext(AuthContext);

    const handleEnviarUsuario = () => {
            const nuevoUsuario = {
                email: email,
                password: password,
            };
            crearUsuario(nuevoUsuario);
    };
    return(
        <View className="flex-1 bg-white" style={{backgroundColor: theme.background}}>
            <SafeAreaView className="flex">
                <View className="flex-row justify-start">
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
                    onPress={handleEnviarUsuario}
                >
                    <Text className="font-xl font-bold text-center text-gray-700">Registrarse</Text>
                </TouchableOpacity>
            </View>
            <View className="flex-row justify-center">
                    <Text className="text-white font-semibold">Ya tienes cuenta?</Text>
                    <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
                        <Text className="font-semibold text-black">Ingresar</Text>
                    </TouchableOpacity>
            </View>
        </View>
    )
}