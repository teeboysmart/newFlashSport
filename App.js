import AllAppRoot from "./screens/AllAppRoot";
import { useState, useEffect } from "react";
import { ThemeContext } from "./Context/ThemeContext";
import { Appearance, Alert } from "react-native";
import { storeData , getData} from "./screens/config/AsyncStorage";
import { storeLoad , getLoad} from "./screens/config/LoadAsync";
import * as SplashScreen from "expo-splash-screen";
import Welcome from "./WelcomeSection/welcome";
import { StatusBar } from "expo-status-bar";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { enableScreens } from 'react-native-screens'
import { registerTaskAsync } from 'expo-background-fetch';
import * as TaskManager from 'expo-task-manager';
import AppOpen from "./screens/AppOpen";
import { View, Text, ActivityIndicator, } from 'react-native';
import messaging from '@react-native-firebase/messaging';








// keep SplashScreen  visible  while we fetch the resources
SplashScreen.preventAutoHideAsync();

export default function App () {

   


  const [isLoading, setIsLoading] = useState(true);
  const [hasOpened, setHasOpened] = useState(false);

  useEffect(() => {
    async function checkFirstLaunch() {
      try {
        // Check if '@viewed' key exists in AsyncStorage
        const value = await AsyncStorage.getItem('@viewed');
        if (value !== null) {
          // If it exists, the user has already seen the content
          setHasOpened(true);
        }
        // Hide the splash screen after a brief delay
        setTimeout(async () => {
          await SplashScreen.hideAsync();
          setIsLoading(false);
        }, 5000); // Adjust the delay as needed
      } catch (error) {
        // Error retrieving data
        console.warn(error);
        setIsLoading(false); // Proceed even if there's an error
      }
    }

    checkFirstLaunch();
  }, []);

  useEffect(() => {
    if (!hasOpened) {
      // If the content hasn't been opened, set '@viewed' in AsyncStorage
      AsyncStorage.setItem('@viewed', 'true');
    }
  }, [hasOpened]);






// // Define a task name for background fetch
// const BACKGROUND_FETCH_TASK = 'countdown-timer-task';

// // Define the task function
// TaskManager.defineTask(BACKGROUND_FETCH_TASK, async ({ data, error }) => {
//   if (error) {
//     console.error('Error in background task:', error);
//     return;
//   }
//   // Your background task logic here
//   console.log('Background task executed successfully!');
// });


//   // Register a background task
//   const registerBackgroundTask = async () => {
//     try {
//       await registerTaskAsync(BACKGROUND_FETCH_TASK, {
//         minimumInterval: 60, // Minimum interval in seconds (adjust as needed)
//       });
//       console.log('Background task registered successfully!');
//     } catch (error) {
//       console.error('Error registering background task:', error);
//     }
//   };
  
//   // Call this function when your app initializes (e.g., in useEffect)
//   registerBackgroundTask();
  








  

   const [theme, setTheme] = useState({mode: "dark"});

   const updateTheme = (newTheme) => {
        let mode;
        if (!newTheme) {
          mode = theme.mode === "dark" ? "light" : "dark"
          newTheme = {mode, system: false}
        } else {
          if (newTheme.system) {
            const systemColorScheme = Appearance.getColorScheme();
            mode = systemColorScheme === "dark" ? "dark" : "light",
            newTheme = {...newTheme, mode}
          } else {
            newTheme = {...newTheme, system: false}
          }
        }
        setTheme(newTheme)
        storeData("newsFeedTheme", newTheme)
   };
  //  monitor system for theme changes
  if (theme.system) {
    Appearance.addChangeListener(({colorScheme}) => {
        updateTheme({system:true, mode: colorScheme})
    })
  }

  const fetchStoredTheme = async () => {
        try {
           const themeData = await getData("newsFeedTheme")
           if (themeData) {
            updateTheme(themeData);
           }
        } catch (message) {
          alert(message)
        }finally { 
          await setTimeout(() => SplashScreen.hideAsync(), 1000)
          
        }
  }

  useEffect(() => {
    fetchStoredTheme();
  },  [])

  const handleDone = () => {
    setIsfirstTimeLoad(false)
    AsyncStorage.setItem('isFirstTimeOpen', "no")
    
  }

  const [loading, setLoading] = useState(true)
  const [isFirstTimeLoad, setIsfirstTimeLoad] = useState(false)

  const checkForFirstTimeLoaded = async () => {
    const result = await AsyncStorage.getItem('isFirstTimeOpen')
    if(result === null) setIsfirstTimeLoad(true)
    setLoading(false)
  }

   useEffect(() => {
    checkForFirstTimeLoaded();
   }, [])



  const Slide = [
    {
        key: 1,
        title: 'Welcome One',
        desc: "Welcome Screen one description",
        backgroundColor: "red"
    },
    
    {
        key: 2,
        title: 'Get ready to take your sports game to the next level!',
        desc: "Best sport articles",
        backgroundColor: "blue"
    },
    {
        key: 3,
        title: 'home of sports enthusiasts!',
        desc: "Join us for an exciting journey through the world of sports!",
        backgroundColor: "green"
    }
 ]

 enableScreens();

 if(loading) return null

 if(isFirstTimeLoad) return(
   <>
     <StatusBar hidden/>
     <Welcome onDone={handleDone} Slide={Slide}/>
   </>
   
  )

  if(!isFirstTimeLoad)
  if (isLoading) {
    return (
      <View style={{ flex: 1,  alignItems: 'center' }}>
        <ActivityIndicator size="large" />
        {/* Your loading content here */}
        <AppOpen />
      </View>
    );
  }

   return (
    <ThemeContext.Provider  value={{theme, updateTheme}}>
    <AllAppRoot/>
    </ThemeContext.Provider>

  )
}