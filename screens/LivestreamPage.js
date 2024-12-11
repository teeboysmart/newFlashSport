import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Dimensions,
  Platform,
  Image,
  Button,
  ActivityIndicator,
  StyleSheet,
  ImageBackground,
  Text,
  TouchableOpacity
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import StyledText from "./SettingSection/StyledText";
import { ThemeContext } from "../Context/ThemeContext";
import { colors } from "./config/theme";
import { useContext } from "react";
import { useRoute } from "@react-navigation/native";
import { WebView } from "react-native-webview";
import Orientation from "react-native-orientation-locker";
import { ChevronLeftIcon} from 'react-native-heroicons/outline';
import {
  BannerAd,
  BannerAdSize,
  TestIds,
} from "react-native-google-mobile-ads";
import { Video, VideoFullscreenUpdateEvent } from "expo-av";
import * as ScreenOrientation from "expo-screen-orientation";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';

function LivestreamPage() {

  const navigation = useNavigation();

  // BannerAd
  const adUnitId = __DEV__
    ? TestIds.BANNER
    : "ca-app-pub-6086257842806831/7593333142";

  const route = useRoute();

  const { theme } = useContext(ThemeContext);
  let activeColors = colors[theme.mode];

  const width = Dimensions.get("window").width;
  const height = Dimensions.get("window").height;

  // const [video, getVideo] = useState(url);
  
  const scalesPageToFit = Platform.OS === 'android';

  // const injectedJS = `
  //   const style = document.createElement('style');
  //   style.innerHTML = 'body { overflow: hidden; }';
  //   document.head.appendChild(style);
  // `;

  const injectedJS = `
    const style = document.createElement('style');
    style.innerHTML = 'body { margin-top: -150px; }'; // Adjust the value as needed
    document.head.appendChild(style);
  `;

  const videos = React.useRef(null);
  const [status, setStatus] = React.useState({});
  const [orientationToLandscape, setOrientationToLandscape] =
    React.useState(true);



  async function changeScreenOrientation() {
    if (orientationToLandscape === true) {
      ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
    } else if (orientationToLandscape === false) {
      ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
    }
  }

  const onFullscreenUpdated = async ({
    fullscreenUpdate,
  }: VideoFullscreenUpdateEvent) => {
    if (fullscreenUpdate === Video.FULLSCREEN_UPDATE_PLAYER_DID_PRESENT) {
      await ScreenOrientation.lockAsync();
      ScreenOrientation.OrientationLock.LANDSCAPE
    } else if (
      fullscreenUpdate === Video.FULLSCREEN_UPDATE_PLAYER_WILL_DISMISS
    ) {
      await ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.PORTRAIT
      );
    }
  };

  const lockPortrait = () => {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
  }  

  const toggleOrientation = () => {
    setOrientationToLandscape(!orientationToLandscape);
    changeScreenOrientation();
  };

  const handleClick = () => {
    setOrientationToLandscape(!orientationToLandscape);
    changeScreenOrientation();
  
  }

  useEffect(() => {
    lockPortrait()
  },[])



  // // State to store the loading status of the video
  // const [loading, setLoading] = useState(true);

  // // State to store the error status of the video
  // const [error, setError] = useState(false);

  // // Effect to check the network status and the video url validity
  // useEffect(() => {
  //   // A function to check the network connectivity
  //   const checkNetwork = async () => {
  //     try {
  //       // Use the expo-network module to get the network state
  //       const { isConnected } = await Network.getNetworkStateAsync();
  //     //   If not connected, set the error state to true
  //       if (!isConnected) {
  //         setError(true);
  //       }
  //     } catch (e) {
  //       // If any error occurs, set the error state to true
  //       setError(true);
  //     }
  //   };

  //   // A function to check the video url validity
  //   const checkVideoUrl = async () => {
  //     try {
  //       // Use the fetch API to make a head request to the video url
  //       const response = await fetch(url, { method: 'HEAD' });
  //       // If the response status is not OK, set the error state to true
  //       if (!response.ok) {
  //         setError(true);
  //       }
  //     } catch (e) {
  //       // If any error occurs, set the error state to true
  //       setError(true);
  //     }
  //   };

  //   // Call the functions to check the network and the video url
  //   checkNetwork();
  //   checkVideoUrl();
  // }, [url]); // Run the effect whenever the videoUrl prop changes

  // // A callback function to handle the onLoadStart event of the video
  // const handleLoadStart = () => {
  //   // Set the loading state to true
  //   setLoading(true);
  // };

  // // A callback function to handle the onLoad event of the video
  // const handleLoad = () => {
  // //   Set the loading state to false
  //   setLoading(false);
  // };

  // // A callback function to handle the onError event of the video
  // const handleError = () => {
  //   // Set the error state to true
  //   setError(true);
  // };

  
    const html = route.params.VideoUrl;
  //  const html =  'https://hls.streambtw.com/live/stream_1.m3u8';
  console.log(html)

  const handlePress = () => {
    navigation.goBack()
     lockPortrait()
  }
  

  return (
    <View
      source={require("../assets/images/Stadium.jpg")}
      style={{ flex: 1, padding: 3, backgroundColor: activeColors.primary}}
    >
     
         <View  style={{height: 30,width, flexDirection: "row", alignItems: "center", paddingHorizontal: 4, zIndex: 20, marginBottom: 10,marginTop: 10, position: "absolute", top: 0 }}>
                <TouchableOpacity onPress={handlePress}  style={{backgroundColor: colors.yellow, height: hp(5), width: hp(5),  borderRadius: hp(5), justifyContent: "center", alignItems: "center"}}>
                    <ChevronLeftIcon size="25" strokeWidth={2.5} color="white"/>

                </TouchableOpacity>
            </View>    
        <View
          style={{
            width: "100%",
            height: orientationToLandscape ? hp(52) : hp(100),
            backgroundColor: "black",
            marginTop: orientationToLandscape ? 0 : hp(-9) 
          }}
        >
          {/* {
            error && <Text style={styles.error}>Video cannot be played</Text>
          } */}
          {/* If there is no error, show the video */}
          
          {/* <Video
            ref={videos}
            style={{ height: "85%", backgroundColor: "black", width: "100%",  }}
            source={{
              uri: url,
            }}
            useNativeControls
            onFullscreenUpdate={onFullscreenUpdated}
            resizeMode="contain"
            isLooping
            shouldPlay
            onLoadStart={handleLoadStart}
          onLoad={handleLoad}
          onError={handleError}
            onPlaybackStatusUpdate={(status) => setStatus(() => status)}
          /> */}

          {/* If the video is loading, show a loading icon */}
      {/* {loading ? <View style={{position: "absolute", top: "30%", left: "45%"}}>
         <ActivityIndicator size="large" color="#ffffff" style={{}} /> 
         </View> : null} */}

          {/* <View style={{ flexDirection: "row", width: width }}>
           

            <AntDesign
              onPress={toggleOrientation}
              name="arrowsalt"
              size={hp(3)}
              color="white"
              style={{ marginLeft: -100, position: "absolute", right: 0 }}
            />
          </View> */}

                <TouchableOpacity onPress={handleClick} style={{backgroundColor: "#1A1110", height: orientationToLandscape ? hp(3) : hp(4), width:orientationToLandscape ? hp(3) : hp(4),  borderRadius:orientationToLandscape ? hp(2.5) : hp(4), justifyContent: "center", alignItems: "center", position:"absolute", right: orientationToLandscape ? "1%" : "1%", top: orientationToLandscape ? "20%" : "15%", zIndex: 20}}>
                <AntDesign
              name="arrowsalt"
              size={hp(2)}
              color="white"
              
            />
                </TouchableOpacity>

                
           
            <WebView scalesPageToFit={scalesPageToFit} bounces={false}  injectedJavaScript={injectedJS}  source={{uri: html}} style={{ width: "100%" }}/>
           
        
        </View>
        <View style={{backgroundColor: "#000", height: hp(20), justifyContent: 'center', borderBottomLeftRadius: hp(5), borderBottomRightRadius: hp(5), marginBottom:orientationToLandscape ? -50 : 0}}>
        <View style={{marginLeft: hp(5)}}>
        <StyledText numberOfLines={1} style={{fontSize: wp(6), color: 'white', fontWeight: 'bold'}}>{route.params.VideoCompetition}</StyledText>
        <View style={{flexDirection: 'row'}}>
          <StyledText style={{fontSize: wp(4), color: activeColors,color: 'white' }}>{route.params.homeName} - </StyledText>
          <StyledText style={{fontSize: wp(4), color: activeColors,color: 'white' }}>{route.params.awayName}</StyledText>
        </View>
        </View>
      </View>


         {/* BannerAd Components */}
         <View style={{position: 'absolute', bottom: orientationToLandscape ? 0: -200}}>
        <BannerAd
      unitId={adUnitId}
      size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
      requestOptions={{
        requestNonPersonalizedAdsOnly: true,
      }}
    />
    </View> 
      
    </View>
  );
}

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default LivestreamPage;

const styles = StyleSheet.create({
  buttonContainer3: {
    width: hp(6),
    height: hp(8),
    backgroundColor: '#4167b2',
    borderRadius: 4,
    marginLeft: width * 0.01,
    marginTop: hp(8),
    position: "absolute",
    right: "40%"
  },
  content: {
    fontSize: wp(5)
  }
})
