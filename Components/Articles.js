import moment from 'moment';
import React from 'react'
import { View, StyleSheet, Text, Image, Pressable, } from 'react-native'
import { Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { ThemeContext } from '../Context/ThemeContext';
import { useContext } from 'react';
import { colors } from '../screens/config/theme';
import { Linking } from "react-native";

const Article = (props, style,) => {
    const navigation = useNavigation();

    const { theme } = useContext(ThemeContext)
    let activeColors = colors[theme.mode]

    const goToWeb = () => {
        const url = props.url; // Replace with your desired URL
        Linking.openURL(url)
      }

    

    return (
        <Pressable style={[styles.container, style]} onPress={goToWeb}
        //     navigation.navigate('FullgistPage',
        //         {
        //             urlToImage: props.urlToImage,
        //             title: props.title,
        //             description: props.description,
        //             sourceName: props.sourceName,
        //             publishedAt: props.publishedAt,
        //             author: props.author,
        //             url: props.url,
        //             summary: props.summary
        //         })
        // }}
        
        >
            <View style={{
                height: "100%",
                width: "100%",
                 zIndex: 20,
                 borderRadius: 40,
                 backgroundColor: "rgba(0, 0, 0, 0.5)",
                 position: "absolute",
                 top: 0
            }} />
            <Image source={{ uri: props.urlToImage }} style={styles.image} />

            {/* <View style={{height: hp(4), width: hp(18), backgroundColor:"#FF5E00", justifyContent: "center", alignItems: "center", position: "absolute", right: 10, top: hp(2), borderRadius:hp(1.5),zIndex: 20}}>
                <Text numberOfLines={1} style={{fontSize: hp(2), color: "white"}}>{props.category}</Text>
            </View> */}

            <View style={{ padding: 20 , position: "absolute", bottom: 0, width: "100%",zIndex: 20}}>
                <Text numberOfLines={3} style={styles.title}>{props.title}</Text>
                

                <View style={styles.data2}>
                    
                    <Text style={styles.date}>{moment(props.publishedAt).format("MMM DD YY")}</Text>
                </View>

            </View>







        </Pressable>
    )
}

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default Article;

const styles = StyleSheet.create({
    container: {
        height: "98%",
        width: wp(70),
        borderRadius: 40,
        shadowOpacity: 0.5,
        shadowColor: "#000",
        shadowOffset: {
            height: 5,
            width: 5
        },
        backgroundColor: "#fff",
        marginLeft: 20,

    },
    title: {
        fontSize: hp(3),
        fontWeight: '600',
        marginTop: -3,
        color: "white"

    },
    description: {
        fontSize: hp(2),
        fontWeight: "400",
        marginTop: 2,
    },
    data: {
        marginTop: 2
    },
    data2: {
        marginTop: 2,
        flexDirection: "row",
        justifyContent: "space-between",
        fontSize: hp(2),
    },
    author: {
        fontWeight: "bold",
        fontSize: height / 20
    },
    heading: {
        fontSize: hp(2)
    },
    date: {
        fontWeight: "bold",
        color: "white",
        fontSize: hp(2)
    },
    source: {
        color: "#e63946",
        fontWeight: "bold",
        fontSize: hp(2)
    },
    image: {
        height: "100%",
        width: "100%",
        borderRadius: 40,
        


    }
})
