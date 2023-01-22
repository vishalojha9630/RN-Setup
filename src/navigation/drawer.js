import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'

import BottomNavigator from './bottom'
import { DrawerContent } from 'views/components'

const Drawer = createDrawerNavigator()
const doNotShowHeaderOption = {
  headerShown: true,
};

const DrawerNavigator = (props) => {
  const appIcons = props.route.params.appIcons
  const DynamicAppStyles = props.route.params.DynamicAppStyles;

  return (
    <Drawer.Navigator
      initialRouteName="BottomNavigator"
      drawerContent={props => DrawerContent({ props: props, appIcons: appIcons })}
      screenOptions={{
        drawerStyle: { borderBottomRightRadius: 20, borderTopRightRadius: 20 },
      }}>

      <Drawer.Screen
        name='Menu'
        component={BottomNavigator}
        initialParams={{
          appIcons: appIcons,
          DynamicAppStyles, DynamicAppStyles,
        }}

        options={doNotShowHeaderOption}
      />
    </Drawer.Navigator>
  )
}
export default DrawerNavigator