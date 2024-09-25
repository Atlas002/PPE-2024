import React from 'react';
import { Stack } from 'expo-router';
import { setStatusBarHidden, StatusBar } from 'expo-status-bar'; // Import the StatusBar

const RootLayout = () => {

    return (
        <>
        
        <StatusBar hidden = {true}/>

        <Stack>
            <Stack.Screen name = "index" option = {{headerShown : false}}  />
            <Stack.Screen name = "appointments" option = {{headerShown : false}}  />
        </Stack>
        </>
    )
};

export default RootLayout