import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

export const LinkButton = (props: any) => {
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
        paddingHorizontal: 10,
        justifyContent: "center",
        alignItems: "flex-start",
        backgroundColor: "transparent",
    },
    text: {
        fontSize: 13,
        color: "#5861fc",
        textTransform: "uppercase",
    }
});