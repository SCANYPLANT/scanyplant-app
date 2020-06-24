import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { AppBar } from '../components';

export default function Home({navigation}) {
    return (
        <>
            <AppBar title='Home' />
            <Text>Home Screen</Text>
        </>
    );
}
