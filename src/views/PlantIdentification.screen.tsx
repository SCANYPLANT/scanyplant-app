import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Searchbar } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';
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
	buttonbox: {
		width: 200,
	},
	fabcamera: {
		position: 'absolute',
		width: '40%',
		left: '5%',
	},
	fabphoto: {
		position: 'absolute',
		width: '40%',
		right: '5%',
	},
});

export default function PlantIdentificationScreen({ navigation }) {
	const [search, setSearch] = useState('');
	const [plants, setPlants] = useState<any[]>([]);
	const [image, setImage] = useState('');

	const plantClick = plant => {
		// console.log('plant click:', plant.fields.raison_sociale);
		navigation.navigate('Discover', { query: plant });
	};

	const pickImage = async () => {
		try {
			let result = await ImagePicker.launchImageLibraryAsync({
				mediaTypes: ImagePicker.MediaTypeOptions.All,
				quality: 1,
				base64: true,
			});
			if (!result.cancelled) {
				{
					navigation.navigate('imageIdentification', {
						image: result.uri,
						base64: result.base64,
					});
				}
			}
		} catch (E) {
			console.log(E);
		}
	};

	return (
		<>
			<AppBar title="Identifier une plante" />
			<>
				<View style={styles.container}>
					<View style={styles.header}>
						<Searchbar
							placeholder="Nom de la plante"
							onChangeText={text => setSearch(text)}
							value={search}
						/>
					</View>
					<View style={styles.body}>
						<Button
							style={styles.fabcamera}
							mode="contained"
							icon="camera"
							onPress={() => navigation.navigate('Camera')}
						>
							Caméra
						</Button>
						<Button
							style={styles.fabphoto}
							mode="contained"
							icon="image"
							onPress={pickImage}
						>
							Galerie
						</Button>
					</View>
				</View>
			</>
		</>
	);
}