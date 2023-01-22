import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home, Budget, Profile, Transaction } from '../views/screens';
import DrawerNavigator from './drawer';
import ManageAccount from 'views/screens/manage-account/manage-account';
import Settings from 'views/screens/settings/settings';
import ExportData from 'views/screens/export-data/export-data';
import Support from 'views/screens/support/support';

const Stack = createStackNavigator();
const doNotShowHeaderOption = {
  headerShown: false,
};

const StackNavigator = (props) => {
  const appIcons = props.route.params.appIcons;
  const DynamicAppStyles = props.route.params.DynamicAppStyles;

  return (
    <Stack.Navigator
      initialRouteName="DrawerNavigator"
      screenOptions={{
        headerTitleStyle: {
          color: '#1F1F1F',
          fontSize: 18,
        },
        headerTintColor: '#1F1F1F',
      }}
    >
      <Stack.Screen
        name="DrawerNavigator"
        options={doNotShowHeaderOption}
        component={DrawerNavigator}
        initialParams={{
          appIcons: appIcons,
          DynamicAppStyles: DynamicAppStyles,
        }}
      />

      <Stack.Screen
        options={{
          title: "Home",
          headerTitleAlign: 'center',
        }}
        name="HomeScreen"
        component={Home}
        initialParams={{
          appIcons: appIcons,
          DynamicAppStyles: DynamicAppStyles,
        }}
      />

      <Stack.Screen
        options={{
          title: "Budget",
          headerTitleAlign: 'center',
        }}
        name="BudgetScreen"
        component={Budget}
        initialParams={{
          appIcons: appIcons,
          DynamicAppStyles: DynamicAppStyles,
        }}
      />

      <Stack.Screen
        options={{
          title: "Transactions",
          headerTitleAlign: 'center',
        }}
        name="TransactionsScreen"
        component={Transaction}
        initialParams={{
          appIcons: appIcons,
          DynamicAppStyles: DynamicAppStyles,
        }}
      />

      <Stack.Screen
        options={{
          title: "Profile",
          headerTitleAlign: 'center',
        }}
        name="ProfileScreen"
        component={Profile}
        initialParams={{
          appIcons: appIcons,
          DynamicAppStyles: DynamicAppStyles,
        }}
      />

      <Stack.Screen
        options={{
          title: "Manage Account",
          headerTitleAlign: 'center',
        }}
        name="ManageAccountScreen"
        component={ManageAccount}
        initialParams={{
          appIcons: appIcons,
          DynamicAppStyles: DynamicAppStyles,
        }}
      />

      <Stack.Screen
        options={{
          title: "Settings",
          headerTitleAlign: 'center',
        }}
        name="SettingsScreen"
        component={Settings}
        initialParams={{
          appIcons: appIcons,
          DynamicAppStyles: DynamicAppStyles,
        }}
      />

      <Stack.Screen
        options={{
          title: "Export Data",
          headerTitleAlign: 'center',
        }}
        name="ExportDataScreen"
        component={ExportData}
        initialParams={{
          appIcons: appIcons,
          DynamicAppStyles: DynamicAppStyles,
        }}
      />

      <Stack.Screen
        options={{
          title: "Support",
          headerTitleAlign: 'center',
        }}
        name="SupportScreen"
        component={Support}
        initialParams={{
          appIcons: appIcons,
          DynamicAppStyles: DynamicAppStyles,
        }}
      />
    </Stack.Navigator>
  );
};
export default StackNavigator;
