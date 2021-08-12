import React from 'react';
import { View,Text,SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Categories from './Pages/Categories';
import MealDetails from './Pages/MealDetails';
import Meals from './Pages/Meals';


const Stack = createNativeStackNavigator();

function App(props) {
  return (
    <NavigationContainer>
      <Stack.Navigator   >
        <Stack.Screen options={{headerShown: false}} name="Categories" component={Categories} />
        <Stack.Screen  options={({ route }) => ({ title: route.params.category })} name="Meals" component={Meals} />
        <Stack.Screen options={{headerShown: false}} options={({ route }) => ({ title: route.params.meal })} name="MealDetails" component={MealDetails} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;