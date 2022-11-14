import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import HomeScreen from "../src/screens/HomeScreen";
import FavoritesScreen from "../src/screens/FavoritesScreen";
import FaqsScreen from "../src/screens/FaqsScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarActiveTintColor: "tomato",
                    tabBarInactiveTintColor: "gray",
                }}
            >
                <Tab.Screen
                    name='Home'
                    component={HomeScreen}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <Image
                                source={
                                    focused
                                        ? require("../assets/home_rojo.png")
                                        : require("../assets/home_negro.png")
                                }
                                style={{
                                    width: 50,
                                    height: 50,
                                    color: "tomato",
                                }}
                            />
                        ),
                    }}
                />
                <Tab.Screen
                    name='Favorites'
                    component={FavoritesScreen}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <Image
                                source={
                                    focused
                                        ? require("../assets/corazon_rojo.png")
                                        : require("../assets/corazon_negro.png")
                                }
                                style={{
                                    width: 50,
                                    height: 50,
                                    color: "tomato",
                                }}
                            />
                        ),
                    }}
                />
                <Tab.Screen
                    name='FAQS'
                    component={FaqsScreen}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <Image
                                source={
                                    focused
                                        ? require("../assets/question_rojo.png")
                                        : require("../assets/question_negro.png")
                                }
                                style={{
                                    width: 50,
                                    height: 50,
                                    color: "tomato",
                                }}
                            />
                        ),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
