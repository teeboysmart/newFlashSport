import React , {useState , useEffect} from 'react'
import { View,  SafeAreaView, TouchableOpacity, Image, ScrollView, StyleSheet, Dimensions } from 'react-native';
import  {colors}  from './config/theme';
import { ThemeContext } from '../Context/ThemeContext';
import { useContext } from 'react';





let Count = 0;

function NewsPageApp({navigation}) {

  const { theme } = useContext(ThemeContext)
  let activeColors = colors[theme.mode]



  let imageUrl = ["https://vignette.wikia.nocookie.net/fifa/images/8/86/Premier_League_Logo.png/revision/latest?cb=20170117161928",
    "https://upload.wikimedia.org/wikipedia/en/4/42/Campeonato_Brasileiro_S%C3%A9rie_A_logo.png",
    "https://upload.wikimedia.org/wikipedia/en/4/42/Campeonato_Brasileiro_S%C3%A9rie_A_logo.png",
    "https://upload.wikimedia.org/wikipedia/en/4/42/Campeonato_Brasileiro_S%C3%A9rie_A_logo.png",
    "https://upload.wikimedia.org/wikipedia/en/4/42/Campeonato_Brasileiro_S%C3%A9rie_A_logo.png",
    "https://upload.wikimedia.org/wikipedia/en/4/42/Campeonato_Brasileiro_S%C3%A9rie_A_logo.png",
    "https://upload.wikimedia.org/wikipedia/en/4/42/Campeonato_Brasileiro_S%C3%A9rie_A_logo.png",
    "https://vignette.wikia.nocookie.net/fifa/images/8/86/Premier_League_Logo.png/revision/latest?cb=20170117161928",
    "https://upload.wikimedia.org/wikipedia/en/4/42/Campeonato_Brasileiro_S%C3%A9rie_A_logo.png",
    "https://upload.wikimedia.org/wikipedia/en/4/42/Campeonato_Brasileiro_S%C3%A9rie_A_logo.png",
    "https://upload.wikimedia.org/wikipedia/en/4/42/Campeonato_Brasileiro_S%C3%A9rie_A_logo.png",
    "https://upload.wikimedia.org/wikipedia/en/4/42/Campeonato_Brasileiro_S%C3%A9rie_A_logo.png",
    "https://upload.wikimedia.org/wikipedia/en/4/42/Campeonato_Brasileiro_S%C3%A9rie_A_logo.png",
    "https://upload.wikimedia.org/wikipedia/en/4/42/Campeonato_Brasileiro_S%C3%A9rie_A_logo.png",
   
]
    return (
        <SafeAreaView style={[styles.container,{backgroundColor: activeColors.primary}]}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
           <View style={{justifyContent: 'space-between', marginTop: 200, flexDirection: 'row'}}>
            <TouchableOpacity onPress = {() => {
            navigation.navigate('HomeScreenNav')}}  style={{height:120, width:120, borderRadius:200/2, backgroundColor: 'white', alignItems:'center', justifyContent:'center', marginLeft: 100}}>
            <Image  style={{width:120 , height:120 ,  borderRadius:200/2,}} source={{uri:imageUrl[Count+7]}}/>
            </TouchableOpacity>

           

            <TouchableOpacity>
            <View style={{height:120, width:120, borderRadius:200/2, backgroundColor: 'blue', marginLeft: 20}}/>
            </TouchableOpacity>

            <TouchableOpacity>
            <View style={{height:120, width:120, borderRadius:200/2, backgroundColor: 'blue', marginLeft: 20}}/>
            </TouchableOpacity>
           </View>
          </ScrollView>

          <ScrollView horizontal={true} style={{marginTop:50}} showsHorizontalScrollIndicator={false}>
           
            <View style={{justifyContent: 'space-between', flexDirection: 'row', margin: 2, backgroundColor: 'red'}}>
              <View style={{height:'100%', width:width, borderRadius:5, backgroundColor: 'blue', }}/>
              <View style={{height:'100%', width:width, borderRadius:5, backgroundColor: 'blue', marginLeft: 5}}/>
              <View style={{minHeight:150, width:width, borderRadius:5, backgroundColor: 'blue', marginLeft: 5}}/>

            </View>
                      </ScrollView>
        </SafeAreaView>
    )
}

const height  = Dimensions.get('window').height;
const width  = Dimensions.get('window').width;


const styles = StyleSheet.create({
    container: {
        
        flex:1,
       
    }
})

export default NewsPageApp;