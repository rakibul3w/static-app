import { View, Button, StyleSheet, TextInput, Text, Image } from 'react-native'
import React from 'react'


export default function LoginScreen({ navigation }) {
    const styles = StyleSheet.create({
        input: {
            height: 40,
            marginTop: 12,
            marginBottom: 12,
            borderWidth: 1,
            padding: 10,
            borderColor: "#e20030"
        },
    });
    return (
        <View style={{ flexDirection: 'column', flex: 1, alignItems: 'center', marginTop: 50 }}>
            <Text style={{ fontSize: 24 }}>User Login</Text>
            <View style={{ width: 300 }}>
                <Text>Username</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter your username"
                />
                <Text>Password</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter your password"
                />
                <Button title="  Login  "
                    color="#e20030" />
            </View>
            <Image source={require('../../assets/logo-white.jpg')} style={{ position: 'absolute', bottom: 50 }} />

        </View>
    )
}

