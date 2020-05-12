import React from 'react';
import { Button, Card, Paragraph, Title } from 'react-native-paper';
import { View } from 'react-native';


export default function LoginScreen({ navigation }) {

    return (
        <View>
     
     <h1> Me connecter</h1>
            <Button
                onPress={() => navigation.navigate('Register')}>
                Register
            </Button>
        </View>
    );
}
