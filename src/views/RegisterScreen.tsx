import React, { memo, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Background from '../components/Background';
import Header from '../components/Header';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import BackButton from '../components/BackButton';
import { theme } from '../core/theme';
import {
    emailValidator,
    passwordValidator,
    nomValidator,
    prenomValidator,
    confirmPasswordValidator
} from '../core/fieldRules';

type Props = {
    navigation: any;
};

const RegisterScreen = ({ navigation }: Props) => {
    const [nom, setNom] = useState({ value: '', error: '' });
    const [prenom, setPrenom] = useState({ value: '', error: '' });
    const [email, setEmail] = useState({ value: '', error: '' });
    const [password, setPassword] = useState({ value: '', error: '' });
    const [confirmPassword, setConfirmPassword] = useState({ value: '', error: '' });


    const _onSignUpPressed = () => {
        const nomError = nomValidator(nom.value);
        const prenomError = prenomValidator(prenom.value);
        const emailError = emailValidator(email.value);
        const passwordError = passwordValidator(password.value);
        const confirmPasswordError = confirmPasswordValidator(confirmPassword.value);

        if (emailError || passwordError || nomError || prenomError || confirmPassword) {
            setNom({ ...nom, error: nomError });
            setPrenom({ ...prenom, error: prenomError });
            setEmail({ ...email, error: emailError });
            setPassword({ ...password, error: passwordError });
            setConfirmPassword({ ...confirmPassword, error: confirmPasswordError });
            return;
        }

        navigation.navigate('Home');
    };

    return (
        <Background>
            <BackButton goBack={() => navigation.navigate('Login')} />
            <Header>M'inscrire</Header>

            <TextInput
                label="Nom"
                returnKeyType="next"
                placeholder="Nom *"
                value={nom.value}
                onChangeText={text => setNom({ value: text, error: '' })}
                error={!!nom.error}
                errorText={nom.error}
            />

            <TextInput
                label="Prenom"
                returnKeyType="next"
                placeholder="Prénom *"
                value={prenom.value}
                onChangeText={text => setPrenom({ value: text, error: '' })}
                error={!!prenom.error}
                errorText={prenom.error}
            />


            <TextInput
                label="Email"
                returnKeyType="next"
                value={email.value}
                onChangeText={text => setEmail({ value: text, error: '' })}
                error={!!email.error}
                errorText={email.error}
                autoCapitalize="none"
                autoCompleteType="email"
                textContentType="emailAddress"
                keyboardType="email-address"
            />

            <TextInput
                label="Password"
                returnKeyType="done"
                value={password.value}
                onChangeText={text => setPassword({ value: text, error: '' })}
                error={!!password.error}
                errorText={password.error}
                secureTextEntry={true}
            />

            <TextInput
                label="ConfirmPassword"
                returnKeyType="done"
                value={confirmPassword.value}
                onChangeText={text => setConfirmPassword({ value: text, error: '' })}
                error={!!confirmPassword.error}
                errorText={confirmPassword.error}
                secureTextEntry={true}
            />

            <Button mode="contained" onPress={_onSignUpPressed} style={styles.button}>
                INSCRIPTION
      </Button>

            <View style={styles.row}>
                <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
                    <Text style={styles.link}>Me connecter</Text>
                </TouchableOpacity>
            </View>
        </Background>
    );
};

const styles = StyleSheet.create({
    label: {
        color: theme.colors.secondary,
    },
    button: {
        marginTop: 24,
    },
    row: {
        flexDirection: 'row',
        marginTop: 4,
    },
    link: {
        fontWeight: 'bold',
        color: theme.colors.primary,
    },
});

export default memo(RegisterScreen);