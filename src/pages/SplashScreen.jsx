import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

const SplashScreen = () => {
  const navigation = useNavigation()
  useEffect(()=> {
    setTimeout(()=> navigation.navigate("Login"),3000)
  }, [])
  return (
    <View style={s.Container}>
      <Text style={s.textSplash}>Lelang App</Text>
    </View>
  )
}

export default SplashScreen

const s = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
    },
    textSplash: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'black',
        alignSelf: 'center'
    }
})