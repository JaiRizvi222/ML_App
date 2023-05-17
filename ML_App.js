import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Mooncake from './Mooncake';
import Home from './Home';
import Couplet from './Couplet';
import DragonDance from './DragonDance';
import Envelope from './Envelope';
import FuCharacter from './FuCharacter';
import ChineseKnot from './ChineseKnot';
import Lantern from './Lantern';
import PaperCutting from './PaperCutting';
import RiceBall from './RiceBall';


const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
        <Stack.Screen name="Mooncake" component={Mooncake} options={{headerShown: false}}/>
        <Stack.Screen name="Couplet" component={Couplet} options={{headerShown: false}}/>
        <Stack.Screen name="DragonDance" component={DragonDance} options={{headerShown: false}}/>
        <Stack.Screen name="Envelope" component={Envelope} options={{headerShown: false}}/>
        <Stack.Screen name="FuCharacter" component={FuCharacter} options={{headerShown: false}}/>
        <Stack.Screen name="ChineseKnot" component={ChineseKnot} options={{headerShown: false}}/>
        <Stack.Screen name="Lantern" component={Lantern} options={{headerShown: false}}/>
        <Stack.Screen name="PaperCutting" component={PaperCutting} options={{headerShown: false}}/>
        <Stack.Screen name="RiceBall" component={RiceBall} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
