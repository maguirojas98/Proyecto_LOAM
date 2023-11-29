import React from "react";
import { Dimensions, Text, View } from "react-native";
import * as Progress from 'react-native-progress';
import { theme } from "../theme";

var {width,height} = Dimensions.get('window');

export default function Loading(){
    return(
        <View style={{height,width}} className="absolute flex-row justify-center items-center">
            <Progress.CircleSnail thickness={12} size={160} color={theme.background}/>
        </View>
    )
}