import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

import { dynamicAppStyles } from 'utils';

const RadioInput = ({ options, value, label, onPress, error, required }) => {
  return (
    <>
      {label && (
        <Text style={styles.labelStyle}>
          {label}
          {required && <Text style={styles.requiredStyle}>&nbsp;*</Text>}
        </Text>
      )}
      {options.map((option, i) => {
        return (
          <View key={i} style={styles.mainContainer}>
            <TouchableOpacity disabled={option.disabled} onPress={() => onPress(option)}>
              <View style={styles.wrapper}>
                <View style={styles.container}>
                  {value === option.value && <View style={styles.activeColor} />}
                </View>
              </View>
            </TouchableOpacity>
            <Text style={styles.titleStyle}>{option.label}</Text>
          </View>
        );
      })}

      {error && <Text style={styles.textStyle}>{error}</Text>}
    </>
  );
};

export default RadioInput;
const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
  },
  requiredStyle: {
    color: '#FF0000',
  },
  labelStyle: {
    color: '#000',
    paddingBottom: 8,
    fontSize: dynamicAppStyles.fontSize.normal,
  },
  wrapper: {
    marginTop: 4,
    borderRadius: 9,
    height: 18,
    width: 18,
    padding: 1,
  },
  container: {
    backgroundColor: '#CCCCCC',
    padding: 4,
    justifyContent: 'center',
    flex: 1,
    borderRadius: 20,
  },
  activeColor: {
    backgroundColor: '#000000',
    padding: 4,
    justifyContent: 'center',
    borderRadius: 20,
    flex: 1,
  },
  titleStyle: {
    fontSize: 16,
    marginStart: 8,
    color: '#000',
    fontWeight: '400',
  },
  textStyle: {
    color: '#FF0000',
    textAlign: 'center',
    fontSize: dynamicAppStyles.fontSize.normal,
  },
});
