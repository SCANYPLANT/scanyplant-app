import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, View } from 'react-native';
import { Card, Text } from 'react-native-paper';
import { AppBar } from '../components';

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

export default function PlantsListScreen({ navigation }) {
	const [plants, setPlants] = useState<any[]>([]);

	const plantClick = plant => {
		// console.log('plant click:', plant.fields.raison_sociale);
		navigation.navigate('Discover', { query: plant });
	};

	return (
		<>
			<AppBar title="MY PLANTS" />
			<>
				<View style={styles.container}>
					<View style={styles.body}>
						<ScrollView>
							{plants.map(plant => {
								return (
									<Card
										accessibilityStates
										style={styles.item}
										key={plant.recordid}
										onPress={() => plantClick(plant)}
									>
										<Card.Content>
											<Image
												source={plant.imageUrl}
												style={{ width: 16, height: 16, borderRadius: 10 }}
											/>
											<Text accessibilityStates >{plant.name}</Text>
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
