import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { AppBar } from '../components';
import { Button } from 'react-native-paper';
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
    buttonbox: {
        width: 200,
    },
    buttonback: {
        position: 'absolute',
        width: '40%',
        left: '5%',
        bottom: '5%',
    },
    buttonvalidation: {
        position: 'absolute',
        width: '40%',
        right: '5%',
        bottom: '5%',
    },
});

export default function ImageIdentificationScreen({ route, navigation }) {
    const { image } = route.params;
    const uDispatch = useDispatch();
    let plants: [Plant] = useSelector((state : any) => {
        return(state.searchPlant?.data)
        // state.plants?.data
    });
    const plantIdentification = async () => {
        uDispatch(plantActions.searchPlantByImg(image));
        if(plants?.length > 0) {
            navigation.navigate('identificationResult');
        }
    };

    return (
        <>
            <AppBar title="Identifier une image"/>
            <>
                <View style={styles.container}>
                    <View style={styles.body}>
                        <Image
                            source={{ uri: image.uri }}
                            style={{ width: '90%', height: '80%', left: '5%', top: '5%' }}
                        />
                        <Button mode="contained" style={styles.buttonback}>Retour</Button>
                        <Button mode="contained" style={styles.buttonvalidation}
                                onPress={plantIdentification}>Valider</Button>
                    </View>
                </View>
            </>
        </>
    );
}
