import React, {useEffect, useRef} from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  Pressable,
  processColor,
  Button,
  ToastAndroid
} from "react-native";
import {Animated} from 'react-native';
import { Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Card } from 'react-native-paper';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { ThemeContext } from "../Context/ThemeContext";
import { useContext } from "react";
import { colors } from "./config/theme";
import moment from 'moment';
import { MaterialIcons } from '@expo/vector-icons';
import CountdownTimer from "./CountdownTimer";

const LivestreamItem = (props, style) => {
  const navigation = useNavigation();

  const { theme } = useContext(ThemeContext);
  let activeColors = colors[theme.mode];

  
    // // Create an animated value that will change from 0 to 1 and back
    // const opacity = useRef(new Animated.Value(0)).current;
  
    // // Start the animation loop when the component mounts
    // useEffect(() => {
    //   // Create an animation that changes the opacity value over 1 second
    //   const animation = Animated.timing(opacity, {
    //     toValue: 1,
    //     duration: 1000,
    //     useNativeDriver: true,
    //   });
  
    //   // Create a loop that repeats the animation indefinitely
    //   const loop = Animated.loop(animation, {
    //     resetBeforeIteration: true,
    //   });
  
    //   // Start the loop
    //   loop.start();
  
    //   // Stop the loop when the component unmounts
    //   return () => {
    //     loop.stop();
    //   };
    // }, [opacity]);
  
    // Render a view that uses the opacity value as a style prop


    const formatTime = (number) => {
      return number < 10 ? '0' + number : number;
    }

    const targetTime = props.targetTime;

    let now = new Date();
    let hours = formatTime(now.getHours());
    let minutes = formatTime(now.getMinutes());
    let seconds = formatTime(now.getSeconds());
    const  mainTime = `${hours}:${minutes}`
    console.log('Current Time:', mainTime );
    

  return (
    
    <Pressable
      style={[{ backgroundColor: activeColors.primary }, styles.container]}
      onPress={() => {
        if(props.targetTime  <= mainTime) {
        navigation.navigate("Live Matches", {
          VideoImage: props.VideoImage,
          VideoUrl: props.VideoUrl,
          VideoCompetition: props.VideoCompetition,
          homeName: props.homeName,
          awayName: props.awayName

         
        });
      } else {
          ToastAndroid.show('Match not yet started...', ToastAndroid.SHORT);
      }
      }}
    >
      <View
        style={{
          alignSelf: "flex-start",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={{flexDirection: "row", width: width}}>
       <View style={{}}>
       <Text numberOfLines={1} style={{ color: activeColors.tint, fontWeight: "bold", fontSize: hp(3), alignSelf: 'center',  }}>
          {props.VideoCompetition}
        </Text>
       </View>

       <View style={{position: "absolute", right: "10%"}}>
       <MaterialIcons name="live-tv" size={24} color="white" />
       </View>
       </View>
      </View>
      <View
        style={{
          width: wp(95),
          backgroundColor: 'rgba(225,225,225,0.2)',
          borderWidth: 1,
          borderColor: activeColors.tint,
          borderRadius: hp(3),
          marginTop: 5,
          height: "70%"
        }}
      >

        <View style={{}}>           
           {/* <View style={{width: hp(2),height: hp(2),borderRadius: hp(2),backgroundColor: "#fff", justifyContent: "center", alignItems: "center", position: "absolute", right: 10, top: 10}}>
           <Animated.View style={[styles.Animated, {opacity}]}/>  
           </View> */}
           
              
          
           
           

        
      
        <View style={{ alignSelf: "center", marginTop: 10 }}>
          <Text
            style={{
              fontWeight: "bold",
              color: activeColors.tint,
              textAlign: "center",
              fontSize: hp(3),
              
            }}
          >
            Stream
          </Text>
        </View>

        <View style={{ flexDirection: "row", width: "100%" }}>

          <View style={{paddingLeft: 10, width: "23%",}}>
            <Text
              numberOfLines={1}
              style={{ color: activeColors.tint, fontSize: wp(4), textAlign: 'center' }}
            >
              {props.homeName}
            </Text>
          </View>

          <View style={{ position: "absolute", left: "26%", width: "25%", marginTop: -10}}>
            <Image
              source={{ uri: props.homeUrl }}
              style={styles.leagueLogo2}
            />
          </View>

          <View 
            style={{
                backgroundColor: "red",
                position: "absolute",
                left: "39%",
                height: hp(2.5),
                width: wp(17),
                marginLeft: 10,
                justifyContent: "center",
                alignItems: "center",
                borderBottomRightRadius: 15,
                marginTop: 4,
            }}
          >
            <Text
              style={{ fontWeight: "bold", fontSize: wp(3), color: "white" }}
            >
              live
            </Text>
          </View>

          <View  style={{ position: "absolute", left: "62%", marginTop: -10 }}>
            <Image
              source={{ uri: props.awayUrl }}
              style={styles.leagueLogo2}
            />
          </View>

          <View style={{ position: "absolute", right: 1, width: "23%", paddingRight: 10  }}>
            <Text
              numberOfLines={1}
              style={{ color: activeColors.tint, fontSize: wp(4), textAlign: 'center' }}
            >
              {props.awayName}
            </Text>
        </View>

       
          </View>


        <View style={{ alignSelf: "center", marginTop: hp(2) }}>
          {/* <Text
            style={{
              color: activeColors.accent,
              fontWeight: "bold",
              fontSize: hp(3),
              marginTop: 10
            }}
          >
            {moment(props.date).format("MMM DD YY - HH:mm")}
          </Text> */}

        <CountdownTimer seconds={targetTime} /> 
        </View>
        </View> 
      </View>
    </Pressable>


  );
};

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default LivestreamItem;

const styles = StyleSheet.create({
  container: {
    height: hp(25),
    width: width,
    alignItems: "center",
    padding: 3,
  },
  elevationProp: {
    elevation: 6,
  },
  Animated: {
    width: hp(1.5),
    height: hp(1.5),
    borderRadius: hp(1.5),
    backgroundColor: "red",
  },
  leagueLogo2: {
    width: hp(6),
    height: hp(6),
    borderRadius: hp(6),
  },
  leagueLogo: {
    width: hp(3),
    height: hp(3),
    alignSelf: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    marginTop: -3,
  },
  data: {
    marginTop: 2,
  },
  author: {
    fontWeight: "bold",
    fontSize: 18,
  },
  image: {
    height: 60,
    width: "27%",
    borderRadius: 5,
  },
});
