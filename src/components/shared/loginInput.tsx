import React, { FC } from 'react'
import { TextInput } from 'react-native-paper'
import { StyleSheet } from 'react-native'

export const InputField = (props: any) => {
    const { style = {}, placeholder, secureTextEntry, onChangeText } = props;


    return (
        <TextInput
            {...props}
            onChangeText={onChangeText}
            style={[styles.input, style]}
            label={placeholder}
            secureTextEntry={secureTextEntry}
        />
    );
};

const styles = StyleSheet.create({
    input: {
        width: "100%",
        textAlign: "left",
        alignSelf: "center",
        marginTop: 30,
        paddingLeft: 20,
        color: "#4f4f4f",
        fontSize: 20
    }
});