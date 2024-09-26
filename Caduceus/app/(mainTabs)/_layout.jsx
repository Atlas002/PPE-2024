import { View, Text } from 'react-native'
import React from 'react'
import { Tabs, redirect } from 'expo-router'

const TabIcon = (icon, color, name, focused) => {
  return (
    <View>
      <Image/>
    </View>
  )
}

const TabsLayout = () => {
  return (
    <>
    <Tabs>
      <Tabs.Screen 
      name = "home"
      options = {{
        title: 'Home',
        headerShown: false,
      }}
      />
    </Tabs>
    </>
  )
}

export default TabsLayout