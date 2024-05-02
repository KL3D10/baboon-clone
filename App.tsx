/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import IonIcon from "react-native-vector-icons/dist/Ionicons";
import VectorIcon from './src/utils/VectorIcon';
import AppNavigator from './src/navigation/AppNavigator';


const App = (): React.JSX.Element => {

  return (
    <>
    <AppNavigator/>
    </>
  );
}

export default App;


