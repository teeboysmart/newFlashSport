import React from 'react'
import { StyleSheet, Image, ScrollView, TouchableOpacity, View } from 'react-native'
import { Dimensions } from 'react-native';
import StyledText from '../screens/SettingSection/StyledText';
import { colors } from '../screens/config/theme';
import { useNavigation } from '@react-navigation/native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const Explore = (props) => {
    const navigation = useNavigation();

    let activeColors = colors

    return (
        <ScrollView style={styles.container} horizontal={true} showsHorizontalScrollIndicator={false}>
            <TouchableOpacity style={styles.touchable} onPress={() => {
                navigation.navigate('Trending From England')
            }} >
                <View style={[styles.View, StyleSheet.absoluteFill]} />
                <StyledText style={[styles.title, StyleSheet.absoluteFill]}>ENG</StyledText>
                <Image source={require('../assets/images/EnglandCup.jpg')} style={styles.image} />
            </TouchableOpacity>


            <TouchableOpacity style={styles.touchable} onPress={() => {
                navigation.navigate('Trending From Spain')
            }}>
                <View style={[styles.View, StyleSheet.absoluteFill]} />
                <StyledText style={[styles.title, StyleSheet.absoluteFill]}>ESP</StyledText>
                <Image source={require('../assets/images/SpainCUp.jpg')} style={[styles.image2, StyleSheet.absoluteFill]} />

            </TouchableOpacity>


            <TouchableOpacity style={styles.touchable} onPress={() => {
                navigation.navigate('Trending From Germany')
            }}>
                <View style={[styles.View, StyleSheet.absoluteFill]} />
                <Image source={require('../assets/images/GermanyCup.jpg')} style={[styles.image2, StyleSheet.absoluteFill]} />
                <StyledText style={[styles.title, StyleSheet.absoluteFill]}>GER</StyledText>

            </TouchableOpacity>

            <TouchableOpacity style={styles.touchable} onPress={() => {
                navigation.navigate('Trending From Italy')
            }}>
                <View style={[styles.View, StyleSheet.absoluteFill]} />
                <Image source={{uri: "https://sc0.blr1.cdn.digitaloceanspaces.com/article/142746-gsvhconyiy-1591889387.jpg"}} style={[styles.image2, StyleSheet.absoluteFill]} />
                <StyledText style={styles.title}>Ucl</StyledText>

            </TouchableOpacity>


            {/* <TouchableOpacity style={styles.touchable} onPress={() => {
                navigation.navigate('Trending From France')
            }}>
                <View style={[styles.View, StyleSheet.absoluteFill]} />
                <Image source={require('../assets/images/FranceCup.jpg')} style={[styles.image2, StyleSheet.absoluteFill]} />
                <StyledText style={styles.title}>FRA</StyledText>

            </TouchableOpacity> */}

        </ScrollView>
    )

}

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;



export default Explore;

const styles = StyleSheet.create({
    container: {
        width: width,
        flex: 1,
        borderRadius: 60,
        marginLeft: 10,
        marginTop: 12,
    },
    title: {
        fontSize: hp(3),
        color: colors.primary,
        fontWeight: "bold",
        height: "100%",
        width: "100%",
        textAlignVertical: "center",
        textAlign: "center",
        borderRadius: 60,
        marginTop: hp(8),
        zIndex: 5
    },
    View: {
        height: hp(20),
        zIndex: 5,
        width: hp(20),
        borderRadius: hp(10),
        backgroundColor: "rgba(0, 0, 0, 0.8)"
    },
    touchable: {
        height: hp(20),
        width: hp(20),
        borderRadius: hp(10),
        marginLeft: wp(5),
    },
    image: {
        height: hp(20),
        width: hp(20),
        borderRadius: hp(10),
        borderWidth: 2,
        borderColor: colors.accent,
    },

    image2: {
        height: hp(20),
        width: hp(20),
        borderRadius: hp(10),
        borderWidth: 2,
        borderColor: colors.accent,
    }
})
