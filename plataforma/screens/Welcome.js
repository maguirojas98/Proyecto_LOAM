import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { theme } from "../theme";

export default function Welcome(){
    const navigation = useNavigation();
    return(
        <SafeAreaView className="flex-1" style={{backgroundColor: theme.background}}>
            <View className="flex-1 flex justify-around my-4">
                <Text className="text-white font-bold text-4xl text-center">
                    Bienvenido a ELASTIC ENTERTAMMENT
                </Text>
                <View className="flex-row justify-center">
                    <Image source={require("../assets/images/Logo.png")}
                        style={{width:350 , height:350}}/>
                </View>
                <View className="space-y-4">
                    <TouchableOpacity className="py-3 bg-yellow-400 mx-7 rounded-xl"
                        onPress={()=>navigation.navigate('Sing')}>
                        <Text className="text-xl font-bold text-center text-gray-700">
                            Registrarse
                        </Text>
                    </TouchableOpacity>
                    <View className="flex-row justify-center">
                        <Text className="text-white font-semibold">Ya tienes cuenta?</Text>
                        <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
                            <Text className="font-semibold text-black">Ingresar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}