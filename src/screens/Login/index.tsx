import React from 'react';
import { Button, Text, View } from 'react-native';


export default function Login({navigation}) {

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Login Screen</Text>
            <Button
                title="Go to Details... again"
                onPress={() => navigation.navigate('Register')}
            />
        </View>
    );
}
