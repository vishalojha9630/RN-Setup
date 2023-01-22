import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { TabBar } from 'views/components'
import { Budget, Home, Profile, Transaction } from 'views/screens'
import { getFocusedRouteNameFromRoute } from '@react-navigation/native'

const Tabs = createBottomTabNavigator()
const doNotShowHeaderOption = {
  headerShown: false,
};

const BottomNavigator = (props) => {
  const appIcons = props.route.params.appIcons;
  const DynamicAppStyles = props.route.params.DynamicAppStyles;
  const navigation = props.navigation
  const route = props.route

  function getHeaderTitle(route) {
    const routeName = getFocusedRouteNameFromRoute(route);
    console.log('routeName', routeName)

    switch (routeName) {
      case 'Profile':
        return 'Profile';
      case 'Budget':
        return 'Budget';
      case 'Transactions':
        return 'Transactions';
      case 'Home':
        return 'Home';
    }
  }

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: getHeaderTitle(route),
    });
  }, [navigation, route]);


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor='#bfbfbf' />

      <Tabs.Navigator
        tabBar={props => (
          <TabBar
            {...props}
            appIcons={appIcons}
            DynamicAppStyles={DynamicAppStyles}
          />
        )}
        initialRouteName={'Home'}
        screenOptions={{
          showLabel: true,
        }}
      >

        <Tabs.Screen
          name="HomeScreen"
          component={Home}
          options={doNotShowHeaderOption}
          initialParams={{
            appIcons: appIcons,
            DynamicAppStyles: DynamicAppStyles

          }}
        />

        <Tabs.Screen
          name="BudgetScreen"
          component={Budget}
          options={doNotShowHeaderOption}
          initialParams={{
            appIcons: appIcons,
            DynamicAppStyles: DynamicAppStyles

          }}
        />

        <Tabs.Screen
          name="TransactionsScreen"
          component={Transaction}
          options={doNotShowHeaderOption}
          initialParams={{
            appIcons: appIcons,
            DynamicAppStyles: DynamicAppStyles

          }}
        />

        <Tabs.Screen
          name="ProfileScreen"
          component={Profile}
          options={doNotShowHeaderOption}
          initialParams={{
            appIcons: appIcons,
            DynamicAppStyles: DynamicAppStyles

          }}
        />
      </Tabs.Navigator>
    </SafeAreaView>
  )
}

export default BottomNavigator