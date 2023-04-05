import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Rows = ({children, cStyle}) => {
  return (
    <View style={[s.Container, cStyle]}>
        {children}
    </View>
  )
}

export default Rows

const s = StyleSheet.create({
    Container: {
        flexDirection: 'row'
    }
})