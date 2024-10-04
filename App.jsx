import React from 'react';
import {StyleSheet, useColorScheme} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {userLevelScreens} from './src/rbac/screens';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

const Stack = createNativeStackNavigator();

const SafeAreaComponent = (children, props, omitSafeArea) => {
  const StackComponent = children;

  return omitSafeArea === true ? (
    <StackComponent {...props} />
  ) : (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeAreaViewStyle}>
        <StackComponent {...props} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const ScreenStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="splashScreen"
      screenOptions={{animation: 'slide_from_right'}}>
      {userLevelScreens.map((screen, index) => {
        return (
          <Stack.Screen
            key={index}
            name={screen.name}
            options={{
              title: screen.title,
              headerShown: screen.headerShown,
            }}
            children={props =>
              SafeAreaComponent(screen.component, props, screen.omitSafeArea)
            }
          />
        );
      })}
    </Stack.Navigator>
  );
};

const App = () => {
  // to check the device color mode

  return (
    <NavigationContainer independent={true}>
      <ScreenStack />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  safeAreaViewStyle: {
    height: '100%',
  },
});

export default App;
