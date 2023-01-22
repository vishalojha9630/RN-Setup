import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';

import { appIcons, dynamicAppStyles } from 'utils';

const CheckBox = ({ label, required, options, value, onPress, error }) => {
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
              <View style={styles.container}>
                {value.includes(option.value) === true && (
                  <appIcons.rightIcon width={'15'} height={'15'} />
                )}
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

export default CheckBox;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
  },
  container: {
    marginTop: 5,
    borderRadius: 5,
    height: 15,
    width: 15,
    backgroundColor: '#CCCCCC',
    justifyContent: 'center',
  },

  requiredStyle: {
    color: '#FF0000',
  },
  labelStyle: {
    color: '#000',
    paddingBottom: 8,
    fontSize: dynamicAppStyles.fontSize.normal,
  },
  titleStyle: {
    fontSize: 16,
    marginStart: 10,
    color: '#000',
    fontWeight: '400',
  },
  textStyle: {
    color: '#FF0000',
    textAlign: 'center',
    fontSize: dynamicAppStyles.fontSize.normal,
  },
});
