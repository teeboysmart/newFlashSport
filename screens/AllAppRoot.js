import React from "react";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import StartingPage from "./StartinPage";
import { colors } from "./config/theme";
import ChooseNav from "./ChooseNav";
import { ThemeContext } from "../Context/ThemeContext";
import { useContext } from "react";
import FullgistPage from "./FullgistPage";
import ExploreFlatlist from "./ExploreFlatlist";
import Spain from "../Components/Spain";
import Germany from "../Components/Germany";
import Italy from "../Components/Italy";
import France from "../Components/france";
import Home2 from "../FIxtures/Home2";
import FixtureDetails from "../FIxtures/LiveFolder/FixturesDetails";
import UpcomingDetails from "../FIxtures/UpcomingFolder/UpcomingDetails";
import FinishedFixDet from "../FIxtures/LiveFolder/FinishedFixDet";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import 'expo-dev-client';
import VideoPage from "./VideoPage";
import LivestreamPage from "./LivestreamPage";



const Stack = createStackNavigator();

function AllAppRoot(navigation) {
  const { theme } = useContext(ThemeContext);
  let activeColors = colors[theme.mode];

  

 

  return (
    <NavigationContainer>
      {
        <Stack.Navigator>
          {/* <Stack.Screen  name='Livescores' component={ChooseNav} options={{headerShown:false}}  /> */}

          <Stack.Screen
            name="Home"
            component={StartingPage}
            options={{
              headerShown: false,
              tabBarStyle: {
                backgroundColor: activeColors.primary,
              },
            }}
          />
          <Stack.Screen
            name="ChooseNav"
            component={ChooseNav}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="FullgistPage"
            component={FullgistPage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Trending From England"
            component={ExploreFlatlist}
            options={{
              headerShown: false,
              tabBarStyle: {
                backgroundColor: "red",
              },
            }}
          />
          <Stack.Screen
            name="Trending From Spain"
            component={Spain}
            options={{
              headerShown: false,
              tabBarStyle: {
                backgroundColor: "red",
              },
            }}
          />
          <Stack.Screen
            name="Trending From Germany"
            component={Germany}
            options={{
              headerShown: false,
              tabBarStyle: {
                backgroundColor: "red",
              },
            }}
          />
          <Stack.Screen
            name="Trending From Italy"
            component={Italy}
            options={{
              headerShown: false,
              tabBarStyle: {
                backgroundColor: "red",
              },
            }}
          />
          <Stack.Screen
            name="Trending From France"
            component={France}
            options={{
              headerShown: false,
              tabBarStyle: {
                backgroundColor: "red",
              },
            }}
          />
          <Stack.Screen
            name="Homes"
            component={Home2}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Match Details"
            component={FixtureDetails}
            options={{
              headerShown: true,
              headerTitleStyle: { fontSize: wp(4), color: activeColors.accent },
              headerStyle: { backgroundColor: activeColors.primary },
            }}
          />
           <Stack.Screen
            name="Finished Details"
            component={FinishedFixDet}
            options={{
              headerShown: true,
              headerTitleStyle: { fontSize: wp(4), color: activeColors.accent },
              headerStyle: { backgroundColor: activeColors.primary },
            }}
          />
          <Stack.Screen
            name="Match Detail"
            component={UpcomingDetails}
            options={{
              headerShown: true,
              headerTitleStyle: { fontSize: wp(4), color: activeColors.accent },
              headerStyle: { backgroundColor: activeColors.primary },
            }}
          />
          <Stack.Screen
            name="Highlight Videos"
            component={VideoPage}
            options={{
              headerShown: false,
              headerTitleStyle: { fontSize: wp(4), color: activeColors.accent },
              headerStyle: { backgroundColor: activeColors.primary },
            }}
          />

<Stack.Screen
            name="Live Matches"
            component={LivestreamPage}
            options={{
              headerShown: false,
              headerTitleStyle: { fontSize: wp(4), color: activeColors.accent },
              headerStyle: { backgroundColor: activeColors.primary },
            }}
          />
        </Stack.Navigator>
      }
    </NavigationContainer>
  );
}

export default AllAppRoot;
