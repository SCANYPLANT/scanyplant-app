import React from 'react';
import { StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';
import AsyncStorage from '@react-native-community/async-storage';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../actions';

const styles = StyleSheet.create({
	bottom: {},
});

export default function AppBar({ title }) {
	const uDispatch = useDispatch();
	const _handleMore = async () => {
		uDispatch(userActions.logout());
		await AsyncStorage.removeItem('token')
			.then(r => r)
			.catch(e => e);
	};
	// let user = AsyncStorage.getItem('user').then(r => r).catch(e => e);
	let token = useSelector((state: any) => {
		if (state.authentication) {
			return state.authentication.user?.meta?.token;
		}
	});
	return (
		<Appbar.Header style={styles.bottom} dark={false}>
			<Appbar.Content title={title} />
			{token && <Appbar.Action icon="login" onPress={_handleMore} />}
		</Appbar.Header>
	);
}
