import React, { useEffect, useState } from 'react';
import { Image, ScrollView, StyleSheet, View } from 'react-native';
import { Card, Searchbar, Text } from 'react-native-paper';
import { AppBar } from '../components';
import { useDispatch, useSelector } from 'react-redux';
import { plantActions } from '../actions';
import Plant from '../models/plant';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 20,
	},
	header: {
		flex: 1,
		justifyContent: 'center',
		paddingHorizontal: 50,
	},
	body: {
		flex: 3,
	},
	item: {
		flex: 1,
		marginHorizontal: 20,
		marginVertical: 10,
		paddingVertical: 10,
		paddingHorizontal: 10,
		justifyContent: 'center',
	},
});

export default function IdentificationResultScreen({ route, navigation }) {
	const uDispatch= useDispatch()
    let plants: [Plant] = useSelector((state: any) => state.searchPlant?.data);
	const [search, setSearch] = useState('');

	console.log("======" , plants && plants);


	const plantClick = plant => {
		// console.log('plant click:', plant.fields.raison_sociale);
		navigation.navigate('Discover', { query: plant });
	};

	return (
		<>
			<AppBar title="MY PLANTS" />
			<>
				<View style={styles.container}>
					<View style={styles.header}>
						<Searchbar
							placeholder="Search"
							onChangeText={text => setSearch(text)}
							value={search}
						/>
					</View>
					<View style={styles.body}>
						<ScrollView>
							{plants && plants.map(plant => {
								return (
									<Card
										style={styles.item}
										key={plant.recordid}
										onPress={() => plantClick(plant)}
									>
										<Card.Content>
											<Image
												source={plant.imageUrl}
												style={{ width: 16, height: 16, borderRadius: 10 }}
											/>
											<Text>{plant.name}</Text>
										</Card.Content>
									</Card>
								);
							})}
						</ScrollView>
					</View>
				</View>
			</>
		</>
	);
}
