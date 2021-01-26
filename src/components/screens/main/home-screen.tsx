import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import colors from '../../../../colors';
import { auth } from '../../../redux';
import { NormalButton } from '../../shared/normalButton';

export default function Home() {
    const dispatch = useDispatch()

    function logOut() {
        dispatch(auth())
    }

    useEffect(() => {
        logOut()
    }, [])
    return (
        <View style={styles.container}>
            <Text>Home</Text>
            <NormalButton title="Google" onPress={() => logOut()} />
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