
import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screen/HomeScreen";
import MovieScreen from "./src/screen/MovieScreen";
import {useFonts} from "expo-font"
import Apploading from "expo-app-loading"

const Stack = createStackNavigator();

export default function App() {
const [fontLoaded] = useFonts({ Regular : require("./assets/fonts/Nunito_Sans/NunitoSans-Regular.ttf"),
  Regular : require("./assets/fonts/Nunito_Sans/NunitoSans-Regular.ttf"),
  Bold : require("./assets/fonts/Nunito_Sans/NunitoSans-Bold.ttf"),
  Black : require("./assets/fonts/Nunito_Sans/NunitoSans-Black.ttf"),
  Extrabold : require("./assets/fonts/Nunito_Sans/NunitoSans-ExtraBold.ttf"),
  ExtraLight : require("./assets/fonts/Nunito_Sans/NunitoSans-ExtraLight.ttf"),
  Light : require("./assets/fonts/Nunito_Sans/NunitoSans-Light.ttf"),
  SemiBold : require("./assets/fonts/Nunito_Sans/NunitoSans-SemiBold.ttf"),
});


  return fontLoaded ? (
   <NavigationContainer>
     <Stack.Navigator>
    <Stack.Screen name="home" component={HomeScreen} options ={{headerShown: false}} />
    <Stack.Screen name="movie" component={MovieScreen} options ={{headerShown: false}}/>
     </Stack.Navigator>
   </NavigationContainer>
  ) : (<Apploading />);
};


