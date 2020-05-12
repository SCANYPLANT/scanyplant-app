import React, { useState } from 'react';
import {
    nomValidator,
    prenomValidator,
} from '../core/fieldRules';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import BackButton from '../components/BackButton';
import { theme } from '../core/theme';
import { emailValidator, passwordValidator } from '../core/utils';


const Profile = ({ User, navigation }) => {
    const [nom, setNom] = useState({ value: '', error: '' });
    const [prenom, setPrenom] = useState({ value: '', error: '' });

    const _onModifyPressed = () => {
        const nomError = nomValidator(nom.value);
        const prenomError = prenomValidator(prenom.value);

        if (nomError || prenomError) {
            setNom({ ...nom, error: nomError });
            setPrenom({ ...prenom, error: prenomError });
            return;
        }

        return (
            <View>
                <Background>
                    <BackButton goBack={() => navigation.navigate('HomeScreen')} />

                    <Header>Mon Compte</Header>
                    <h2> Bienvenue {User.name} </h2>
                    <TextInput
                        label="Nom"
                        returnKeyType="next"
                        value={User.nom}
                        onChangeText={text => setNom({ value: text, error: '' })}
                        error={!!nom.error}
                        errorText={nom.error}
                        autoCapitalize="none"
                    />

                    <TextInput
                        label="Prénom"
                        returnKeyType="next"
                        value={User.prenom}
                        onChangeText={text => setPrenom({ value: text, error: '' })}
                        error={!!prenom.error}
                        errorText={prenom.error}
                        autoCapitalize="none"
                    />


                    <View style={styles.forgotPassword}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('ForgotPasswordScreen')}
                        >
                            <Text style={styles.label}>Mot de passe oublié</Text>
                        </TouchableOpacity>
                    </View>

                    <Button mode="contained" onPress={_onModifyPressed}>Enregistrer</Button>

                    <View style={styles.row}>
                        <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
                            <Text style={styles.link}>M'inscrire</Text>
                        </TouchableOpacity>
                    </View>
                </Background>
            </View>

        );
    };

    const styles = StyleSheet.create({
        forgotPassword: {
            width: '100%',
            alignItems: 'flex-end',
            marginBottom: 24,
        },
        row: {
            flexDirection: 'row',
            marginTop: 4,
        },
        label: {
            color: theme.colors.secondary,
        },
        link: {
            fontWeight: 'bold',
            color: theme.colors.primary,
        },
    });

    export default memo(ProfileScreen);
