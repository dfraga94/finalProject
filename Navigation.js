import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//SCREENS
import HomeScreen from "./screens/HomeScreen";
//import SettingsScreen from "./screens/SettingsScreen";
import StackScreen from "./screens/StackScreen";
import FormsScreen from "./screens/FormsScreen";

const Tab = createBottomTabNavigator();
const HomeStackNavigator = createNativeStackNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    )

}


function MyStack() {
    return (
        <HomeStackNavigator.Navigator
            initialRouteName="HomeScreenStack"
        >
            <HomeStackNavigator.Screen
                name="HomeScreenStack"
                component={HomeScreen}
            />
            <HomeStackNavigator.Screen
                name="Stack"
                component={StackScreen}
                options={{
                    //headerBackTitleVisible: false
                }}
            />
            <HomeStackNavigator.Screen
                name="Forms"
                component={FormsScreen}
                options={{

                }}
            />
        </HomeStackNavigator.Navigator>
    )
}




function MyTabs() {
    return (
        <Tab.Navigator
            initialRouteName="home"
            screenOptions={{
                tabBarActiveTintColor: "#34495E"
            }}
        >
            <Tab.Screen
                name="Home"
                component={MyStack}
                options={{
                    tabBarLabel: "Inicio",
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={30} />
                    ),
                    // tabBarBadge: 3,
                    //headerShown: false
                }}
            />
            {/* <Tab.Screen 
                name="Settings" 
                component={SettingsScreen} 
                options={{
                    tabBarLabel: "Configuración",
                    tabBarIcon: ({color, size}) => (
                        <MaterialCommunityIcons name="brightness-5" color={color} size={30} />
                    ),
                    //tabBarBadge: 3,
                    //headerShown: false
                }} 
            /> */}
        </Tab.Navigator>
    )
}