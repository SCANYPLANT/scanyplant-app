import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';
import AsyncStorage from "@react-native-community/async-storage";
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../actions';

const styles = StyleSheet.create({
    bottom: {

    },
});

export default function AppBar({ title }) {
const uDispatch = useDispatch()
    const _handleMore = () => {
        console.log(token)
        uDispatch(userActions.logout())
        // AsyncStorage.removeItem('token').then(r => console.log(r))
    };
    const token = useSelector((state: any) => {
        if(state.authentication) {
            return state.authentication.user?.meta?.token
        }
    })
    useEffect(() => {

    },[])
    return (
        <Appbar.Header style={styles.bottom} dark={false}>
            <Appbar.Content
                title={title}
            />
            { token && <Appbar.Action icon="login" onPress={_handleMore} /> }
        </Appbar.Header>
    );
}
