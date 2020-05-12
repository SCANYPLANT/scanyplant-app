import React from 'react';
import { Text, View } from 'react-native';

export default function Profile({User}) {

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Mon Compte</Text>
            <h2> Bienvenue {User.name} </h2>
            
        </View>
    );
}
