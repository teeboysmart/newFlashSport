import React, { useState, useEffect } from 'react'
import { View, Text,} from 'react-native';
import { AppOpenAd, TestIds, AdEventType } from 'react-native-google-mobile-ads';

function AppOpen() {

       // Replace with your actual Ad Unit ID
 const adUnitId = __DEV__ ? TestIds.APP_OPEN : 'ca-app-pub-6086257842806831/5925028259';
  
 const appOpenAd = AppOpenAd.createForAdRequest(adUnitId, {
   requestNonPersonalizedAdsOnly: true,
   keywords: ['fashion', 'clothing'],
 });

 const [loaded, setLoaded] = useState(false);
 
 useEffect(() => {
 // Add event listener for when the ad is loaded
 const eventListener = appOpenAd.addAdEventListener(AdEventType.LOADED, () => {
    setLoaded(true); // Set the loaded state to true
    appOpenAd.show()
  });

  // Start loading the ad
  appOpenAd.load();

  // Clean up the event listener when the component is unmounted
  return eventListener;
},[])


  // return( () => {
  //   eventListener.remove();
  // }, []);

// useEffect(() => {
//     // Show the ad when it's loaded
//     if (loaded) {
//       appOpenAd.show().catch((error) => {
//         // Handle the error here
//         console.warn('Failed to show the ad:', error);
//       });
//     }
//   }, [loaded]);


    return (
        <View style={{flex: 1}}>

        </View>
    )
}

export default AppOpen;


