import React from 'react'
import moment from "moment";
import { View, Dimensions, Image, TouchableOpacity,Text } from 'react-native'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
  import StyledText from './SettingSection/StyledText';
  import { ThemeContext } from '../Context/ThemeContext';
import { colors } from './config/theme';
import { useContext } from 'react';
import { useNavigation } from '@react-navigation/native'

  

function VideoItem(props) {

    const navigation = useNavigation();

    const { theme } = useContext(ThemeContext);
  let activeColors = colors[theme.mode];

    const width  = Dimensions.get('window').width;
const height  = Dimensions.get('window').height;

    return (
        <View style={{marginTop: hp(2)}}>
          <Text numberOfLines={1} style={{ color: activeColors.tint, fontWeight: "bold", fontSize: hp(3),  }}>
          {moment(props.date).format("MMM DD YY")}
        </Text> 
        <TouchableOpacity style={{flex: 1, alignItems: 'center', marginTop: 20}}
         onPress={() => {
            navigation.navigate('Highlight Videos',
             {
                VideoCompetition: props.VideoCompetition,
                VideoTitle: props.VideoTitle,
                VideoUrl: props.VideoUrl,
                embed: props.embed
             }
            )
         }}
        >
            <View style={{height: "100%", width: "100%", backgroundColor: 'rgba(225,225,225,0.2)', padding: 10, borderRadius: hp(5)}}>
            <View style={{width: wp(90), height: hp(40)}}>
                <StyledText numberOfLines={1} style={{fontSize: wp(8), color: '#FF5E00', alignSelf: 'center', fontWeight: 'bold', textShadowColor: 'black', textShadowOffset: {width:4, height: 4}, textShadowRadius: 10}}>{props.VideoCompetition}</StyledText>
                <StyledText numberOfLines={1} style={{fontSize: wp(5), color: activeColors.tint, alignSelf: 'center', }}>{props.VideoTitle}</StyledText>
                <Image source={{ uri: props.VideoImage }} style={{width: wp(90), height: hp(30), borderRadius: hp(3)}}/>
            </View>
            </View>
        </TouchableOpacity>
        </View>
    )
}
export default VideoItem;