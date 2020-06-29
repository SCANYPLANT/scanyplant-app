import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import { AppBar } from '../components';
import { Button } from 'react-native-paper';

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
    buttonback: {
        position: 'absolute',
        width: "40%",
        left: "5%",
        bottom: "5%"
    },
    buttonvalidation: {
        position: 'absolute',
        width: "40%",
        right: "5%",
        bottom: "5%"
    },
});

export default function ImageIdentificationScreen({route, navigation}) {

    const { image } = route.params;

    const plantIdentification = async () => {
        //Appel service d'identification
      };

    return (
        <>
            <AppBar title='Identifier une image' />
            <>
            <View style={styles.container}>
                <View style={styles.body}>
                    <Image source={{ uri: image }} style={{ width: "90%", height: "80%", left: "5%", top: "5%" }} />
                    <Button mode="contained" style={styles.buttonback}> Retour </Button>
                    <Button mode="contained" style={styles.buttonvalidation} onPress={plantIdentification}> Valider </Button>
                </View>
            </View>
            </>
        </>
    );
}
