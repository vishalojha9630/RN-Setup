import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { appIcons, dynamicAppStyles } from 'utils';
import { AuthManager } from 'views/screens';
import StackNavigator from './stack';

const Stack = createStackNavigator();
const doNotShowHeaderOption = {
  headerShown: false,
};

const RootNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{ animationEnabled: false, headerShown: false }}
      initialRouteName="AuthManager"
    >
      <Stack.Screen name="AuthManager" component={AuthManager} options={doNotShowHeaderOption} />
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
