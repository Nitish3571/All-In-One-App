import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import WebView from 'react-native-webview'

const HomeScreen = () => {
  return (
    <WebView source={{uri:'https://note-app-sable-one.vercel.app'}} /> 
    // <View>
    //     <Text>Home Screen</Text>
    // </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})