import React from 'react'
import { View, StyleSheet, Text, Image, Pressable, } from 'react-native'
import { Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { colors } from '../screens/config/theme';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';




const ExploreFlatItem = (props) => {
    const navigation = useNavigation();

    let activeColors = colors;

    return (
        <Pressable style={[styles.container, { backgroundColor: activeColors.primary }]} onPress={() => {
            navigation.navigate('FullgistPage',
                {
                    urlToImage: props.urlToImage,
                    title: props.title,
                    description: props.description,
                    sourceName: props.sourceName,
                    publishedAt: props.publishedAt,
                    author: props.author,
                    url: props.url,
                    summary: props.summary,
                    themeImage: props.themeImage
                })

        }}>
            <View style={{ width: width, height: hp(11), flexDirection: 'row', backgroundColor: "rgba(0, 0, 0, 0.8)" }}>
                <View style={{ height: "100%", width: wp(23), }}>
                    <Image source={{ uri: props.urlToImage }} style={styles.image} />
                </View>
                <View style={{ padding: wp(2), justifyContent: "center", height: "100%", width: wp(75), alignSelf: 'center'}}>
                    <Text numberOfLines={2} style={[styles.title, { color: activeColors.accent }]}>{props.title}</Text>
                </View>
            </View>
        </Pressable>
    )
}

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;




export default ExploreFlatItem;

const styles = StyleSheet.create({
    container: {
        height: hp(11),
        width: width,
        backgroundColor: "#fff",
        marginTop: 5,
        alignItems: 'center'
    },
    title: {
        fontSize: wp(4),
        fontWeight: '600',
        marginTop: -3,


    },
    data: {
        marginTop: 2
    },
    author: {
        fontWeight: "bold",
        fontSize: 18,
    },
    image: {
        height: hp(11),
        width: wp(23),
        borderRadius: 5,
        alignSelf: "center"
    }
})
