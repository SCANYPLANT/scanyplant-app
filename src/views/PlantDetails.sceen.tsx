import React from 'react';
import { Image, View } from 'react-native';
import { Button } from 'react-native-paper';
import { AppBar } from '../components';

export default function PlantDetailsScreen({navigation}) {
    return (
		<>
			<AppBar title="$varnomplante" />
			<>
				<View style={styles.container}>
					<View style={styles.body}>
						<Image
							source={{ uri: image }}
							style={{ width: '90%', height: '80%', left: '5%', top: '5%' }}
						/>
                        <Text>Programme proposé:</Text>
                        <Text></Text>
						<Button mode="contained" style={styles.buttonback}>
							{' '}
							Retour{' '}
						</Button>
						<Button
							mode="contained"
							style={styles.buttonvalidation}
							onPress={plantIdentification}
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
