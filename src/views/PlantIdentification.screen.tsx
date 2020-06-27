import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Searchbar, FAB } from 'react-native-paper';
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
        width: 200
    },
    fabcamera: {
        position: 'absolute',
        right: 20,
        bottom: 20
    },
    fabphoto: {
        position: 'absolute',
        right: 20,
        bottom: 100
    },
});

export default function PlantIdentificationScreen({navigation}) {
	const [search, setSearch] = useState('');
	const [plants, setPlants] = useState<any[]>([]);

	const plantClick = plant => {
		// console.log('plant click:', plant.fields.raison_sociale);
		navigation.navigate('Discover', { query: plant });
    };

    const pickImage = async () => {
        try {
          let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
          });
          if (!result.cancelled) {
            setState({ image: result.uri });
          }
    
          console.log(result);
        } catch (E) {
          console.log(E);
        }
      };

      let { image } = this.state;


    return (
        <>
            <AppBar title='PLANT IDENTIFICATION' />
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
                {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
                <FAB
                    style={styles.fabcamera}
                    icon="camera"
                    label="Take a photo"
                    onPress={() => navigation.navigate('Camera')}
                />
                <FAB
                    style={styles.fabphoto}
                    icon="image"
                    label="Pick a photo"
                    onPress={pickImage}
                />
            </View>
			</View>
            </>
        </>
    );
}
