/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react'
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native'

import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import {Colors} from 'react-native/Libraries/NewAppScreen'

import RootStore from './store'
import Home from './screens/Home'

const Stack = createStackNavigator()

const store = RootStore.create()
export const StoreContext = React.createContext(store)

const App = () => {
  const isDarkMode = useColorScheme() === 'dark'

  const backgroundStyle = {
    flex: 1,
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  }

  return (
    <StoreContext.Provider value={store}>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name={'Home'} component={Home} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </StoreContext.Provider>
  )
}

export default App
