import React from 'react'
import { View, StyleSheet } from 'react-native' 

const Indicator = ({IndicatorCount, currentslideIndex}) => {
     
    if(!IndicatorCount || typeof IndicatorCount !== 'number') return null;

    let indicator = [];
    for(let i = 0; i < IndicatorCount; i++) {
        indicator.push(i)
    } 

    return indicator.map((indicator, index) => <View key={indicator} 
    style={[styles.indicator, index === currentslideIndex ? styles.selected : styles.unSelected]}/>)
}

export default Indicator;

const styles = StyleSheet.create({
    indicator: {
        width: 10,
        height: 10,
        backgroundColor: 'white',
        borderRadius: 5,
        marginHorizontal: 5 
       },
    selected: {
       backgroundColor: "white"
    },
    unSelected: {
        backgroundColor: "transparent",
        borderWidth: 2,
        borderColor: "white"
    } 
})