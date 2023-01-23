import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { useSelector } from 'react-redux';

import { appIcons, dynamicAppStyles } from 'utils';
import { AuthManager } from 'views/screens';
import StackNavigator from './stack';

const Stack = createStackNavigator();

const doNotShowHeaderOption = {
  headerShown: false,
};

const RootNavigator = () => {
  const { isUserLoggedIn } = useSelector((state) => state.session);
  const [initialScreen, setInitialScreen] = useState();

  useEffect(() => {
    isUserLoggedIn ? setInitialScreen('StackNavigator') : setInitialScreen('AuthManager');
  }, [isUserLoggedIn]);

  return (
    <Stack.Navigator
      screenOptions={{ animationEnabled: false, headerShown: false }}
      initialRouteName={`${initialScreen}`}
    >
      <Stack.Screen
        name="AuthManager"
        component={AuthManager}
        options={doNotShowHeaderOption}
        initialParams={{
          appIcons: appIcons,
          DynamicAppStyles: dynamicAppStyles,
        }}
      />
      <Stack.Screen
        name="StackNavigator"
        component={StackNavigator}
        initialParams={{
          appIcons: appIcons,
          DynamicAppStyles: dynamicAppStyles,
        }}
      />
    </Stack.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
};

export default AppNavigator;
