import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { Text, View, TouchableOpacity, Dimensions } from 'react-native';
import * as Progress from 'react-native-progress'
import { colors } from '../screens/config/theme';


export default function Loading() {

    const { width, height } = Dimensions.get('screen')
 
  return (
    
        <View style={{height, width}}  style={{position: "absolute", flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
            <Progress.CircleSnail thickness={12} size={160} color={colors.accent}/>
        </View>
    
  );
}


