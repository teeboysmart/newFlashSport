import React, {useState, useEffect} from 'react'
import { View, Dimensions, ImageBackground, TouchableOpacity, Text, SafeAreaView,TouchableWithoutFeedback } from 'react-native'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
  import StyledText from './SettingSection/StyledText';
  import { ThemeContext } from '../Context/ThemeContext';
import { colors } from './config/theme';
import { LinearGradient } from 'expo-linear-gradient';
import { useContext } from 'react';
import { useRoute } from '@react-navigation/native';
import { WebView } from 'react-native-webview';
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads'
import Orientation from "react-native-orientation-locker";
import { AntDesign } from "@expo/vector-icons";
import { ChevronLeftIcon} from 'react-native-heroicons/outline';
import { useNavigation } from '@react-navigation/native'
import * as ScreenOrientation from "expo-screen-orientation";
import { Ionicons } from '@expo/vector-icons';

  

function VideoPage() {

  const navigation = useNavigation();

   const [portrait, setPortrait] = useState(true) 

   // BannerAd
   const adUnitId = __DEV__ ? TestIds.BANNER : 'ca-app-pub-6086257842806831/7593333142';


    const route = useRoute();

    const { theme } = useContext(ThemeContext);
  let activeColors = colors[theme.mode];

    const width  = Dimensions.get('window').width;
const height  = Dimensions.get('window').height;


const html = route.params.embed;

console.log(html)

useEffect(() => {
     lockPortrait()
},[])

const lockPortrait = () => {
  ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
 
}

const handleClick = () => {
  setOrientationToLandscape(!orientationToLandscape);
  changeScreenOrientation();
}

const handlePress = () => {
  navigation.goBack()
   lockPortrait()
}

const [orientationToLandscape, setOrientationToLandscape] =
React.useState(true);

async function changeScreenOrientation() {
  if (orientationToLandscape === true) {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
  } else if (orientationToLandscape === false) {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
  }
}


  



// const css = `._scorebatEmbeddedPlayerW_ {width: 100%;height: auto;} @media (orientation: landscape) {._scorebatEmbeddedPlayerW_ {width: auto;height: 100%;}}`


    return (
      <ImageBackground source={require('../assets/images/Stadium.jpg')} style={{flex: 1}}>
        <LinearGradient colors={['#0006', '#000']} style={{ flex: 1,  }}>

        {/* <View  style={{height: 30,width: "100%", flexDirection: "row", alignItems: "center", paddingHorizontal: 4, zIndex: 20, marginBottom: 10,marginTop: 10 }}>
               

                <View style={{marginLeft: wp(20)}}>
                <Text
                     style={{color: "white", fontSize: hp(3), fontWeight: "bold"}}
                    >
                        <Text style={{color: colors.yellow}}>H</Text>ighlight Videos
                    </Text>
                </View> */}


                {/* <TouchableOpacity onPress={() => toggleFavourite(!isFavourite)}>
                    <HeartIcon size="35" color={isFavourite ? theme.background : "white"}/>
                </TouchableOpacity> */}

            {/* </View> */}

            <TouchableOpacity onPress={handlePress}  style={{backgroundColor: colors.yellow, height: hp(4), width: hp(4),  borderRadius: hp(4), justifyContent: "center", alignItems: "center", position:"absolute", left: "1%", top: "1%", zIndex: 20}}>
                    <ChevronLeftIcon size="25" strokeWidth={2.5} color="white"/>

                </TouchableOpacity>

                <TouchableOpacity onPress={handleClick} style={{backgroundColor: "#1A1110", height: orientationToLandscape ? hp(2.5) : hp(4), width:orientationToLandscape ? hp(2.5) : hp(4),  borderRadius:orientationToLandscape ? hp(2.5) : hp(4), justifyContent: "center", alignItems: "center", position:"absolute", right: orientationToLandscape ? "1%" : "1%", top: orientationToLandscape ? hp(9) : "30%", zIndex: 20}}>
                <Ionicons name="phone-portrait-outline" size={hp(1.5)} color="white" />
                </TouchableOpacity>

        <View style={{height: orientationToLandscape ? hp(32) : "100%",width:"100%", backgroundColor: activeColors.primary, }}>
            <View  style={{width: "100%", height: "100%", backgroundColor: 'gray'}}>
              <TouchableWithoutFeedback >
              <WebView  source={{ html: html}} style={{ width: "100%"}}/>
              </TouchableWithoutFeedback>
             </View>
            <View style={{backgroundColor: "#000", height: hp(20), justifyContent: 'center', borderBottomLeftRadius: hp(5), borderBottomRightRadius: hp(5)}}>
              <View style={{marginLeft: hp(5)}}>
              <StyledText numberOfLines={1} style={{fontSize: wp(6), color: 'white', fontWeight: 'bold'}}>{route.params.VideoCompetition}</StyledText>
                <StyledText style={{fontSize: wp(4), color: activeColors,color: 'white' }}>{route.params.VideoTitle}</StyledText>
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

        </LinearGradient>

</ImageBackground>
    )
}
export default VideoPage;