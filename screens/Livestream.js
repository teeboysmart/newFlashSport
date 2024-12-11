import React, {useEffect, useState} from 'react'
import { View, Text, FlatList, RefreshControl, ActivityIndicator, StyleSheet, Image } from 'react-native'
import VideoItem from './VideoItem';
import { ThemeContext } from '../Context/ThemeContext';
import { colors } from './config/theme';
import { useContext } from 'react';
import { Video } from './VideoApi';
import LivestreamItem from './LivestreamItem';
import { InterstitialAd, TestIds, AdEventType, BannerAd } from 'react-native-google-mobile-ads';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { db } from '../config';
import { collection, doc, getDocs } from 'firebase/firestore/lite';


function Livestream() {

  // InterstitialAd
const adUnitId = __DEV__ ? TestIds.INTERSTITIAL : 'ca-app-pub-xxxxxxxxxxxxx/yyyyyyyyyyyyyy';

const interstitial = InterstitialAd.createForAdRequest(adUnitId, {
  requestNonPersonalizedAdsOnly: true,
  keywords: ['fashion', 'clothing'],
});

const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const unsubscribe = interstitial.addAdEventListener(AdEventType.LOADED, () => {
      setLoaded(true);
      interstitial.show()
    });

    //Start loading the interstitial straight away
    interstitial.load();

   // Unsubscribe from events on unmount
    return unsubscribe;
  }, []);

  

    const { theme } = useContext(ThemeContext);
  let activeColors = colors[theme.mode];

    const [video, setVideo] = useState([]);
    const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const getData = async () => {
    const citiesCol = collection(db, 'cities');
    const citySnapshot = await getDocs(citiesCol)
    const cityList = citySnapshot.docs.map(doc => doc.data());

    console.log(cityList)
    if (video === null || [] ) {
      setVideo(cityList)
      setLoading(false)
    } 
    else {setLoading(true)}
  }

  useEffect(() => {
    getData()
  },[])

  const onRefresh = async () => {
    setRefreshing(true);
    await getData();
    setRefreshing(false);
  };
  
  const arrangeParams = video;

 arrangeParams.sort(function(a, b) {
  // Compare the names
  if (a.targetTime < b.targetTime) {
    return -1; // a comes before b
  }
  if (a.targetTime > b.targetTime) {
    return 1; // b comes before a
  }
  return 0; // a and b are equal
});

    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: activeColors.primary}}>
            { video.length === 0 ?
              <View>
              <View  style={{flexDirection: 'row', justifyContent: 'center'}}>
                   <Image 
                       source={require("../assets/images/empty5.png")}
                       style={styles.empty}
                   />
              </View>
              <Text style={{textAlign: 'center', color: activeColors.tint, fontSize: wp(7), fontWeight: 'bold'}}>No Live Matches At The Moment </Text>
              <Text style={{textAlign: 'center', color: activeColors.tint, fontSize: wp(7), fontWeight: 'bold'}}>-or-</Text>
              <Text style={{textAlign: 'center', color: "#FF5E00", fontSize: wp(7), fontWeight: 'bold'}}>Poor connection</Text>
              </View>
           
    :
            <FlatList
        showsHorizontalScrollIndicator={false}
        data={video} 
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        renderItem={({item}) => 
         <LivestreamItem
           VideoCompetition = {item.competitionName}
           homeUrl = {item.homeImage}
           awayUrl = {item.awayImage}
           homeName = {item.homeName}
           awayName = {item.awayName}
           targetTime = {item.targetTime}
           VideoUrl = {item.streamUrl}
           
         />}
         
         
        />
            }
        
        </View>
    )
}
export default Livestream;

const styles = StyleSheet.create({
  empty: {
    height: hp(60),
    width: wp(95)
  }
})