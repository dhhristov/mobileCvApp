import React, { useEffect } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { ParamListBase } from '@react-navigation/native';
import { InputField } from '../../shared/loginInput';
import { NormalButton } from '../../shared/normalButton';
import { LinkButton } from '../../shared/linkButton';
import { useDispatch } from 'react-redux';
import { auth, success } from '../../../redux';
import colors from '../../../../colors';

export default function Login({
    navigation
}: StackScreenProps<ParamListBase>) {
    const dispatch = useDispatch();
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')

    function checkAuth(name?: string) {
        dispatch(auth(name))
    }

    useEffect(() => {
        checkAuth()
    }, [])
    return (
        <View style={styles.container}>
            <View style={styles.topView}>
                <Text style={styles.text}>Welcome</Text>
            </View>
            <View style={styles.bottomView}>
                <InputField onChangeText={(text: string) => setEmail(text.replace(/\s/g, ""))} placeholder="Email" secureTextEntry={false} imgSorce={require("../../../assets/mail.png")} />
                <InputField onChangeText={(text: string) => setPassword(text.replace(/\s/g, ""))} placeholder="Password" secureTextEntry={true} imgSorce={require("../../../assets/pass.png")} />

                <NormalButton onPress={() => checkAuth("test")} />
                <NormalButton title="Google" onPress={() => null} />
            </View>
            <View style={styles.row}>
                <LinkButton onPress={() => navigation.navigate('ResetPassword')} title="Reset Password" />
                <LinkButton onPress={() => navigation.navigate('RegisterScreen')} title="Register" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    topView: {
        height: "40%",
        backgroundColor: colors.mainColor,
        alignItems: 'center',
        justifyContent: "space-around",
    },
    bottomView: {
        flex: 1,
        backgroundColor: colors.secondaryColor,
        borderTopEndRadius: 20,
        borderTopStartRadius: 20,
        paddingHorizontal: 20,
        alignItems: 'flex-end',
    },
    text: {
        color: colors.secondaryColor,
        justifyContent: "space-around",
        marginVertical: 50,
        fontSize: 40,
        fontWeight: "bold",
        textTransform: "uppercase",
    },
    row: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignSelf: "flex-end",
        alignItems: "center",
        backgroundColor: colors.secondaryColor,
        width: "100%"
    },
    slash: {
        fontSize: 13,
        color: colors.mainColor,
        textTransform: "uppercase",
    }
})