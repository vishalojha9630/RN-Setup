import React from 'react'
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { setDestroyAuth } from 'redux/slices/session';


const DrawerContent = ({ props, appIcons }) => {
  console.log('props', props)
  const dispatch = useDispatch()

  function navigateTo(toScreen) {
    props.navigation.navigate(toScreen);
    console.log('toScreen', toScreen)
  }

  const logOut = () => {
    useDispatch(setDestroyAuth());
  };


  const drawerItemList = [
    {
      id: 0,
      title: 'Profile Information',
      functionCall: navigateTo,
      screenName: 'ProfileScreen',
      Icon: <appIcons.profileInfo width={26} height={26} />,
    },
    {
      id: 1,
      title: 'Manage Account',
      functionCall: navigateTo,
      screenName: 'ManageAccountScreen',
      Icon: <appIcons.cardAccount width={26} height={26} />,
    },
    {
      id: 2,
      title: 'Settings',
      functionCall: navigateTo,
      screenName: 'SettingsScreen',
      Icon: <appIcons.setting width={26} height={26} />,
    },
    {
      id: 3,
      title: 'Export Data',
      functionCall: navigateTo,
      screenName: 'ExportDataScreen',
      Icon: <appIcons.exportData width={26} height={26} />,
    },
    {
      id: 4,
      title: 'Support',
      functionCall: navigateTo,
      screenName: 'SupportScreen',
      Icon: <appIcons.support width={26} height={26} />,
    },
    {
      id: 5,
      title: 'Logout',
      functionCall: logOut,
      screenName: '',
      Icon: <appIcons.signOut width={25} height={25} />,
      signOutColor: true
    },
  ];

  const renderItem = ({ item, index }) => {
    return (
      <View index={index} style={{ flexDirection: 'row', alignItems: 'center', }}>
        <Text>{item.Icon}</Text>
        <TouchableOpacity activeOpacity={0.5} onPress={() => (item.functionCall(item.screenName))} style={{ marginVertical: 10, marginStart: 12, }}>
          <Text style={{ fontSize: 20, color: item.signOutColor ? '#ff0000' : '#000' }}>{item.title}</Text>
        </TouchableOpacity>
      </View>
    );
  };


  return (
    <View style={{ paddingHorizontal: 15, marginVertical: 30 }}>
      <FlatList
        data={drawerItemList}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  )
}
export default DrawerContent;