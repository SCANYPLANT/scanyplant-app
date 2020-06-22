import React from 'react';
import { Button, Card, TextInput, Text } from 'react-native-paper';
import { SafeAreaView, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    button: {
        textDecorationColor: "#ffffff",
        marginLeft: 20,
        marginRight: 20,
        marginVertical: 10
    },
});

export default function LoginScreen({ navigation }) {

    return (
        <SafeAreaView>
                <Card.Content>
                    <TextInput
                        label='Email'
                    />
                    <TextInput
                        label='Password'
                    />
                </Card.Content>

                <Button style={styles.button} mode="contained" ><Text>Login</Text></Button>
                <Button style={styles.button} mode="contained" ><Text>Password forgotten</Text></Button>
                <Button style={styles.button} mode="contained" onPress={() => navigation.navigate('Register')}><Text>Register</Text></Button>
        </SafeAreaView>
    );
}
