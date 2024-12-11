import React, {useEffect} from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SettingPage from "./SettingPage";
import { ThemeContext } from "../Context/ThemeContext";
import { useContext } from "react";
import { colors } from "./config/theme";
import { Feather } from "@expo/vector-icons";

import Home from "./Home";
import Home2 from "../FIxtures/Home2";
import VideoPlayer from "./VdeoPlayer";
import LivestreamItem from "./LivestreamItem";
import Livestream from "./Livestream";
import { Entypo } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as Updates from 'expo-updates';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


function ChooseNav(navigation) {

React.useEffect(() => {
reactToUpdates()
}, [])

const reactToUpdates = async () => {
    Updates.addListener((event) => {
      if(event.type === Updates.UpdateEventType.UPDATE_AVAILABLE) {
        // Updates.reloadAsync();
        alert("An update is available. Restart your app to see it")
      }
    })
}


  const { theme } = useContext(ThemeContext);
  let activeColors = colors[theme.mode];

  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "News Sections") {
            return <Entypo name="news" size={hp(2)} color={color} />;
          } else if (route.name === "Settings") {
            return <Feather name="settings" size={hp(2)} color={color} />;
          } else if (route.name === "Live scores") {
            return <Entypo name="home" size={hp(2)} color={color} />;
          } else if (route.name === "Match Highlights") {
            return  <Ionicons name="football-outline" size={hp(2)} color={color}/>
           
          } else if (route.name === "Livestream") {
            return <MaterialIcons name="live-tv" size={hp(2)} color={color} />;
          }
          // You can return any component that you like here!
          //  return <Feather name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: activeColors.accent,
        tabBarInactiveTintColor: activeColors.tertiary,
        tabBarStyle: {
          backgroundColor: activeColors.secondary,
          height: hp(6),
        },
        tabBarShowLabel: true,
        tabBarLabelPosition: "below-icon",
        headerStyle: {
          backgroundColor: activeColors.secondary,
          height: hp(5),
        },
        headerTintColor: activeColors.tint,
        tabBarLabelStyle: {
          fontSize: wp(3),
        },
        headerTitleStyle: {
          fontSize: wp(5),
        },
        headerTitleAlign: "center",
      })}
    >
      {/* <Tab.Screen
        name="Live scores"
        component={Home2}
        options={{ tabBarLabel: "Livescores" }}
      /> */}
       <Tab.Screen
        name="News Sections"
        component={Home}
        options={{ tabBarLabel: "News" }}
      /> 

<Tab.Screen
        name="Livestream"
        component={Livestream}
        options={{ tabBarLabel: "Stream" }}
      />

<Tab.Screen
        name="Match Highlights"
        component={VideoPlayer}
        options={{ tabBarLabel: "Highlights",  }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingPage}
        options={{ tabBarLabel: "Settings" }}
      />
    </Tab.Navigator>
  );
}

export default ChooseNav;
