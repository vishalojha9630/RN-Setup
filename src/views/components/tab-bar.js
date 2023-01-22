import { View, FlatList, Text, TouchableOpacity, Dimensions } from 'react-native';
import React from 'react';
import { strings } from 'utils';
import Ripple from 'react-native-material-ripple';

const TabBar = ({ state, appIcons, navigation }) => {
  const tabIconsList = [
    {
      id: 0,
      name: '',
      focusedIcon: <appIcons.home height={28} width={28} />,
      notFocusedIcon: <appIcons.home height={28} width={28} />,
      label: strings.home,
      route: state.routes[0],
      isFocused: state.index === 0,
    },
    {
      id: 1,
      name: '',
      focusedIcon: <appIcons.budget height={28} width={28} />,
      notFocusedIcon: <appIcons.budget height={28} width={28} />,
      label: strings.budget,
      route: state.routes[1],
      isFocused: state.index === 1,
    },
    {
      id: 2,
      name: '',
      focusedIcon: <appIcons.transaction height={28} width={28} />,
      notFocusedIcon: <appIcons.transaction height={28} width={28} />,
      label: strings.transactions,
      route: state.routes[2],
      isFocused: state.index === 2,
    },
    {
      id: 3,
      name: '',
      focusedIcon: <appIcons.profile height={28} width={28} />,
      notFocusedIcon: <appIcons.profile height={28} width={28} />,
      label: strings.profile,
      route: state.routes[3],
      isFocused: state.index === 3,
    },
  ];

  const onPress = (isFocused, route) => {
    const event = navigation.emit({
      type: 'tabPress',
      target: route.key,
      canPreventDefault: true,
    });
    if (!isFocused && !event.defaultPrevented) {
      navigation.navigate({ name: route.name, merge: true });
    }
  };

  const renderItem = ({ item }) => {
    return (
      <Ripple onPress={() => onPress(item.isFocused, item.route)}
        rippleColor={'#F31B5A'}
        rippleOpacity={0.90}
        rippleDuration={600}
        rippleSize={200}>
        <View
          style={{
            height: 60,
            width: Dimensions.get('window').width / 4,
            justifyContent: 'center',
            backgroundColor: '#4e85de',
          }}>
          <View style={{ alignItems: 'center' }}>
            {item.focusedIcon}
            <Text style={{ fontSize: 16, color: '#FFF' }}>{item.label}</Text>
          </View>
        </View>
      </Ripple>
    );
  };

  return (
    <View>
      <FlatList
        horizontal
        bounces={false}
        data={tabIconsList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default TabBar;
