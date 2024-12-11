import React, {useEffect, useState} from 'react'
import { View, Text, FlatList, RefreshControl, ActivityIndicator } from 'react-native'
import VideoItem from './VideoItem';
import { ThemeContext } from '../Context/ThemeContext';
import { colors } from './config/theme';
import { useContext } from 'react';
import { InterstitialAd, TestIds, AdEventType, BannerAd } from 'react-native-google-mobile-ads';
import  Loading from '../Components/Loading';


function VideoPlayer() {

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

    //Unsubscribe from events on unmount
    return unsubscribe;
  }, []);


    const { theme } = useContext(ThemeContext);
  let activeColors = colors[theme.mode];

    const [video, getVideo] = useState([]);
    const [loading, setLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);

    const getVideos = async () => {

        const url = 'https://free-football-soccer-videos.p.rapidapi.com/';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b1b9e756cbmsh62a00dbe00c769ap1e48eajsn2f5ef8a9a755',
		'X-RapidAPI-Host': 'free-football-soccer-videos.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log("Videos =>",result);
    if (result) {
      getVideo(result)
      setLoading(false)
    } else {setLoading(true)
    }
  } catch (error) {
	console.error(error);
}
    }

    useEffect(() => {
       getVideos();
    }, [])



    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: activeColors.primary}}>
          {
            loading ? (
              <Loading/>

            ) : (
              <FlatList
              showsHorizontalScrollIndicator={false}
              data={video} 
              renderItem={({item}) => 
               <VideoItem
                 VideoCompetition = {item.competition.name}
                 VideoImage = {item.thumbnail}
                 VideoTitle = {item.title}
                 VideoUrl = {item.url}
                 embed = {item.embed}
                 date = {item.date}
               />}
               
              />
            )
          }
         
            
        
        </View>
    )
}
export default VideoPlayer;