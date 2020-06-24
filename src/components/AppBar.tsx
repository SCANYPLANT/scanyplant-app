import React from 'react';
import { StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';
import AsyncStorage from "@react-native-community/async-storage";

const styles = StyleSheet.create({
    bottom: {

    },
});

export default function AppBar({ title }) {

    const _handleMore = () => {
        AsyncStorage.removeItem('token').then(r => console.log(r))
    };
    return (
        <Appbar.Header style={styles.bottom} dark={false}>
            <Appbar.Content
                title={title}
            />
            <Appbar.Action icon="login" onPress={_handleMore} />
        </Appbar.Header>
    );
}
