import React, { useState, useEffect } from "react";
import { StyleSheet, FlatList, View, Image, Text, ActivityIndicator, TouchableOpacity } from "react-native";
import axios from "axios";
import { ThemeContext } from "../Context/ThemeContext";
import { useContext } from "react";
import { Dimensions } from "react-native";
import ExploreFlatItem from "../Components/ExploreFlatItems";
import { colors } from "../screens/config/theme";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads'
import { useNavigation } from "@react-navigation/native";
import { ChevronLeftIcon} from 'react-native-heroicons/outline';
import Loading from "./Loading";
import { newsData } from "../screens/newsApi";

function France() {

  const navigation = useNavigation();


  // BannerAd
  const adUnitId = __DEV__ ? TestIds.BANNER : 'ca-app-pub-6086257842806831/7593333142';


  const [results, setArticle] = useState([]);
  const [loading, setLoading] = useState(true);

 
       const getNews = async () => {
    const url = 'https://news67.p.rapidapi.com/v2/topic-search?languages=fr&search=sport';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'a2112d55ecmsha959f934d7c1124p1e9270jsn8e1359daff4a',
        'X-RapidAPI-Host': 'news67.p.rapidapi.com'
      }
    };
    

try {
  const response = await fetch(url, options);
  const result = await response.json();
  const main = result.news
   console.log(result);
  if (main === null || [] ) {
    setArticle(main);
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
                        <Text style={{color: colors.yellow}}>T</Text>rending From France
                    </Text>
                </View>
            </View>   
      <Image
        source={require("../assets/images/franccia.jpg")}
        style={{ height: hp(35), width: width }}
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
          urlToImage={item.Image}
          title={item.Title}
          description={item.Description}
          category={item.Categories.label}
          publishedAt={item.PublishedOn}
          sourceName={item.sourceName}
          url={item.Url}
          summary={item.Summary}
          />
        )}
        keyExtractor={(item) => item.title}
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
export default France;

const styles = StyleSheet.create({});
