import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Register() {
    return (
        <View style={styles.container}>
            <Text>Register</Text>
            <StatusBar style="auto" />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#777777',
        alignItems: 'center',
        justifyContent: 'center',
    },
});