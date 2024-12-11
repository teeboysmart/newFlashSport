import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NewsHomeScreen from './NewsHomeScreen';
import SearchScreen from './SearchScreen';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons'
import { ThemeContext } from '../Context/ThemeContext';
import { useContext } from 'react';
import { colors } from './config/theme';



function HomeScreenNav(navigation) {

   const { theme } = useContext(ThemeContext)
   let activeColors = colors[theme.mode]
 
   
    const Tab = createBottomTabNavigator();
   
    return (
     
      <Tab.Navigator
        screenOptions={{
         tabBarActiveTintColor: activeColors.accent,
         tabBarInactiveTintColor: activeColors.tertiary,
         tabBarStyle:{
            backgroundColor: activeColors.secondary,
         },
         tabBarShowLabel: false,
         headerStyle: {
            backgroundColor: activeColors.secondary,
         },
         headerTintColor: activeColors.tint
            
        }}

        
      >
         <Tab.Screen name='News' component={NewsHomeScreen} options={{
            tabBarIcon: () => <Entypo name="news" size={24} color="white" />,
           
            
         }}

         />
         <Tab.Screen name='search' component={SearchScreen} options={{
            tabBarIcon: () => <FontAwesome name='search' size={24} color="white"/>,
           
         }}
         />
      </Tab.Navigator>
        
    
    );
}

export default HomeScreenNav;