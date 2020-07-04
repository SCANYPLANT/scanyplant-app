import React from 'react';
import { Text } from 'react-native';
import { AppBar } from '../components';

export default function Home({ navigation }) {
	return (
		<>
			<AppBar title="Home" />
			<Text>Home Screen</Text>
		</>
	);
}
