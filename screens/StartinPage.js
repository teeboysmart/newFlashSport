import React, { useState, useEffect } from 'react'
import Button from 'react-native-flat-button';
import { View, Text, SafeAreaView, TouchableOpacity, Image, StyleSheet, Dimensions, ImageBackground, StatusBar } from 'react-native';
import StyledText from './SettingSection/StyledText';
import { LinearGradient } from 'expo-linear-gradient';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads'






function StartingPage({ navigation }) {
  // BannerAd
  const adUnitId = __DEV__ ? TestIds.BANNER : 'ca-app-pub-6086257842806831/7593333142';

  
  
 
  
  //   // Unsubscribe from events on unmount
  //   return () => {
  //     eventListener();
  //   };
  // }, [loaded]);
  
  
  

 
  return (
    <>
      <StatusBar hidden={true} />
      <ImageBackground source={require('../assets/images/Stadium.jpg')} style={styles.container}>
        <LinearGradient colors={['#0006', '#000']} style={{ height: height, width: width }}>



          <View style={{ marginTop: hp(60),width:wp(90), marginLeft: wp(5) }}>
            <StyledText big style={{ color: "#0891b2", fontSize: hp(3) }}>Welcome to sport world</StyledText>
            <StyledText style={{ color: "white", fontSize: width / 30 }}>Get an updated upcoming live news while being active</StyledText>
            <StyledText style={{ color: "white", fontSize: width / 30 }}>Here on the sport world and sport tips of the day.</StyledText>
          </View>

           <View style={{alignSelf: 'center'}}>
          <Button
            type="custom"
            containerStyle={styles.buttonContainer3}
            borderRadius={2}
            borderColor={'#4167b2'}
            backgroundColor={'#4167b2'}
            contentStyle={styles.content}


            onPress={() => {
              navigation.navigate('ChooseNav')
            }}
          >LET'S GET STARTED</Button>


          <View style={{ marginTop: height * 0.007, marginLeft: width * 0.04 }}>
            <StyledText bold style={[styles.agree, { color: "white", fontSize: hp(2), textAlign: "center" }]}>by continuing you agreed to footy</StyledText>

          </View>
          </View>

         {/* BannerAd Components */}
      <View style={{position: 'absolute', bottom: 5}}>
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
    </>
  )
}

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height
  },




  buttonContainer3: {
    width: width * 0.8,
    height: height * 0.07,
    backgroundColor: '#4167b2',
    borderRadius: 4,
    marginLeft: width * 0.01,
    marginTop: hp(8)
  },
  content: {
    fontSize: wp(5)
  }
})


export default StartingPage;