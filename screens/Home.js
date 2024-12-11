import React from "react";
import MainContainer from "../Components/MainContainer";
import NewsHomeScreen from "./NewsHomeScreen";
import { StyleSheet, Dimensions } from "react-native";
import StyledText from "./SettingSection/StyledText";
import ExploreFlatlist from "./ExploreFlatlist";
import { ThemeContext } from "../Context/ThemeContext";
import { useContext, useState, useEffect } from "react";
import { colors } from "./config/theme";
import axios from "axios";
import Explore from "../Components/Explore";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
// import { InterstitialAd, TestIds, AdEventType, BannerAd } from 'react-native-google-mobile-ads';

function Home() {

// InterstitialAd
// const adUnitId = __DEV__ ? TestIds.INTERSTITIAL : 'ca-app-pub-xxxxxxxxxxxxx/yyyyyyyyyyyyyy';

// const interstitial = InterstitialAd.createForAdRequest(adUnitId, {
//   requestNonPersonalizedAdsOnly: true,
//   keywords: ['fashion', 'clothing'],
// });

// const [loaded, setLoaded] = useState(false);

//   useEffect(() => {
//     const unsubscribe = interstitial.addAdEventListener(AdEventType.LOADED, () => {
//       setLoaded(true);
//       interstitial.show()
//     });

//     // Start loading the interstitial straight away
//     interstitial.load();

//     // Unsubscribe from events on unmount
//     return unsubscribe;
//   }, []);



  const { theme } = useContext(ThemeContext);
  let activeColors = colors[theme.mode];

  return (
    <MainContainer
      style={{
        backgroundColor: activeColors.primary,
        width: width,
        height: height,
      }}
    >
      <StyledText
        style={{ marginLeft: 20, color: "#FF5E00", fontSize: wp(12), textShadowColor: 'black', textShadowOffset: {width:4, height: 4}, textShadowRadius: 10 }}
        big
      >
        Trending
      </StyledText>
      <NewsHomeScreen />
      <StyledText
        style={{ marginLeft: 20, color: "#FF5E00", fontSize: wp(12), textShadowColor: 'black', textShadowOffset: {width:4, height: 4}, textShadowRadius: 10}}
        big

      >
        Explore
      </StyledText>
      <Explore />
    </MainContainer>
  );
}

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

export default Home;

const styles = StyleSheet.create({});
