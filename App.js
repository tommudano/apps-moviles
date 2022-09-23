import { SafeAreaView, StatusBar, Text, View } from "react-native";
import HomeScreen from "./src/screens/HomeScreen";

export default function App() {
    return (
        <View style={{ flex: 1 }}>
            <StatusBar backgroundColor='#202329' />
            <HomeScreen />
        </View>
    );
}
