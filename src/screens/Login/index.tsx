import React from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-paper';


export default function Login({navigation}) {

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Login Screen</Text>
            <Button
                onPress={() => navigation.navigate('Register')} >
                Register
            </Button>
        </View>
    );
}
