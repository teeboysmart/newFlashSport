import React from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'
import { colors } from '../config/theme'
import StyledText from './StyledText'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const SettingsItem = ({children,label,}) => {
    let activeColors = colors;
      
    return (
        <View
          style={[
            {
                backgroundColor: activeColors.secondary,
            },
            styles.settingsItem,
          ]}
       >
        <StyledText style={[{color: activeColors.tertiary}, styles.label]}>{label}</StyledText>
       {children}
       </View>
    )
}

const height  = Dimensions.get('window').height;
const width  = Dimensions.get('window').width;



export default SettingsItem;

const styles = StyleSheet.create({
    settingsItem: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems:"center",
        height: hp(8),
        paddingHorizontal: 25,
        marginBottom: 2
    },
    label: {
      fontStyle:"italic",
      fontSize:hp(2)
    }
})