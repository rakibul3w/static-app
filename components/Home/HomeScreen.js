import { View, Button, Image, Text, ImageBackground } from 'react-native'
import React from 'react'

export default function HomeScreen({ navigation }) {
    return (
        <View style={{ display: 'flex', flexDirection: 'column', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button
                onPress={() => navigation.navigate('Login')}
                title="  Login  "
                color="#e20030"
            />
            <Image source={require('../../assets/logo-white.jpg')} style={{ position: 'absolute', bottom: 50 }} />
        </View >
    )
}