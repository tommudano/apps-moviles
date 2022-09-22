import { SafeAreaView, StatusBar, Text, View } from 'react-native';
import BaseScreen from './src/screens/BaseScreen';

export default function App() {
  return (
    <View style={{flex:1}}>
        <StatusBar backgroundColor="#202329"/>
        <BaseScreen></BaseScreen>
      </View>
  );
}
