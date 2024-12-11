import { colors } from "./config/theme";
import moment from "moment";
import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  Pressable,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import MainContainer from "../Components/MainContainer";
import { ThemeContext } from "../Context/ThemeContext";
import { useContext } from "react";
import StyledText from "./SettingSection/StyledText";
import { useNavigation } from "@react-navigation/native";
import { ChevronLeftIcon} from 'react-native-heroicons/outline';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RewardedAd, RewardedAdEventType, TestIds } from 'react-native-google-mobile-ads';
import { WebView } from 'react-native-webview';
import { Linking } from "react-native";

function FullgistPage() {

  // RewardedAd
const adUnitId = __DEV__ ? TestIds.REWARDED : 'ca-app-pub-xxxxxxxxxxxxx/yyyyyyyyyyyyyy';

const rewarded = RewardedAd.createForAdRequest(adUnitId, {
  requestNonPersonalizedAdsOnly: true,
  keywords: ['fashion', 'clothing'],
});



// RewardedAd
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const unsubscribeLoaded = rewarded.addAdEventListener(RewardedAdEventType.LOADED, () => {
      setLoaded(true);
      rewarded.show();
    });
    const unsubscribeEarned = rewarded.addAdEventListener(
      RewardedAdEventType.EARNED_REWARD,
      reward => {
        console.log('User earned reward of ', reward);
      },
    );

    // Start loading the rewarded ad straight away
    rewarded.load();

    // Unsubscribe from events on unmount
    return () => {
      unsubscribeLoaded();
      unsubscribeEarned();
    };
  }, []);

  const goToWeb = () => {
    const url = route.params.url; // Replace with your desired URL
    Linking.openURL(url)
  }
  

  const route = useRoute();

  const navigation = useNavigation();

  const { theme } = useContext(ThemeContext);
  let activeColors = colors[theme.mode];

  return (
    <MainContainer style={{ backgroundColor: activeColors.secondary }}>
      <Image source={{ uri: route.params.themeImage }} style={styles.image} />
      <TouchableOpacity onPress={() => navigation.goBack()}  style={{backgroundColor: colors.yellow, height: hp(5), width: hp(5),  borderRadius: hp(5), justifyContent: "center", alignItems: "center", position: 'absolute', top: 5, left: 5}}>
                    <ChevronLeftIcon size="25" strokeWidth={2.5} color="white"/>

                </TouchableOpacity>
        <ScrollView
          style={{
            width: "100%",
            height: "100%",
            borderTopRightRadius: hp(7),
            borderTopLeftRadius: hp(7),
            backgroundColor: activeColors.primary,
            marginTop: hp(-5)
          }}
        >
         <View style={{width: "85%",alignSelf: "center",marginTop: hp(3)}}>
         <StyledText
            big
            style={[{ color: activeColors.tertiary }, styles.title]}
          >
            {route.params.title}
          </StyledText>

          <View style={styles.authorRow}>
            <View style={styles.author}>
              <Image
                source={{ uri: route.params.urlToImage }}
                style={styles.avatar}
              />
              <StyledText
                numberOfLines={2}
                bold
                style={{ color: activeColors.tertiary }}
              >
                {route.params.author}
              </StyledText>
            </View>

            <StyledText style={{ color: activeColors.tint, fontSize: hp(2) }} small>
              {moment(route.params.publishedAt).format("MMM DD YY")}
            </StyledText>
          </View>

         </View>
        
         <View style={{marginTop: hp(5), width: "95%", alignSelf: "center"}}>
         <StyledText style={{ color: activeColors.tint, fontSize: hp(2.5), textAlign: "justify" }} small>
              {route.params.description}
            </StyledText>

            <TouchableOpacity onPress={goToWeb} style={{height: hp(5), width: hp(18), alignSelf: "flex-end", marginTop: 10, backgroundColor:"#FF5E00", justifyContent: "center", alignItems: "center",  borderRadius:hp(1.5)}}>
                <Text numberOfLines={1} style={{fontSize: hp(2.5), color: "white"}}>Read More >></Text>
            </TouchableOpacity>
         </View>
         
        </ScrollView>
    

      
    </MainContainer>
  );
}

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default FullgistPage;

const styles = StyleSheet.create({
  title: {
    marginBottom: 20,
    color: "#FF5E00",
    fontSize: hp(3),
    textAlign: "justify"
  },

  bottomsection: {
    padding: 5,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },

  authorRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  avatar: {
    width: hp(6),
    height: hp(6),
    borderRadius: hp(3),
    marginRight: 25,
  },
  author: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 25,
    flex: 3,
  },
  image: {
    height: hp(35),
    width: width,
  },
  content: {
    marginTop: 15,
    textAlign: "justify",
    lineHeight: 30,
    fontSize: hp(2),
  },
});
