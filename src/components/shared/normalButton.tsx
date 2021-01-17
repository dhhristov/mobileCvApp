import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

export const NormalButton = (props: any) => {
    const { title = "Login", style = {}, textStyle = {}, onPress } = props;
    return (
        <TouchableOpacity onPress={onPress} style={[styles.normalButton, style]}>
            <Text style={[styles.text, textStyle]}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    normalButton: {
        display: "flex",
        width: "40%",
        height: 46,
        borderRadius: 23,
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 10,
        backgroundColor: "#5861fc",
    },
    text: {
        fontSize: 15,
        color: "#fff",
        textTransform: "uppercase",
    }
});