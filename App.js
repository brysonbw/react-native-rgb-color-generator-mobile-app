import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import GenerateColorScreen from './screens/GenerateColorScreen';
import Header from './components/Header';
import CreateColorScreen from './screens/CreateColorScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Header title='Rgb Color Generator' />
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="home" component={HomeScreen} />
        <Stack.Screen options={{headerShown: false}} name="generate color" component={GenerateColorScreen} />
        <Stack.Screen options={{headerShown: false}} name="create color" component={CreateColorScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;