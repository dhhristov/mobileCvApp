import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import colors from '../../../colors';

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
        height: 46,
        paddingHorizontal: 20,
        justifyContent: "center",
        alignItems: "flex-start",
        backgroundColor: "transparent",
    },
    text: {
        fontSize: 15,
        color: colors.mainColor,
        textTransform: "uppercase",
    }
});