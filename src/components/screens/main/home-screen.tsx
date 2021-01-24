import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from '../../../../colors';

export default function Home() {
    return (
        <View style={styles.container}>
            <Text>Home</Text>
            <StatusBar style="auto" />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.mainColor,
        alignItems: 'center',
        justifyContent: 'center',
    },
});