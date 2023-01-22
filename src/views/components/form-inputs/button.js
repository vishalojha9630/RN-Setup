import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import { dynamicAppStyles } from 'utils'

const Button = ({ style, type, icon, onPress, name = 'Submit', iconPosition }) => {
  return (
    <>
      {(() => {
        if (type === 'link') {
          return (
            <TouchableOpacity style={style} activeOpacity={0.5} onPress={onPress}>
              {icon ? (
                <View>
                  {iconPosition === 'left' && (
                    <Text style={[styles.textStyle, { color: '#0000FF' }]}>
                      {icon}&nbsp;{name}
                    </Text>
                  )}
                  {iconPosition === 'right' && (
                    <Text style={[styles.textStyle, { color: '#0000FF' }]}>
                      {name}&nbsp;{icon}
                    </Text>
                  )}
                </View>
              ) : (
                <Text style={[styles.textStyle, { color: '#0000FF' }]}>{name}</Text>
              )}
            </TouchableOpacity>
          )
        } else if (type === 'border') {
          return (
            <View style={styles.borderButtonContainer}>
              <TouchableOpacity style={style} activeOpacity={0.5} onPress={onPress}>
                <View>
                  <Text style={[styles.textStyle, { color: '#000' }]}>{name}</Text>
                </View>
              </TouchableOpacity>
            </View>
          )
        } else {
          return (
            <View style={{}}>
              <TouchableOpacity activeOpacity={0.5} onPress={onPress} style={[styles.mainContainer, style]}>
                <Text style={[styles.textStyle, { color: '#FFFFFF' }]}>{name}</Text>
              </TouchableOpacity>
            </View>
          )
        }
      })()}
    </>
  )
}

export default Button

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 10,
    borderRadius: 10,
    paddingVertical: 10,
    backgroundColor: '#000',
  },
  borderButtonContainer: {
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 10,
  },

  textStyle: {
    textAlign: 'center',
    fontSize: dynamicAppStyles.fontSize.normal,
  },
})
