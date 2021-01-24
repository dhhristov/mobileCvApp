import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import colors from '../../../colors';

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
        backgroundColor: colors.secondaryColor,
        borderWidth: 2,
        borderColor: colors.accentColor
    },
    text: {
        fontSize: 18,
        color: colors.mainColor
    }
});