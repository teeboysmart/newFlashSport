import React,  {useState, useEffect} from 'react'
import {  StyleSheet, FlatList, View, ActivityIndicator } from 'react-native';
import Article from '../Components/Articles';
import { ThemeContext } from '../Context/ThemeContext';
import { useContext } from 'react';
import  {colors}  from './config/theme';
import { Dimensions } from 'react-native';
import axios from 'axios';
import Loading from '../Components/Loading';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { newsData } from './newsApi';
import uniqueId from 'lodash/uniqueId';





function NewsHomeScreen () {

  

  const { theme } = useContext(ThemeContext)
  let activeColors = colors[theme.mode]
    
  const [results, setArticle] = useState([])
  const [loading, setLoading] = useState(true);

  const getNews = async () => {
    const url = 'https://football-news-aggregator-live.p.rapidapi.com/news/espn';
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
//   const main = result.news
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

      if (results !== []) {
        results.forEach((todo) => {
          todo.uniqueKey = uniqueId('bbbb_');
        })
      } else{
        null;
      }

      console.log("result =>", results)

 
    return (
        

      <View style={{flex: 2}}>
        { loading ? 
        (
          <View style={{position: "absolute", left: wp(30), top: hp(12)}}>
             <Loading/>
          </View>
        )
        : (
          <FlatList
            horizontal={true}
            data={results}
            renderItem={({item}) => (
            <Article
            urlToImage={item.img}
            title={item.title}
            // description={item.Description}
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
            paddingLeft: 25,
            paddingTop: 25
          }}
          />
        )
        }
      </View>
        
          
    )
}
const height  = Dimensions.get('window').height;
const width  = Dimensions.get('window').width;

export default NewsHomeScreen;

const styles = StyleSheet.create({
    
})