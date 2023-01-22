import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Switch = ({ value, onPress, text, height, width, containerStyle }) => {
  console.log('value', value);
  return (
    <View style={[styles.mainContainer, containerStyle]}>
      <View
        style={{
          backgroundColor: value ? 'blue' : '#a6a6a6',
          height: height,
          width: width,
          borderRadius: height / 2,
          padding: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <TouchableOpacity
          onPress={() => onPress(value)}
          activeOpacity={0.7}
          style={styles.container}
        >
          <View
            style={{
              flex: 1,
              backgroundColor: value ? 'transparent' : '#FFF',
              width: (width - 10) / 2,
              borderRadius: height / 2,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => onPress((value = false))}
          style={styles.container}
        >
          <View
            style={{
              flex: 1,
              backgroundColor: value ? '#FFF' : 'transparent',
              width: (width - 10) / 2,
              borderRadius: height / 2,
            }}
          />
        </TouchableOpacity>
      </View>
      {text && <Text style={styles.textStyle}>{text}</Text>}
    </View>
  );
};

export default Switch;
const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    margin: 1.5,
    alignItems: 'flex-end',
  },
  textStyle: {
    color: '#000',
    marginStart: 10,
    textAlign: 'center',
    fontSize: 14,
  },
});
