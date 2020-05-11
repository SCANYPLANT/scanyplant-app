import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { Button } from 'react-native-elements';
// import FormInput from '../components/FormInput';
// import FormButton from '../components/FormButton';

export default function Login({ navigation }) {
    const [login, setLogin] = useState<Partial<any>>({
        email: '',
        password: ''
    });

    const handleEmailChange = email => {
        setLogin({ email });
    };

    const handlePasswordChange = password => {
        setLogin({ password });
    };

    const onLogin = async () => {
        const { email, password } = login;
        try {
            if (email.length > 0 && password.length > 0) {
                navigation.navigate('App');
            }
        } catch (error) {
            alert(error);
        }
    };
    const { email, password } = login;

    const goToSignup = () => navigation.navigate('Signup');

    return (
        <SafeAreaView style={styles.container}>
            <FormInput
                name="email"
                value={email}
                placeholder="Enter email"
                autoCapitalize="none"
                onChangeText={handleEmailChange}
                iconName="ios-mail"
                iconColor="#2C384A"
            />
            <FormInput
                name="password"
                value={password}
                placeholder="Enter password"
                secureTextEntry
                onChangeText={handlePasswordChange}
                iconName="ios-lock"
                iconColor="#2C384A"
            />
            <View style={styles.buttonContainer}>
                <FormButton
                    buttonType="outline"
                    //  onPress={handleOnLogin}
                    title="LOGIN"
                    buttonColor="#039BE5"
                />
            </View>
            <Button
                title="Don't have an account? Sign Up"
                onPress={goToSignup}
                titleStyle={{
                    color: '#F57C00'
                }}
                type="clear"
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    buttonContainer: {
        margin: 25
    }
});
