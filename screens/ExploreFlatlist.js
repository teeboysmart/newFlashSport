import React, { useState, useEffect } from "react";
import { StyleSheet, FlatList, View, Image, Text, ActivityIndicator, TouchableOpacity } from "react-native";
import axios from "axios";
import { ThemeContext } from "../Context/ThemeContext";
import { useContext } from "react";
import { colors } from "./config/theme";
import { Dimensions } from "react-native";
import ExploreFlatItem from "../Components/ExploreFlatItems";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { ChevronLeftIcon} from 'react-native-heroicons/outline';
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads'
import Loading from "../Components/Loading";
import { useNavigation } from "@react-navigation/native";
import  { newsData } from  "./newsApi"
import uniqueId from 'lodash/uniqueId';

function ExploreFlatlist() {

  const navigation = useNavigation();

  


  // BannerAd
 const adUnitId = __DEV__ ? TestIds.BANNER : 'ca-app-pub-6086257842806831/7593333142';


  const [results, setArticle] = useState(newsData.news);
  const [loading, setLoading] = useState(false);


    const getNews = async () => {
      const url = 'https://football-news-aggregator-live.p.rapidapi.com/news/fourfourtwo/epl';
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '347b1e0ba6msh27fdf95f900a0d2p1f12bajsn32d911c5edea',
          'X-RapidAPI-Host': 'football-news-aggregator-live.p.rapidapi.com'
        }
      };

try {
  const response = await fetch(url, options);
  const result = await response.json();
   console.log(result);
  if (result === null || [] ) {
    setArticle(result);
    setLoading(false)
  } 
  else {setLoading(true)}
} catch (error) {
  console.error(error);
}
};



  useEffect(() => {
     getNews();
      }, [])


  const { theme } = useContext(ThemeContext);
  let activeColors = colors[theme.mode];

  const height = Dimensions.get("window").height;
  const width = Dimensions.get("window").width;

  if (results !== []) {
    results.forEach((todo) => {
      todo.uniqueKey = uniqueId('bbbb_');
    })
  } else{
    null;
  }


  console.log("result =>", results)

  

  return (
    <View
      style={{
        flex: 1,
        paddingRight: 3,
        paddingLeft: 3,
        backgroundColor: activeColors.primary,
      }}
    >
      <View  style={{height: 30,width, flexDirection: "row", alignItems: "center", paddingHorizontal: 4, zIndex: 20, marginBottom: 10,marginTop: 10, position: "absolute", top: 0 }}>
                <TouchableOpacity onPress={() => navigation.goBack()}  style={{backgroundColor: colors.yellow, height: hp(5), width: hp(5),  borderRadius: hp(5), justifyContent: "center", alignItems: "center"}}>
                    <ChevronLeftIcon size="25" strokeWidth={2.5} color="white"/>

                </TouchableOpacity>

                <View style={{marginLeft: wp(10)}}>
                <Text
                     style={{color: "white", fontSize: hp(3), fontWeight: "bold"}}
                    >
                        <Text style={{color: colors.yellow}}>T</Text>rending From England
                    </Text>
                </View>
            </View>   
      <Image
        source={require("../assets/images/liverpool.jpg")}
        style={{ height: hp(40), width: width }}
      />
      <View
        style={{
          width: width,
          height: hp(8),
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#000",
          borderRadius: 2,
        }}
      >
        <Text
          style={{
            fontSize: hp(3),
            fontWeight: "bold",
            color: activeColors.accent,
          }}
        >
          Top Articles Today
        </Text>
      </View>
      { loading ? 
        (
          <View style={{position: "absolute", left: wp(30), top: hp(60)}}>
             <Loading/>
          </View>
        )
    :
      <FlatList
        data={results}
        renderItem={({ item }) => (
          <ExploreFlatItem
          urlToImage="https://i.pinimg.com/564x/e7/f9/dc/e7f9dcf76d4142610c4e48418ccdc3da.jpg"
          title={item.title}
          themeImage="https://i.ytimg.com/vi/kW6CdIVxhAg/maxresdefault.jpg"
          description={item.short_desc}
          // category={item.Categories.label}
          // publishedAt={item.PublishedOn}
          // sourceName={item.sourceName}
          url={item.url}
          // summary={item.Summary}
          />
        )}
        keyExtractor={(item) => item.uniqueKey}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingLeft: 5,
          paddingTop: 5,
          paddingRight: 5,
        }}
      />
}

      {/* BannerAd Components */}
      <View style={{position: 'absolute', bottom: 0}}>
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
export default ExploreFlatlist;

const styles = StyleSheet.create({});
