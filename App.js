import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import react from 'react';
import Home from './src/screens/Home';
import About from './src/screens/About';
import Contact from './src/screens/Contact';
import Course from './src/screens/Course';
import UserData from './src/screens/UserData';

// Google Fonts 
import {
  useFonts,
  JosefinSans_400Regular,
  JosefinSans_500Medium,
} from '@expo-google-fonts/josefin-sans';

import {
  Nunito_600SemiBold,
Nunito_700Bold,
} from '@expo-google-fonts/nunito';
import AppLoading from 'expo-app-loading';


const Stack= createNativeStackNavigator()

export default function App() {
const [fontsLoaded] = useFonts({
  JosefinSans_400Regular,
  JosefinSans_500Medium,
  Nunito_600SemiBold,
  Nunito_700Bold
});
  if (!fontsLoaded) {
    <AppLoading/>
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {/* Home screen */}
        <Stack.Screen
          name="Home"
          options={{
            headerShown: false,
          }}
        >
          {(props) => (
            <Home
              {...props}
              channelName={"Saiful Softwares"}
              description={
                "I am a web developer with a passion for building beautiful, responsive websites and applications. I have a background in graphic design and I am currently working on a career in web development."
              }
            />
          )}
        </Stack.Screen>

        {/* Course Screen */}
        <Stack.Screen
          name="Course"
          component={Course}
          options={{
            headerTitleStyle: {
              fontSize: 22,
              fontFamily: "Nunito_600SemiBold",
            },
            headerTitle: "Courses",
            headerTitleAlign: "center",
          }}
        />
        {/* UserData Screen */}
        <Stack.Screen
          name="UserData"
          component={UserData}
          options={{
            headerTitleStyle: {
              fontSize: 22,
              fontFamily: "Nunito_600SemiBold",
            },
            headerTitle: "Students Data",
            headerTitleAlign: "center",
          }}
        />
        {/* About Screen */}
        <Stack.Screen
          name="About"
          component={About}
          options={{
            headerTitleStyle: {
              fontSize: 22,
              fontFamily: "Nunito_600SemiBold",
            },
            headerTitleAlign: "center",
          }}
        />
        {/* Contact Screen */}
        <Stack.Screen
          name="Contact"
          component={Contact}
          options={{
            headerTitleStyle: {
              fontSize: 22,
              fontFamily: "Nunito_600SemiBold",
            },
            headerTitleAlign: "center",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
