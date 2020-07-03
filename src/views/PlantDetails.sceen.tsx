import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { AppBar } from '../components';
import Plant from '../models/plant';
import { useDispatch, useSelector } from 'react-redux';

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

export default function PlantDetailsScreen({ route, navigation }) {

	console.log(route.params);

	let plant: Plant = useSelector((state: any) => route.params.myPlant);

    return (
		<>
			<AppBar title={plant.scientific_name} />
			<>
				<View style={styles.container}>
					<View style={styles.body}>
						{/* <Image
							source={{ uri: image }}
							style={{ width: '90%', height: '80%', left: '5%', top: '5%' }}
						/> */}
						<TextInput
							label="Plant Name"
							onChangeText={handleChange('plantName')}
						/>
                        <Text>Votre plante est une: {plant.scientific_name}</Text>
                        <Text>Programme proposé:</Text>
						<Button mode="contained" style={styles.buttonback}>
							{' '}
							Retour{' '}
						</Button>
						<Button
							mode="contained"
						>
							{' '}
							Valider{' '}
						</Button>
					</View>
				</View>
			</>
		</>
    );
}
