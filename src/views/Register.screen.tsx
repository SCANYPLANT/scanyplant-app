import React from 'react';
import { Button, Card, TextInput } from 'react-native-paper';
import { SafeAreaView, StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    button: {
        textDecorationColor: "#ffffff",
        marginLeft: 20,
        marginRight: 20,
        marginVertical: 10
    },
});

export default function Register() {

    return (
        <SafeAreaView>
                <Card.Content>
                    <TextInput
                        label='Nom'
                    />
                    <TextInput
                        label='Prenom'
                    />
                    <TextInput
                        label='Email'
                    />
                    <TextInput
                        label='Password'
                    />
                    <TextInput
                        label='Password'
                    />
                </Card.Content>

                <Button style={styles.button} mode="contained" >Cancel</Button>
                <Button style={styles.button} mode="contained" >Login</Button>

            <Button
                onPress={() => navigation.navigate('Register')}>
                Register
            </Button>
        </SafeAreaView>
    );
}
