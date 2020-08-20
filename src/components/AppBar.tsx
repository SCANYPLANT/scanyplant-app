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
	const token = useSelector((state: any) => {
		if (state.authentication) {
			return state.authentication.user?.meta?.token;
		}
	});
	return (
		<Appbar.Header accessibilityStates style={styles.bottom} dark={false}>
			<Appbar.Content title={title} accessibilityStates />
			{token && (
				<Appbar.Action accessibilityStates icon="login" onPress={_handleMore} />
			)}
		</Appbar.Header>
	);
}
