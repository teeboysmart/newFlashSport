// CountdownTimer.js

// CountdownTimer.js

// import React, { useState, useEffect,useRef } from 'react';
// import { View, Text, Animated, StyleSheet } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
//  import {
//      widthPercentageToDP as wp,
//     heightPercentageToDP as hp,
//    } from "react-native-responsive-screen";
//    import { ThemeContext } from "../Context/ThemeContext";
//  import { useContext } from "react";
//  import { colors } from "./config/theme";

// const CountdownTimer = (props) => {

//   const { theme } = useContext(ThemeContext);
//   let activeColors = colors[theme.mode];

//    // Create an animated value that will change from 0 to 1 and back
//     const opacity = useRef(new Animated.Value(0)).current;
  
//     // Start the animation loop when the component mounts
//     useEffect(() => {
//       // Create an animation that changes the opacity value over 1 second
//       const animation = Animated.timing(opacity, {
//         toValue: 1,
//         duration: 1000,
//         useNativeDriver: true,
//       });
  
//       // Create a loop that repeats the animation indefinitely
//       const loop = Animated.loop(animation, {
//         resetBeforeIteration: true,
//       });
  
//       // Start the loop
//       loop.start();
  
//       // Stop the loop when the component unmounts
//       return () => {
//         loop.stop();
//       };
//     }, [opacity]);

//   const [secondsLeft, setSecondsLeft] = useState(props.seconds);

//   // Load the timer value from AsyncStorage on component mount
//   useEffect(() => {
//     loadTimerValue();
//   }, []);

//   // Save the timer value to AsyncStorage whenever it changes
//   useEffect(() => {
//     saveTimerValue();
//   }, [secondsLeft]);

//   useEffect(() => {
//     let interval;

//     // Start the countdown automatically
//     interval = setInterval(() => {
//       setSecondsLeft((prevSeconds) => {
//         if (prevSeconds > 0) return prevSeconds - 1;
//         return prevSeconds;
//       });
//     }, 1000);

//     return () => {
//       clearInterval(interval);
//     };
//   }, []);

//   const loadTimerValue = async () => {
//     try {
//       const storedValue = await AsyncStorage.getItem('countdownTimer');
//       if (storedValue !== null) {
//         setSecondsLeft(parseInt(storedValue, 10));
//       }
//     } catch (error) {
//       console.error('Error loading timer value:', error);
//     }
//   };

//   const saveTimerValue = async () => {
//     try {
//       await AsyncStorage.setItem('countdownTimer', secondsLeft.toString());
//     } catch (error) {
//       console.error('Error saving timer value:', error);
//     }
//   };

//   const clockify = () => {
//     const hours = Math.floor(secondsLeft / 3600);
//     const mins = Math.floor((secondsLeft % 3600) / 60);
//     const sec = secondsLeft % 60;

//     const displayHours = hours < 10 ? `0${hours}` : hours;
//     const displayMins = mins < 10 ? `0${mins}` : mins;
//     const displaySec = sec < 10 ? `0${sec}` : sec;

//     return {
//       displayHours,
//       displayMins,
//       displaySec,
//     };
//   };

//   const formattedTime = `${clockify().displayHours}:${clockify().displayMins}:${clockify().displaySec}`;

//   if( formattedTime === '00:00:00') {
//     return (
//                     <View style={{flexDirection: "row"}}>
//                       <View style={{width: hp(2),height: hp(2),borderRadius: hp(2),backgroundColor: "#fff", justifyContent: "center", alignItems: "center", position: "absolute", right: 10, top: "40%"}}>
//                          <Animated.View style={[styles.Animated, {opacity}]}/>  
//                          </View>
              
//                     <View style={{height: hp(4.5), width:wp(30), justifyContent: "center", marginTop: 5, borderRadius: hp(5), paddingRight: 15, paddingLeft:15, borderColor: activeColors.tint, borderWidth: 2}}>
//                       <Text style={{fontSize: hp(2.5), fontWeight:"bold", color: activeColors.tint}}>live now</Text>
//                     </View>
//                     </View>
//                   );
//   } else {

//   return (
//     <View>
//       <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#FF5E00' }}>
//         {clockify().displayHours}:{clockify().displayMins}:{clockify().displaySec}
//       </Text>
//     </View>
//   );
// }
// };

// export default CountdownTimer;



import React, { useState, useEffect, useRef } from 'react';
import {Text,View,Animated,StyleSheet} from 'react-native'
 import {
     widthPercentageToDP as wp,
    heightPercentageToDP as hp,
   } from "react-native-responsive-screen";
   import { ThemeContext } from "../Context/ThemeContext";
 import { useContext } from "react";
 import { colors } from "./config/theme";


const CountdownTimer = (props) => {

  const { theme } = useContext(ThemeContext);
  let activeColors = colors[theme.mode];

   // Create an animated value that will change from 0 to 1 and back
    const opacity = useRef(new Animated.Value(0)).current;
  
    // Start the animation loop when the component mounts
    useEffect(() => {
      // Create an animation that changes the opacity value over 1 second
      const animation = Animated.timing(opacity, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      });
  
      // Create a loop that repeats the animation indefinitely
      const loop = Animated.loop(animation, {
        resetBeforeIteration: true,
      });
  
      // Start the loop
      loop.start();
  
      // Stop the loop when the component unmounts
      return () => {
        loop.stop();
      };
    }, [opacity]);
  
    // Render a view that uses the opacity value as a style prop


  const formatTime = (number) => {
    return number < 10 ? '0' + number : number;
  }
  
  
    let now = new Date();
    let hours = formatTime(now.getHours());
    let minutes = formatTime(now.getMinutes());
    let seconds = formatTime(now.getSeconds());
    const  mainTime = `${hours}:${minutes}`
    console.log('Current Time:', mainTime );
  

  // useEffect(() => {
  //   formatTime();
  // },[])
  
  
  // Output: Current Time: 07:14:21
  
  
    if(props.seconds  <= mainTime) {
      return (
              <View style={{flexDirection: "row", height: hp(4.5), width:wp(35),  borderRadius: hp(5), paddingRight: 10, paddingLeft:10, borderColor: activeColors.tint, borderWidth: 2,}}>
        
              <View style={{}}>
                <Text style={{fontSize: wp(5), fontWeight:"bold", color: activeColors.tint}}>live now</Text>
              </View>

              <View style={{width: hp(2),height: hp(2),borderRadius: hp(2),backgroundColor: "#fff", justifyContent: "center", alignItems: "center", marginLeft: 10, alignSelf: "center" }}>
                   <Animated.View style={[styles.Animated, {opacity}]}/>  
                   </View>
              </View>
            );
          } else {
          return (
            <View>
              <Text style={{fontSize: hp(3), fontWeight:"bold", color: "#FF5E00"}}>{props.seconds}</Text>
            </View>
          );
          
  
};
}

export default CountdownTimer;

const styles = StyleSheet.create({
  Animated: {
    width: hp(1.5),
    height: hp(1.5),
    borderRadius: hp(1.5),
    backgroundColor: "red",
  },
})