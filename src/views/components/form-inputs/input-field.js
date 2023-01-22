import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

import { dynamicAppStyles } from 'utils'

const InputField = ({
  value,
  name,
  icon,
  label,
  error,
  required,
  iconPosition,
  onChangeText,
  editable = true,
  maxLength = 1000,
  multiline = false,
  numberOfLines = 1,
  keyboardType = 'default',
  placeholder = 'Enter here',
}) => {
  return (
    <View>
      {label && (
        <Text style={styles.labelStyle}>
          {label}
          {required && <Text style={styles.requiredStyle}>&nbsp;&nbsp;*</Text>}
        </Text>
      )}
      <View style={styles.container}>
        <TextInput
          value={value}
          name={name}
          editable={editable}
          keyboardType={keyboardType}
          placeholder={placeholder}
          numberOfLines={numberOfLines}
          maxLength={maxLength}
          multiline={multiline}
          onChangeText={onChangeText}
          placeholderTextColor={dynamicAppStyles.colorSet.mainHeadingColor}
          style={[styles.textInputStyle, { paddingLeft: iconPosition === 'left' ? 30 : 15 }]}
        />
        {iconPosition === 'left' ? (
          <Text style={styles.leftIconStyle}> {icon}</Text>
        ) : (
          <Text style={styles.rightIconStyle}>{icon}</Text>
        )}
      </View>
      {error && <Text style={styles.textStyle}>{error}</Text>}
    </View>
  )
}

export default InputField
const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  requiredStyle: {
    color: '#FF0000',
    paddingLeft: 10,
  },
  labelStyle: {
    color: '#000',
    paddingBottom: 8,
    fontSize: dynamicAppStyles.fontSize.normal,
  },
  leftIconStyle: {
    position: 'absolute',
    left: 8,
    top: 11,
  },
  rightIconStyle: {
    position: 'absolute',
    right: 8,
    top: 11,
  },
  textInputStyle: {
    // height: 50,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 8,
    position: 'relative',
  },
  textStyle: {
    color: '#FF0000',
    textAlign: 'center',
    marginVertical: 10,
    fontSize: dynamicAppStyles.fontSize.normal,
  },
})
