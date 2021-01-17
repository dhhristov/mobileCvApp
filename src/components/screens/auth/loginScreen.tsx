import React, { useEffect } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { ParamListBase } from '@react-navigation/native';
import { InputField } from '../../shared/loginInput';
import { NormalButton } from '../../shared/normalButton';
import { LinkButton } from '../../shared/linkButton';
import { useDispatch } from 'react-redux';
import { auth, fail } from '../../../redux';

export default function Login({
    navigation
}: StackScreenProps<ParamListBase>) {
    const dispatch = useDispatch();
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')

    function checkAuth() {
        dispatch(auth())
    }

    function failure() {
        dispatch(fail())
    }

    useEffect(() => {
        checkAuth(),
            failure()
    }, [])
    return (
        <View style={styles.container}>
            <Text style={styles.newAccount}>Welcome!</Text>
            <InputField onChangeText={(text: string) => setEmail(text.replace(/\s/g, ""))} placeholder="Email" secureTextEntry={false} />
            <InputField onChangeText={(text: string) => setPassword(text.replace(/\s/g, ""))} placeholder="Password" secureTextEntry={true} />
            <NormalButton onPress={() => checkAuth()} />
            <NormalButton title="Google" onPress={() => failure()} />
            <View style={styles.test}>
                <View style={styles.rowView}>
                    <Text>Forgot your password?</Text>
                    <LinkButton onPress={() => navigation.navigate('ResetPassword')} title="Reset Password" />
                </View>
                <View style={styles.rowView}>
                    <Text>Don't have accaunt yet?</Text>
                    <LinkButton onPress={() => navigation.navigate('RegisterScreen')} title="Register" />
                </View>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-end',
        marginHorizontal: 20,
        justifyContent: 'center',
    },
    newAccount: {
        fontSize: 24,
        alignSelf: "center",
        color: "#4f4f4f",
        alignContent: "center",
        textTransform: "uppercase",
        fontWeight: 'bold'
    },
    rowView: {
        justifyContent: "flex-start",
        alignItems: "center",
        alignContent: "center",
        flexDirection: 'row',
        width: "100%",
        marginVertical: 0
    },
    test: {
        justifyContent: "space-around",
        marginVertical: 50
    }
});