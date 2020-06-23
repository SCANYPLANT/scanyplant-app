import React from 'react';
import { StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';

const styles = StyleSheet.create({
    bottom: {

    },
});

export default function AppBar({ title }) {
   const  _goBack = () => console.log('Went back');

    return (
        <Appbar.Header style={styles.bottom} dark={false}>
            <Appbar.Content
                title={title}
            />
        </Appbar.Header>
    );
}
