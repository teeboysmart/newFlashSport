import React from 'react'
import { useFonts } from 'expo-font';
import { View, StyleSheet, FlatList, Text, Dimensions, Image, ImageBackground } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const Slides = ({item}) => {
  
    const {title, desc, backgroundColor, key} = item  
         if (key === 1) {

          return (
           <ImageBackground source={require('../assets/images/bigShot.jpg')} style={{width, height, alignItems: 'center', }}>
            
           </ImageBackground>
          )
}  else if(key === 2) {
   
          return (
            <LinearGradient colors={[ '#000', '#006']} style={{width:width, height: height, alignItems: 'center', padding: 4}}>
             <Text style={styles.Text1}>{title}</Text>
              <Image source={require('../assets/images/RoundFootball.jpg')} style={{height: hp(20),width: hp(20),borderRadius: hp(10), borderWidth: 2,marginTop: height * 0.05}}/>
              <Text style={[styles.Text1, {marginTop: 10}]}>{desc}</Text>
            </LinearGradient>
           )
         }  else {
          return (
            <LinearGradient colors={[ '#000', '#056']} style={{width:width, height: height, alignItems: 'center', padding: 4}}>
            <Text style={styles.Text3}>{title}</Text>
             <Image source={require('../assets/images/cup.jpg')} style={{height: hp(20),width: hp(20),borderRadius: hp(10), borderWidth: 2,marginTop: height * 0.05}}/>
             <Text style={[styles.Text3, {marginTop: 10}]}>{desc}</Text>
           </LinearGradient>
          )
          }
      
        
}

  const {width, height} = Dimensions.get('screen')

export default Slides;

const styles = StyleSheet.create({
  Slide: {
     width,
     height,
     justifyContent: "center",
     alignItems: "center"
  },
  Text1:{
    color: "#fff",
    fontSize: wp(12),
    textAlign: 'center',
    fontWeight: "bold"
  },
  Text3:{
    color: "#fff",
    fontSize: wp(11),
    textAlign: 'center',
    fontWeight: "bold"
  }
})