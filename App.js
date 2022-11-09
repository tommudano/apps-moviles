import { StatusBar, View } from "react-native";
import HomeScreen from "./src/screens/HomeScreen";
import BottomTabNavigator from './navigator/BottomTabNavigator';

export default function App() {
    return (
        <BottomTabNavigator/>
    );
}
