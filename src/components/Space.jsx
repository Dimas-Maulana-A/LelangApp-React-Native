import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Space = ({Height=10, Width=10}) => {
  return (
    <View style={{
        height: Height,
        width: Width
    }}>
    </View>
  )
}

export default Space
