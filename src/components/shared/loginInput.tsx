import React from 'react'
import { TextInput, View, StyleSheet, Image } from 'react-native'
import colors from '../../../colors';

export const InputField = (props: any) => {
    const { style = {}, placeholder, secureTextEntry, onChangeText, imgSorce } = props;


    return (
        <View style={[styles.input, style]}>
            <Image
                style={styles.image}
                source={imgSorce}
            />
            <TextInput
                {...props}
                onChangeText={onChangeText}
                style={[styles.text, style]}
                label={placeholder}
                secureTextEntry={secureTextEntry}
                placeholderTextColor={colors.accentColor}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        width: "100%",
        textAlign: "left",
        alignSelf: "center",
        paddingTop: 30,
        paddingLeft: 20,
        borderBottomColor: colors.accentColor,
        borderBottomWidth: 2,
        flexDirection: 'row',
    },
    text: {
        color: colors.mainColor,
        fontSize: 20,
        width: "100%"
    },
    image: {
        width: 24,
        height: 24,
        resizeMode: 'contain',
        tintColor: colors.accentColor,
        marginRight: 10
    }
});