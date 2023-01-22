import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

import SelectDropdown from 'react-native-select-dropdown';

import { dynamicAppStyles, appIcons } from 'utils';

const SelectInput = ({
  error,
  label,
  options,
  required,
  rowStyle,
  buttonStyle,
  rowTextStyle,
  dropdownStyle,
  buttonTextStyle,
}) => {
  return (
    <>
      {label && (
        <Text style={styles.labelStyle}>
          {label}
          {required && <Text style={styles.requiredStyle}>&nbsp;*</Text>}
        </Text>
      )}
      <SelectDropdown
        data={options}
        defaultButtonText={'Please select...'}
        onSelect={(selectedItem) => {
          console.log('selectedItemselectedItem', selectedItem);
        }}
        buttonTextAfterSelection={(selectedItem) => {
          return selectedItem.value;
        }}
        rowTextForSelection={(item) => {
          return item.label;
        }}
        buttonStyle={buttonStyle}
        rowStyle={rowStyle}
        rowTextStyle={rowTextStyle}
        dropdownStyle={dropdownStyle}
        buttonTextStyle={buttonTextStyle}
      />
      {error && <Text style={styles.textStyle}>{error}</Text>}
    </>
  );
};

export default SelectInput;
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
